/**
 * NRB IT Guidelines ↔ ISO/IEC 27001:2022 Interactive Spider Web Engine
 */

(function () {
  'use strict';

  // --- State Management ---
  const state = {
    searchQuery: '',
    statusFilter: 'all', // 'all', 'full', 'partial', 'none'
    sectionFilter: 'all', // 'all', 1..10
    isoScope: 'mapped', // 'mapped', 'all'
    isoGroup: 'all', // 'all', 'Clauses', 'A.5', 'A.6', 'A.7', 'A.8'
    showAmbientWeb: true,
    lockedCardId: null,
    hoveredCardId: null,
    theme: localStorage.getItem('app-theme') || 'dark'
  };

  // --- DOM Elements ---
  const elements = {
    body: document.body,
    searchInput: document.getElementById('searchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    statusPills: document.querySelectorAll('.filter-pill'),
    sectionSelect: document.getElementById('sectionSelect'),
    isoScopeSelect: document.getElementById('isoScopeSelect'),
    isoGroupPills: document.querySelectorAll('.pill-mini'),
    toggleShowAllLines: document.getElementById('toggleShowAllLines'),
    btnResetFilters: document.getElementById('btnResetFilters'),
    btnThemeToggle: document.getElementById('btnThemeToggle'),
    btnExportCsv: document.getElementById('btnExportCsv'),
    btnCollapseAllSections: document.getElementById('btnCollapseAllSections'),
    
    // Panels & Lists
    nrbPanel: document.getElementById('nrbPanel'),
    nrbList: document.getElementById('nrbList'),
    isoPanel: document.getElementById('isoPanel'),
    isoList: document.getElementById('isoList'),
    webContainer: document.getElementById('webContainer'),
    spiderWebSvg: document.getElementById('spiderWebSvg'),
    spiderLinesLayer: document.getElementById('spiderLinesLayer'),

    // Counters
    visibleNrbCount: document.getElementById('visibleNrbCount'),
    visibleIsoCount: document.getElementById('visibleIsoCount'),
    visibleLinksCount: document.getElementById('visibleLinksCount'),
    nrbPanelCount: document.getElementById('nrbPanelCount'),
    isoPanelCount: document.getElementById('isoPanelCount'),
    countFull: document.getElementById('countFull'),
    countPartial: document.getElementById('countPartial'),
    countNone: document.getElementById('countNone'),

    // Focus & Notice Elements
    focusBanner: document.getElementById('focusBanner'),
    focusBannerText: document.getElementById('focusBannerText'),
    btnDeselectFocus: document.getElementById('btnDeselectFocus'),
    nrbUniqueNotice: document.getElementById('nrbUniqueNotice'),

    // Tooltip
    lineTooltip: document.getElementById('lineTooltip'),

    // Legend filter triggers
    legendFull: document.getElementById('legendFull'),
    legendPartial: document.getElementById('legendPartial'),
    legendNone: document.getElementById('legendNone')
  };

  // Pre-index data for rapid lookups
  const nrbMap = new Map();
  MAPPING_DATA.nrbItems.forEach(item => nrbMap.set(item.id, item));

  const isoMap = new Map();
  MAPPING_DATA.isoItems.forEach(item => isoMap.set(item.id, item));

  // Map links by source and target
  const linksBySource = new Map();
  const linksByTarget = new Map();

  MAPPING_DATA.links.forEach(link => {
    if (!linksBySource.has(link.source)) linksBySource.set(link.source, []);
    linksBySource.get(link.source).push(link);

    if (!linksByTarget.has(link.target)) linksByTarget.set(link.target, []);
    linksByTarget.get(link.target).push(link);
  });

  // Keep track of rendered path elements
  const pathElements = new Map(); // key: `${link.source}->${link.target}`
  let animationFrameId = null;
  let webAnimStartTime = null;

  // --- Smooth Animation Loop during Transitions ---
  function startWebAnimationLoop(duration = 380) {
    webAnimStartTime = performance.now();
    function step(now) {
      updateSpiderWeb();
      if (now - webAnimStartTime < duration) {
        requestAnimationFrame(step);
      } else {
        updateSpiderWeb(); // final anchor sync
      }
    }
    requestAnimationFrame(step);
  }

  // --- Initialization ---
  function init() {
    applyTheme(state.theme);
    populateSectionDropdown();
    renderNrbList();
    renderIsoList();
    bindEvents();
    
    setTimeout(() => {
      updateSpiderWeb();
      updateStatsStrip();
    }, 150);
  }

  // --- Theme Management ---
  function applyTheme(theme) {
    state.theme = theme;
    if (theme === 'light') {
      elements.body.classList.remove('dark-theme');
      elements.body.classList.add('light-theme');
    } else {
      elements.body.classList.remove('light-theme');
      elements.body.classList.add('dark-theme');
    }
    localStorage.setItem('app-theme', theme);
  }

  // --- Populate Section Select ---
  function populateSectionDropdown() {
    MAPPING_DATA.nrbSections.forEach(sec => {
      const opt = document.createElement('option');
      opt.value = sec.id;
      opt.textContent = `Section ${sec.id}: ${sec.name}`;
      elements.sectionSelect.appendChild(opt);
    });
  }

  // --- Render NRB List ---
  function renderNrbList() {
    elements.nrbList.innerHTML = '';

    MAPPING_DATA.nrbSections.forEach(sec => {
      const itemsInSec = MAPPING_DATA.nrbItems.filter(item => item.sectionId === sec.id);

      const secGroup = document.createElement('div');
      secGroup.className = 'section-group';
      secGroup.id = `nrb-sec-group-${sec.id}`;
      secGroup.dataset.sectionId = sec.id;

      // Section Header
      const header = document.createElement('div');
      header.className = 'section-header';
      header.innerHTML = `
        <div class="section-header-left">
          <span class="section-number-badge">SEC ${sec.id}</span>
          <span class="section-title">${sec.name}</span>
        </div>
        <div class="section-header-right">
          <span class="section-stats-pill">${itemsInSec.length} items</span>
          <span class="section-toggle-icon">▼</span>
        </div>
      `;

      header.addEventListener('click', () => {
        secGroup.classList.toggle('collapsed');
        requestSpiderWebUpdate();
      });

      // Section Items Container
      const itemsContainer = document.createElement('div');
      itemsContainer.className = 'section-items';

      itemsInSec.forEach(item => {
        const card = createNrbCard(item);
        itemsContainer.appendChild(card);
      });

      secGroup.appendChild(header);
      secGroup.appendChild(itemsContainer);
      elements.nrbList.appendChild(secGroup);
    });
  }

  // Create Individual NRB Clause Card
  function createNrbCard(item) {
    const card = document.createElement('div');
    card.className = `clause-card nrb-card status-${item.statusType}`;
    card.id = `card-${item.id}`;
    card.dataset.id = item.id;
    card.dataset.status = item.statusType;
    card.dataset.sectionId = item.sectionId;

    // Anchor port for spider web
    const port = document.createElement('div');
    port.className = `anchor-port port-${item.statusType}`;
    port.id = `port-${item.id}`;
    port.title = `Anchor: ${item.ref}`;
    card.appendChild(port);

    // Status badge class
    let badgeClass = 'badge-full';
    let dotClass = 'dot-full';
    if (item.statusType === 'partial') {
      badgeClass = 'badge-partial';
      dotClass = 'dot-partial';
    } else if (item.statusType === 'none') {
      badgeClass = 'badge-none';
      dotClass = 'dot-none';
    }

    const numConnected = item.connectedIso.length;
    let connSummary = '';
    if (item.statusType === 'none') {
      connSummary = `<span class="conn-chip" style="color: var(--color-none);">No ISO Equivalent</span>`;
    } else {
      connSummary = `<span class="conn-chip">${numConnected} ISO link${numConnected !== 1 ? 's' : ''}</span>`;
    }

    const notesIndicator = item.notes
      ? `<span class="has-notes-badge" title="Has audit note: ${escapeHtml(item.notes)}">📝 Note</span>`
      : '';

    card.innerHTML += `
      <div class="card-header">
        <span class="ref-badge">NRB ${item.ref}</span>
        <span class="status-badge ${badgeClass}">
          <span class="legend-dot ${dotClass}" style="width:6px;height:6px;"></span>
          ${item.statusLabel}
        </span>
      </div>
      <div class="card-title">${escapeHtml(item.requirement)}</div>
      <div class="card-meta">
        <div class="card-connections">${connSummary}</div>
        ${notesIndicator}
      </div>
    `;

    card.addEventListener('mouseenter', () => handleNrbHover(item.id));
    card.addEventListener('mouseleave', () => handleCardLeave(item.id));
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      handleCardClick(item.id, 'nrb');
    });

    return card;
  }
  // --- Render ISO 27001 List ---
  function renderIsoList() {
    elements.isoList.innerHTML = '';

    const themes = [];
    const themeMap = new Map();

    MAPPING_DATA.isoItems.forEach(item => {
      if (!themeMap.has(item.theme)) {
        themeMap.set(item.theme, []);
        themes.push(item.theme);
      }
      themeMap.get(item.theme).push(item);
    });

    themes.forEach((themeName, idx) => {
      const itemsInTheme = themeMap.get(themeName);

      const groupDiv = document.createElement('div');
      groupDiv.className = 'iso-theme-group';
      groupDiv.id = `iso-group-${idx}`;
      groupDiv.dataset.theme = themeName;

      const header = document.createElement('div');
      header.className = 'iso-theme-header';
      header.innerHTML = `
        <div class="iso-theme-title">${themeName}</div>
        <div style="display:flex;align-items:center;gap:6px;">
          <span class="section-stats-pill">${itemsInTheme.length} controls</span>
          <span class="section-toggle-icon">▼</span>
        </div>
      `;

      header.addEventListener('click', () => {
        groupDiv.classList.toggle('collapsed');
        requestSpiderWebUpdate();
      });

      const itemsContainer = document.createElement('div');
      itemsContainer.className = 'iso-items';

      itemsInTheme.forEach(item => {
        const card = createIsoCard(item);
        itemsContainer.appendChild(card);
      });

      groupDiv.appendChild(header);
      groupDiv.appendChild(itemsContainer);
      elements.isoList.appendChild(groupDiv);
    });
  }

  // Create Individual ISO Control Card
  function createIsoCard(item) {
    const card = document.createElement('div');
    const isUnmapped = !item.isMapped;
    card.className = `clause-card iso-card ${isUnmapped ? 'iso-unmapped' : ''}`;
    card.id = `card-${item.id}`;
    card.dataset.id = item.id;
    card.dataset.code = item.code;
    card.dataset.category = item.category;
    card.dataset.theme = item.theme;
    card.dataset.mapped = item.isMapped ? 'true' : 'false';

    const port = document.createElement('div');
    port.className = `anchor-port ${item.isMapped ? 'port-iso' : 'port-none'}`;
    port.id = `port-${item.id}`;
    port.title = `Anchor: ${item.code}`;
    card.appendChild(port);

    const conns = item.connectedNrb;
    let badgeHtml = '';
    if (!item.isMapped) {
      badgeHtml = `<span class="status-badge badge-iso-neutral">Outside NRB Scope</span>`;
    } else {
      const hasFull = conns.some(c => c.overlap === 'Full');
      if (hasFull) {
        badgeHtml = `<span class="status-badge badge-full">${conns.length} NRB linked</span>`;
      } else {
        badgeHtml = `<span class="status-badge badge-partial">${conns.length} NRB linked (Partial)</span>`;
      }
    }

    card.innerHTML += `
      <div class="card-header">
        <span class="ref-badge" style="background-color: var(--color-iso-bg); color: var(--color-iso);">${item.code}</span>
        ${badgeHtml}
      </div>
      <div class="card-title">${escapeHtml(item.title)}</div>
      <div class="card-meta">
        <span style="font-size:0.68rem; color:var(--text-muted);">${item.category}</span>
        <span class="card-connections">
          ${item.isMapped ? `<span class="conn-chip" style="color:var(--color-iso);">${conns.map(c => c.nrbRef).join(', ')}</span>` : ''}
        </span>
      </div>
    `;

    card.addEventListener('mouseenter', () => handleIsoHover(item.id));
    card.addEventListener('mouseleave', () => handleCardLeave(item.id));
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      handleCardClick(item.id, 'iso');
    });

    return card;
  }

  // --- Spider Web SVG Rendering ---
  function updateSpiderWeb() {
    const containerRect = elements.webContainer.getBoundingClientRect();
    if (containerRect.width === 0 || containerRect.height === 0) return;

    elements.spiderWebSvg.setAttribute('width', containerRect.width);
    elements.spiderWebSvg.setAttribute('height', containerRect.height);

    const visibleLinks = [];

    MAPPING_DATA.links.forEach(link => {
      const srcCard = document.getElementById(`card-${link.source}`);
      const tgtCard = document.getElementById(`card-${link.target}`);

      if (!srcCard || !tgtCard) return;
      if (srcCard.classList.contains('filtered-out') || tgtCard.classList.contains('filtered-out')) return;
      if (srcCard.classList.contains('is-unmapped-hidden') || tgtCard.classList.contains('is-unmapped-hidden')) return;
      if (srcCard.classList.contains('is-unmapped-faded') || tgtCard.classList.contains('is-unmapped-faded')) return;

      const srcPort = document.getElementById(`port-${link.source}`);
      const tgtPort = document.getElementById(`port-${link.target}`);
      if (!srcPort || !tgtPort) return;

      const srcSecGroup = srcCard.closest('.section-group');
      const tgtGroup = tgtCard.closest('.iso-theme-group');
      if (srcSecGroup && srcSecGroup.classList.contains('collapsed')) return;
      if (tgtGroup && tgtGroup.classList.contains('collapsed')) return;

      visibleLinks.push({
        link,
        srcPort,
        tgtPort
      });
    });

    const activeLinkKeys = new Set();

    visibleLinks.forEach(({ link, srcPort, tgtPort }) => {
      const key = `${link.source}->${link.target}`;
      activeLinkKeys.add(key);

      const srcRect = srcPort.getBoundingClientRect();
      const tgtRect = tgtPort.getBoundingClientRect();

      const x1 = 0;
      const y1 = srcRect.top - containerRect.top + srcRect.height / 2;
      const x2 = containerRect.width;
      const y2 = tgtRect.top - containerRect.top + tgtRect.height / 2;

      const dx = (x2 - x1) * 0.48;
      const pathData = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;

      let path = pathElements.get(key);
      if (!path) {
        path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.dataset.source = link.source;
        path.dataset.target = link.target;
        path.dataset.overlap = link.overlap;
        path.dataset.nrbRef = link.nrbRef;
        path.dataset.isoCode = link.isoCode;

        path.addEventListener('mouseenter', (e) => handlePathHover(e, link));
        path.addEventListener('mousemove', (e) => positionTooltip(e));
        path.addEventListener('mouseleave', () => handlePathLeave(link));

        elements.spiderLinesLayer.appendChild(path);
        pathElements.set(key, path);
      }

      path.setAttribute('d', pathData);
      path.setAttribute('class', `web-path path-${link.overlap.toLowerCase()}`);
      path.style.display = '';

      const isCardHovered = state.hoveredCardId === link.source || state.hoveredCardId === link.target;
      const isLocked = state.lockedCardId === link.source || state.lockedCardId === link.target;

      if (isCardHovered || isLocked) {
        path.classList.add('is-active');
      } else {
        path.classList.remove('is-active');
      }
    });

    pathElements.forEach((path, key) => {
      if (!activeLinkKeys.has(key)) {
        path.style.display = 'none';
        path.classList.remove('is-active');
      }
    });

    elements.visibleLinksCount.textContent = visibleLinks.length;
  }

  function requestSpiderWebUpdate() {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(updateSpiderWeb);
  }

  // --- Hover Handlers (Highlight only, no hide/collapse) ---
  function handleNrbHover(nrbId) {
    if (state.lockedCardId) return; // Keep clicked/locked state prioritized
    state.hoveredCardId = nrbId;
    elements.body.classList.add('has-active-hover');

    const card = document.getElementById(`card-${nrbId}`);
    if (card) card.classList.add('is-active-source');

    const connectedLinks = linksBySource.get(nrbId) || [];
    connectedLinks.forEach(link => {
      const tgtCard = document.getElementById(`card-${link.target}`);
      if (tgtCard) tgtCard.classList.add('is-active-target');

      const pathKey = `${link.source}->${link.target}`;
      const path = pathElements.get(pathKey);
      if (path) {
        path.classList.add('is-active');
        elements.spiderLinesLayer.appendChild(path);
      }
    });
  }

  function handleIsoHover(isoId) {
    if (state.lockedCardId) return;
    state.hoveredCardId = isoId;
    elements.body.classList.add('has-active-hover');

    const card = document.getElementById(`card-${isoId}`);
    if (card) card.classList.add('is-active-source');

    const connectedLinks = linksByTarget.get(isoId) || [];
    connectedLinks.forEach(link => {
      const srcCard = document.getElementById(`card-${link.source}`);
      if (srcCard) srcCard.classList.add('is-active-target');

      const pathKey = `${link.source}->${link.target}`;
      const path = pathElements.get(pathKey);
      if (path) {
        path.classList.add('is-active');
        elements.spiderLinesLayer.appendChild(path);
      }
    });
  }

  function handleCardLeave(id) {
    if (state.lockedCardId) return; // Keep clicked/locked state active
    state.hoveredCardId = null;
    elements.body.classList.remove('has-active-hover');

    document.querySelectorAll('.clause-card').forEach(c => {
      c.classList.remove('is-active-source', 'is-active-target');
    });

    pathElements.forEach(path => path.classList.remove('is-active'));
  }

  function handlePathHover(e, link) {
    if (state.lockedCardId) return;
    state.hoveredCardId = link.source;
    elements.body.classList.add('has-active-hover');

    const path = e.target;
    path.classList.add('is-active');
    elements.spiderLinesLayer.appendChild(path);

    const srcCard = document.getElementById(`card-${link.source}`);
    const tgtCard = document.getElementById(`card-${link.target}`);
    if (srcCard) srcCard.classList.add('is-active-source');
    if (tgtCard) tgtCard.classList.add('is-active-target');

    elements.lineTooltip.innerHTML = `<strong>NRB ${link.nrbRef}</strong> ↔ <strong>ISO ${link.isoCode}</strong> (${link.overlap})`;
    elements.lineTooltip.style.display = 'block';
    positionTooltip(e);
  }

  function positionTooltip(e) {
    elements.lineTooltip.style.left = `${e.clientX}px`;
    elements.lineTooltip.style.top = `${e.clientY - 15}px`;
  }

  function handlePathLeave(link) {
    elements.lineTooltip.style.display = 'none';
    if (!state.lockedCardId) {
      handleCardLeave(link.source);
    }
  }

  // --- Click Handler: The Swift Happens on Click! ---
  function handleCardClick(id, type) {
    if (state.lockedCardId === id) {
      unlockSelection();
      return;
    }

    lockSelection(id, type);
  }

  function lockSelection(id, type) {
    unlockSelection(false);
    state.lockedCardId = id;
    elements.body.classList.add('has-active-hover');

    let mappedTargets = new Set();
    let mappedSources = new Set();

    if (type === 'nrb') {
      const links = linksBySource.get(id) || [];
      links.forEach(l => mappedTargets.add(l.target));

      // SELECTED SIDE (Left / NRB): REMAINS COMPLETELY UNCHANGED!
      // Only clicked card gets highlighted; all other NRB cards stay in place
      document.querySelectorAll('.nrb-card').forEach(card => {
        if (card.dataset.id === id) {
          card.classList.add('is-locked', 'is-active-source');
          card.classList.remove('is-unmapped-hidden', 'is-unmapped-faded');
        } else {
          card.classList.remove('is-locked', 'is-active-source', 'is-active-target', 'is-unmapped-hidden', 'is-unmapped-faded');
        }
      });

      document.querySelectorAll('.section-group').forEach(secGroup => {
        secGroup.classList.remove('is-unmapped-hidden');
      });

      // OPPOSITE SIDE (Right / ISO): ANIMATES - only mapped ISO cards stay visible!
      if (mappedTargets.size === 0) {
        if (elements.nrbUniqueNotice) elements.nrbUniqueNotice.style.display = 'flex';
        document.querySelectorAll('.iso-card').forEach(card => card.classList.add('is-unmapped-hidden'));
        document.querySelectorAll('.iso-theme-group').forEach(g => g.classList.add('is-unmapped-hidden'));
      } else {
        if (elements.nrbUniqueNotice) elements.nrbUniqueNotice.style.display = 'none';
        document.querySelectorAll('.iso-card').forEach(card => {
          if (mappedTargets.has(card.dataset.id)) {
            card.classList.add('is-active-target');
            card.classList.remove('is-unmapped-hidden', 'is-unmapped-faded');
          } else {
            card.classList.remove('is-active-target', 'is-active-source');
            card.classList.add('is-unmapped-hidden');
          }
        });

        // Collapse empty ISO theme groups
        document.querySelectorAll('.iso-theme-group').forEach(group => {
          const hasVis = group.querySelector('.iso-card:not(.is-unmapped-hidden)');
          group.classList.toggle('is-unmapped-hidden', !hasVis);
        });
      }

      // Smoothly scroll opposite panel to top so all mapped controls are visible at once
      elements.isoList.scrollTo({ top: 0, behavior: 'smooth' });

      const nrbItem = nrbMap.get(id);

      if (elements.focusBanner) {
        elements.focusBanner.style.display = 'flex';
        elements.focusBannerText.textContent = `Selected: NRB ${nrbItem ? nrbItem.ref : id} — ${mappedTargets.size} ISO control${mappedTargets.size !== 1 ? 's' : ''} mapped`;
      }
    } else {
      // TYPE === 'ISO' (Clicked on Right side)
      const links = linksByTarget.get(id) || [];
      links.forEach(l => mappedSources.add(l.source));

      // SELECTED SIDE (Right / ISO): REMAINS COMPLETELY UNCHANGED!
      // Only clicked ISO card gets highlighted; all other ISO cards stay in place
      document.querySelectorAll('.iso-card').forEach(card => {
        if (card.dataset.id === id) {
          card.classList.add('is-locked', 'is-active-source');
          card.classList.remove('is-unmapped-hidden', 'is-unmapped-faded');
        } else {
          card.classList.remove('is-locked', 'is-active-source', 'is-active-target', 'is-unmapped-hidden', 'is-unmapped-faded');
        }
      });

      document.querySelectorAll('.iso-theme-group').forEach(group => {
        group.classList.remove('is-unmapped-hidden');
      });

      // OPPOSITE SIDE (Left / NRB): ANIMATES - only mapped NRB cards stay visible!
      document.querySelectorAll('.nrb-card').forEach(card => {
        if (mappedSources.has(card.dataset.id)) {
          card.classList.add('is-active-target');
          card.classList.remove('is-unmapped-hidden', 'is-unmapped-faded');
        } else {
          card.classList.remove('is-active-target', 'is-active-source');
          card.classList.add('is-unmapped-hidden');
        }
      });

      // Collapse empty NRB sections
      document.querySelectorAll('.section-group').forEach(secGroup => {
        const hasVis = secGroup.querySelector('.nrb-card:not(.is-unmapped-hidden)');
        secGroup.classList.toggle('is-unmapped-hidden', !hasVis);
      });

      // Smoothly scroll opposite panel to top
      elements.nrbList.scrollTo({ top: 0, behavior: 'smooth' });

      const isoItem = isoMap.get(id);

      if (elements.focusBanner) {
        elements.focusBanner.style.display = 'flex';
        elements.focusBannerText.textContent = `Selected: ISO ${isoItem ? isoItem.code : id} — ${mappedSources.size} NRB requirement${mappedSources.size !== 1 ? 's' : ''} mapped`;
      }
    }

    startWebAnimationLoop(400);
  }

  function unlockSelection() {
    state.lockedCardId = null;
    elements.body.classList.remove('has-active-hover');

    // Restore all items smoothly
    document.querySelectorAll('.clause-card').forEach(c => {
      c.classList.remove('is-locked', 'is-active-source', 'is-active-target', 'is-unmapped-hidden', 'is-unmapped-faded');
    });

    document.querySelectorAll('.section-group, .iso-theme-group').forEach(g => {
      g.classList.remove('is-unmapped-hidden');
    });

    if (elements.nrbUniqueNotice) elements.nrbUniqueNotice.style.display = 'none';
    if (elements.focusBanner) elements.focusBanner.style.display = 'none';

    pathElements.forEach(path => path.classList.remove('is-active'));

    startWebAnimationLoop(400);
  }

  // --- Filtering & Search Logic ---
  function applyFilters() {
    const q = state.searchQuery.toLowerCase().trim();
    let visibleNrb = 0;
    let visibleIso = 0;

    MAPPING_DATA.nrbItems.forEach(item => {
      const card = document.getElementById(`card-${item.id}`);
      if (!card) return;

      let match = true;

      if (state.statusFilter !== 'all') {
        if (state.statusFilter === 'full' && item.statusType !== 'full' && item.statusType !== 'mixed') match = false;
        if (state.statusFilter === 'partial' && item.statusType !== 'partial') match = false;
        if (state.statusFilter === 'none' && item.statusType !== 'none') match = false;
      }

      if (state.sectionFilter !== 'all') {
        if (item.sectionId !== parseInt(state.sectionFilter, 10)) match = false;
      }

      if (match && q) {
        const text = `${item.ref} ${item.requirement} ${item.notes} ${item.sectionName} ${item.connectedIso.map(c => c.isoCode).join(' ')}`.toLowerCase();
        if (!text.includes(q)) match = false;
      }

      if (match) {
        card.classList.remove('filtered-out');
        card.style.display = '';
        visibleNrb++;
      } else {
        card.classList.add('filtered-out');
        card.style.display = 'none';
      }
    });

    MAPPING_DATA.nrbSections.forEach(sec => {
      const secGroup = document.getElementById(`nrb-sec-group-${sec.id}`);
      if (!secGroup) return;
      const visibleChildren = secGroup.querySelectorAll('.nrb-card:not(.filtered-out)');
      secGroup.style.display = visibleChildren.length > 0 ? '' : 'none';
    });

    MAPPING_DATA.isoItems.forEach(item => {
      const card = document.getElementById(`card-${item.id}`);
      if (!card) return;

      let match = true;

      if (state.isoScope === 'mapped' && !item.isMapped) {
        match = false;
      }

      if (state.isoGroup !== 'all') {
        if (state.isoGroup === 'Clauses' && item.category !== 'Clauses') match = false;
        if (state.isoGroup.startsWith('A.') && !item.code.startsWith(state.isoGroup)) match = false;
      }

      if (state.statusFilter !== 'all' && item.isMapped) {
        const hasMatchingNrb = item.connectedNrb.some(conn => {
          const nrb = nrbMap.get(conn.nrbId);
          if (!nrb) return false;
          if (state.statusFilter === 'full') return nrb.statusType === 'full' || nrb.statusType === 'mixed';
          if (state.statusFilter === 'partial') return nrb.statusType === 'partial';
          if (state.statusFilter === 'none') return nrb.statusType === 'none';
          return true;
        });
        if (!hasMatchingNrb) match = false;
      }

      if (match && q) {
        const text = `${item.code} ${item.title} ${item.theme} ${item.connectedNrb.map(c => c.nrbRef).join(' ')}`.toLowerCase();
        if (!text.includes(q)) match = false;
      }

      if (match) {
        card.classList.remove('filtered-out');
        card.style.display = '';
        visibleIso++;
      } else {
        card.classList.add('filtered-out');
        card.style.display = 'none';
      }
    });

    document.querySelectorAll('.iso-theme-group').forEach(group => {
      const visibleChildren = group.querySelectorAll('.iso-card:not(.filtered-out)');
      group.style.display = visibleChildren.length > 0 ? '' : 'none';
    });

    elements.visibleNrbCount.textContent = visibleNrb;
    elements.visibleIsoCount.textContent = visibleIso;
    elements.nrbPanelCount.textContent = `${visibleNrb} Clauses`;
    elements.isoPanelCount.textContent = `${visibleIso} Controls`;

    requestSpiderWebUpdate();
  }

  function updateStatsStrip() {
    elements.countFull.textContent = MAPPING_DATA.stats.fullNrb;
    elements.countPartial.textContent = MAPPING_DATA.stats.partialNrb;
    elements.countNone.textContent = MAPPING_DATA.stats.noneNrb;
  }

  function resetFilters() {
    state.searchQuery = '';
    state.statusFilter = 'all';
    state.sectionFilter = 'all';
    state.isoScope = 'mapped';
    state.isoGroup = 'all';

    elements.searchInput.value = '';
    elements.searchClearBtn.classList.remove('visible');
    elements.sectionSelect.value = 'all';
    elements.isoScopeSelect.value = 'mapped';

    elements.statusPills.forEach(p => p.classList.remove('active'));
    document.querySelector('.filter-pill[data-status="all"]').classList.add('active');

    elements.isoGroupPills.forEach(p => p.classList.remove('active'));
    document.querySelector('.pill-mini[data-isogroup="all"]').classList.add('active');

    document.querySelectorAll('.section-group, .iso-theme-group').forEach(g => g.classList.remove('collapsed'));

    unlockSelection();
    applyFilters();
  }

  // --- Export to CSV ---
  function exportToCsv() {
    const headers = ['NRB Ref', 'NRB Section', 'NRB Requirement Summary', 'Overlap Status', 'Mapped ISO 27001 Controls', 'Audit & Gap Notes'];
    const rows = [headers];

    MAPPING_DATA.nrbItems.forEach(item => {
      const mappedIsoStr = item.connectedIso.map(c => `${c.isoCode} (${c.overlap})`).join('; ') || '—';
      rows.push([
        `"${item.ref}"`,
        `"${item.sectionName}"`,
        `"${item.requirement.replace(/"/g, '""')}"`,
        `"${item.overlap}"`,
        `"${mappedIsoStr}"`,
        `"${(item.notes || '').replace(/"/g, '""')}"`
      ]);
    });

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + rows.map(r => r.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'NRB_IT_Guidelines_ISO_27001_Mapping.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // --- Bind All Events ---
  function bindEvents() {
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      elements.searchClearBtn.classList.toggle('visible', !!state.searchQuery);
      applyFilters();
    });

    elements.searchClearBtn.addEventListener('click', () => {
      elements.searchInput.value = '';
      state.searchQuery = '';
      elements.searchClearBtn.classList.remove('visible');
      applyFilters();
    });

    elements.statusPills.forEach(pill => {
      pill.addEventListener('click', () => {
        elements.statusPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.statusFilter = pill.dataset.status;
        applyFilters();
      });
    });

    elements.legendFull.addEventListener('click', () => selectStatusFilter('full'));
    elements.legendPartial.addEventListener('click', () => selectStatusFilter('partial'));
    elements.legendNone.addEventListener('click', () => selectStatusFilter('none'));

    function selectStatusFilter(status) {
      elements.statusPills.forEach(p => {
        p.classList.toggle('active', p.dataset.status === status);
      });
      state.statusFilter = status;
      applyFilters();
    }

    elements.sectionSelect.addEventListener('change', (e) => {
      state.sectionFilter = e.target.value;
      applyFilters();
    });

    elements.isoScopeSelect.addEventListener('change', (e) => {
      state.isoScope = e.target.value;
      applyFilters();
    });

    elements.isoGroupPills.forEach(pill => {
      pill.addEventListener('click', () => {
        elements.isoGroupPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.isoGroup = pill.dataset.isogroup;
        applyFilters();
      });
    });

    elements.toggleShowAllLines.addEventListener('change', (e) => {
      state.showAmbientWeb = e.target.checked;
      elements.body.classList.toggle('hide-ambient-web', !state.showAmbientWeb);
    });

    elements.btnResetFilters.addEventListener('click', resetFilters);

    elements.btnThemeToggle.addEventListener('click', () => {
      const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });

    elements.btnExportCsv.addEventListener('click', exportToCsv);

    let allCollapsed = false;
    elements.btnCollapseAllSections.addEventListener('click', () => {
      allCollapsed = !allCollapsed;
      document.querySelectorAll('.section-group').forEach(g => {
        g.classList.toggle('collapsed', allCollapsed);
      });
      startWebAnimationLoop(350);
    });

    if (elements.btnDeselectFocus) {
      elements.btnDeselectFocus.addEventListener('click', unlockSelection);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') unlockSelection();
    });

    elements.nrbList.addEventListener('scroll', requestSpiderWebUpdate, { passive: true });
    elements.isoList.addEventListener('scroll', requestSpiderWebUpdate, { passive: true });
    window.addEventListener('resize', requestSpiderWebUpdate, { passive: true });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
