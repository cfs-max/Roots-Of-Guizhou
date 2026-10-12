/* =====================================================================
 * ROOTS OF GUIZHOU — 交互逻辑（4 级导航）
 * 依赖 data.js 中的 ATTRACTIONS / PLANT_SEQUENCE
 * ===================================================================== */
(function () {
  'use strict';

  /* ---------- 视图切换 ---------- */
  const views = {
    welcome: document.getElementById('welcome'),
    map: document.getElementById('map'),
    plant: document.getElementById('plant'),
    pattern: document.getElementById('pattern')
  };
  function showView(name) {
    Object.keys(views).forEach(k => views[k].classList.toggle('hidden', k !== name));
  }

  /* ---------- 背景音乐 ---------- */
  const bgm = document.getElementById('bgm');
  const muteBtn = document.getElementById('muteBtn');
  let muted = false;                               // 用户音量意图：false=想听，true=静音
  function syncMuteUI() { muteBtn.classList.toggle('muted', muted); }
  function ensureMusic() { if (!muted && bgm.paused) bgm.play().catch(() => {}); }
  function toggleMusic() {
    muted = !muted;
    if (muted) bgm.pause();
    else bgm.play().catch(() => {});              // 当前点击即用户手势，可直接播放
    syncMuteUI();
  }
  window.addEventListener('load', () => bgm.play().catch(() => {}));   // 尝试自动播放（浏览器可能拦截）
  document.addEventListener('click', ensureMusic);                    // 任意点击兜底启动
  muteBtn.addEventListener('click', e => { e.stopPropagation(); toggleMusic(); });
  syncMuteUI();

  /* ---------- SVG 占位图生成 ---------- */
  function hueOf(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 360;
    return h;
  }
  function svgURI(svg) { return 'data:image/svg+xml,' + encodeURIComponent(svg); }

  // 植物标本图（L3 中央）
  function plantImageSVG(p) {
    const h = hueOf(p.id);
    const leaf = `hsl(${h},45%,40%)`;
    const leaf2 = `hsl(${(h + 28) % 360},42%,52%)`;
    const stem = `hsl(${h},35%,28%)`;
    const flower = `hsl(${(h + 200) % 360},55%,56%)`;
    const svg =
      `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='520' viewBox='0 0 400 520'>` +
      `<defs><linearGradient id='b' x1='0' y1='0' x2='0' y2='1'>` +
      `<stop offset='0' stop-color='#f8f1dc'/><stop offset='1' stop-color='#e6d8b8'/></linearGradient></defs>` +
      `<rect width='400' height='520' rx='14' fill='url(#b)'/>` +
      `<rect x='10' y='10' width='380' height='500' rx='10' fill='none' stroke='${stem}' stroke-opacity='0.35' stroke-width='2'/>` +
      `<g transform='translate(200,70)'>` +
      `<path d='M0,360 L0,60' stroke='${stem}' stroke-width='6' fill='none' stroke-linecap='round'/>` +
      `<path d='M0,300 C-65,282 -96,232 -74,182 C-32,212 0,242 0,282 Z' fill='${leaf}'/>` +
      `<path d='M0,242 C65,224 96,174 74,124 C32,154 0,184 0,224 Z' fill='${leaf2}'/>` +
      `<path d='M0,182 C-54,167 -80,127 -62,87 C-26,112 0,137 0,172 Z' fill='${leaf}'/>` +
      `<path d='M0,128 C54,113 78,78 60,42 C26,64 0,89 0,122 Z' fill='${leaf2}'/>` +
      `<circle cx='0' cy='60' r='15' fill='${flower}'/>` +
      `<circle cx='-19' cy='78' r='9' fill='${flower}' opacity='0.85'/>` +
      `<circle cx='19' cy='78' r='9' fill='${flower}' opacity='0.85'/>` +
      `<path d='M0,360 C-22,392 -36,418 -26,444 M0,360 C22,392 36,418 26,444 M0,360 L0,440' stroke='${stem}' stroke-width='4' fill='none' stroke-linecap='round' opacity='0.7'/>` +
      `</g>` +
      `</svg>`;
    return svgURI(svg);
  }

  // 纹路样式图（L4 轮播），variant i 决定纹样
  function patternSVG(p, i) {
    const h = hueOf(p.id);
    const line = `hsl(${(h + i * 47) % 360},55%,52%)`;
    const base = `hsl(${h},40%,36%)`;
    const bg = `hsl(${h},32%,91%)`;
    let inner = '';
    const mod = i % 3;
    if (mod === 0) {                                   // 同心年轮 / 根截面
      for (let r = 18; r < 200; r += 17) {
        inner += `<circle cx='200' cy='200' r='${r}' fill='none' stroke='${line}' stroke-width='${2 + (r % 3)}' opacity='${(0.92 - r / 280).toFixed(2)}'/>`;
      }
    } else if (mod === 1) {                            // 分叉叶脉 / 根网
      const branch = (x, y, a, d) => {
        if (d < 9) return '';
        const nx = x + Math.cos(a) * d, ny = y + Math.sin(a) * d;
        return `<path d='M${x.toFixed(1)},${y.toFixed(1)} L${nx.toFixed(1)},${ny.toFixed(1)}' stroke='${line}' stroke-width='${(d / 12).toFixed(1)}' fill='none' stroke-linecap='round'/>` +
          branch(nx, ny, a - 0.5, d * 0.7) + branch(nx, ny, a + 0.5, d * 0.7);
      };
      inner = branch(200, 384, -Math.PI / 2, 120);
    } else {                                           // 编织纤维 / 树皮
      for (let x = 22; x < 392; x += 22) inner += `<line x1='${x}' y1='10' x2='${x}' y2='390' stroke='${line}' stroke-width='2' opacity='0.5'/>`;
      for (let y = 22; y < 392; y += 22) inner += `<line x1='10' y1='${y}' x2='390' y2='${y}' stroke='${base}' stroke-width='2' opacity='0.5'/>`;
    }
    const svg =
      `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'>` +
      `<rect width='400' height='400' rx='12' fill='${bg}'/>` +
      `<rect x='8' y='8' width='384' height='384' rx='8' fill='none' stroke='${base}' stroke-opacity='0.4' stroke-width='2'/>` +
      inner + `</svg>`;
    return svgURI(svg);
  }

  /* ---------- 状态 ---------- */
  let seqIndex = 0;          // 当前植物在 PLANT_SEQUENCE 中的下标
  let carIndex = 0;          // L4 轮播图下标

  function findSeq(attId, plantId) {
    return PLANT_SEQUENCE.findIndex(s => s.attraction.id === attId && s.plant.id === plantId);
  }

  /* ---------- L2 地图 ---------- */
  const mapCanvas = document.getElementById('mapCanvas');
  const popupLeft = document.getElementById('popupLeft');
  const popupRight = document.getElementById('popupRight');

  // 注入 pin（底图为 assets/guizhou-map.jpg 手绘全景图）
  ATTRACTIONS.forEach(a => {
    const pin = document.createElement('div');
    pin.className = 'pin';
    pin.style.left = a.x + '%';
    pin.style.top = a.y + '%';                // y 已精确对准图中墨圈圆心
    pin.innerHTML = `<div class='dot'></div>`;
    pin.addEventListener('click', e => { e.stopPropagation(); openAttraction(a.id); });
    mapCanvas.appendChild(pin);
  });

  function openAttraction(attId) {
    const a = ATTRACTIONS.find(x => x.id === attId);
    if (!a) return;
    // 高亮当前 pin
    document.querySelectorAll('.pin').forEach(p => p.classList.remove('active'));
    // 左弹窗：景点简介
    const plNameEl = document.getElementById('plName');
    const plEnEl = document.getElementById('plEn');
    if (a.nameEnOnly) {                       // 标题位只放英文名，副标题行隐藏
      plNameEl.textContent = a.nameEn;
      plNameEl.classList.add('en-title');
      plEnEl.hidden = true;
    } else {
      plNameEl.textContent = a.name;
      plNameEl.classList.remove('en-title');
      plEnEl.textContent = a.nameEn;
      plEnEl.hidden = false;
    }
    document.getElementById('plIntro').textContent = a.intro;
    const plImgEl = document.getElementById('plImg');
    if (a.img) { plImgEl.src = a.img; plImgEl.hidden = false; } else { plImgEl.hidden = true; }
    popupLeft.classList.remove('hidden');
    positionPopups();
    // 右弹窗：植物卡片（可按景点开关隐藏标题 / 只显示英文名）
    document.getElementById('prTitle').hidden = !!a.hidePlantHead;
    document.getElementById('prSub').hidden = !!a.hidePlantHead;
    const box = document.getElementById('plCards');
    box.classList.toggle('no-head', !!a.hidePlantHead);
    box.innerHTML = '';
    a.plants.forEach(pl => {
      const idx = findSeq(a.id, pl.id);
      const card = document.createElement('div');
      card.className = 'plant-card';
      // 卡片只显示植物主名，不显示拉丁名
      const mainName = a.plantEnOnly ? pl.nameEn : pl.name;
      card.innerHTML =
        `<img class='pc-thumb' src='${pl.cardImg}' alt='${mainName}' />
         <div><div class='pc-name${a.plantEnOnly ? ' en-title' : ''}'>${mainName}</div></div>`;
      card.addEventListener('click', () => openPlant(idx));
      box.appendChild(card);
    });
    popupRight.classList.remove('hidden');
  }

  function closePopups() {
    popupLeft.classList.add('hidden');
    popupRight.classList.add('hidden');
    document.querySelectorAll('.pin').forEach(p => p.classList.remove('active'));
  }
  document.querySelectorAll('[data-close]').forEach(b =>
    b.addEventListener('click', () => { document.getElementById(b.dataset.close === 'left' ? 'popupLeft' : 'popupRight').classList.add('hidden'); }));
  mapCanvas.addEventListener('click', closePopups);

  // 让左右弹窗紧贴中央地图两侧，留 10px 间隙（窄屏空间不足时交回 CSS 百分比布局）
  function positionPopups() {
    if (!mapCanvas) return;
    const root = document.getElementById('map');
    const mapRect = mapCanvas.getBoundingClientRect();
    const rootRect = root.getBoundingClientRect();
    const vw = window.innerWidth;
    const gap = 10;
    // 取弹窗实际渲染宽度（与 CSS 当前宽度一致），避免估算偏小导致左弹窗右伸盖住地图
    const pw = popupLeft.offsetWidth || Math.min(vw * 0.33, 285);
    const leftEdge = mapRect.left - rootRect.left;
    const rightEdge = mapRect.right - rootRect.left;
    const leftSpace = leftEdge;
    const rightSpace = vw - rightEdge;
    if (leftSpace > pw + gap + 6 && rightSpace > pw + gap + 6) {
      popupLeft.style.left = (leftEdge - pw - gap) + 'px';
      popupLeft.style.right = 'auto';
      popupRight.style.left = (rightEdge + gap) + 'px';
      popupRight.style.right = 'auto';
    } else {
      popupLeft.style.left = ''; popupLeft.style.right = '';
      popupRight.style.left = ''; popupRight.style.right = '';
    }
  }
  window.addEventListener('resize', positionPopups);

  /* ---------- L3 植物页 ---------- */
  // 结构化字段块：[字段名, 值] → 字段名加粗 + 值换行；无 blocks 时回退为纯文本段落
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function setPlantText(elId, blocks, fallback) {
    const el = document.getElementById(elId);
    if (blocks && blocks.length) {
      el.innerHTML = blocks.map(b =>
        `<p class='pf'><b>${esc(b[0])}</b><span>${esc(b[1])}</span></p>`).join('');
    } else {
      el.innerHTML = '';
      el.textContent = fallback;
    }
  }

  function openPlant(idx) {
    seqIndex = (idx + PLANT_SEQUENCE.length) % PLANT_SEQUENCE.length;
    const s = PLANT_SEQUENCE[seqIndex];
    const a = s.attraction, p = s.plant;
    // 两侧小标签（原「景点 · 简介」「植物 · 药性」）不再展示，直接呈现内容
    document.getElementById('plLTag').hidden = true;
    document.getElementById('plRTag').hidden = true;
    setPlantText('plLText', p.blocksL, p.descL);
    setPlantText('plRText', p.blocksR, p.descR);
    // 标本图：优先真实素材（透明底时去掉白边与投影，让图案直接落在背景上）
    const plantImgEl = document.getElementById('plantImg');
    plantImgEl.src = p.img || plantImageSVG(p);
    plantImgEl.classList.toggle('bare', !!p.img);
    // 名称图：优先植物专属图，否则通用占位
    const nameSrc = p.nameImg || 'assets/plant-name.png';
    document.querySelectorAll('.plant-name-img').forEach(im => { im.src = nameSrc; });
    updatePlantNav();
    showView('plant');
  }

  // L3/L4 顶部三按钮：左右为上/下一种植物，中间返回地图（两页共用同一套按钮逻辑）
  function updatePlantNav() {
    const N = PLANT_SEQUENCE.length;
    const prevP = PLANT_SEQUENCE[(seqIndex - 1 + N) % N].plant;
    const nextP = PLANT_SEQUENCE[(seqIndex + 1) % N].plant;
    const set = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
    set('btnPrev', '← ' + prevP.pinyin);
    set('btnNext', nextP.pinyin + ' →');
    set('btnPrevP', '← ' + prevP.pinyin);
    set('btnNextP', nextP.pinyin + ' →');
  }

  /* ---------- L4 纹路页 ---------- */
  function openPattern(idx) {
    seqIndex = (idx + PLANT_SEQUENCE.length) % PLANT_SEQUENCE.length;
    carIndex = 0;
    // 切换纹路页时同步右上角名称图（与 L3 同一逻辑）
    const p = PLANT_SEQUENCE[seqIndex].plant;
    document.getElementById('patternNameImg').src = p.nameImg || 'assets/plant-name.png';
    renderPattern();
    updatePlantNav();
    // 进入 L4：还原默认鼠标
    document.getElementById('plantImg').classList.remove('pressed');
    showView('pattern');
  }
  function renderPattern() {
    const p = PLANT_SEQUENCE[seqIndex].plant;
    // 优先真实纹样图，否则按 patternCount 生成 SVG 占位
    const imgs = p.patternImages
      ? p.patternImages.slice()
      : Array.from({ length: p.patternCount }, (_, i) => patternSVG(p, i));
    renderCarousel(imgs);
    // 轮播图下方两行说明：优先植物专属文案，否则通用文案
    document.getElementById('pfLeft').textContent =
      p.footL || 'CULTURAL SYMBOL | SUN / CIRCULAR LIFE SYMBOL.';
    document.getElementById('pfRight').textContent =
      p.footR || 'PATTERN | ROUND-LEAF MOTIFS, SUN MOTIFS, AND CONTINUOUS WATER-WAVE PATTERNS.';
  }
  function renderCarousel(imgs) {
    carIndex = Math.max(0, Math.min(carIndex, imgs.length - 1));
    document.getElementById('carImg').src = imgs[carIndex];
    const dots = document.getElementById('carDots');
    dots.innerHTML = imgs.map((_, i) => `<i class='${i === carIndex ? 'on' : ''}'></i>`).join('');
    renderCarousel._imgs = imgs;
  }

  /* ---------- 事件绑定 ---------- */
  // L1 → L2
  document.getElementById('welcomeTitle').addEventListener('click', () => { ensureMusic(); showView('map'); });
  // L2 返回
  document.getElementById('mapBack').addEventListener('click', () => { closePopups(); showView('welcome'); });
  // L3 图片 → L4：按下换「捏起标本」鼠标，稍作停顿后带过渡切换；L4 恢复默认鼠标
  const plantImgEl = document.getElementById('plantImg');
  plantImgEl.addEventListener('mousedown', () => plantImgEl.classList.add('pressed'));
  plantImgEl.addEventListener('mouseleave', () => plantImgEl.classList.remove('pressed'));
  plantImgEl.addEventListener('click', () => {
    plantImgEl.classList.add('pressed');
    setTimeout(() => openPattern(seqIndex), 320);
  });
  // L3 顶部三按钮：左右切换上/下一种植物的植物页，中间返回地图
  document.getElementById('btnPrev').addEventListener('click', () => openPlant(seqIndex - 1));
  document.getElementById('btnNext').addEventListener('click', () => openPlant(seqIndex + 1));
  document.getElementById('btnMap').addEventListener('click', () => { closePopups(); showView('map'); });
  document.getElementById('patternNameImg').addEventListener('click', () => showView('plant'));   // 点名称图回 L3
  document.getElementById('patternBack').addEventListener('click', () => showView('plant'));      // L4 左上角返回按钮回 L3
  // L4 顶部三按钮：左右切换上/下一种植物的纹路页，中间返回地图（样式与逻辑同 L3）
  document.getElementById('btnPrevP').addEventListener('click', () => openPattern(seqIndex - 1));
  document.getElementById('btnNextP').addEventListener('click', () => openPattern(seqIndex + 1));
  document.getElementById('btnMapP').addEventListener('click', () => { closePopups(); showView('map'); });
  // L4 轮播左右
  document.getElementById('carPrev').addEventListener('click', () => { carIndex--; renderCarousel(renderCarousel._imgs); });
  document.getElementById('carNext').addEventListener('click', () => { carIndex++; renderCarousel(renderCarousel._imgs); });

  // 初始
  showView('welcome');
})();
