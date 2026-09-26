import type { Pattern } from './types'

const p = (...ns: number[]) => ns.map((n) => `dsa-${String(n).padStart(3, '0')}`)

/** Patterns beyond the canonical 16, needed to cover the rest of the set. */
export const EXTENDED_PATTERNS: Pattern[] = [
  {
    key: 'hashing',
    name: 'Hashing & Frequency Counting',
    family: 'Arrays, hashing & matrix',
    canonical: false,
    essence:
      'Trade memory for time: a hash map turns "have I seen this?" and "how many?" from a scan into a lookup.',
    cues: [
      'A nested loop exists only to answer "does this value exist elsewhere?"',
      'Counting occurrences, grouping by a signature, deduplicating.',
      'Input is **unsorted** and sorting would destroy the indices you must return.',
      'O(1) lookup by key is needed inside a design problem (caches, stores).',
    ],
    mechanism: `Three distinct uses, worth naming separately because the cue differs:

1. **Seen-set** — one pass, ask about the *complement* before inserting. Two Sum asks for \`target - n\`; that is why it is one pass, not two.
2. **Counter** — tally values, then compare or rank tallies. Anagram checks are equal counters.
3. **Signature map** — derive a canonical key (sorted letters, a normalised shape) and group everything that shares it.

The insight is always the same: whatever the inner loop was searching for becomes a key.

For "longest consecutive sequence", the set lets you start only at sequence *heads* (values with no \`v - 1\` present), which is what keeps it O(N) despite the inner while-loop.`,
    template: `def two_sum(nums, target):
    seen = {}                       # value → index
    for i, n in enumerate(nums):
        if target - n in seen:      # ask for the complement first
            return [seen[target - n], i]
        seen[n] = i
    return []

def group_anagrams(words):
    from collections import defaultdict
    groups = defaultdict(list)
    for w in words:
        key = tuple(sorted(w))      # canonical signature
        groups[key].append(w)
    return list(groups.values())

def longest_consecutive(nums):
    s = set(nums)
    best = 0
    for n in s:
        if n - 1 in s:
            continue                # not a sequence head — skip
        length = 1
        while n + length in s:
            length += 1
        best = max(best, length)
    return best`,
    complexity:
      'O(N) time average, O(N) space. Worst-case O(N) per lookup only with adversarial hashing, which interviews ignore.',
    pitfalls: [
      'Inserting before checking the complement, which lets an element pair with itself.',
      'Using a list as a dict key — Python needs a tuple or string.',
      'Counting with `dict[k] += 1` on a missing key; use `Counter` or `defaultdict(int)`.',
      'Reaching for a hash map when the input is already sorted and two pointers would be O(1) space.',
    ],
    contrasts: [
      { key: 'two-pointers', how: 'Sorted input, or indices do not matter → two pointers, O(1) space. Unsorted and indices matter → hash map.' },
      { key: 'prefix-sum', how: 'Counting *subarrays* with a target sum needs prefix sums as the keys, not raw values.' },
    ],
    problemIds: p(1, 2, 3, 4, 7, 8, 9, 43, 47, 128),
  },
  {
    key: 'prefix-sum',
    name: 'Prefix Sums',
    family: 'Windows & pointers',
    canonical: false,
    essence:
      'Precompute running totals so any range sum is one subtraction — and pair it with a hash map to count ranges hitting a target.',
    cues: [
      'Many range-sum queries over a fixed array.',
      'Count or find **subarrays** summing to K, especially with **negative** numbers present.',
      'Equal counts of two things in a subarray (map one to +1 and the other to −1).',
      'Product or sum "of everything except me".',
    ],
    mechanism: `\`prefix[i]\` is the sum of the first \`i\` elements, so \`sum(i..j) = prefix[j+1] - prefix[i]\`.

The high-value form is the **hash-map** one. Walking with a running sum, a subarray ending here sums to \`k\` exactly when \`running - k\` was a prefix seen earlier. Store counts of prefixes seen and add them up as you go — O(N) in one pass.

That is the pattern to reach for when a sliding window *cannot* work: with negatives, growing the window does not monotonically grow the sum, so shrinking logic has no valid rule.

Seed the map with \`{0: 1}\` — the empty prefix — or subarrays starting at index 0 go uncounted.

The **+1/−1 trick** converts "equal numbers of 0s and 1s" into "sum is 0", which this machinery already handles.`,
    template: `def subarray_sum_equals_k(nums, k):
    from collections import defaultdict
    seen = defaultdict(int)
    seen[0] = 1                       # the empty prefix
    running = count = 0
    for n in nums:
        running += n
        count += seen[running - k]    # prefixes that close a valid subarray
        seen[running] += 1
    return count

def product_except_self(nums):        # same idea, multiplicatively
    n = len(nums)
    out = [1] * n
    for i in range(1, n):
        out[i] = out[i - 1] * nums[i - 1]     # prefix products
    suffix = 1
    for i in range(n - 1, -1, -1):
        out[i] *= suffix                      # × suffix products
        suffix *= nums[i]
    return out`,
    complexity: 'O(N) time, O(N) space (O(1) extra for the two-pass product form).',
    pitfalls: [
      'Forgetting `seen[0] = 1`, which loses every subarray that starts at the beginning.',
      'Storing indices instead of counts when the question asks *how many* subarrays.',
      'Using a sliding window on an array with negatives — the window logic is simply invalid there.',
      'Off-by-one in the `prefix[j+1] - prefix[i]` convention; write out the 1-indexed form once and stick to it.',
    ],
    contrasts: [
      { key: 'sliding-window', how: 'All-positive values and a monotone condition → window, O(1) space. Negatives or exact-sum counting → prefix sums.' },
      { key: 'hashing', how: 'Same hash map, but the keys are cumulative sums rather than element values.' },
    ],
    problemIds: p(6, 10, 11, 12),
  },
  {
    key: 'stack',
    name: 'Stack (matching & evaluation)',
    family: 'Stacks',
    canonical: false,
    essence:
      'Most-recent-first processing: push what is still open, pop when its partner arrives.',
    cues: [
      'Brackets, tags, or anything with nesting to validate.',
      'Postfix / infix evaluation, or an undo history.',
      'The answer depends on the **most recent** unresolved item.',
      'Design a structure with O(1) access to an aggregate (min, max) alongside push/pop.',
    ],
    mechanism: `Push each opener; on a closer, pop and check the pair matches. Valid input leaves the stack empty — a non-empty stack at the end means something was never closed, and popping from empty means something closed that was never opened. Both failure modes need an explicit check.

For **evaluation**, operands go on the stack and an operator pops its arguments. Order matters for non-commutative ops: the *second* pop is the left operand.

For an **augmented stack** (Min Stack), store the aggregate alongside each entry — push \`(value, min_so_far)\`. Then pop is O(1) and no recomputation is ever needed. Trying to track a single running minimum fails because popping it leaves you with no way to recover the previous one.`,
    template: `def is_valid(s):
    pairs = {')': '(', ']': '[', '}': '{'}
    stack = []
    for ch in s:
        if ch in pairs:
            if not stack or stack.pop() != pairs[ch]:
                return False          # closed the wrong thing, or nothing
        else:
            stack.append(ch)
    return not stack                  # leftovers ⇒ unclosed

def eval_rpn(tokens):
    stack = []
    for t in tokens:
        if t in '+-*/' and len(t) == 1:
            b, a = stack.pop(), stack.pop()      # b popped first!
            stack.append({'+': a + b, '-': a - b, '*': a * b,
                          '/': int(a / b)}[t])
        else:
            stack.append(int(t))
    return stack[0]

class MinStack:                        # aggregate stored per entry
    def __init__(self):
        self.stack = []                # (value, min at this depth)
    def push(self, val):
        cur = min(val, self.stack[-1][1]) if self.stack else val
        self.stack.append((val, cur))
    def pop(self):    self.stack.pop()
    def top(self):    return self.stack[-1][0]
    def getMin(self): return self.stack[-1][1]`,
    complexity: 'O(N) time, O(N) space.',
    pitfalls: [
      'Popping from an empty stack — check before every pop.',
      'Returning True without verifying the stack is empty at the end.',
      'Operand order in subtraction and division; the first pop is the right-hand side.',
      'Python\'s `//` floors toward negative infinity, so RPN division needs `int(a / b)` for truncation toward zero.',
    ],
    contrasts: [
      { key: 'monotonic-stack', how: 'A plain stack matches pairs; a monotonic stack keeps its contents ordered to answer "next greater" queries.' },
      { key: 'greedy', how: 'Some bracket problems (with wildcards) are solved by tracking a range of possible open counts — a greedy O(1)-space alternative to the stack.' },
    ],
    problemIds: p(24, 25, 26, 131),
  },
  {
    key: 'monotonic-stack',
    name: 'Monotonic Stack / Deque',
    family: 'Stacks',
    canonical: false,
    essence:
      'Keep the stack sorted by discarding anything the new element makes irrelevant — whatever you pop just found its answer.',
    cues: [
      '**Next** (or previous) greater / smaller element.',
      'How many days / steps until something larger.',
      'Largest rectangle, trapped water, skyline — spans bounded by taller neighbours.',
      'Max or min **of a sliding window** in O(1) amortised.',
    ],
    mechanism: `Before pushing, pop everything the new element dominates. The moment you pop an element, the new one *is* its "next greater" — that is where the answer gets recorded, not on push.

Why it is linear: each element is pushed once and popped once, so the inner while-loop is amortised O(1) despite looking nested.

Decide two things explicitly:
- **Store indices, not values** — you almost always need the distance between positions.
- **Direction of the invariant:** a decreasing stack finds next-greater; an increasing stack finds next-smaller.

The **deque** variant solves sliding-window maximum: the same discard rule, plus popping from the front once an index falls out of the window.`,
    template: `def next_greater(nums):
    out = [-1] * len(nums)
    stack = []                              # indices, values decreasing
    for i, n in enumerate(nums):
        while stack and nums[stack[-1]] < n:
            out[stack.pop()] = n            # answer found on POP
        stack.append(i)
    return out

def max_sliding_window(nums, k):
    from collections import deque
    dq = deque()                            # indices, values decreasing
    out = []
    for i, n in enumerate(nums):
        while dq and nums[dq[-1]] < n:
            dq.pop()                        # dominated — will never be max
        dq.append(i)
        if dq[0] <= i - k:
            dq.popleft()                    # slid out of the window
        if i >= k - 1:
            out.append(nums[dq[0]])
    return out`,
    complexity: 'O(N) time amortised — one push and one pop per element. O(N) space.',
    pitfalls: [
      'Recording the answer when pushing rather than when popping.',
      'Storing values when the problem needs index distance.',
      '`<` vs `<=` in the pop test decides how equal neighbours are handled; it matters for rectangle spans.',
      'Forgetting the leftovers: elements still on the stack at the end have no next-greater and keep their default.',
    ],
    contrasts: [
      { key: 'sliding-window', how: 'A window with a counter answers "how many"; a window needing its max/min needs a monotonic deque as its state.' },
      { key: 'two-pointers', how: 'Trapping Rain Water has both solutions: a monotonic stack, or two pointers with running max walls at O(1) space.' },
    ],
    problemIds: p(28, 29, 30, 31, 17, 23),
  },
  {
    key: 'trie',
    name: 'Trie (Prefix Tree)',
    family: 'Trees & tries',
    canonical: false,
    essence:
      'Store words by shared prefix so a lookup costs the length of the word, not the size of the dictionary.',
    cues: [
      'Autocomplete, prefix search, "starts with".',
      'A **set of words** must be matched against something (a grid, a stream, another word).',
      'Wildcard matching inside a dictionary.',
      'Repeated prefix queries where a hash set would re-scan everything.',
    ],
    mechanism: `Each node holds a map from character to child plus an \`is_word\` flag. Inserting walks or creates one node per character; searching walks and fails on a missing edge.

Cost is O(L) in the word length and completely independent of how many words are stored — that is the reason to prefer it over a hash set when *prefixes* matter.

Two high-value uses:
- **Wildcard search:** on \`.\`, branch into every child instead of one.
- **Word Search II:** build the trie from the dictionary, then DFS the grid *once* while walking the trie in lockstep. This flips the complexity from "for each word, search the grid" to "one grid walk, all words at once" — the single biggest speedup in this family.`,
    template: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for ch in word:
            node = node.children.setdefault(ch, TrieNode())
        node.is_word = True

    def _walk(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                return None
            node = node.children[ch]
        return node

    def search(self, word):
        node = self._walk(word)
        return bool(node and node.is_word)

    def starts_with(self, prefix):
        return self._walk(prefix) is not None`,
    complexity:
      'O(L) per insert or search. O(total characters) space — a real cost, which is why it must be justified by prefix queries.',
    pitfalls: [
      'Omitting `is_word`, which makes every prefix look like a stored word.',
      'Re-searching the grid once per dictionary word instead of driving one DFS with the trie.',
      'Not pruning exhausted trie branches in Word Search II, which leaves the search exponential on adversarial inputs.',
    ],
    contrasts: [
      { key: 'hashing', how: 'A hash set answers exact membership in O(L) too — the trie earns its space only when prefixes or wildcards are queried.' },
      { key: 'subsets', how: 'Grid word search is backtracking; the trie only decides which branches are worth exploring.' },
    ],
    problemIds: p(66, 67, 68),
  },
  {
    key: 'graph-traversal',
    name: 'Graph & Grid Traversal (flood fill)',
    family: 'Graphs',
    canonical: false,
    essence:
      'Visit every reachable cell once, marking as you go — DFS for "the whole region", BFS for "the fewest steps".',
    cues: [
      'A 2-D grid of land/water, rooms, or rot spreading — the grid **is** the graph.',
      'Count connected regions, or measure the size of one.',
      'Shortest path or minimum time in an **unweighted** graph.',
      'Multiple simultaneous sources ("all rotten oranges spread at once").',
    ],
    mechanism: `Treat each cell as a node with up to four neighbours. Two choices define the solution:

**DFS vs BFS.** DFS (recursion or an explicit stack) is natural for "explore this entire region and measure it". BFS is *required* when the answer is a distance, because it expands in rings of equal step count — the first arrival is the shortest.

**Multi-source BFS** is the underused one: seed the queue with *every* starting cell before the loop begins, and distances come out correct in a single pass. That turns "spread from all rotten oranges" or "distance to nearest gate" from N separate searches into one.

Marking visited **on enqueue, not on dequeue**, is what keeps the queue from holding duplicates.

Counting regions is an outer loop over all cells, launching a traversal from each unvisited one.`,
    template: `from collections import deque

def count_islands(grid):
    rows, cols = len(grid), len(grid[0])

    def sink(r, c):                              # DFS: consume the region
        if not (0 <= r < rows and 0 <= c < cols) or grid[r][c] != '1':
            return
        grid[r][c] = '0'                         # mark visited
        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            sink(r + dr, c + dc)

    return sum(sink(r, c) or 1
               for r in range(rows) for c in range(cols)
               if grid[r][c] == '1')

def min_steps(grid, sources):                    # multi-source BFS
    q = deque((r, c, 0) for r, c in sources)
    seen = set(sources)                          # mark on ENQUEUE
    while q:
        r, c, d = q.popleft()
        if is_target(grid, r, c):
            return d
        for nr, nc in neighbours(r, c):
            if (nr, nc) not in seen and passable(grid, nr, nc):
                seen.add((nr, nc))
                q.append((nr, nc, d + 1))
    return -1`,
    complexity: 'O(V + E) — for a grid, O(rows × cols). Space O(V) for the queue or recursion stack.',
    pitfalls: [
      'Marking visited on dequeue, which lets the same cell enter the queue many times.',
      'Using DFS for a shortest-path question — it finds *a* path, not the shortest.',
      'Running a separate BFS per source when one multi-source pass is correct and N times faster.',
      'Recursion depth on a 10⁶-cell grid; switch to an explicit stack or BFS.',
      'Mutating the input grid to mark visited when the caller still needs it.',
    ],
    contrasts: [
      { key: 'tree-bfs', how: 'Identical machinery; graphs need a visited set because a tree has no alternative routes to a node.' },
      { key: 'union-find', how: 'Counting static connected components works either way; union-find wins when edges arrive incrementally.' },
      { key: 'weighted-shortest-path', how: 'Any edge weight other than 1 breaks BFS — that needs Dijkstra.' },
    ],
    problemIds: p(84, 85, 86, 87, 88, 89, 90, 96, 80),
  },
  {
    key: 'union-find',
    name: 'Union-Find (Disjoint Set)',
    family: 'Graphs',
    canonical: false,
    essence:
      'Each set keeps one representative; union points one root at another, so "same group?" is two root lookups.',
    cues: [
      'Edges arrive **incrementally** and you must answer connectivity as they come.',
      'Detect a cycle in an **undirected** graph — an edge whose endpoints already share a root.',
      'Count connected components, merge accounts, validate a tree.',
      'Kruskal-style "add edges cheapest first, skip ones that form a cycle".',
    ],
    mechanism: `Two operations over a parent array:

- \`find(x)\` walks to the root. **Path compression** re-points every node on the walk straight at the root, so repeat queries are near-constant.
- \`union(a, b)\` links the two roots. **Union by rank/size** hangs the smaller tree under the larger, keeping depth logarithmic.

Both optimisations together give effectively O(1) amortised per operation. Only one of them is a common but silent mistake — without either, degenerate chains make it O(N).

Two derived facts worth memorising:
- an undirected edge whose endpoints already share a root **closes a cycle**;
- a graph is a valid tree iff it has exactly \`n - 1\` edges and no such cycle.`,
    template: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.size = [1] * n
        self.components = n

    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]   # path compression
            x = self.parent[x]
        return x

    def union(self, a, b):
        ra, rb = self.find(a), self.find(b)
        if ra == rb:
            return False                      # already joined ⇒ cycle edge
        if self.size[ra] < self.size[rb]:      # union by size
            ra, rb = rb, ra
        self.parent[rb] = ra
        self.size[ra] += self.size[rb]
        self.components -= 1
        return True`,
    complexity:
      'O(α(N)) ≈ O(1) amortised per operation with both optimisations. O(N) space.',
    pitfalls: [
      'Skipping path compression or union-by-size, which degrades to O(N) per find.',
      'Comparing `a == b` instead of `find(a) == find(b)`.',
      'Using it on a **directed** graph to find cycles — it cannot; that is topological sort.',
      'Forgetting the `n - 1` edge-count check in the valid-tree question (a forest has no cycle either).',
    ],
    contrasts: [
      { key: 'graph-traversal', how: 'For one static graph, DFS is simpler. Union-find wins on a stream of edges or when you only need connectivity.' },
      { key: 'topological-sort', how: 'Undirected cycles → union-find. Directed cycles and orderings → topological sort.' },
    ],
    problemIds: p(93, 94, 95, 97),
  },
  {
    key: 'weighted-shortest-path',
    name: 'Weighted Shortest Path (Dijkstra / Bellman-Ford)',
    family: 'Graphs',
    canonical: false,
    essence:
      'Always expand the cheapest-known frontier node — a min-heap replaces BFS\'s queue once edges have weights.',
    cues: [
      'Edges carry a **cost, time, distance or probability**.',
      'Minimum total cost or "time for a signal to reach everyone".',
      'A path constrained by a number of hops or stops.',
      'Minimise the **maximum** edge along a path (a bottleneck path).',
    ],
    mechanism: `BFS is correct only because every edge costs 1. Replace the queue with a **min-heap keyed on cost so far** and the same argument holds: the first time you pop a node, its distance is final.

Skip a popped node you have already finalised — that is the cheap alternative to updating keys inside the heap.

Choose by the constraint:
- **Dijkstra** — non-negative weights, O(E log V).
- **Bellman-Ford** — negative weights allowed, or a **hop limit**. Relax all edges exactly k times, which naturally answers "at most k stops". Use a snapshot of distances per round so one round cannot use an edge twice.
- **Bottleneck path** (Swim in Rising Water) — same heap, but the key is \`max(cost_so_far, edge)\` instead of a sum.`,
    template: `import heapq

def dijkstra(n, edges, src):
    adj = [[] for _ in range(n)]
    for a, b, w in edges:
        adj[a].append((b, w))

    dist = [float('inf')] * n
    heap = [(0, src)]                       # (cost so far, node)
    while heap:
        d, node = heapq.heappop(heap)
        if d >= dist[node]:
            continue                        # already finalised
        dist[node] = d
        for nxt, w in adj[node]:
            if d + w < dist[nxt]:
                heapq.heappush(heap, (d + w, nxt))
    return dist

def cheapest_with_k_stops(n, flights, src, dst, k):
    dist = [float('inf')] * n
    dist[src] = 0
    for _ in range(k + 1):                  # exactly k+1 relaxation rounds
        snapshot = dist[:]                  # so a round can't chain edges
        for a, b, w in flights:
            if snapshot[a] + w < dist[b]:
                dist[b] = snapshot[a] + w
    return -1 if dist[dst] == float('inf') else dist[dst]`,
    complexity:
      'Dijkstra O(E log V). Bellman-Ford O(V · E), or O(k · E) with a hop limit. O(V + E) space.',
    pitfalls: [
      'Using BFS on a weighted graph — it returns fewest *edges*, not least cost.',
      'Running Dijkstra with negative weights, where the "finalised on pop" guarantee fails.',
      'Omitting the snapshot in the hop-limited version, letting one round traverse several edges.',
      'Pushing the node without its cost, or forgetting the stale-pop skip.',
    ],
    contrasts: [
      { key: 'graph-traversal', how: 'All weights equal 1 → plain BFS, and it is simpler and faster.' },
      { key: 'modified-binary-search', how: 'Bottleneck problems can also be solved by binary searching the threshold plus a reachability check.' },
    ],
    problemIds: p(98, 99, 100),
  },
  {
    key: 'linear-dp',
    name: 'Linear / Sequence DP',
    family: 'Dynamic programming',
    canonical: false,
    essence:
      'Define dp[i] as the answer for the prefix ending at i, then express it from a constant number of earlier entries.',
    cues: [
      'Count the ways, or find the best value, over a 1-D sequence.',
      'A choice at each position with a local constraint ("cannot take adjacent").',
      'Asks for a maximum/minimum/count where greedy fails because a choice can be regretted.',
      'The naive recursion branches into overlapping subproblems.',
    ],
    mechanism: `Answer three questions in order and the code writes itself:

1. **State** — what does \`dp[i]\` mean? "Best answer considering the first i elements" is right far more often than "answer starting at i".
2. **Transition** — how does \`dp[i]\` follow from earlier entries? Usually a \`max\`/\`min\`/\`+\` over the two or three ways to arrive.
3. **Base cases** — the smallest inputs, written out by hand.

Then two refinements:
- **Rolling variables:** if the transition only reaches back a fixed distance, drop the array. House Robber becomes two variables and O(1) space.
- **State machines:** when a position has modes (holding / not holding / cooling down), keep one variable per mode and transition all of them each step. That is the shape of the stock problems.

Kadane's is the special case worth recognising: \`cur = max(n, cur + n)\`, the decision being "extend the run or start fresh here".

Longest Increasing Subsequence has a second gear — patience sorting with binary search takes it from O(N²) to O(N log N).`,
    template: `def rob(nums):                      # O(1) space rolling DP
    prev, cur = 0, 0                # best up to i-2, up to i-1
    for n in nums:
        prev, cur = cur, max(cur, prev + n)
    return cur

def max_subarray(nums):             # Kadane
    cur = best = nums[0]
    for n in nums[1:]:
        cur = max(n, cur + n)       # extend, or restart here
        best = max(best, cur)
    return best

def length_of_lis(nums):            # O(N log N) patience sort
    import bisect
    tails = []
    for n in nums:
        i = bisect.bisect_left(tails, n)
        if i == len(tails): tails.append(n)
        else:               tails[i] = n
    return len(tails)`,
    complexity:
      'O(N) for constant-lookback transitions, O(N²) when each state scans all earlier ones. Space O(N), often reducible to O(1).',
    pitfalls: [
      'A state definition that cannot be computed from earlier states — if the transition feels impossible, the state is wrong, not the code.',
      'Base cases for empty or single-element input, which is where most wrong answers come from.',
      'Reaching for greedy on a problem where an early choice must be regretted.',
      'Tracking only one running value in a multi-mode problem instead of one per state.',
    ],
    contrasts: [
      { key: 'knapsack-dp', how: 'A second dimension (remaining capacity/target) means knapsack; position alone means linear DP.' },
      { key: 'greedy', how: 'Greedy works when the locally-best choice is provably never regretted; otherwise DP.' },
      { key: 'sliding-window', how: 'Contiguous-and-monotone → window. Non-contiguous subsequences → DP.' },
    ],
    problemIds: p(101, 102, 103, 104, 107, 109, 110, 111, 117, 124, 140, 65),
  },
  {
    key: 'grid-string-dp',
    name: 'Grid & Two-String DP',
    family: 'Dynamic programming',
    canonical: false,
    essence:
      'Two inputs (or two dimensions) mean a 2-D table: dp[i][j] compares the first i of one against the first j of the other.',
    cues: [
      'Two strings to compare, align, edit, or interleave.',
      'Paths through a grid with an optimum to find.',
      'Palindromic substrings (a string against its own reverse, or expanding over lengths).',
      'Pattern matching with wildcards.',
    ],
    mechanism: `\`dp[i][j]\` is the answer for the first \`i\` characters of A against the first \`j\` of B. Every transition is one of two cases:

- **characters match** → the answer extends the diagonal, \`dp[i-1][j-1]\`
- **they do not** → combine the neighbours: \`dp[i-1][j]\` (skip from A) and \`dp[i][j-1]\` (skip from B), with \`+1\` for an edit-style cost

Edit Distance adds the diagonal as a *substitution*, giving the classic \`1 + min(three neighbours)\`.

Row 0 and column 0 are the empty-prefix base cases, and are where the answer is usually lost — write them out explicitly before the loops.

**Interval DP** (Burst Balloons) is the awkward relative: iterate by *length* rather than by index, and pick the element to handle **last** rather than first, because that is what makes the subproblems independent.

Space: each row depends only on the previous, so two rows — or one, carefully — replace the full table.`,
    template: `def longest_common_subsequence(a, b):
    dp = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            if a[i - 1] == b[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1            # extend diagonal
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])  # skip one
    return dp[-1][-1]

def edit_distance(a, b):
    dp = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(len(a) + 1): dp[i][0] = i               # base: delete all
    for j in range(len(b) + 1): dp[0][j] = j               # base: insert all
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            if a[i - 1] == b[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j - 1],       # replace
                                   dp[i - 1][j],           # delete
                                   dp[i][j - 1])           # insert
    return dp[-1][-1]`,
    complexity: 'O(M · N) time and space, reducible to O(min(M, N)) space with a rolling row.',
    pitfalls: [
      'Index confusion between the table (1-based, with an empty prefix) and the strings (0-based) — `a[i-1]` is the character for row `i`.',
      'Unfilled base row/column, which quietly makes every answer wrong by a constant.',
      'Iterating interval DP by index instead of by length, so the subproblems it needs are not computed yet.',
      'Building the full table when only two rows are needed (matters at 10⁴ × 10⁴).',
    ],
    contrasts: [
      { key: 'linear-dp', how: 'One sequence and one index → 1-D. Two sequences, or a grid, → 2-D.' },
      { key: 'two-pointers', how: 'Palindromic substrings also fall to expand-around-centre at O(1) space — often the cleaner answer to give.' },
    ],
    problemIds: p(105, 106, 114, 115, 116, 119, 120, 121, 122, 123),
  },
  {
    key: 'greedy',
    name: 'Greedy',
    family: 'Intervals & greedy',
    canonical: false,
    essence:
      'Take the locally best choice and never look back — valid only when you can argue no such choice is ever regretted.',
    cues: [
      'Can I reach / cover / partition, with no need to enumerate how.',
      'Sort by one key and the answer falls out in one pass.',
      'Intervals: keep the earliest-ending, remove the fewest.',
      'A reachability frontier ("furthest index I can get to so far").',
    ],
    mechanism: `Greedy is the pattern that most needs **justification** rather than machinery. Before coding, state the exchange argument: *why* does taking the local optimum keep a globally optimal solution available? If you cannot say it in one sentence, the problem is DP.

The recurring shapes:
- **Reachability frontier** — track the furthest reachable index; if the loop index ever passes it, the answer is no (Jump Game).
- **Sort by the right key** — by end time for maximum non-overlapping intervals; by start for merging.
- **Last-occurrence boundary** — Partition Labels extends the current chunk to the last index of every letter it contains.
- **Tally instead of simulate** — Gas Station: total surplus decides feasibility, and a running deficit tells you where to restart.
- **Range of possibilities** — with wildcards, track a (min, max) count of open brackets instead of one number.`,
    template: `def can_jump(nums):                  # reachability frontier
    furthest = 0
    for i, n in enumerate(nums):
        if i > furthest:
            return False             # cannot even reach here
        furthest = max(furthest, i + n)
    return True

def partition_labels(s):             # last-occurrence boundary
    last = {ch: i for i, ch in enumerate(s)}
    out, start, end = [], 0, 0
    for i, ch in enumerate(s):
        end = max(end, last[ch])     # chunk must stretch this far
        if i == end:
            out.append(end - start + 1)
            start = i + 1
    return out

def can_complete_circuit(gas, cost):   # tally, don't simulate
    if sum(gas) < sum(cost):
        return -1
    start = tank = 0
    for i in range(len(gas)):
        tank += gas[i] - cost[i]
        if tank < 0:
            start, tank = i + 1, 0     # everything before i+1 fails
    return start`,
    complexity: 'O(N), or O(N log N) when a sort is needed. O(1) extra space typically.',
    pitfalls: [
      'Applying greedy where a choice *can* be regretted — coin change with arbitrary denominations is the canonical counterexample.',
      'Sorting by the wrong key; "fewest removals" needs end time, not start time.',
      'Simulating every starting position (O(N²)) when a single tally pass answers it.',
      'Not stating the exchange argument, then being unable to defend the solution when challenged.',
    ],
    contrasts: [
      { key: 'knapsack-dp', how: 'If an early choice can force a worse outcome later, it is DP. If local optimality is provably safe, greedy.' },
      { key: 'merge-intervals', how: 'Interval counting is greedy-after-sorting; merging is a mechanical sweep.' },
      { key: 'top-k-elements', how: 'Scheduling problems mix both — greedy about *what* to pick, heap-driven about *when* it is available.' },
    ],
    problemIds: p(125, 126, 127, 128, 129, 130, 131, 134, 73, 124),
  },
  {
    key: 'matrix',
    name: 'Matrix Manipulation',
    family: 'Arrays, hashing & matrix',
    canonical: false,
    essence:
      'Rotate, spiral, or mark in place by managing boundaries — the trick is almost always reusing the matrix itself as storage.',
    cues: [
      'Rotate / transpose / spiral traversal.',
      'Explicitly says **in place** with O(1) extra space.',
      'Set rows and columns based on a condition, without a separate visited grid.',
    ],
    mechanism: `Three reusable moves:

**Rotate 90°** = transpose, then reverse each row. Both steps are trivially correct, where a direct four-way index swap is easy to get wrong under interview pressure.

**Spiral traversal** = four boundaries (top, bottom, left, right), each shrinking after its pass. Guard \`top <= bottom\` and \`left <= right\` *before* the third and fourth passes, or a single remaining row gets emitted twice.

**In-place marking** = use the first row and column as the flag store. They are the only cells that can record "this row/column is condemned" without extra memory — which needs one separate boolean for the overlap cell at [0][0], and a final pass that walks **backwards** so the flags are read before they are overwritten.`,
    template: `def rotate(matrix):                     # transpose, then reverse rows
    n = len(matrix)
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    for row in matrix:
        row.reverse()

def spiral_order(matrix):
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    out = []
    while top <= bottom and left <= right:
        for c in range(left, right + 1):  out.append(matrix[top][c])
        top += 1
        for r in range(top, bottom + 1):  out.append(matrix[r][right])
        right -= 1
        if top <= bottom:                             # guard single row
            for c in range(right, left - 1, -1): out.append(matrix[bottom][c])
            bottom -= 1
        if left <= right:                             # guard single column
            for r in range(bottom, top - 1, -1): out.append(matrix[r][left])
            left += 1
    return out`,
    complexity: 'O(rows × cols) time, O(1) extra space.',
    pitfalls: [
      'Transposing with `range(n)` instead of `range(i + 1, n)`, which swaps every pair twice and undoes the work.',
      'Missing the single-row / single-column guards in the spiral, producing duplicates.',
      'Marking zeroes as you scan, so the marks cascade and zero the whole matrix.',
      'Forgetting the extra flag for the shared [0][0] cell in the in-place marking trick.',
    ],
    contrasts: [
      { key: 'graph-traversal', how: 'If neighbouring cells connect into regions, it is a graph problem; here the geometry itself is the problem.' },
      { key: 'modified-binary-search', how: 'A fully sorted matrix is searchable in O(log(mn)) by treating it as one flat array.' },
    ],
    problemIds: p(145, 146, 147),
  },
  {
    key: 'bit-manipulation',
    name: 'Bit Tricks & Integer Overflow',
    family: 'Bits & math',
    canonical: false,
    essence:
      'Treat the number as 32 bits: mask, shift, and count — and in Python, mask explicitly because integers never overflow.',
    cues: [
      'Count set bits, reverse bits, or do arithmetic **without** `+` and `-`.',
      'A stated 32-bit signed range, or "return 0 on overflow".',
      'Powers of two, or subset enumeration via bitmasks.',
    ],
    mechanism: `The facts worth having memorised:

- \`n & (n - 1)\` clears the lowest set bit — so counting bits is a loop of that, running once per *set* bit rather than 32 times.
- \`n & -n\` isolates the lowest set bit.
- \`n & 1\` reads the last bit; \`n >> 1\` drops it.
- \`countBits(i) = countBits(i >> 1) + (i & 1)\` is the DP form, giving all counts up to n in O(n).
- **Addition without \`+\`:** \`carry = (a & b) << 1\`, \`sum = a ^ b\`, repeat until the carry is 0.

**The Python-specific trap:** integers are arbitrary precision, so a 32-bit problem needs explicit masking with \`0xFFFFFFFF\`, and a result above \`0x7FFFFFFF\` must be converted back to a negative by hand. Solutions that are correct in C or Java silently loop forever or return huge positives here.`,
    template: `def hamming_weight(n):
    count = 0
    while n:
        n &= n - 1                 # clear the lowest set bit
        count += 1
    return count

def count_bits(n):                 # DP over the shifted value
    dp = [0] * (n + 1)
    for i in range(1, n + 1):
        dp[i] = dp[i >> 1] + (i & 1)
    return dp

def get_sum(a, b):                 # addition with no + or -
    MASK, MAX = 0xFFFFFFFF, 0x7FFFFFFF
    while b & MASK:
        carry = (a & b) << 1
        a, b = a ^ b, carry
    a &= MASK
    return a if a <= MAX else ~(a ^ MASK)      # back to negative

def reverse_int(x):                # clamp on 32-bit overflow
    sign = -1 if x < 0 else 1
    rev = int(str(abs(x))[::-1]) * sign
    return 0 if rev < -2**31 or rev > 2**31 - 1 else rev`,
    complexity: 'O(1) for fixed-width operations, O(set bits) for the clear-lowest loop.',
    pitfalls: [
      'Forgetting the `0xFFFFFFFF` mask in Python, which makes the no-plus addition loop forever on negatives.',
      'Returning a large positive where a negative was meant — the two\'s-complement conversion is a required step.',
      'Checking overflow *after* it would have happened in a fixed-width language; in Python you must compare against `2**31` explicitly.',
      'Looping 32 times to count bits when `n & (n-1)` runs once per set bit.',
    ],
    contrasts: [
      { key: 'bitwise-xor', how: 'XOR-cancellation is its own pattern (find the loner); this card is the wider toolbox.' },
      { key: 'linear-dp', how: 'Counting bits for every value up to n is DP over `i >> 1` — cheaper than counting each independently.' },
    ],
    problemIds: p(139, 140, 141, 143, 144),
  },
]
