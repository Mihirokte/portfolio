import type { Pattern } from './types'

/** dsa-NNN ids from plain numbers, so the mapping stays readable. */
const p = (...ns: number[]) => ns.map((n) => `dsa-${String(n).padStart(3, '0')}`)

/** The 16 canonical patterns. */
export const CORE_PATTERNS: Pattern[] = [
  {
    key: 'sliding-window',
    name: 'Sliding Window',
    family: 'Windows & pointers',
    canonical: true,
    essence:
      'Reuse the previous window instead of recomputing it — add the element entering, remove the one leaving.',
    cues: [
      'Asks about a **contiguous** subarray or substring — never a subsequence.',
      'Words like longest / shortest / maximum / minimum / "at most K" over a run of elements.',
      'A fixed size K (fixed window) or a condition to satisfy (variable window).',
      'The brute force is "check every subarray" at O(N²) and each check repeats work.',
    ],
    mechanism: `Two indices bound a window over the array. The **right** edge always advances, absorbing a new element into some running state (a sum, a frequency map, a distinct count). The **left** edge advances only to restore validity.

Because each index moves forward and never back, both pointers traverse the array once — O(N) rather than O(N²), even though the loop looks nested.

Two shapes:
- **Fixed window:** slide once right reaches size K. Every window is reported.
- **Variable window:** shrink from the left *while* the window is invalid. Record the answer at the point that fits the question — inside the shrink loop for a *minimum* window, after it for a *maximum* one.`,
    template: `def sliding_window(s, k):
    left = 0
    state = {}          # running state: counts, sum, distinct...
    best = 0

    for right, ch in enumerate(s):
        state[ch] = state.get(ch, 0) + 1      # absorb the entering element

        while not_valid(state, k):            # restore validity
            out = s[left]
            state[out] -= 1
            if state[out] == 0:
                del state[out]
            left += 1

        best = max(best, right - left + 1)    # max-window: record after shrink
    return best`,
    complexity:
      'O(N) time — each index advances at most N times. O(K) space for the window state (O(1) when the alphabet is fixed).',
    pitfalls: [
      'Recording the answer in the wrong place: a *minimum*-window answer must be taken while the window is still valid, inside the shrink loop.',
      'Using `if` instead of `while` to shrink — one element leaving may not be enough to restore validity.',
      'Reaching for it on a **subsequence** problem. Non-contiguous means DP, not a window.',
      'Forgetting to delete zero counts when the answer depends on `len(state)` as a distinct-count.',
    ],
    contrasts: [
      { key: 'two-pointers', how: 'Two pointers usually converge from both ends of a sorted array; a window is two same-direction indices over any array.' },
      { key: 'prefix-sum', how: 'If the array has negatives and you need an exact target sum, a window cannot shrink correctly — use prefix sums with a hash map.' },
      { key: 'monotonic-stack', how: 'When the window needs its max/min each step, the state is a monotonic deque, not a counter.' },
    ],
    problemIds: p(18, 19, 20, 21, 22, 23),
  },
  {
    key: 'two-pointers',
    name: 'Two Pointers',
    family: 'Windows & pointers',
    canonical: true,
    essence:
      'On sorted data, one pointer at each end — the comparison tells you which end can never be part of the answer.',
    cues: [
      'Input is **sorted**, or sorting it does not destroy the question.',
      'Find a pair / triplet / subarray meeting a numeric constraint.',
      'The brute force is a nested loop over all pairs.',
      'In-place partition or reordering with O(1) extra space.',
    ],
    mechanism: `Place \`left\` at the start and \`right\` at the end. Evaluate the pair. Sortedness means the comparison eliminates one whole side:

- sum **too large** → the largest element cannot pair with anything bigger, so \`right -= 1\`
- sum **too small** → \`left += 1\`

Each step discards a candidate permanently, so the scan is linear after the O(N log N) sort.

For triplets, fix the outermost element in an outer loop and run two pointers on the remainder — O(N²) instead of O(N³).`,
    template: `def two_sum_sorted(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        total = nums[left] + nums[right]
        if total == target:
            return [left, right]
        if total < target:
            left += 1        # need bigger
        else:
            right -= 1       # need smaller
    return []

def three_sum(nums):
    nums.sort()
    out = []
    for i in range(len(nums) - 2):
        if i and nums[i] == nums[i - 1]:
            continue                       # skip duplicate anchors
        left, right = i + 1, len(nums) - 1
        while left < right:
            s = nums[i] + nums[left] + nums[right]
            if s < 0:   left += 1
            elif s > 0: right -= 1
            else:
                out.append([nums[i], nums[left], nums[right]])
                left += 1
                while left < right and nums[left] == nums[left - 1]:
                    left += 1              # skip duplicate partners
    return out`,
    complexity:
      'O(N) for the scan, O(N log N) if you must sort first. O(N²) for the triplet form. O(1) extra space.',
    pitfalls: [
      'Duplicate results in 3Sum — you must skip repeats at both the anchor and after recording a hit.',
      'Returning original indices after sorting. If indices matter and the array is unsorted, use a hash map instead.',
      'Off-by-one on the loop guard: `left < right`, not `<=`, when the two must be different elements.',
    ],
    contrasts: [
      { key: 'hashing', how: 'Unsorted input plus "return the indices" is a hash-map problem (one pass), not two pointers.' },
      { key: 'sliding-window', how: 'Window pointers move the same direction over a contiguous run; these converge.' },
      { key: 'cyclic-sort', how: 'Both partition in place, but cyclic sort exploits values being in range 1..n; Dutch-flag two pointers only need a small fixed set of categories.' },
    ],
    problemIds: p(13, 14, 15, 16, 17, 148, 130),
  },
  {
    key: 'fast-slow-pointers',
    name: 'Fast & Slow Pointers',
    family: 'Windows & pointers',
    canonical: true,
    essence:
      'Two pointers at different speeds over a sequence — if there is a cycle they must meet; if not, the slow one lands on the middle.',
    cues: [
      'Linked list, and you must detect a **cycle** or find its entry point.',
      'Find the **middle** of a list in one pass, or the k-th node from the end.',
      'O(1) space is required, so you cannot use a visited set.',
      'Values 1..n behaving as "next" pointers — the array *is* a linked list.',
    ],
    mechanism: `Move \`slow\` one node and \`fast\` two per step. In a cycle of length C the gap closes by one each step, so they are guaranteed to meet — the tortoise-and-hare argument.

**Finding the cycle's start** (Floyd): after they meet, reset one pointer to the head and advance both one step at a time. They meet at the cycle entry, because the distance from head to entry equals the distance from meeting point to entry around the loop.

**Finding the middle:** when \`fast\` runs off the end, \`slow\` is at the midpoint.

**k-th from the end:** give \`fast\` a k-node head start, then move both at the same speed.`,
    template: `def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
        if slow is fast:
            return True
    return False

def cycle_start(head):
    slow = fast = head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
        if slow is fast:                 # meeting point
            slow = head
            while slow is not fast:      # phase 2
                slow, fast = slow.next, fast.next
            return slow
    return None

def middle(head):
    slow = fast = head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
    return slow`,
    complexity: 'O(N) time, O(1) space — the whole point of the pattern.',
    pitfalls: [
      'Guard `fast and fast.next` before the double hop, or you dereference `None` on even-length lists.',
      'Which node `slow` ends on for even lengths differs between `while fast and fast.next` and `while fast.next and fast.next.next` — pick deliberately when you need the *first* middle.',
      'Phase 2 of Floyd is not optional: the meeting point is not the cycle start.',
    ],
    contrasts: [
      { key: 'hashing', how: 'A visited set also detects cycles in O(N) but costs O(N) space — use it only when O(1) space is not required.' },
      { key: 'cyclic-sort', how: 'Both exploit value-as-index; fast/slow finds a duplicate without mutating the array, cyclic sort permutes it.' },
    ],
    problemIds: p(45, 46, 41, 42),
  },
  {
    key: 'merge-intervals',
    name: 'Merge Intervals',
    family: 'Intervals & greedy',
    canonical: true,
    essence:
      'Sort by start, then walk once: either the current interval extends the last one or it begins a new one.',
    cues: [
      'Input is a list of `[start, end]` pairs.',
      'Words like overlap, merge, conflict, meeting rooms, insert, or "minimum number of X to remove".',
      'Asks whether a person or resource is double-booked.',
    ],
    mechanism: `Sort by start. Then only one comparison matters: does \`current.start\` fall at or before \`last.end\`?

- **yes** → they overlap, so widen the last interval: \`last.end = max(last.end, current.end)\`
- **no** → no later interval can reach back either (starts only increase), so close the last one out and push the current

Two useful variants:
- **Maximum concurrency** (how many rooms?): separate the starts and ends, sort each, and sweep — or push end times into a min-heap and pop those that finished.
- **Minimum removals:** sort by **end** and greedily keep the earliest-ending compatible interval.

The six ways two intervals can relate all collapse to that one \`start <= last_end\` test once sorted.`,
    template: `def merge(intervals):
    intervals.sort(key=lambda i: i[0])
    out = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= out[-1][1]:                  # overlap
            out[-1][1] = max(out[-1][1], end)
        else:
            out.append([start, end])
    return out

def min_rooms(intervals):                        # max concurrency
    import heapq
    intervals.sort(key=lambda i: i[0])
    ends = []
    for start, end in intervals:
        if ends and ends[0] <= start:
            heapq.heappop(ends)                  # a room freed up
        heapq.heappush(ends, end)
    return len(ends)`,
    complexity: 'O(N log N) for the sort, then O(N) to sweep. O(N) output space.',
    pitfalls: [
      'Forgetting to sort — the single-comparison logic is only valid on sorted starts.',
      '`max(last.end, end)` matters: a fully-contained interval must not shrink the one it sits inside.',
      'Touching endpoints: decide whether `[1,2]` and `[2,3]` overlap (usually yes for merging, no for meeting rooms) and keep `<` vs `<=` consistent.',
      'Sorting by start when the question is "minimum removals" — that one needs sorting by end.',
    ],
    contrasts: [
      { key: 'greedy', how: 'Non-overlapping-interval counting *is* greedy; sort by end and the local choice is provably optimal.' },
      { key: 'top-k-elements', how: 'When you need the count of simultaneous intervals, a min-heap of end times replaces the merge walk.' },
    ],
    problemIds: p(132, 133, 134, 135, 136, 137),
  },
  {
    key: 'cyclic-sort',
    name: 'Cyclic Sort',
    family: 'Windows & pointers',
    canonical: true,
    essence:
      'When values are a permutation of 1..n, each value knows its own index — swap it home and read off what is missing.',
    cues: [
      'Statement says values are in the range **1 to n** (or 0 to n).',
      'Find the missing / duplicated / smallest-missing number.',
      'Demands O(1) extra space, so a count array is off the table.',
    ],
    mechanism: `The value \`v\` belongs at index \`v - 1\`. Walk the array; if the current value is not home, swap it to where it belongs. Each swap places at least one number permanently, so the total work is O(N) despite the inner loop.

Once every value that *can* be home is home, one more pass reads the answer: any index \`i\` whose value is not \`i + 1\` is a missing number, and whatever was sitting there is a duplicate.

Where mutation is forbidden, the same "value as index" idea appears as **negation marking** (flip the sign at index \`|v| - 1\`) or as fast/slow pointers over value-as-next.`,
    template: `def cyclic_sort(nums):
    i = 0
    while i < len(nums):
        home = nums[i] - 1                    # where nums[i] belongs
        if 0 <= home < len(nums) and nums[i] != nums[home]:
            nums[i], nums[home] = nums[home], nums[i]
        else:
            i += 1                            # already home, or a duplicate
    return nums

def find_missing(nums):
    cyclic_sort(nums)
    for i, v in enumerate(nums):
        if v != i + 1:
            return i + 1
    return len(nums) + 1`,
    complexity: 'O(N) time — each swap fixes a position permanently. O(1) extra space.',
    pitfalls: [
      'Advancing `i` after a swap. You must re-examine the value that just arrived, so only `i += 1` when nothing was swapped.',
      'Comparing `nums[i] != home` instead of `nums[i] != nums[home]` — with duplicates the first form loops forever.',
      'Off-by-one between 0-based and 1-based ranges; write the `home` expression down before coding.',
    ],
    contrasts: [
      { key: 'bitwise-xor', how: 'For exactly one missing number in 0..n, XOR or the Gauss sum is one line and needs no mutation.' },
      { key: 'fast-slow-pointers', how: 'Use fast/slow when the array must not be modified but a duplicate must be found.' },
    ],
    problemIds: p(142, 46, 148),
  },
  {
    key: 'inplace-linkedlist-reversal',
    name: 'In-place LinkedList Reversal',
    family: 'Linked lists',
    canonical: true,
    essence:
      'Walk the list carrying prev/curr/next and re-point each node backwards — no new nodes, O(1) space.',
    cues: [
      'Reverse a list, or a sub-list between positions, or every group of k nodes.',
      'Explicitly says **in place** / O(1) extra space.',
      'Reorder or interleave a list (often reversal plus a merge).',
    ],
    mechanism: `Three pointers. Save \`next\`, flip \`curr.next\` to \`prev\`, then shift all three forward. When \`curr\` is \`None\`, \`prev\` is the new head.

For a **sub-list**, first walk to the node before the range and keep it: that node's \`next\` must end up pointing at the reversed segment's head, and the segment's original head — now its tail — must point at the node after the range. Writing those two reconnections down *before* coding is what makes this reliable.

A **dummy head** removes the special case where the range starts at node 1.`,
    template: `def reverse(head):
    prev, curr = None, head
    while curr:
        nxt = curr.next       # save
        curr.next = prev      # flip
        prev, curr = curr, nxt
    return prev               # new head

def reverse_between(head, left, right):
    dummy = ListNode(0, head)
    before = dummy
    for _ in range(left - 1):
        before = before.next          # node before the segment

    tail = curr = before.next         # segment head becomes its tail
    prev = None
    for _ in range(right - left + 1):
        nxt = curr.next
        curr.next = prev
        prev, curr = curr, nxt

    before.next = prev                # reconnect front
    tail.next = curr                  # reconnect back
    return dummy.next`,
    complexity: 'O(N) time, O(1) space.',
    pitfalls: [
      'Losing the rest of the list by flipping `curr.next` before saving it.',
      'Returning `head` instead of `prev` — the old head is now the tail.',
      'Forgetting the two reconnections in the sub-list variant, which silently produces a cycle or truncation.',
      'Not using a dummy node, then hitting a null-pointer case when the reversal includes the head.',
    ],
    contrasts: [
      { key: 'fast-slow-pointers', how: 'Fast/slow finds *where* to operate (middle, k-th from end); reversal is what you then do there.' },
      { key: 'k-way-merge', how: 'Reorder-list problems are usually split (fast/slow) + reverse + merge — all three patterns in one.' },
    ],
    problemIds: p(39, 49, 41, 44),
  },
  {
    key: 'tree-bfs',
    name: 'Tree Breadth-First Search',
    family: 'Trees & tries',
    canonical: true,
    essence: 'A queue and a per-level loop: process a whole level before touching the next.',
    cues: [
      'The words **level**, row, depth-by-depth, or "left to right".',
      'Shortest path / minimum number of steps in an unweighted structure.',
      'Only the first or last node of each level is wanted (right side view, level averages).',
    ],
    mechanism: `Push the root. Then, while the queue is non-empty, read \`len(queue)\` **once** — that count is exactly the current level's width. Pop that many nodes, appending their children for the next round.

That snapshot of the length is the whole trick: it turns one flat queue into clean level boundaries without storing depths.

BFS is also what makes unweighted shortest path correct: the first time you reach a node, you reached it by the fewest edges.`,
    template: `from collections import deque

def level_order(root):
    if not root:
        return []
    out, q = [], deque([root])
    while q:
        level = []
        for _ in range(len(q)):          # snapshot the level width
            node = q.popleft()
            level.append(node.val)
            if node.left:  q.append(node.left)
            if node.right: q.append(node.right)
        out.append(level)
    return out`,
    complexity: 'O(N) time. O(W) space, where W is the widest level — up to N/2 for a full tree.',
    pitfalls: [
      'Calling `len(queue)` inside the inner loop, which grows as children are added and destroys level boundaries.',
      'Using `list.pop(0)` instead of `deque.popleft()` — O(N) per pop turns the traversal quadratic.',
      'Forgetting the empty-root guard.',
    ],
    contrasts: [
      { key: 'tree-dfs', how: 'Ask what the answer depends on: a level or an ordering → BFS; a path or a value bubbled up from children → DFS.' },
      { key: 'graph-traversal', how: 'Same queue, but graphs need a visited set — a tree cannot revisit a node.' },
    ],
    problemIds: p(57, 58, 64),
  },
  {
    key: 'tree-dfs',
    name: 'Tree Depth-First Search',
    family: 'Trees & tries',
    canonical: true,
    essence:
      'Recurse to the leaves, then let each node combine its children\'s answers — the recursion stack *is* the current path.',
    cues: [
      'Root-to-leaf paths, path sums, depth, diameter.',
      'The answer at a node is a function of its subtrees.',
      'A BST is involved and ordering can be exploited (in-order gives sorted values).',
      'Validate a structural property (balanced, identical, valid BST).',
    ],
    mechanism: `Write the recursion around three decisions:

1. **Base case** — usually \`None\` returning an identity value (0, True, ±inf).
2. **What each child returns** — pick the smallest value the parent needs (a depth, a sum, a (min,max) pair).
3. **What this node contributes** — combine children, then return upward.

The classic twist: the value a node **returns** to its parent differs from the **global answer**. Diameter returns a height but records \`left + right\`; max-path-sum returns a one-armed path but records the two-armed one. Keep the global in an outer variable and be explicit about which is which.

Order matters for what you can do: **pre-order** acts before recursing (serialize, pass constraints down), **in-order** on a BST yields sorted order, **post-order** has both children's answers available (bottom-up aggregation).`,
    template: `def max_depth(root):
    if not root:
        return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))

def diameter(root):
    best = 0
    def height(node):                    # returns height, records diameter
        nonlocal best
        if not node:
            return 0
        l, r = height(node.left), height(node.right)
        best = max(best, l + r)          # global answer: path through node
        return 1 + max(l, r)             # returned value: height
    height(root)
    return best

def is_valid_bst(root, low=float('-inf'), high=float('inf')):
    if not root:
        return True
    if not low < root.val < high:
        return False
    return (is_valid_bst(root.left, low, root.val)
            and is_valid_bst(root.right, root.val, high))`,
    complexity:
      'O(N) time. O(H) space for the stack — O(log N) balanced, O(N) in a degenerate list-shaped tree.',
    pitfalls: [
      'Conflating the returned value with the global answer (the diameter / max-path-sum trap).',
      'Validating a BST by comparing only parent and child instead of passing down a (low, high) range.',
      'Clamping negative contributions: for max-path-sum you must return `max(0, child)` or a negative subtree drags the answer down.',
      'Assuming recursion is safe on deep trees — 10⁵ nodes in a chain overflows Python\'s default limit.',
    ],
    contrasts: [
      { key: 'tree-bfs', how: 'Level-indexed answers need BFS; subtree-aggregated answers need DFS.' },
      { key: 'linear-dp', how: 'Tree DP (House Robber III) is DFS where each node returns a small tuple of states rather than one number.' },
      { key: 'modified-binary-search', how: 'On a BST, searching for a value is binary search by another name — compare and descend one side.' },
    ],
    problemIds: p(50, 51, 52, 53, 54, 55, 56, 59, 60, 61, 62, 63, 64, 65),
  },
  {
    key: 'two-heaps',
    name: 'Two Heaps',
    family: 'Search & selection',
    canonical: true,
    essence:
      'Split the data at the median: a max-heap holds the lower half, a min-heap the upper — both tops are O(1) away.',
    cues: [
      'Running **median** of a stream.',
      'You need the largest of one part and the smallest of another, continuously.',
      'Elements arrive over time and re-sorting per query is too slow.',
    ],
    mechanism: `Keep \`small\` as a max-heap of the lower half and \`large\` as a min-heap of the upper half.

Two invariants do all the work:
1. **Order:** every element in \`small\` ≤ every element in \`large\`. Enforce it by always pushing into \`small\` first, then moving its top over to \`large\`.
2. **Balance:** sizes differ by at most one. Rebalance after every insert.

The median is then \`small\`'s top (odd total) or the mean of both tops (even).

Python only has a min-heap, so a max-heap is the same heap with negated values — negate on push and on read.`,
    template: `import heapq

class MedianFinder:
    def __init__(self):
        self.small = []      # max-heap (negated): lower half
        self.large = []      # min-heap: upper half

    def add(self, num):
        heapq.heappush(self.small, -num)                    # always via small
        heapq.heappush(self.large, -heapq.heappop(self.small))  # keep order
        if len(self.large) > len(self.small):               # keep balance
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def median(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2`,
    complexity: 'O(log N) per insert, O(1) per median query. O(N) space.',
    pitfalls: [
      'Pushing straight into whichever heap looks shorter — that breaks the order invariant. Always route through one heap.',
      'Forgetting to negate on the way out of the max-heap.',
      'Rebalancing before restoring order; do order first, then balance.',
    ],
    contrasts: [
      { key: 'top-k-elements', how: 'One heap suffices for the k-th largest; two are needed only when you want the boundary *between* halves.' },
      { key: 'modified-binary-search', how: 'For a static array, just sort or quickselect — two heaps earn their keep on a stream.' },
    ],
    problemIds: p(75),
  },
  {
    key: 'subsets',
    name: 'Subsets & Backtracking',
    family: 'Recursion & combinatorics',
    canonical: true,
    essence:
      'Build a candidate one choice at a time; on a dead end, undo the last choice and try the next.',
    cues: [
      'Asks for **all** subsets, permutations, combinations, or partitions.',
      'Return every valid board / path / grouping, not just the count.',
      'Constraint satisfaction: place N queens, fill a grid, form valid parentheses.',
      'Input is small (n ≤ ~20) because the output itself is exponential.',
    ],
    mechanism: `One recursive function with a mutable \`path\`. At each level, loop over the available choices: **choose** (append), **explore** (recurse), **un-choose** (pop). That pop is the backtrack.

Three knobs cover nearly every variant:
- **Subsets vs permutations:** subsets pass \`i + 1\` as the next start index (order does not matter); permutations loop over all unused elements.
- **Reuse allowed?** pass \`i\` instead of \`i + 1\` to let an element repeat.
- **Duplicates in input?** sort first, then \`if i > start and nums[i] == nums[i-1]: continue\` — skip a repeated value at the same depth.

**Pruning** is what separates a passing solution from a timeout: return early once the partial candidate cannot possibly work (sum already exceeds target, column already attacked).`,
    template: `def subsets(nums):
    out, path = [], []
    def backtrack(start):
        out.append(path[:])              # copy — path keeps mutating
        for i in range(start, len(nums)):
            path.append(nums[i])         # choose
            backtrack(i + 1)             # explore (i to allow reuse)
            path.pop()                   # un-choose
    backtrack(0)
    return out

def combination_sum(nums, target):
    out, path = [], []
    def backtrack(start, remaining):
        if remaining == 0:
            out.append(path[:]); return
        if remaining < 0:
            return                       # prune
        for i in range(start, len(nums)):
            path.append(nums[i])
            backtrack(i, remaining - nums[i])   # i → reuse allowed
            path.pop()
    backtrack(0, target)
    return out`,
    complexity:
      'O(N · 2^N) for subsets, O(N · N!) for permutations — the output size dominates. O(N) recursion depth.',
    pitfalls: [
      'Appending `path` instead of `path[:]` — every result then aliases the same list and ends up empty.',
      'Forgetting the `pop()`, which leaks choices into sibling branches.',
      'Duplicate results: sort the input and skip same-value choices at the same depth.',
      'No pruning, then timing out on inputs a pruned version handles easily.',
    ],
    contrasts: [
      { key: 'linear-dp', how: 'Want the *count* or the *best* one? That is DP. Want to enumerate them all? Backtracking.' },
      { key: 'graph-traversal', how: 'Grid word-search is backtracking *on* a DFS — you must un-mark the cell on the way out, which plain flood fill never does.' },
    ],
    problemIds: p(76, 77, 78, 79, 80, 81, 82, 83, 27, 68),
  },
  {
    key: 'modified-binary-search',
    name: 'Modified Binary Search',
    family: 'Search & selection',
    canonical: true,
    essence:
      'Any time you can ask a yes/no question whose answer flips once across the range, you can halve the range.',
    cues: [
      'Input is sorted — or a rotated / 2-D sorted variant.',
      'O(log N) is required, or N is up to 10⁹ so you cannot enumerate.',
      'Find the **minimum value that works** ("smallest speed", "least capacity") — binary search on the answer, not on the array.',
      'Find a boundary: first/last occurrence, insert position, peak, pivot.',
    ],
    mechanism: `Forget "find the target". The general form is: define a predicate \`ok(x)\` that is monotone — false, false, …, true, true — and find the flip point.

\`\`\`
while lo < hi:
    mid = (lo + hi) // 2
    if ok(mid): hi = mid        # mid might be the answer; keep it
    else:       lo = mid + 1    # mid is out
return lo
\`\`\`

This half-open form (\`lo < hi\`, returning \`lo\`) avoids most off-by-one bugs because the loop cannot skip the answer.

**Rotated arrays:** at each step one half is still sorted. Work out which (compare \`nums[mid]\` to \`nums[lo]\`), then decide whether the target lies in that sorted half.

**Binary search on the answer** is the high-value variant: the array may be unsorted, but the *answer space* is ordered — if capacity 8 works, so does 9.`,
    template: `def lower_bound(nums, target):            # first index >= target
    lo, hi = 0, len(nums)
    while lo < hi:
        mid = (lo + hi) // 2
        if nums[mid] >= target: hi = mid
        else:                   lo = mid + 1
    return lo

def min_capacity(weights, days):          # binary search on the ANSWER
    def ok(cap):
        need, load = 1, 0
        for w in weights:
            if load + w > cap:
                need, load = need + 1, 0
            load += w
        return need <= days

    lo, hi = max(weights), sum(weights)
    while lo < hi:
        mid = (lo + hi) // 2
        if ok(mid): hi = mid
        else:       lo = mid + 1
    return lo

def search_rotated(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target: return mid
        if nums[lo] <= nums[mid]:                  # left half sorted
            if nums[lo] <= target < nums[mid]: hi = mid - 1
            else:                              lo = mid + 1
        else:                                      # right half sorted
            if nums[mid] < target <= nums[hi]: lo = mid + 1
            else:                              hi = mid - 1
    return -1`,
    complexity:
      'O(log N), or O(N log(range)) when each predicate check is a linear scan. O(1) space.',
    pitfalls: [
      'Infinite loops from `lo = mid` without `+1`. Pick one template and keep it.',
      'Searching on the array when the question is about the answer space ("minimum X such that…").',
      'Getting the sorted-half test wrong on rotated input — use `<=` against `nums[lo]` to handle the two-element case.',
      'Assuming the predicate is monotone without checking; if it is not, binary search is simply invalid.',
    ],
    contrasts: [
      { key: 'two-pointers', how: 'Both need sorted input; two pointers find a pair, binary search finds a position or threshold.' },
      { key: 'top-k-elements', how: 'k-th largest: a heap is O(N log k) and streams; binary search / quickselect is O(N) average on a static array.' },
    ],
    problemIds: p(32, 33, 34, 35, 36, 37, 38, 100, 111),
  },
  {
    key: 'bitwise-xor',
    name: 'Bitwise XOR',
    family: 'Bits & math',
    canonical: true,
    essence: 'XOR cancels pairs: a ^ a = 0, a ^ 0 = a — so duplicates vanish and the loner survives.',
    cues: [
      'Everything appears exactly twice except one.',
      'Find the missing number in 0..n with O(1) space.',
      'Swap or mark without extra memory.',
    ],
    mechanism: `XOR is associative and commutative, so a whole array can be folded in any order. Every value that appears twice cancels itself to 0, leaving only the unpaired one.

For the missing number in 0..n, XOR all the indices *and* all the values: every present number cancels with its index and only the absent one remains.

Related bit facts worth having ready: \`n & (n-1)\` clears the lowest set bit (so counting set bits is a loop of that), and \`n & -n\` isolates it.`,
    template: `def single_number(nums):
    out = 0
    for n in nums:
        out ^= n              # pairs cancel
    return out

def missing_number(nums):
    out = len(nums)
    for i, n in enumerate(nums):
        out ^= i ^ n          # index cancels value
    return out`,
    complexity: 'O(N) time, O(1) space.',
    pitfalls: [
      'Reaching for XOR when the loner appears *three* times instead of twice — that needs bit-count-mod-3, not plain XOR.',
      'Forgetting to seed `missing_number` with `len(nums)`, since indices only run to n-1.',
      'Python integers are unbounded, so masking with `0xFFFFFFFF` is required when a problem defines 32-bit overflow behaviour.',
    ],
    contrasts: [
      { key: 'cyclic-sort', how: 'Cyclic sort handles *several* missing values and duplicates; XOR only nails the single-loner case.' },
      { key: 'bit-manipulation', how: 'XOR is the cancellation trick; the wider card covers masks, shifts and overflow.' },
    ],
    problemIds: p(138, 142),
  },
  {
    key: 'top-k-elements',
    name: "Top 'K' Elements",
    family: 'Search & selection',
    canonical: true,
    essence:
      'Keep a heap of size k, not a sorted array of size n — the top of the heap is the one to evict.',
    cues: [
      'The words top / largest / smallest / most frequent / closest **K**.',
      'k is much smaller than n, or elements arrive as a stream.',
      'Sorting everything would be O(N log N) when O(N log k) suffices.',
    ],
    mechanism: `Counter-intuitively, to keep the **k largest** you use a **min**-heap: its top is the weakest of your current winners, so it is exactly what a better candidate should replace. Push, and if the heap exceeds size k, pop the top.

Symmetrically, the k *smallest* is a max-heap (negate in Python).

For "k most frequent", count first with a hash map, then heap the (count, item) pairs — or, when counts are bounded by n, skip the heap entirely and **bucket** by count for O(N).

Scheduling problems (task cooldowns, meeting rooms) are the same pattern with a twist: the heap holds "what is available now" and a queue holds "what is cooling down".`,
    template: `import heapq

def k_largest(nums, k):
    heap = []
    for n in nums:
        heapq.heappush(heap, n)
        if len(heap) > k:
            heapq.heappop(heap)      # drop the weakest winner
    return heap                       # heap[0] is the k-th largest

def top_k_frequent(nums, k):
    from collections import Counter
    counts = Counter(nums)
    return [v for v, _ in heapq.nlargest(k, counts.items(), key=lambda kv: kv[1])]

def top_k_frequent_bucket(nums, k):   # O(N), no heap
    from collections import Counter
    counts = Counter(nums)
    buckets = [[] for _ in range(len(nums) + 1)]
    for val, c in counts.items():
        buckets[c].append(val)
    out = []
    for c in range(len(buckets) - 1, 0, -1):
        for val in buckets[c]:
            out.append(val)
            if len(out) == k:
                return out`,
    complexity:
      'O(N log k) time, O(k) space. Bucket sort gets frequency problems to O(N) time / O(N) space.',
    pitfalls: [
      'Using a max-heap for the k largest and keeping all n elements — O(N log N) and O(N) space, defeating the point.',
      'Forgetting Python heaps are min-heaps; negate values (or use a tuple with a negated key) for max behaviour.',
      'Unhashable or tie-ambiguous tuple elements — push `(priority, tiebreak, item)` so comparison never reaches a non-comparable object.',
    ],
    contrasts: [
      { key: 'two-heaps', how: 'One heap for a k-th element; two heaps only when you need the median boundary.' },
      { key: 'modified-binary-search', how: 'Quickselect beats a heap for a one-off k-th largest on a static array (O(N) average).' },
      { key: 'k-way-merge', how: 'Same heap, different job: k-way merge holds one element per list and advances that list.' },
    ],
    problemIds: p(5, 69, 70, 71, 72, 73, 74),
  },
  {
    key: 'k-way-merge',
    name: 'K-way Merge',
    family: 'Search & selection',
    canonical: true,
    essence:
      'Hold one candidate from each sorted list in a min-heap; pop the global minimum and pull the next from whichever list it came from.',
    cues: [
      'Several already-sorted lists / arrays / linked lists to combine.',
      'The k-th smallest element **across** sorted collections.',
      'A matrix whose rows and columns are each sorted.',
    ],
    mechanism: `Seed the heap with the head of every list, tagged with which list it came from. The heap's top is the smallest unconsumed element anywhere. Pop it, append it to the output, then push that list's next element.

The heap never exceeds k entries, so each of the N total elements costs O(log k) instead of O(log N).

For exactly two lists, skip the heap: plain two-pointer merge is O(N) with no overhead. And for "median of two sorted arrays", neither merge is needed — binary search the split point for O(log min(m,n)).`,
    template: `import heapq

def merge_k(lists):
    heap = [(lst[0], i, 0) for i, lst in enumerate(lists) if lst]
    heapq.heapify(heap)
    out = []
    while heap:
        val, li, idx = heapq.heappop(heap)
        out.append(val)
        if idx + 1 < len(lists[li]):                     # refill from same list
            heapq.heappush(heap, (lists[li][idx + 1], li, idx + 1))
    return out

def merge_two_sorted(a, b):            # no heap needed for k = 2
    i = j = 0
    out = []
    while i < len(a) and j < len(b):
        if a[i] <= b[j]: out.append(a[i]); i += 1
        else:            out.append(b[j]); j += 1
    return out + a[i:] + b[j:]`,
    complexity: 'O(N log k) time for N total elements across k lists. O(k) space for the heap.',
    pitfalls: [
      'Pushing whole lists into the heap instead of one element each — that is just a sort.',
      'Refilling from the wrong list; the list index must travel with the value in the heap tuple.',
      'Comparing raw node objects (linked lists): push `(node.val, i, node)` so the heap never compares nodes.',
    ],
    contrasts: [
      { key: 'top-k-elements', how: 'Top-k caps the heap at k winners; k-way merge caps it at one entry per list and consumes everything.' },
      { key: 'modified-binary-search', how: 'For the median of two sorted arrays, binary search on the partition is O(log n) and beats any merge.' },
    ],
    problemIds: p(48, 40, 38),
  },
  {
    key: 'knapsack-dp',
    name: '0/1 Knapsack DP',
    family: 'Dynamic programming',
    canonical: true,
    essence:
      'For each item, the answer is the better of taking it (and paying its cost) or skipping it — memoize on (index, remaining).',
    cues: [
      'Choose a **subset** hitting a capacity, target sum, or budget.',
      'Can the array be split into two equal-sum halves? Fewest coins for an amount?',
      'Each item is either used or not (0/1), or may be reused unlimited times (unbounded).',
      'Asks for the count of ways, or the best value — not the subsets themselves.',
    ],
    mechanism: `Start from the honest recursion: at item \`i\` with \`remaining\` capacity, return \`max(skip, take)\`. That is exponential because the same (i, remaining) pair recurs on many branches — memoizing it is the whole optimisation.

Then flatten to a table. Only two rows are ever needed, and with one array you can go to O(capacity) space — but the iteration direction encodes the variant, and getting it wrong silently changes the problem:

- **0/1** (each item once): iterate capacity **descending**, so an item cannot be reused within its own pass.
- **Unbounded** (reuse allowed): iterate capacity **ascending**.

Also decide the initial value deliberately: 0 for "max value", \`inf\` for "fewest items", 1 at \`dp[0]\` for "count the ways".`,
    template: `def can_partition(nums):                  # 0/1: subset summing to total/2
    total = sum(nums)
    if total % 2:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for n in nums:
        for cap in range(target, n - 1, -1):     # DESCENDING → use once
            dp[cap] = dp[cap] or dp[cap - n]
    return dp[target]

def coin_change(coins, amount):            # unbounded: fewest coins
    dp = [0] + [float('inf')] * amount
    for cap in range(1, amount + 1):
        for c in coins:
            if c <= cap:
                dp[cap] = min(dp[cap], dp[cap - c] + 1)   # ASCENDING → reuse
    return -1 if dp[amount] == float('inf') else dp[amount]`,
    complexity:
      'O(N · capacity) time, O(capacity) space after the rolling-array reduction. Note this is *pseudo*-polynomial — it scales with the numeric capacity, not just the input length.',
    pitfalls: [
      'Wrong loop direction: ascending on a 0/1 problem silently allows reuse, and vice versa.',
      'Wrong base value — 0 vs inf vs 1 at `dp[0]` decides whether you are maximising, minimising, or counting.',
      'Swapping the loop order on *permutation* counting: counting combinations puts items outer, counting ordered sequences puts capacity outer.',
      'Jumping to the table without writing the recursion first; the base cases are much harder to get right bottom-up.',
    ],
    contrasts: [
      { key: 'subsets', how: 'Need the actual subsets listed? Backtrack. Need a count or an optimum? DP.' },
      { key: 'greedy', how: 'Greedy coin change is wrong for arbitrary denominations — if a locally-best choice can be regretted later, you need DP.' },
      { key: 'linear-dp', how: 'Linear DP indexes on position only; knapsack carries a second dimension (remaining capacity).' },
    ],
    problemIds: p(108, 118, 112, 113),
  },
  {
    key: 'topological-sort',
    name: 'Topological Sort',
    family: 'Graphs',
    canonical: true,
    essence:
      'Repeatedly take any node with no unmet prerequisites — if you run out before finishing, there is a cycle.',
    cues: [
      'Dependencies, prerequisites, ordering, "must come before".',
      'Course schedules, build order, task sequencing, alien dictionary.',
      'Detect a cycle in a **directed** graph.',
    ],
    mechanism: `**Kahn's algorithm (BFS):** compute each node's in-degree, queue everything at zero, and pop one at a time — each pop decrements its neighbours' in-degrees, and any that hit zero join the queue.

The cycle test comes free: if the output holds fewer than all N nodes, the leftovers are mutually dependent.

The DFS alternative needs **three** colours, not two: white (unseen), grey (on the current stack), black (finished). Meeting a **grey** node means a back edge and therefore a cycle; meeting a black one is just a re-visit and is fine. A plain boolean visited set cannot tell those apart — that is the classic bug.`,
    template: `from collections import deque

def topo_order(n, edges):                 # edges: [a, b] means a before b
    adj = [[] for _ in range(n)]
    indeg = [0] * n
    for a, b in edges:
        adj[a].append(b)
        indeg[b] += 1

    q = deque(i for i in range(n) if indeg[i] == 0)
    out = []
    while q:
        node = q.popleft()
        out.append(node)
        for nxt in adj[node]:
            indeg[nxt] -= 1
            if indeg[nxt] == 0:
                q.append(nxt)

    return out if len(out) == n else []   # [] ⇒ cycle`,
    complexity: 'O(V + E) time, O(V + E) space.',
    pitfalls: [
      'Building edges in the wrong direction — read the statement twice: `[a, b]` often means "b requires a".',
      'Using a two-state visited set in the DFS version, which reports false cycles on any diamond-shaped graph.',
      'Forgetting the `len(out) == n` check, and returning a partial order for a cyclic graph.',
    ],
    contrasts: [
      { key: 'union-find', how: 'Union-find detects cycles in *undirected* graphs; topological sort is for directed ones.' },
      { key: 'graph-traversal', how: 'Same traversal machinery, but the queue is gated on in-degree rather than on being unvisited.' },
    ],
    problemIds: p(91, 92),
  },
]
