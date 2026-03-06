/**
 * MonitorIA Frontend (Static GitHub Pages build)
 * - No backend/API dependencies
 * - Keeps interactive visuals (hero canvas, scrollytelling, dashboard, principles, solution model, carousel)
 */

(() => {
  // Utilities
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const fmtInt = (v) => (v == null || isNaN(v) ? "-" : Number(v).toLocaleString("pt-BR"));

  // State
  const initialized = new Set();
  const principiosState = { ready: false, started: false, wantStart: false, start: null };

  // Intersection-driven scenes (only those present in docs/index.html)
  function initScrollytelling() {
    const scenes = [
      {
        id: "scene-principios", fn: () => {
          if (initialized.has("scene-principios")) return;
          initialized.add("scene-principios");
          initPrincipios();
          $("#scene-principios")?.classList.add("in");
        }
      },
      {
        id: "scene-nossa-solucao", fn: () => {
          if (initialized.has("scene-nossa-solucao")) return;
          initialized.add("scene-nossa-solucao");
          initSolutionModel();
          $("#scene-nossa-solucao")?.classList.add("in");
        }
      },
      {
        id: "scene-contexto", fn: () => {
          if (initialized.has("scene-contexto")) return;
          initialized.add("scene-contexto");
          setupScrollytelling();
          setupDashboard();
          $("#scene-contexto")?.classList.add("in");
        }
      },
      {
        id: "producao-embed", fn: () => {
          if (initialized.has("producao-embed")) return;
          initialized.add("producao-embed");
          setupProducaoScrollytelling();
          $("#producao-embed")?.classList.add("in");
        }
      },
      {
        id: "agent-na-pratica", fn: () => {
          if (initialized.has("agent-na-pratica")) return;
          initialized.add("agent-na-pratica");
          $("#agent-na-pratica")?.classList.add("in");
        }
      },
      {
        id: "quartil-embed", fn: () => {
          if (initialized.has("quartil-embed")) return;
          initialized.add("quartil-embed");
          $("#quartil-embed")?.classList.add("in");
        }
      },
      {
        id: "operadores-embed", fn: () => {
          if (initialized.has("operadores-embed")) return;
          initialized.add("operadores-embed");
          $("#operadores-embed")?.classList.add("in");
        }
      },
      {
        id: "iec-embed", fn: () => {
          if (initialized.has("iec-embed")) return;
          initialized.add("iec-embed");
          $("#iec-embed")?.classList.add("in");
        }
      },
    ];

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const sc = scenes.find((s) => s.id === id);
          if (sc) sc.fn();
        }
      });
    }, { root: null, threshold: 0.3 });

    scenes.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
  }

  // Scrollytelling for context section (text reveals by scroll)
  function setupScrollytelling() {
    const container = document.querySelector('#scene-contexto .scrollytelling-container');
    if (!container) return;
    const animatedElements = container.querySelectorAll('[data-step]');
    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;
      const scrollableHeight = container.offsetHeight - window.innerHeight;
      const denom = Math.max(1, scrollableHeight);
      const progress = Math.max(0, Math.min(1, -rect.top / denom));
      const stepsVisibility = {
        step1: progress > 0.05,
        step2: progress > 0.25,
        step3: progress > 0.40,
        step4: progress > 0.55,
        step5: progress > 0.70,
      };
      animatedElements.forEach((el) => {
        const step = el.getAttribute('data-step');
        if (!step) return;
        el.classList.toggle('is-visible', !!stepsVisibility[`step${step}`]);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Scrollytelling para Produção — sem título interno + indicador de passos
  function setupProducaoScrollytelling() {
    const root = document.getElementById('producao-embed');
    if (!root) return;

    // Diagrama sempre visível, sem wrapper colapsável e sem título injetado

    // Scrollytelling textual (se existir container/steps, mantém a revelação e adiciona indicador)
    const container = root.querySelector('.scrollytelling-container');
    if (container) {
      const stepsEls = Array.from(container.querySelectorAll('[data-step]'));

      // Cria indicador de passos (único)
      let indicator = root.querySelector('.step-indicator');
      if (!indicator && stepsEls.length > 0) {
        indicator = document.createElement('div');
        indicator.className = 'step-indicator';
        const progress = document.createElement('div');
        progress.className = 'step-progress';
        const dotsWrap = document.createElement('div');
        dotsWrap.className = 'step-dots';

        stepsEls.forEach((el, i) => {
          const dot = document.createElement('button');
          dot.type = 'button';
          dot.className = 'step-dot';
          dot.setAttribute('aria-label', `Ir para passo ${i + 1}`);
          dot.addEventListener('click', () => {
            try { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (_) { el.scrollIntoView(); }
          });
          dotsWrap.appendChild(dot);
        });

        indicator.append(progress, dotsWrap);
        root.appendChild(indicator);
      }

      const animatedElements = container.querySelectorAll('[data-step]');
      const handleScroll = () => {
        const rect = container.getBoundingClientRect();
        if (rect.top > window.innerHeight || rect.bottom < 0) return;
        const scrollableHeight = container.offsetHeight - window.innerHeight;
        const denom = Math.max(1, scrollableHeight);
        const progressVal = Math.max(0, Math.min(1, -rect.top / denom));
        const vis = {
          step1: progressVal > 0.04,
          step2: progressVal > 0.22,
          step3: progressVal > 0.42,
          step4: progressVal > 0.62,
          step5: progressVal > 0.82,
        };
        animatedElements.forEach((el) => {
          const step = el.getAttribute('data-step');
          if (!step) return;
          el.classList.toggle('is-visible', !!vis[`step${step}`]);
        });

        // Atualiza indicador ativo + barra de progresso
        const dots = indicator ? Array.from(indicator.querySelectorAll('.step-dot')) : [];
        if (dots.length) {
          let activeIdx = -1;
          for (let k = dots.length; k >= 1; k--) {
            if (vis[`step${k}`]) { activeIdx = k - 1; break; }
          }
          dots.forEach((d, i) => d.classList.toggle('is-active', i === activeIdx));
          const bar = indicator.querySelector('.step-progress');
          if (bar) {
            const pct = dots.length > 1 && activeIdx >= 0 ? (activeIdx / (dots.length - 1)) * 100 : (activeIdx >= 0 ? 100 : 0);
            bar.style.width = `${Math.max(0, Math.min(100, pct)).toFixed(1)}%`;
          }
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }
  }

  // Dashboard bubbles and sliders logic
  function setupDashboard() {
    const section = document.getElementById('scene-contexto');
    if (!section) return;
    const BUBBLES_PER_CLUSTER = 13;
    const BASE_VISIBLE_BUBBLES = 2;
    const canvas = section.querySelector('.bubble-canvas');
    const controlsArea = section.querySelector('.controls-area');
    const descriptionDisplay = section.querySelector('.description-display');
    if (!canvas || !controlsArea || !descriptionDisplay) return;

    const CLUSTER_COLORS = {
      "1": "var(--cluster-orange)",
      "2": "var(--cluster-blue)",
      "3": "var(--cluster-green)",
      "4": "var(--cluster-red)"
    };

    function generateBubbles() {
      for (let clusterId = 1; clusterId <= 4; clusterId++) {
        for (let i = 0; i < BUBBLES_PER_CLUSTER; i++) {
          const bubble = document.createElement('div');
          const size = Math.random() * 45 + 15;
          bubble.classList.add('bubble');
          bubble.dataset.cluster = String(clusterId);
          bubble.style.setProperty('--bubble-color', CLUSTER_COLORS[String(clusterId)]);
          bubble.style.width = `${size.toFixed(1)}px`;
          bubble.style.height = `${size.toFixed(1)}px`;
          bubble.style.top = `${(Math.random() * 90 + 5).toFixed(2)}%`;
          bubble.style.left = `${(Math.random() * 90 + 5).toFixed(2)}%`;
          bubble.style.transitionDelay = `${(Math.random() * 0.5).toFixed(2)}s`;
          canvas.appendChild(bubble);
        }
      }
    }

    function updateDashboard() {
      const sliders = Array.from(controlsArea.querySelectorAll('input[type="range"]'));
      const values = sliders.map((s) => parseInt(s.value, 10));
      const allMaxed = values.every((v) => v === 100);

      sliders.forEach((slider) => {
        const clusterId = slider.getAttribute('data-cluster');
        const value = parseInt(slider.value, 10);
        if (!clusterId) return;

        const clusterBubbles = canvas.querySelectorAll(`.bubble[data-cluster="${clusterId}"]`);
        const dynamicVisibleCount = Math.floor((value / 100) * (BUBBLES_PER_CLUSTER - BASE_VISIBLE_BUBBLES));
        const visibleCount = BASE_VISIBLE_BUBBLES + dynamicVisibleCount;

        clusterBubbles.forEach((bubble, index) => {
          bubble.classList.toggle('is-visible', index < visibleCount);
          bubble.classList.toggle('is-maxed', value === 100);
        });

        const description = descriptionDisplay.querySelector(`.description[data-cluster="${clusterId}"]`);
        if (description) {
          description.classList.toggle('is-active', value > 50);
        }
      });

      descriptionDisplay.classList.toggle('is-final-state', allMaxed);
    }

    generateBubbles();
    controlsArea.addEventListener('input', (event) => {
      const t = event.target;
      if (t && t.type === 'range') updateDashboard();
    });
    updateDashboard();
  }

  // Hero canvas animation
  function initHeroCanvas() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const DPR = Math.min(2, window.devicePixelRatio || 1);
    let w = 0, h = 0, nodes = [];
    const COLORS = ["#5ddcff", "#7c3aed", "#1e90ff"];
    const N_BASE = 100; // Aumentado de 38 para 100
    const LINK_DIST = 140; // px at DPR=1

    function resize() {
      const parent = canvas.parentElement || canvas;
      const bw = parent.clientWidth || 400;
      const bh = parent.clientHeight || 300;
      w = Math.max(200, bw);
      h = Math.max(180, bh);
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      spawn();
    }

    function spawn() {
      const n = Math.floor(N_BASE * (w * h) / (700 * 360)); // scale approximately
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1 + Math.random() * 1.2,
        c: COLORS[Math.floor(Math.random() * COLORS.length)]
      }));
    }

    function step() {
      const maxX = w, maxY = h;
      for (const p of nodes) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > maxX) p.vx *= -1;
        if (p.y < 0 || p.y > maxY) p.vy *= -1;
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      const isLight = document.documentElement.classList.contains('light-theme');

      // Professional corporate palette for light mode (Higher contrast, sharper feel)
      const lightColorMap = {
        "#5ddcff": "#00b4d8", // Cyan
        "#7c3aed": "#6d28d9", // Purple
        "#1e90ff": "#0077b6"  // Blue
      };

      // draw links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const ld = LINK_DIST;
          const max2 = ld * ld;
          if (d2 < max2) {
            const t = 1 - d2 / max2;

            // CRISP configuration for light mode
            // We use a lower tMult and slightly higher baseAlpha to keep lines defined but thin
            const baseAlpha = isLight ? 0.12 : 0.08;
            const tMult = isLight ? 0.28 : 0.25;
            const alpha = baseAlpha + t * tMult;

            const colorA = isLight ? (lightColorMap[a.c] || a.c) : a.c;
            const colorB = isLight ? (lightColorMap[b.c] || b.c) : b.c;

            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            // Link transparency "AA" is removed in light mode to avoid muddy/blurry gradients
            const suffix = isLight ? "" : "AA";
            grad.addColorStop(0, colorA + suffix);
            grad.addColorStop(1, colorB + suffix);

            ctx.strokeStyle = grad;
            // lineWidth 0.9 is more technical and crisp than 1.0
            ctx.lineWidth = isLight ? 0.9 : 1.0;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // draw nodes
      for (const p of nodes) {
        const nodeColor = isLight ? (lightColorMap[p.c] || p.c) : p.c;
        // REMOVE shadowBlur in light mode to avoid the "blurry" look
        ctx.shadowBlur = isLight ? 0 : 12;
        ctx.shadowColor = nodeColor;
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    }

    // RAF loop with visibility + FPS throttle
    let rafId = 0;
    let running = false;
    let lastTs = 0;
    const MIN_INTERVAL = 1000 / 50; // ~50 FPS cap

    function frame(ts) {
      if (!running) return;
      if (ts - lastTs < MIN_INTERVAL) {
        rafId = requestAnimationFrame(frame);
        return;
      }
      lastTs = ts;
      step();
      draw();
      rafId = requestAnimationFrame(frame);
    }

    function start() {
      if (prefersReduced) return; if (running) return;
      running = true;
      rafId = requestAnimationFrame(frame);
    }
    function stop() {
      if (!running) return;
      running = false;
      cancelAnimationFrame(rafId);
      rafId = 0;
    }

    resize();

    // Start if hero is in view
    const hostEl = canvas.parentElement || canvas;
    const firstRect = hostEl.getBoundingClientRect();
    if (firstRect.bottom > 0 && firstRect.top < (window.innerHeight || 600)) {
      start();
    }

    // Pause/resume based on visibility of the hero area
    const heroIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.target !== hostEl) return;
        if (e.isIntersecting && !document.hidden) start();
        else stop();
      });
    }, { root: null, threshold: 0.1 });
    heroIO.observe(hostEl);

    // Also pause when tab not visible
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else {
        const r = hostEl.getBoundingClientRect();
        if (r.bottom > 0 && r.top < (window.innerHeight || 600)) start();
      }
    });

    window.addEventListener("resize", resize);
    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement || canvas);
  }

  // Carousel (static list from docs/Telas)
  async function initCarousel() {
    const track = document.getElementById("carousel-track");
    const container = document.getElementById("carousel-container");
    const dotsWrap = document.getElementById("carousel-dots");
    const btnPrev = document.getElementById("carousel-prev");
    const btnNext = document.getElementById("carousel-next");
    if (!track || !container) return;

    // Static files (copied to docs/Telas)
    const base = "./Telas";
    const files = ["A.png", "B.png"];

    track.innerHTML = "";
    files.forEach((name) => {
      const item = document.createElement("div");
      item.className = "carousel-item";
      item.innerHTML = `<img src="${base}/${encodeURIComponent(name)}" alt="${escapeHtml(name)}">`;
      item.addEventListener("mousemove", (e) => {
        const rect = item.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / Math.max(1, rect.width)) * 100;
        const y = ((e.clientY - rect.top) / Math.max(1, rect.height)) * 100;
        item.style.setProperty("--mx", `${x.toFixed(2)}%`);
        item.style.setProperty("--my", `${y.toFixed(2)}%`);
      });
      item.addEventListener("mouseleave", () => {
        item.style.removeProperty("--mx");
        item.style.removeProperty("--my");
      });
      track.appendChild(item);
    });

    const items = Array.from(track.querySelectorAll(".carousel-item"));
    const scroller = track; // track is the scrollable element
    let index = 0;

    function viewportWidth() {
      return (container && container.clientWidth) ? container.clientWidth : scroller.clientWidth;
    }
    function clamp(i) { return Math.max(0, Math.min(items.length - 1, i)); }

    // Build dots
    if (dotsWrap) {
      dotsWrap.innerHTML = "";
      items.forEach((_, i) => {
        const b = document.createElement("button");
        b.className = "carousel-dot" + (i === index ? " is-active" : "");
        b.setAttribute("aria-label", `Ir para slide ${i + 1}`);
        b.addEventListener("click", () => goTo(i));
        dotsWrap.appendChild(b);
      });
    }

    function updateActive() {
      const dots = dotsWrap ? Array.from(dotsWrap.children) : [];
      items.forEach((it, i) => it.classList.toggle("is-center", i === index));
      dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
    }

    function goTo(i, behavior = "smooth") {
      index = clamp(i);
      scroller.scrollTo({ left: index * Math.max(1, viewportWidth()), behavior });
      updateActive();
    }
    function goPrev() { goTo(index - 1); }
    function goNext() { goTo(index + 1); }

    // Arrow buttons
    if (btnPrev) btnPrev.addEventListener("click", () => goPrev());
    if (btnNext) btnNext.addEventListener("click", () => goNext());

    // Sync active state on scroll
    function syncFromScroll() {
      const w = Math.max(1, viewportWidth());
      const i = clamp(Math.round(scroller.scrollLeft / w));
      if (i !== index) {
        index = i;
        updateActive();
      }
    }
    scroller.addEventListener("scroll", () => requestAnimationFrame(syncFromScroll), { passive: true });

    // Wheel navigation (one slide per gesture)
    let wheelTS = 0;
    scroller.addEventListener("wheel", (ev) => {
      const now = Date.now();
      if (now - wheelTS < 400) { ev.preventDefault(); return; }
      const dx = ev.deltaX || 0;
      const dy = ev.deltaY || 0;
      const dir = Math.abs(dx) >= Math.abs(dy) ? dx : dy;
      if (dir > 0) goNext();
      else if (dir < 0) goPrev();
      wheelTS = now;
      ev.preventDefault();
    }, { passive: false });

    // Touch swipe (one slide)
    let touchX = 0;
    scroller.addEventListener("touchstart", (e) => {
      if (e.touches && e.touches.length) touchX = e.touches[0].clientX;
    }, { passive: true });
    scroller.addEventListener("touchend", (e) => {
      const x = (e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : 0);
      const dx = x - touchX;
      if (Math.abs(dx) > 30) {
        if (dx < 0) goNext();
        else goPrev();
      }
    }, { passive: true });

    // Align on resize
    window.addEventListener("resize", () => goTo(index, "auto"));

    // Initial state
    updateActive();
    goTo(0, "auto");
  }

  // Play button scroll and trigger for principles
  function initPlayScroll() {
    const btn = document.getElementById("btnPlay");
    const target = document.getElementById("scene-principios");
    if (!btn || !target) return;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      // Marca intenção de iniciar o typewriter dos princípios
      principiosState.wantStart = true;
      // Se já estiver pronto, inicia imediatamente
      if (principiosState.ready && !principiosState.started && typeof principiosState.start === "function") {
        principiosState.start();
      }
      // Direciona para a seção dos princípios
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Principles typewriter
  function initPrincipios() {
    const container = document.getElementById("principios-list");
    if (!container) return;

    const principles = [
      "ESTAMOS AQUI PARA FAZER MELHOR QUE TODOS.",
      "FOCAMOS A INOVAÇÃO CONSTANTEMENTE.",
      "SÓ ACREDITAMOS NO SIMPLES.",
      "SOMENTE ENTRAMOS NO MERCADO EM QUE PODEMOS FAZER UMA CONTRIBUIÇÃO SIGNIFICATIVA.",
      "TEMOS FOCO.",
      "ACREDITAMOS NA COLABORAÇÃO MÚTUA DOS NOSSOS GRUPOS.",
      "NÃO ACEITAMOS NADA QUE ESTEJA ABAIXO DO NÍVEL DE EXCELÊNCIA.",
      "SOMOS HUMILDES E HONESTOS PARA ADMITIR NOSSOS ERROS.",
      "SOMOS CORAJOSOS O SUFICIENTE PARA MUDARMOS QUANDO NECESSÁRIO.",
      "SOMOS FELIZES COM O QUE FAZEMOS."
    ];

    container.innerHTML = "";
    const pairs = [];
    for (let i = 0; i < principles.length; i += 2) {
      pairs.push([principles[i], principles[i + 1] || ""]);
    }
    container.classList.remove("has-selection");
    let selected = null;

    function makeItem(text, idx) {
      const item = document.createElement("div");
      item.className = "principio-item";
      item.setAttribute("tabindex", "0");
      item.dataset.index = String(idx);

      const num = document.createElement("span");
      num.className = "principio-num";
      num.textContent = `${String(idx + 1).padStart(2, "0")}.`;
      item.appendChild(num);

      const span = document.createElement("span");
      span.className = "principio-text";
      item.appendChild(span);

      item.addEventListener("click", () => toggleSelect(item));
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleSelect(item); }
      });
      return { el: item, labelEl: span };
    }

    function toggleSelect(item) {
      const already = item.classList.contains("is-selected");
      $$(".principio-item", container).forEach(it => it.classList.remove("is-selected"));
      if (already) {
        container.classList.remove("has-selection");
        selected = null;
      } else {
        item.classList.add("is-selected");
        container.classList.add("has-selection");
        selected = item;
      }
    }

    const SPEED = 18; // ms/char
    const PAUSE_BETWEEN_LINES = 140;
    const PAUSE_BETWEEN_PAIRS = 260;

    function typeText(el, text) {
      return new Promise((resolve) => {
        let i = 0;
        const len = text.length;
        const timer = setInterval(() => {
          el.textContent = text.slice(0, i++);
          if (i > len) {
            clearInterval(timer);
            setTimeout(resolve, PAUSE_BETWEEN_LINES);
          }
        }, SPEED);
      });
    }

    const itemTargets = [];
    let globalIdx = 0;
    for (let p = 0; p < pairs.length; p++) {
      const row = document.createElement("div");
      row.className = "principio-row";
      const left = makeItem("", globalIdx++);
      const right = makeItem("", globalIdx++);
      row.appendChild(left.el);
      row.appendChild(right.el);
      container.appendChild(row);
      itemTargets.push(left.labelEl, right.labelEl);
    }

    function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

    async function playOnce() {
      // Tipagem simultânea em TODOS os princípios
      const texts = principles;
      const tasks = itemTargets.map((el, i) => typeText(el, texts[i] || ""));
      await Promise.all(tasks);
    }

    // Sinaliza prontidão e define o gatilho de start
    principiosState.ready = true;
    principiosState.start = () => {
      if (principiosState.started) return;
      principiosState.started = true;
      playOnce();
    };

    // Se o botão Play já foi clicado antes da seção estar pronta, dispara agora
    if (principiosState.wantStart && !principiosState.started) {
      principiosState.start();
    }
  }

  // Nossa solução — toggle do card principal
  function initSolutionModel() {
    const card = document.getElementById("solution-main-card");
    if (!card) return;

    function setAlt(on) {
      card.classList.toggle("is-alt", on);
      card.setAttribute("aria-pressed", String(on));
      const time = card.querySelector(".time-view");
      const obj = card.querySelector(".obj-view");
      if (time) time.setAttribute("aria-hidden", on ? "true" : "false");
      if (obj) obj.setAttribute("aria-hidden", on ? "false" : "true");
    }

    card.addEventListener("click", () => setAlt(!card.classList.contains("is-alt")));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setAlt(!card.classList.contains("is-alt"));
      }
    });

    // Estado inicial: mostrar tempo
    setAlt(false);
  }

  // Helpers
  function escapeHtml(s) {
    return String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Sumário (modal central) — abre via botão .hamburger
  function initSummaryModal() {
    const btn = document.querySelector(".hamburger");
    if (!btn) return;

    let backdrop = null;
    let lastFocus = null;

    function getSections() {
      // RETIRED: Rede de causa e efeito - Avaliação Q4-Q4 [2025-11-10] — seção #detalhe-embed removida do sumário
      const ids = [
        "scene-principios",
        "scene-conceito",
        "scene-nossa-solucao",
        "scene-conquistas",
        "producao-embed",
        "agent-na-pratica",
        "briefing-operacional-embed",
        "quartil-embed"
      ];
      const list = [];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        let titleEl = el.querySelector("h1, h2, .scene-title, .scene-title-lg, .det-title");
        let title = titleEl ? String(titleEl.textContent || "").trim() : id.replace(/[-_]/g, " ");
        list.push({ id, title });
      });
      return list;
    }

    function handleTabTrap(e, modal) {
      if (e.key !== "Tab") return;
      const focusable = Array.from(
        modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
      ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    function onKey(e) {
      if (!backdrop) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
      } else if (e.key === "Tab") {
        const modal = backdrop.querySelector(".summary-modal");
        if (modal) handleTabTrap(e, modal);
      }
    }

    function createModal() {
      backdrop = document.createElement("div");
      backdrop.className = "summary-backdrop";
      backdrop.setAttribute("data-summary-backdrop", "");

      const modal = document.createElement("div");
      modal.className = "summary-modal";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      const titleId = "summary-title";
      modal.setAttribute("aria-labelledby", titleId);

      const header = document.createElement("div");
      header.className = "summary-header";
      const h = document.createElement("h2");
      h.id = titleId;
      h.className = "summary-title";
      h.textContent = "Sumário das seções";
      const close = document.createElement("button");
      close.className = "summary-close";
      close.setAttribute("aria-label", "Fechar");
      close.innerHTML = "&times;";
      close.addEventListener("click", closeModal);
      header.append(h, close);

      const body = document.createElement("div");
      body.className = "summary-body";
      const ul = document.createElement("ul");
      ul.className = "summary-list";

      getSections().forEach((sec) => {
        const li = document.createElement("li");
        li.className = "summary-item";

        const btnItem = document.createElement("button");
        btnItem.textContent = sec.title;
        btnItem.addEventListener("click", () => {
          const target = document.getElementById(sec.id);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          closeModal();
        });

        li.append(btnItem);
        ul.appendChild(li);
      });

      body.appendChild(ul);
      modal.append(header, body);
      backdrop.appendChild(modal);

      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) closeModal();
      });
      document.addEventListener("keydown", onKey);

      document.body.appendChild(backdrop);
      requestAnimationFrame(() => backdrop.classList.add("is-open"));

      // Foco inicial
      const firstFocusable = modal.querySelector('button, [href], [tabindex]:not([tabindex="-1"])');
      (firstFocusable || close).focus();
    }

    function openModal() {
      if (backdrop) return;
      lastFocus = document.activeElement;
      btn.setAttribute("aria-expanded", "true");
      document.body.classList.add("is-summary-open");
      createModal();
    }

    function closeModal() {
      if (!backdrop) return;
      document.removeEventListener("keydown", onKey);
      const el = backdrop;
      backdrop = null;
      el.classList.remove("is-open");
      setTimeout(() => { try { el.remove(); } catch (e) { } }, 200);
      document.body.classList.remove("is-summary-open");
      btn.setAttribute("aria-expanded", "false");
      if (lastFocus && typeof lastFocus.focus === "function") {
        lastFocus.focus();
      }
    }

    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (backdrop) closeModal();
      else openModal();
    });
  }

  // Boot
  document.addEventListener("DOMContentLoaded", () => {
    initHeroCanvas();
    initCarousel();
    initPlayScroll();
    initSummaryModal();
    initScrollytelling();

    // Fallback: garante inicialização imediata das novas seções caso o IO não dispare no carregamento
    setTimeout(() => {
      const sp = document.getElementById("scene-principios");
      if (sp && !initialized.has("scene-principios")) {
        initialized.add("scene-principios");
        initPrincipios();
        sp.classList.add("in");
      }
      const ns = document.getElementById("scene-nossa-solucao");
      if (ns && !initialized.has("scene-nossa-solucao")) {
        initialized.add("scene-nossa-solucao");
        initSolutionModel();
        ns.classList.add("in");
      }
      const cx = document.getElementById("scene-contexto");
      if (cx && !initialized.has("scene-contexto")) {
        initialized.add("scene-contexto");
        setupScrollytelling();
        setupDashboard();
        cx.classList.add("in");
      }
      const pr = document.getElementById("producao-embed");
      if (pr && !initialized.has("producao-embed")) {
        initialized.add("producao-embed");
        setupProducaoScrollytelling();
        pr.classList.add("in");
      }
      const anp = document.getElementById("agent-na-pratica");
      if (anp && !initialized.has("agent-na-pratica")) {
        initialized.add("agent-na-pratica");
        anp.classList.add("in");
      }
    }, 120);
  });
})();