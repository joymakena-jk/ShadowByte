/* =========================================================
   SHADOWBYTE — SCRIPT
   ========================================================= */

/* ---------- GAME DATA ---------- */
const GAMES = [
  {
    id: 1, title: "Nightfall Protocol", genre: "FPS", rating: 4.8, platforms: ["PC","PS5","Xbox"],
    year: 2025, dev: "Ironclad Studios",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    shots: [
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500&q=80",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80"
    ],
    desc: "A tactical near-future shooter where every bullet has weight and every squad decision echoes through a living warzone.",
    reqs: "OS: Win 10/11 · CPU: Ryzen 5 3600 · GPU: RTX 2060 · RAM: 16GB · Storage: 75GB SSD"
  },
  {
    id: 2, title: "Emberfall Chronicles", genre: "RPG", rating: 4.9, platforms: ["PC","PS5"],
    year: 2024, dev: "Wraith & Co.",
    img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80",
    shots: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80",
      "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=500&q=80",
      "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=500&q=80"
    ],
    desc: "An open-world dark fantasy epic where your choices reshape kingdoms and every companion remembers what you've done.",
    reqs: "OS: Win 10/11 · CPU: i7-9700K · GPU: RTX 3070 · RAM: 32GB · Storage: 120GB SSD"
  },
  {
    id: 3, title: "Asphalt Reckoning", genre: "Racing", rating: 4.6, platforms: ["PC","Xbox","Switch"],
    year: 2025, dev: "Velocity Games",
    img: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=800&q=80",
    shots: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80",
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=500&q=80"
    ],
    desc: "Underground street racing meets destructible open-world chaos. Build your crew, tune your ride, own the night.",
    reqs: "OS: Win 10/11 · CPU: Ryzen 5 5600X · GPU: RTX 3060 · RAM: 16GB · Storage: 60GB SSD"
  },
  {
    id: 4, title: "Hollow Vessel", genre: "Horror", rating: 4.7, platforms: ["PC","PS5"],
    year: 2025, dev: "Pale Moth Interactive",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80",
    shots: [
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&q=80",
      "https://images.unsplash.com/photo-1445966275305-9806327d8fbf?w=500&q=80"
    ],
    desc: "A found-footage survival horror set in an abandoned deep-sea station. Something else is breathing down there.",
    reqs: "OS: Win 10/11 · CPU: i5-10400 · GPU: GTX 1660 Ti · RAM: 16GB · Storage: 40GB SSD"
  },
  {
    id: 5, title: "Court Kings 26", genre: "Sports", rating: 4.4, platforms: ["PC","PS5","Xbox"],
    year: 2026, dev: "Fastbreak Studio",
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    shots: [
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=500&q=80",
      "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=500&q=80",
      "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=500&q=80"
    ],
    desc: "The most authentic basketball sim yet — dynamic injuries, real franchise economics, and a career mode that never repeats.",
    reqs: "OS: Win 10/11 · CPU: i5-9600K · GPU: RTX 2060 · RAM: 16GB · Storage: 90GB SSD"
  },
  {
    id: 6, title: "Fracture Loop", genre: "Puzzle", rating: 4.9, platforms: ["PC","Switch"],
    year: 2024, dev: "Quiet Room Games",
    img: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
    shots: [
      "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?w=500&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=500&q=80",
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&q=80"
    ],
    desc: "A mind-bending time-loop puzzler where every mistake becomes a tool. Minimalist, meditative, quietly devastating.",
    reqs: "OS: Win 10/11 · CPU: i3-8100 · GPU: GTX 1050 · RAM: 8GB · Storage: 8GB SSD"
  },
  {
    id: 7, title: "Ironspire Online", genre: "RPG", rating: 4.5, platforms: ["PC"],
    year: 2023, dev: "Colossus Interactive",
    img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&q=80",
    shots: [
      "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=500&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&q=80"
    ],
    desc: "A massively multiplayer siege-and-territory RPG. Guilds rise and fall on the strength of their walls.",
    reqs: "OS: Win 10/11 · CPU: Ryzen 5 3600 · GPU: RTX 2060 Super · RAM: 16GB · Storage: 100GB SSD"
  },
  {
    id: 8, title: "Zero Hour Strike", genre: "FPS", rating: 4.3, platforms: ["PC","PS5","Xbox"],
    year: 2026, dev: "Blacklight Works",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    shots: [
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500&q=80",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&q=80",
      "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=500&q=80"
    ],
    desc: "20v20 tactical warfare across destructible urban maps. No respawns. No mercy. Every round is your last stand.",
    reqs: "OS: Win 10/11 · CPU: Ryzen 7 5700X · GPU: RTX 3070 · RAM: 16GB · Storage: 65GB SSD"
  }
];

const NEWS = [
  { date: "JUL 14, 2026", title: "Season 04 Battle Pass Goes Live", desc: "New maps, three legendary skins, and a reworked ranked ladder drop today across all platforms.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80" },
  { date: "JUL 09, 2026", title: "ShadowByte Invitational Announced", desc: "32 teams, $2M prize pool, three continents. Qualifiers open next week.", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80" },
  { date: "JUL 02, 2026", title: "Emberfall Chronicles: DLC Roadmap", desc: "Wraith & Co. reveals the first expansion, adding a new region and companion storylines.", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&q=80" }
];

/* ---------- STATE ---------- */
let favorites = JSON.parse(localStorage.getItem('sb_favorites') || '[]');
let activeFilter = 'All';

/* =========================================================
   LOADING SCREEN
   ========================================================= */
(function loading(){
  const fill = document.getElementById('loaderFill');
  const pct = document.getElementById('loaderPct');
  const loader = document.getElementById('loader');
  let progress = 0;
  const iv = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) {
      progress = 100;
      clearInterval(iv);
      setTimeout(() => loader.classList.add('hidden'), 300);
    }
    fill.style.width = progress + '%';
    pct.textContent = String(Math.floor(progress)).padStart(2,'0') + '%';
  }, 140);
})();

/* =========================================================
   CUSTOM CURSOR
   ========================================================= */
(function cursor(){
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (window.matchMedia('(hover: none)').matches) return;

  let mx = 0, my = 0, rx = 0, ry = 0;
  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });
  function loop(){
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  }
  loop();

  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, .game-card, .cat-card, input')) {
      ring.classList.add('hovered');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button, .game-card, .cat-card, input')) {
      ring.classList.remove('hovered');
    }
  });
})();

/* =========================================================
   SCROLL PROGRESS + NAVBAR + BACK TO TOP + ACTIVE NAV
   ========================================================= */
(function scrollHandlers(){
  const progress = document.getElementById('scrollProgress');
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');
  const navLinks = document.querySelectorAll('[data-nav]');
  const sections = document.querySelectorAll('main section[id], header[id]');

  function onScroll(){
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (scrollTop / docHeight * 100) + '%';

    navbar.classList.toggle('scrolled', scrollTop > 40);
    backToTop.classList.toggle('show', scrollTop > 600);

    // hero parallax
    const heroBg = document.getElementById('heroBg');
    if (heroBg && scrollTop < window.innerHeight) {
      heroBg.style.transform = `translateY(${scrollTop * 0.3}px)`;
    }

    // active nav highlighting
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (scrollTop >= top) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* =========================================================
   HERO MOUSE PARALLAX
   ========================================================= */
(function heroParallax(){
  const hero = document.querySelector('.hero');
  const heroBg = document.getElementById('heroBg');
  hero.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 24;
    const y = (e.clientY / window.innerHeight - 0.5) * 24;
    heroBg.style.transform = `translate(${x}px, ${y}px)`;
  });
})();

/* =========================================================
   PARTICLE CANVAS
   ========================================================= */
(function particles(){
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particlesArr = [];
  let w, h;

  function resize(){
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const colors = ['#00e5ff', '#7c3aed', '#ff2d78'];
  const count = window.innerWidth < 768 ? 35 : 70;

  for (let i = 0; i < count; i++) {
    particlesArr.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.15
    });
  }

  function tick(){
    ctx.clearRect(0, 0, w, h);
    particlesArr.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }
  tick();
})();

/* =========================================================
   TYPING ANIMATION (HERO TITLE)
   ========================================================= */
(function typing(){
  const el = document.getElementById('typedTitle');
  const text = "WHERE LEGENDS BEGIN.";
  let i = 0;
  function type(){
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 55);
    }
  }
  type();
})();

/* =========================================================
   NAV: MOBILE TOGGLE + SEARCH
   ========================================================= */
(function navToggle(){
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }));
})();

(function search(){
  const toggle = document.getElementById('searchToggle');
  const panel = document.getElementById('searchPanel');
  const input = document.getElementById('searchInput');
  const close = document.getElementById('searchClose');
  const results = document.getElementById('searchResults');

  toggle.addEventListener('click', () => {
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) setTimeout(() => input.focus(), 300);
  });
  close.addEventListener('click', () => panel.classList.remove('open'));

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.innerHTML = ''; return; }
    const matches = GAMES.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.genre.toLowerCase().includes(q) ||
      g.platforms.some(p => p.toLowerCase().includes(q))
    );
    results.innerHTML = matches.length
      ? matches.map(g => `
        <div class="search-result-item" data-id="${g.id}">
          <img src="${g.img}" alt="${g.title}">
          <span>${g.title} · ${g.genre}</span>
        </div>`).join('')
      : `<div class="search-empty">No matches for "${q}"</div>`;

    results.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        openModal(Number(item.dataset.id));
        panel.classList.remove('open');
      });
    });
  });
})();

/* =========================================================
   BUTTON RIPPLE
   ========================================================= */
document.addEventListener('click', e => {
  const btn = e.target.closest('.btn');
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  const size = Math.max(rect.width, rect.height);
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 650);
});

/* =========================================================
   RENDER: GAME CARDS
   ========================================================= */
function starRating(r){
  return `<i class="bi bi-star-fill"></i> ${r.toFixed(1)}`;
}
function platformIcons(platforms){
  const map = { PC: 'bi-pc-display', PS5: 'bi-playstation', Xbox: 'bi-xbox', Switch: 'bi-nintendo-switch' };
  return platforms.map(p => `<i class="bi ${map[p] || 'bi-controller'}" title="${p}"></i>`).join('');
}

function renderGames(){
  const grid = document.getElementById('gamesGrid');
  const list = activeFilter === 'All' ? GAMES : GAMES.filter(g => g.genre === activeFilter);

  if (!list.length) {
    grid.innerHTML = `<div class="empty-state">No games found in this category.</div>`;
    return;
  }

  grid.innerHTML = list.map((g, i) => `
    <article class="game-card reveal-up in-view" data-id="${g.id}" style="animation-delay:${i * 0.06}s">
      <div class="game-card-media">
        <img src="${g.img}" alt="${g.title}" loading="lazy">
        <span class="card-genre-badge">${g.genre}</span>
        <button class="card-fav ${favorites.includes(g.id) ? 'active' : ''}" data-fav="${g.id}" aria-label="Toggle favorite">
          <i class="bi bi-heart${favorites.includes(g.id) ? '-fill' : ''}"></i>
        </button>
      </div>
      <div class="game-card-body">
        <h3>${g.title}</h3>
        <div class="game-card-meta">
          <span class="game-card-rating">${starRating(g.rating)}</span>
          <span class="game-card-plat">${platformIcons(g.platforms)}</span>
        </div>
        <div class="game-card-year">${g.year}</div>
      </div>
      <span class="game-card-corner gc-tl"></span>
      <span class="game-card-corner gc-br"></span>
    </article>
  `).join('');

  grid.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('[data-fav]')) return;
      openModal(Number(card.dataset.id));
    });
  });
  grid.querySelectorAll('[data-fav]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleFavorite(Number(btn.dataset.fav));
    });
  });
}

/* Filter bar */
document.getElementById('filterBar').addEventListener('click', e => {
  const chip = e.target.closest('.filter-chip');
  if (!chip) return;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  activeFilter = chip.dataset.filter;
  renderGames();
});

/* Category cards also filter */
document.querySelectorAll('.cat-card').forEach(card => {
  card.addEventListener('click', () => {
    const genre = card.dataset.genre;
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c.dataset.filter === genre));
    activeFilter = genre;
    renderGames();
    document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
  });
});

/* =========================================================
   FAVORITES (LOCAL STORAGE)
   ========================================================= */
function toggleFavorite(id){
  const game = GAMES.find(g => g.id === id);
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
    showToast(`Removed "${game.title}" from favorites`);
  } else {
    favorites.push(id);
    showToast(`Added "${game.title}" to favorites`);
  }
  localStorage.setItem('sb_favorites', JSON.stringify(favorites));
  updateFavCount();
  renderGames();
}
function updateFavCount(){
  document.getElementById('favCount').textContent = favorites.length;
}
updateFavCount();

document.getElementById('favToggle').addEventListener('click', () => {
  if (!favorites.length) { showToast('No favorites yet — click the heart on any game'); return; }
  const names = favorites.map(id => GAMES.find(g => g.id === id)?.title).filter(Boolean).join(', ');
  showToast(`Favorites: ${names}`);
});

/* =========================================================
   TOAST
   ========================================================= */
let toastTimer;
function showToast(msg){
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

/* =========================================================
   GAME MODAL
   ========================================================= */
function openModal(id){
  const g = GAMES.find(game => game.id === id);
  if (!g) return;

  document.getElementById('modalHero').src = g.img;
  document.getElementById('modalHero').alt = g.title;
  document.getElementById('modalShots').innerHTML = g.shots.map(s => `<img src="${s}" alt="${g.title} screenshot">`).join('');
  document.getElementById('modalTags').innerHTML = `<span>${g.genre}</span><span>${g.year}</span>`;
  document.getElementById('modalTitle').textContent = g.title;
  document.getElementById('modalDesc').textContent = g.desc;
  document.getElementById('modalDev').textContent = g.dev;
  document.getElementById('modalPlatforms').textContent = g.platforms.join(', ');
  document.getElementById('modalRelease').textContent = g.year;
  document.getElementById('modalRating').textContent = g.rating.toFixed(1) + ' / 5.0';
  document.getElementById('modalReqs').textContent = g.reqs;

  const favBtn = document.getElementById('modalFavBtn');
  const isFav = favorites.includes(g.id);
  favBtn.innerHTML = `<i class="bi bi-heart${isFav ? '-fill' : ''}"></i><span>${isFav ? 'Remove Favorite' : 'Add to Favorites'}</span>`;
  favBtn.onclick = () => { toggleFavorite(g.id); openModal(g.id); };

  document.getElementById('modalTrailerBtn').onclick = () => openTrailer(g.title, g.img);

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target.id === 'modalOverlay') closeModal();
});

/* =========================================================
   TRAILER MODAL
   A single royalty-free sample video (Blender Foundation's
   "Big Buck Bunny", CC BY 3.0) stands in for real trailer
   footage. Swap TRAILER_SRC for real trailer files per-game
   once you have them — just add a `trailer` field to each
   game in GAMES and read it here instead.
   ========================================================= */
const TRAILER_SRC = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

function openTrailer(title = 'ShadowByte — Season 04', poster = ''){
  const video = document.getElementById('trailerVideo');
  document.getElementById('trailerLabel').textContent = `${title} — Trailer`;
  video.poster = poster;
  video.src = TRAILER_SRC;
  document.getElementById('trailerOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  video.play().catch(() => {});
}
function closeTrailer(){
  const video = document.getElementById('trailerVideo');
  video.pause();
  video.removeAttribute('src');
  video.load();
  document.getElementById('trailerOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('trailerBtn').addEventListener('click', () => openTrailer());
document.getElementById('trailerClose').addEventListener('click', closeTrailer);
document.getElementById('trailerOverlay').addEventListener('click', e => {
  if (e.target.id === 'trailerOverlay') closeTrailer();
});
document.getElementById('exploreBtn').addEventListener('click', () => {
  document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeTrailer(); }
});

/* =========================================================
   TRENDING SLIDER
   ========================================================= */
(function slider(){
  const track = document.getElementById('sliderTrack');
  const dotsWrap = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  const trending = [...GAMES].sort((a,b) => b.rating - a.rating);

  track.innerHTML = trending.map(g => `
    <div class="trend-card" data-id="${g.id}">
      <img src="${g.img}" alt="${g.title}" loading="lazy">
      <div class="trend-card-body">
        <h4>${g.title}</h4>
        <span>${g.genre} · ${starRating(g.rating)}</span>
      </div>
    </div>
  `).join('');

  track.querySelectorAll('.trend-card').forEach(card => {
    card.addEventListener('click', () => openModal(Number(card.dataset.id)));
  });

  let cardWidth = 280;
  let visible = 4;
  let index = 0;
  let autoTimer;

  function calcVisible(){
    const viewportWidth = track.parentElement.offsetWidth;
    visible = Math.max(1, Math.floor(viewportWidth / cardWidth));
    return Math.max(0, trending.length - visible);
  }

  function buildDots(){
    const maxIndex = calcVisible();
    dotsWrap.innerHTML = '';
    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement('div');
      dot.className = 'slider-dot' + (i === index ? ' active' : '');
      dot.addEventListener('click', () => { index = i; update(); });
      dotsWrap.appendChild(dot);
    }
  }

  function update(){
    const maxIndex = calcVisible();
    index = Math.max(0, Math.min(index, maxIndex));
    track.style.transform = `translateX(-${index * cardWidth}px)`;
    [...dotsWrap.children].forEach((d,i) => d.classList.toggle('active', i === index));
  }

  function next(){ const maxIndex = calcVisible(); index = index >= maxIndex ? 0 : index + 1; update(); }
  function prev(){ const maxIndex = calcVisible(); index = index <= 0 ? maxIndex : index - 1; update(); }

  nextBtn.addEventListener('click', () => { next(); resetAuto(); });
  prevBtn.addEventListener('click', () => { prev(); resetAuto(); });

  function startAuto(){ autoTimer = setInterval(next, 3500); }
  function resetAuto(){ clearInterval(autoTimer); startAuto(); }

  track.parentElement.parentElement.addEventListener('mouseenter', () => clearInterval(autoTimer));
  track.parentElement.parentElement.addEventListener('mouseleave', startAuto);

  window.addEventListener('resize', () => { buildDots(); update(); });
  buildDots(); update(); startAuto();
})();

/* =========================================================
   COMMUNITY STATS COUNTER
   ========================================================= */
(function statsCounter(){
  const nums = document.querySelectorAll('.stat-num');
  let animated = false;

  function animate(){
    if (animated) return;
    animated = true;
    nums.forEach(el => {
      const target = Number(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const duration = 1600;
      const start = performance.now();
      function tick(now){
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(tick);
    });
  }

  const statsSection = document.getElementById('esports');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) animate(); });
  }, { threshold: 0.3 });
  obs.observe(statsSection);
})();

/* =========================================================
   NEWS RENDER
   ========================================================= */
(function renderNews(){
  document.getElementById('newsGrid').innerHTML = NEWS.map(n => `
    <article class="news-card reveal-up">
      <img src="${n.img}" alt="${n.title}" loading="lazy">
      <div class="news-card-body">
        <span class="news-date">${n.date}</span>
        <h3>${n.title}</h3>
        <p>${n.desc}</p>
      </div>
    </article>
  `).join('');
  observeReveals();
})();

/* =========================================================
   COMMUNITY CTA — JOIN DISCORD
   ========================================================= */
document.getElementById('discordCta').addEventListener('click', () => {
  showToast('Opening Discord invite...');
  window.open('https://discord.com', '_blank', 'noopener');
});

/* =========================================================
   FOOTER SOCIAL ICONS
   ========================================================= */
const SOCIAL_LINKS = {
  discord: 'https://discord.com',
  instagram: 'https://instagram.com',
  youtube: 'https://youtube.com',
  github: 'https://github.com'
};
document.querySelectorAll('[data-social]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const platform = link.dataset.social;
    showToast(`Opening ${platform.charAt(0).toUpperCase() + platform.slice(1)}...`);
    window.open(SOCIAL_LINKS[platform] || '#', '_blank', 'noopener');
  });
});

/* =========================================================
   FOOTER "COMPANY" LINKS (About / Careers / Press)
   These pages don't exist in this demo build, so they surface
   a clear in-voice message instead of doing nothing.
   ========================================================= */
document.querySelectorAll('.footer-col a').forEach(link => {
  const label = link.textContent.trim();
  if (['About', 'Careers', 'Press'].includes(label)) {
    link.addEventListener('click', e => {
      e.preventDefault();
      showToast(`${label} page isn't part of this demo yet.`);
    });
  }
});

/* =========================================================
   NEWSLETTER FORM
   ========================================================= */
document.getElementById('newsletterForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value;
  const msg = document.getElementById('newsletterMsg');
  msg.textContent = `> Subscribed as ${email}. Welcome to the grid.`;
  document.getElementById('newsletterEmail').value = '';
  showToast('Subscribed! Check your inbox soon.');
});

/* =========================================================
   SCROLL REVEAL (IntersectionObserver)
   ========================================================= */
function observeReveals(){
  const els = document.querySelectorAll('.reveal-up:not(.in-view)');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => obs.observe(el));
}

/* =========================================================
   INIT
   ========================================================= */
renderGames();
observeReveals();
