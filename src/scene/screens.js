// screens.js — the interfaces that live on surfaces in the room: the journal (about), the editor on the
// work laptop (work), the MacBook (projects), the terminal on the monitor (skills) and the phone (contact).
// The markup is in index.html (so every word is in the page); this file makes each one work.
// main.js owns the camera and lays each screen over its surface; it calls boot(section) when the camera
// has landed and the screen is in view, and passes `go` (fly to another section, or 'room') and `theme`.

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const wait = (ms) => new Promise((r) => setTimeout(r, reduced ? 0 : ms));
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; };
export const SECTIONS = ['about', 'work', 'projects', 'skills', 'contact'];

export function initScreens({ go, theme, clock }) {
  const root = document.getElementById('screens');
  const ELS = Object.fromEntries(SECTIONS.map((s) => [s, root.querySelector(`[data-screen="${s}"]`)]));
  const scr = (s) => ELS[s];
  for (const b of root.querySelectorAll('[data-go]')) b.addEventListener('click', () => go(b.dataset.go));
  const booted = new Set();

  // ------------------------------------------------------------------ the clock on every screen ----
  const tick = () => { const t = clock(); for (const c of document.querySelectorAll('[data-clock]')) c.textContent = t; };
  tick(); setInterval(tick, 15000);

  // ------------------------------------------------------------------ journal ----
  const journal = scr('about');
  const pages = journal.querySelector('.pages');
  const folio = journal.querySelector('.folio');
  const spreads = Math.ceil(pages.querySelectorAll('.page').length / 2);
  let spread = 0, turning = false;
  function showSpread(n) {
    spread = n;
    for (const p of pages.querySelectorAll('.page')) p.hidden = Math.floor(+p.dataset.page / 2) !== n;
    folio.textContent = `${n + 1} / ${spreads}`;
    journal.querySelector('[data-turn="-1"]').disabled = n === 0;
    journal.querySelector('[data-turn="1"]').disabled = n === spreads - 1;
  }
  /** A page turn: a leaf the size of one page swings over the crease, old page on its front, new on its back. */
  async function turn(dir) {
    const to = spread + dir;
    if (turning || to < 0 || to >= spreads) return;
    turning = true;
    const from = [...pages.querySelectorAll('.page')].filter((p) => !p.hidden);
    const leaf = el('div', `leaf ${dir > 0 ? 'fwd' : 'back'}`);
    const front = el('div', 'face front'), back = el('div', 'face back');
    front.append((dir > 0 ? from[1] : from[0]).cloneNode(true));
    showSpread(to);
    const now = [...pages.querySelectorAll('.page')].filter((p) => !p.hidden);
    back.append((dir > 0 ? now[0] : now[1]).cloneNode(true));
    for (const f of [front, back]) for (const p of f.querySelectorAll('.page')) p.hidden = false;
    leaf.append(front, back);
    pages.append(leaf);
    await wait(620);
    leaf.remove();
    turning = false;
  }
  journal.querySelectorAll('[data-turn]').forEach((b) => b.addEventListener('click', () => turn(+b.dataset.turn)));
  showSpread(0);

  // ------------------------------------------------------------------ editor ----
  const editor = scr('work');
  const files = [...editor.querySelectorAll('.file')];
  function openFile(i) {
    files.forEach((f, k) => f.toggleAttribute('aria-current', k === i));
    for (const d of editor.querySelectorAll('.doc')) d.classList.toggle('on', +d.dataset.f === i);
    editor.querySelector('#ed-tab').textContent = files[i].textContent;
    editor.querySelector('#ed-status').textContent = files[i].textContent;
    editor.querySelector('.docs').scrollTop = 0;
  }
  files.forEach((f, i) => f.addEventListener('click', () => openFile(i)));
  editor.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    const cur = files.findIndex((f) => f.hasAttribute('aria-current'));
    const next = (cur + (e.key === 'ArrowDown' ? 1 : files.length - 1)) % files.length;
    openFile(next); files[next].focus({ preventScroll: true }); e.preventDefault();
  });

  // ------------------------------------------------------------------ macbook ----
  const mac = scr('projects');
  const grid = mac.querySelector('.grid'), backBtn = mac.querySelector('.back'), title = mac.querySelector('.win-title'), count = mac.querySelector('.win-count');
  function openProject(i) {
    grid.hidden = i !== null;
    backBtn.hidden = i === null;
    count.hidden = i !== null;
    for (const d of mac.querySelectorAll('.detail')) d.hidden = +d.dataset.p !== i;
    title.textContent = i === null ? 'projects' : mac.querySelector(`.detail[data-p="${i}"] h2`).textContent;
    mac.querySelector('.win-body').scrollTop = 0;
    (i === null ? grid.querySelector('.card') : backBtn).focus({ preventScroll: true });
  }
  mac.querySelectorAll('.card').forEach((c) => c.addEventListener('click', () => openProject(+c.dataset.p)));
  backBtn.addEventListener('click', () => openProject(null));

  // ------------------------------------------------------------------ terminal ----
  const term = scr('skills');
  const out = term.querySelector('#term-out'), input = term.querySelector('#term-input'), body = term.querySelector('.term');
  const history = []; let hi = 0, busy = false;
  const line = (text, cls = '') => { const p = el('p', `tl ${cls}`, text); out.append(p); body.scrollTop = body.scrollHeight; return p; };
  const echo = (cmd) => { const p = el('p', 'tl cmd'); p.append(el('span', 'ps', 'mihir@room ~ %'), document.createTextNode(' ' + cmd)); out.append(p); };
  const SKILLS = [
    ['languages', 'Python · TypeScript · JavaScript · SQL · C/C++ · Java'],
    ['frameworks', 'React · Next.js · Node.js · Flask · FastAPI · REST APIs'],
    ['cloud', 'AWS · GCP · Docker · CI/CD · GitHub Actions'],
    ['ai & agents', 'LangChain · LangGraph · MCP · Context engineering · Fine-tuning · Claude Code · Cursor · Kiro'],
  ];
  const COMMANDS = {
    help: () => {
      line('commands', 'head');
      for (const [c, d] of [['skills', 'what I work with'], ['whoami', 'one line about me'], ['ls', 'what is in this room'], ['open <name>', 'go to it: about, work, projects, contact'], ['theme day | night', 'switch the lights'], ['date', 'the time here'], ['clear', 'clear the screen'], ['exit', 'back to the room']]) {
        const p = el('p', 'tl row'); p.append(el('span', 'k', c), el('span', 'v', d)); out.append(p);
      }
    },
    skills: async () => {
      for (const [k, v] of SKILLS) { const p = el('p', 'tl row'); p.append(el('span', 'k', k), el('span', 'v', v)); out.append(p); body.scrollTop = body.scrollHeight; await wait(90); }
    },
    whoami: () => line('mihir okte. software engineer at amazon, bengaluru. iit delhi, maths and computing, 2023.'),
    ls: () => line('about/journal    work/laptop    projects/macbook    skills/this-monitor    contact/phone'),
    date: () => line(`${clock()} in bengaluru`),
    clear: () => { out.textContent = ''; },
    exit: () => go('room'),
    room: () => go('room'),
    sudo: () => line('nice try.'),
  };
  async function run(raw) {
    const cmd = raw.trim().replace(/\s+/g, ' ');
    echo(cmd);
    if (!cmd) return;
    history.push(cmd); hi = history.length;
    const [name, ...args] = cmd.toLowerCase().split(' ');
    if (name === 'open' || name === 'cd' || name === 'cat') {
      const to = (args[0] || '').replace(/\/.*$/, '');
      if (SECTIONS.includes(to) && to !== 'skills') { line(`opening ${to}`); await wait(260); go(to); }
      else if (to === 'skills') line('you are looking at it.');
      else line(`usage: open about | work | projects | contact`);
    } else if (name === 'theme') {
      if (args[0] === 'day' || args[0] === 'night') { theme(args[0]); line(`lights: ${args[0]}`); } else line('usage: theme day | night');
    } else if (COMMANDS[name]) await COMMANDS[name](args);
    else line(`zsh: command not found: ${name}. try help`, 'err');
    body.scrollTop = body.scrollHeight;
  }
  /** Types a command into the prompt a key at a time, then runs it. */
  async function type(cmd) {
    busy = true; input.value = '';
    for (const ch of cmd) { input.value += ch; await wait(55); }
    await wait(140);
    input.value = '';
    await run(cmd);
    busy = false;
  }
  input.addEventListener('keydown', (e) => {
    if (busy) { e.preventDefault(); return; }
    if (e.key === 'Enter') { const v = input.value; input.value = ''; run(v); }
    else if (e.key === 'ArrowUp' && history.length) { hi = Math.max(0, hi - 1); input.value = history[hi]; e.preventDefault(); }
    else if (e.key === 'ArrowDown' && history.length) { hi = Math.min(history.length, hi + 1); input.value = history[hi] ?? ''; e.preventDefault(); }
    e.stopPropagation();                                  // Esc still bubbles: it is handled before this (keydown on window, capture)
  });
  term.addEventListener('click', (e) => { if (!e.target.closest('button, a') && !getSelection().toString()) input.focus({ preventScroll: true }); });
  term.querySelectorAll('[data-cmd]').forEach((b) => b.addEventListener('click', () => { if (!busy) type(b.dataset.cmd); }));

  // ------------------------------------------------------------------ phone ----
  const phone = scr('contact');
  const thread = phone.querySelector('#thread'), state = phone.querySelector('#chat-state'), replies = phone.querySelector('#replies');
  const bubble = (who, node) => { const li = el('li', `msg ${who}`); li.append(node); thread.append(li); thread.scrollTop = thread.scrollHeight; return li; };
  async function say(text, { link = null } = {}) {
    state.textContent = 'typing';
    const dots = bubble('them typing', el('span', 'dots', '...'));
    await wait(520 + Math.min(900, text.length * 14));
    dots.remove();
    state.textContent = 'online';
    if (link) { const a = el('a', 'link', text); a.href = link; if (!link.startsWith('mailto:')) { a.target = '_blank'; a.rel = 'noopener'; } bubble('them', a); }
    else bubble('them', document.createTextNode(text));
  }
  let chatting = false;
  replies.querySelectorAll('button').forEach((b) => b.addEventListener('click', async () => {
    if (chatting) return;
    chatting = true;
    b.setAttribute('aria-pressed', 'true');
    bubble('me', document.createTextNode(b.dataset.r));
    await wait(200);
    await say(b.dataset.text, { link: b.dataset.href });
    chatting = false;
  }));

  // ------------------------------------------------------------------ boot ----
  /** The screen has come into view: run its start-up, the full one the first time, a short one after. */
  async function boot(section) {
    const s = scr(section);
    const first = !booted.has(section);
    booted.add(section);
    s.classList.remove('awake');
    s.classList.add('booting');
    await wait(first ? 520 : 160);
    s.classList.remove('booting');
    s.classList.add('awake');
    if (section === 'skills') {
      input.focus({ preventScroll: true });
      if (first) { line('last login: today, on the monitor in my room', 'dim'); await type('skills'); line('type help, or pick a command below.', 'dim'); }
    } else if (section === 'contact') {
      if (first) { chatting = true; await say("hey, i'm mihir."); await say('quickest way to reach me is email. pick one and i will send it over.'); chatting = false; }
      replies.querySelector('button')?.focus({ preventScroll: true });
    } else if (section === 'work') {
      editor.querySelector('.file[aria-current]')?.focus({ preventScroll: true });
    } else if (section === 'projects') {
      (grid.hidden ? backBtn : grid.querySelector('.card')).focus({ preventScroll: true });
    } else {
      journal.querySelector('[data-turn="1"]').focus({ preventScroll: true });
    }
  }
  /** The camera is leaving: the screen goes back to how it looks from across the room. */
  function sleep(section) { scr(section)?.classList.remove('awake', 'booting'); }
  /** No WebGL: every screen is shown at once, as a page. */
  function bootAll() { for (const s of SECTIONS) boot(s); }

  return { boot, sleep, bootAll, element: scr };
}
