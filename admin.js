/**
 * NRB IT Guidelines ↔ ISO/IEC 27001:2022 Data & Mapping Admin Panel Engine
 */

(function () {
  'use strict';

  // --- Theme Management ---
  const savedTheme = localStorage.getItem('app-theme') || 'dark';
  document.body.classList.toggle('light-theme', savedTheme === 'light');
  document.body.classList.toggle('dark-theme', savedTheme !== 'light');

  const btnThemeToggle = document.getElementById('btnThemeToggle');
  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', () => {
      const isLight = document.body.classList.contains('light-theme');
      const nextTheme = isLight ? 'dark' : 'light';
      document.body.classList.toggle('light-theme', nextTheme === 'light');
      document.body.classList.toggle('dark-theme', nextTheme === 'dark');
      localStorage.setItem('app-theme', nextTheme);
    });
  }

  // --- Active Data Initialization ---
  const STORAGE_KEY = 'NRB_ISO_CUSTOM_MAPPING_DATA';

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function loadInitialData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && Array.isArray(parsed.nrbItems) && Array.isArray(parsed.isoItems) && Array.isArray(parsed.links)) {
          return { data: parsed, isCustom: true };
        }
      }
    } catch (e) {
      console.warn('Error reading from localStorage:', e);
    }
    const baseline = window.MAPPING_DATA || (typeof MAPPING_DATA !== 'undefined' ? MAPPING_DATA : null);
    return { data: clone(baseline), isCustom: false };
  }

  const initial = loadInitialData();
  let activeData = initial.data;
  let isCustomActive = initial.isCustom;

  // --- Recompute Data Integrity & Interconnections ---
  function recomputeDataIntegrity() {
    // 1. Build lookup maps
    const nrbMap = new Map();
    activeData.nrbItems.forEach(item => nrbMap.set(item.id, item));

    const isoMap = new Map();
    activeData.isoItems.forEach(item => isoMap.set(item.id, item));

    // 2. Index links by source and target
    const linksBySource = new Map();
    const linksByTarget = new Map();

    activeData.links.forEach(l => {
      if (!linksBySource.has(l.source)) linksBySource.set(l.source, []);
      linksBySource.get(l.source).push(l);

      if (!linksByTarget.has(l.target)) linksByTarget.set(l.target, []);
      linksByTarget.get(l.target).push(l);
    });

    // 3. Rebuild NRB items connections & statuses
    activeData.nrbItems.forEach(nrb => {
      const links = linksBySource.get(nrb.id) || [];
      nrb.connectedIso = links.map(l => {
        const iso = isoMap.get(l.target);
        return {
          isoId: l.target,
          isoCode: iso ? iso.code : l.target,
          overlap: l.overlap || 'Full Overlap',
          tier: l.tier || 'Primary',
          rationale: l.rationale || ''
        };
      });

      nrb.primaryCount = links.filter(l => (l.tier || 'Primary') === 'Primary').length;
      nrb.secondaryCount = links.filter(l => l.tier === 'Secondary').length;
      nrb.totalCount = links.length;

      if (links.length === 0) {
        nrb.statusType = 'none';
        nrb.statusLabel = 'NRB Unique / No ISO';
      } else {
        const allFull = links.every(l => l.overlap === 'Full Overlap' || l.overlap === 'Full');
        const allPartial = links.every(l => l.overlap === 'Partial Overlap' || l.overlap === 'Partial');
        if (allFull) {
          nrb.statusType = 'full';
          nrb.statusLabel = 'Full Overlap';
        } else if (allPartial) {
          nrb.statusType = 'partial';
          nrb.statusLabel = 'Partial Overlap';
        } else {
          nrb.statusType = 'full';
          nrb.statusLabel = 'Full Overlap';
        }
      }
    });

    // 4. Rebuild ISO items connections & statuses
    activeData.isoItems.forEach(iso => {
      const links = linksByTarget.get(iso.id) || [];
      iso.connectedNrb = links.map(l => {
        const nrb = nrbMap.get(l.source);
        return {
          nrbId: l.source,
          nrbRef: nrb ? nrb.ref : l.source,
          overlap: l.overlap || 'Full Overlap',
          tier: l.tier || 'Primary',
          rationale: l.rationale || ''
        };
      });

      iso.primaryCount = links.filter(l => (l.tier || 'Primary') === 'Primary').length;
      iso.secondaryCount = links.filter(l => l.tier === 'Secondary').length;
      iso.totalCount = links.length;
      iso.isMapped = links.length > 0;

      if (!iso.isMapped) {
        iso.status = 'unmapped';
        iso.badge = 'Not Mapped';
      } else {
        const hasFull = links.some(l => l.overlap === 'Full Overlap' || l.overlap === 'Full');
        iso.status = hasFull ? 'full' : 'partial';
        iso.badge = hasFull ? 'Full Overlap' : 'Partial Overlap';
      }
    });

    // 5. Recompute global stats
    activeData.stats = {
      totalNrb: activeData.nrbItems.length,
      fullNrb: activeData.nrbItems.filter(i => i.statusType === 'full' || i.statusType === 'mixed').length,
      partialNrb: activeData.nrbItems.filter(i => i.statusType === 'partial').length,
      noneNrb: activeData.nrbItems.filter(i => i.statusType === 'none').length,
      totalIsoControls: activeData.isoItems.length,
      mappedIsoControls: activeData.isoItems.filter(i => i.isMapped).length,
      totalLinks: activeData.links.length
    };
  }

  // Initial computation
  recomputeDataIntegrity();

  // --- UI Elements ---
  const el = {
    // KPI Ribbon
    kpiNrbCount: document.getElementById('kpiNrbCount'),
    kpiIsoCount: document.getElementById('kpiIsoCount'),
    kpiMappedIsoCount: document.getElementById('kpiMappedIsoCount'),
    kpiLinkCount: document.getElementById('kpiLinkCount'),
    kpiFullCount: document.getElementById('kpiFullCount'),
    kpiPartialCount: document.getElementById('kpiPartialCount'),
    kpiNoneCount: document.getElementById('kpiNoneCount'),
    storageStatusBadge: document.getElementById('storageStatusBadge'),
    btnResetDefaults: document.getElementById('btnResetDefaults'),
    btnResetToDefaultsCard: document.getElementById('btnResetToDefaultsCard'),

    // Top action buttons
    btnSaveAll: document.getElementById('btnSaveAll'),
    btnDownloadDataJs: document.getElementById('btnDownloadDataJs'),
    btnExportDataJsBig: document.getElementById('btnExportDataJsBig'),
    btnExportJson: document.getElementById('btnExportJson'),
    fileInputJson: document.getElementById('fileInputJson'),

    // Tabs
    tabBtns: document.querySelectorAll('.admin-tab-btn'),
    tabPanes: document.querySelectorAll('.admin-tab-pane'),
    tabBadgeLinks: document.getElementById('tabBadgeLinks'),
    tabBadgeNrb: document.getElementById('tabBadgeNrb'),
    tabBadgeIso: document.getElementById('tabBadgeIso'),

    // Links Tab
    searchLinks: document.getElementById('searchLinks'),
    filterLinkOverlap: document.getElementById('filterLinkOverlap'),
    filterLinkSection: document.getElementById('filterLinkSection'),
    btnOpenAddLink: document.getElementById('btnOpenAddLink'),
    tbodyLinks: document.getElementById('tbodyLinks'),
    linksTableCount: document.getElementById('linksTableCount'),

    // NRB Tab
    searchNrb: document.getElementById('searchNrb'),
    filterNrbSection: document.getElementById('filterNrbSection'),
    filterNrbStatus: document.getElementById('filterNrbStatus'),
    btnOpenAddNrb: document.getElementById('btnOpenAddNrb'),
    tbodyNrb: document.getElementById('tbodyNrb'),
    nrbTableCount: document.getElementById('nrbTableCount'),

    // ISO Tab
    searchIso: document.getElementById('searchIso'),
    filterIsoTheme: document.getElementById('filterIsoTheme'),
    filterIsoScope: document.getElementById('filterIsoScope'),
    btnOpenAddIso: document.getElementById('btnOpenAddIso'),
    tbodyIso: document.getElementById('tbodyIso'),
    isoTableCount: document.getElementById('isoTableCount'),

    // Backup & Raw Data Tab
    rawJsonTextarea: document.getElementById('rawJsonTextarea'),
    btnFormatRawJson: document.getElementById('btnFormatRawJson'),
    btnApplyRawJson: document.getElementById('btnApplyRawJson'),

    // Modals
    modalLinkOverlay: document.getElementById('modalLinkOverlay'),
    modalLinkTitle: document.getElementById('modalLinkTitle'),
    formLink: document.getElementById('formLink'),
    linkOriginalSource: document.getElementById('linkOriginalSource'),
    linkOriginalTarget: document.getElementById('linkOriginalTarget'),
    linkSourceSelect: document.getElementById('linkSourceSelect'),
    linkTargetSelect: document.getElementById('linkTargetSelect'),
    linkOverlapSelect: document.getElementById('linkOverlapSelect'),
    linkTierSelect: document.getElementById('linkTierSelect'),
    linkRationaleInput: document.getElementById('linkRationaleInput'),
    btnCloseLinkModal: document.getElementById('btnCloseLinkModal'),
    btnCancelLinkModal: document.getElementById('btnCancelLinkModal'),

    modalNrbOverlay: document.getElementById('modalNrbOverlay'),
    modalNrbTitle: document.getElementById('modalNrbTitle'),
    formNrb: document.getElementById('formNrb'),
    nrbOriginalId: document.getElementById('nrbOriginalId'),
    nrbRefInput: document.getElementById('nrbRefInput'),
    nrbSectionSelect: document.getElementById('nrbSectionSelect'),
    nrbRequirementInput: document.getElementById('nrbRequirementInput'),
    nrbNotesInput: document.getElementById('nrbNotesInput'),
    nrbModalMappedCount: document.getElementById('nrbModalMappedCount'),
    nrbModalMappedChips: document.getElementById('nrbModalMappedChips'),
    btnAddLinkFromNrbModal: document.getElementById('btnAddLinkFromNrbModal'),
    btnCloseNrbModal: document.getElementById('btnCloseNrbModal'),
    btnCancelNrbModal: document.getElementById('btnCancelNrbModal'),

    modalIsoOverlay: document.getElementById('modalIsoOverlay'),
    modalIsoTitle: document.getElementById('modalIsoTitle'),
    formIso: document.getElementById('formIso'),
    isoOriginalId: document.getElementById('isoOriginalId'),
    isoCodeInput: document.getElementById('isoCodeInput'),
    isoThemeSelect: document.getElementById('isoThemeSelect'),
    isoTitleInput: document.getElementById('isoTitleInput'),
    isoModalMappedCount: document.getElementById('isoModalMappedCount'),
    isoModalMappedChips: document.getElementById('isoModalMappedChips'),
    btnAddLinkFromIsoModal: document.getElementById('btnAddLinkFromIsoModal'),
    btnCloseIsoModal: document.getElementById('btnCloseIsoModal'),
    btnCancelIsoModal: document.getElementById('btnCancelIsoModal'),

    adminToast: document.getElementById('adminToast')
  };

  // --- Toast Notification Helper ---
  let toastTimer = null;
  function showToast(message, isError = false) {
    if (!el.adminToast) return;
    el.adminToast.textContent = message;
    el.adminToast.style.backgroundColor = isError ? '#ef4444' : '#10b981';
    el.adminToast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.adminToast.classList.remove('show');
    }, 2800);
  }

  // --- Persistence Handlers ---
  function saveChanges(quiet = false) {
    recomputeDataIntegrity();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(activeData));
      isCustomActive = true;
      updateKpiRibbon();
      if (!quiet) showToast('All changes saved to browser storage!');
    } catch (e) {
      console.error('Error saving to localStorage:', e);
      showToast('Error saving data: ' + e.message, true);
    }
  }

  function resetToDefaults() {
    if (confirm('Are you sure you want to revert all custom edits and restore the baseline data.js? This cannot be undone.')) {
      localStorage.removeItem(STORAGE_KEY);
      const baseline = window.MAPPING_DATA || (typeof MAPPING_DATA !== 'undefined' ? MAPPING_DATA : null);
      activeData = clone(baseline);
      isCustomActive = false;
      recomputeDataIntegrity();
      renderAll();
      showToast('Restored baseline data.js defaults.');
    }
  }

  // --- KPI Ribbon Update ---
  function updateKpiRibbon() {
    const s = activeData.stats;
    if (el.kpiNrbCount) el.kpiNrbCount.textContent = s.totalNrb;
    if (el.kpiIsoCount) el.kpiIsoCount.textContent = s.totalIsoControls;
    if (el.kpiMappedIsoCount) el.kpiMappedIsoCount.textContent = s.mappedIsoControls;
    if (el.kpiLinkCount) el.kpiLinkCount.textContent = s.totalLinks;
    if (el.kpiFullCount) el.kpiFullCount.textContent = s.fullNrb;
    if (el.kpiPartialCount) el.kpiPartialCount.textContent = s.partialNrb;
    if (el.kpiNoneCount) el.kpiNoneCount.textContent = s.noneNrb;

    if (el.tabBadgeLinks) el.tabBadgeLinks.textContent = s.totalLinks;
    if (el.tabBadgeNrb) el.tabBadgeNrb.textContent = s.totalNrb;
    if (el.tabBadgeIso) el.tabBadgeIso.textContent = s.totalIsoControls;

    if (el.storageStatusBadge) {
      if (isCustomActive) {
        el.storageStatusBadge.textContent = '✏️ Custom Edits Active';
        el.storageStatusBadge.className = 'storage-badge storage-custom';
      } else {
        el.storageStatusBadge.textContent = '📄 Using Baseline data.js';
        el.storageStatusBadge.className = 'storage-badge storage-baseline';
      }
    }
  }

  // --- Populate Dropdowns Helper ---
  function populateFilterDropdowns() {
    // Populate Section Dropdowns
    const sections = activeData.nrbSections || [];
    
    // Link Filter Section
    if (el.filterLinkSection) {
      el.filterLinkSection.innerHTML = '<option value="all">All 10 Sections</option>';
      sections.forEach(sec => {
        const opt = document.createElement('option');
        opt.value = sec.id;
        opt.textContent = `Section ${sec.id}: ${sec.name}`;
        el.filterLinkSection.appendChild(opt);
      });
    }

    // NRB Filter Section
    if (el.filterNrbSection) {
      el.filterNrbSection.innerHTML = '<option value="all">All 10 Sections</option>';
      sections.forEach(sec => {
        const opt = document.createElement('option');
        opt.value = sec.id;
        opt.textContent = `Section ${sec.id}: ${sec.name}`;
        el.filterNrbSection.appendChild(opt);
      });
    }

    // NRB Modal Section
    if (el.nrbSectionSelect) {
      el.nrbSectionSelect.innerHTML = '';
      sections.forEach(sec => {
        const opt = document.createElement('option');
        opt.value = sec.id;
        opt.textContent = `Section ${sec.id}: ${sec.name}`;
        el.nrbSectionSelect.appendChild(opt);
      });
    }

    // ISO Modal Theme
    const themes = [];
    const themeSet = new Set();
    activeData.isoItems.forEach(i => {
      if (i.theme && !themeSet.has(i.theme)) {
        themeSet.add(i.theme);
        themes.push({ theme: i.theme, category: i.category });
      }
    });

    if (el.isoThemeSelect) {
      el.isoThemeSelect.innerHTML = '';
      themes.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t.theme;
        opt.textContent = t.theme;
        opt.dataset.category = t.category;
        el.isoThemeSelect.appendChild(opt);
      });
    }
  }

  // Populate Link Modal Dropdowns
  function populateLinkModalDropdowns() {
    if (el.linkSourceSelect) {
      el.linkSourceSelect.innerHTML = '<option value="">-- Select NRB Requirement --</option>';
      activeData.nrbItems.forEach(nrb => {
        const opt = document.createElement('option');
        opt.value = nrb.id;
        const textPreview = nrb.requirement.length > 55 ? nrb.requirement.substring(0, 55) + '...' : nrb.requirement;
        opt.textContent = `NRB ${nrb.ref}: ${textPreview}`;
        el.linkSourceSelect.appendChild(opt);
      });
    }

    if (el.linkTargetSelect) {
      el.linkTargetSelect.innerHTML = '<option value="">-- Select ISO Control --</option>';
      activeData.isoItems.forEach(iso => {
        const opt = document.createElement('option');
        opt.value = iso.id;
        const textPreview = iso.title.length > 55 ? iso.title.substring(0, 55) + '...' : iso.title;
        opt.textContent = `${iso.code}: ${textPreview}`;
        el.linkTargetSelect.appendChild(opt);
      });
    }
  }

  // --- Render Links Table ---
  function renderLinksTable() {
    if (!el.tbodyLinks) return;
    el.tbodyLinks.innerHTML = '';

    const q = (el.searchLinks ? el.searchLinks.value : '').toLowerCase().trim();
    const overlapFilter = el.filterLinkOverlap ? el.filterLinkOverlap.value : 'all';
    const secFilter = el.filterLinkSection ? el.filterLinkSection.value : 'all';

    const nrbMap = new Map();
    activeData.nrbItems.forEach(i => nrbMap.set(i.id, i));

    const isoMap = new Map();
    activeData.isoItems.forEach(i => isoMap.set(i.id, i));

    let visibleCount = 0;

    activeData.links.forEach((link, idx) => {
      const nrb = nrbMap.get(link.source) || { ref: link.source, requirement: 'Unknown Requirement', sectionId: 0 };
      const iso = isoMap.get(link.target) || { code: link.target, title: 'Unknown Control' };

      // Filter checks
      if (overlapFilter !== 'all' && link.overlap !== overlapFilter) return;
      if (secFilter !== 'all' && String(nrb.sectionId) !== secFilter) return;

      if (q) {
        const haystack = `${nrb.ref} ${nrb.requirement} ${iso.code} ${iso.title} ${link.overlap} ${link.tier || ''} ${link.rationale || ''}`.toLowerCase();
        if (!haystack.includes(q)) return;
      }

      visibleCount++;

      const tr = document.createElement('tr');
      const isFull = link.overlap === 'Full Overlap' || link.overlap === 'Full';
      const isSecondary = link.tier === 'Secondary';

      tr.innerHTML = `
        <td>
          <div class="table-item-cell">
            <span class="ref-badge">NRB ${nrb.ref}</span>
            <div class="table-text-muted text-truncate" title="${escapeHtml(nrb.requirement)}">${escapeHtml(nrb.requirement)}</div>
          </div>
        </td>
        <td style="text-align: center; color: var(--text-muted); font-size: 0.85rem;">⟷</td>
        <td>
          <div class="table-item-cell">
            <span class="ref-badge" style="background: var(--color-iso-bg); color: var(--color-iso);">${iso.code}</span>
            <div class="table-text-muted text-truncate" title="${escapeHtml(iso.title)}">${escapeHtml(iso.title)}</div>
          </div>
        </td>
        <td>
          <span class="status-badge ${isFull ? 'badge-full' : 'badge-partial'}">
            <span class="legend-dot ${isFull ? 'dot-full' : 'dot-partial'}" style="width:5px;height:5px;"></span>
            ${link.overlap}
          </span>
        </td>
        <td>
          <span class="tier-tag ${isSecondary ? 'tier-tag-secondary' : 'tier-tag-primary'}">
            ${isSecondary ? '🔗 Secondary' : '⭐ Primary'}
          </span>
        </td>
        <td>
          <div class="table-text-muted text-truncate" style="max-width: 380px;" title="${escapeHtml(link.rationale || 'No specific rationale recorded.')}">
            ${link.rationale ? escapeHtml(link.rationale) : '<em style="color:var(--text-muted);">Standard mapping</em>'}
          </div>
        </td>
        <td style="text-align: right;">
          <div class="table-actions">
            <button class="btn-action-icon btn-edit-link" title="Edit this mapping link" data-index="${idx}">
              ✏️
            </button>
            <button class="btn-action-icon btn-delete-link" title="Delete this mapping link" data-index="${idx}">
              🗑️
            </button>
          </div>
        </td>
      `;

      el.tbodyLinks.appendChild(tr);
    });

    if (el.linksTableCount) {
      el.linksTableCount.textContent = `Showing ${visibleCount} of ${activeData.links.length} links`;
    }

    // Bind Edit & Delete buttons
    el.tbodyLinks.querySelectorAll('.btn-edit-link').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        openEditLinkModal(activeData.links[idx]);
      });
    });

    el.tbodyLinks.querySelectorAll('.btn-delete-link').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        deleteLink(idx);
      });
    });
  }

  // --- Render NRB Table ---
  function renderNrbTable() {
    if (!el.tbodyNrb) return;
    el.tbodyNrb.innerHTML = '';

    const q = (el.searchNrb ? el.searchNrb.value : '').toLowerCase().trim();
    const secFilter = el.filterNrbSection ? el.filterNrbSection.value : 'all';
    const statusFilter = el.filterNrbStatus ? el.filterNrbStatus.value : 'all';

    let visibleCount = 0;

    activeData.nrbItems.forEach(item => {
      if (secFilter !== 'all' && String(item.sectionId) !== secFilter) return;
      if (statusFilter !== 'all') {
        if (statusFilter === 'full' && item.statusType !== 'full' && item.statusType !== 'mixed') return;
        if (statusFilter === 'partial' && item.statusType !== 'partial') return;
        if (statusFilter === 'none' && item.statusType !== 'none') return;
      }

      if (q) {
        const haystack = `${item.ref} ${item.requirement} ${item.notes || ''} ${item.sectionName}`.toLowerCase();
        if (!haystack.includes(q)) return;
      }

      visibleCount++;

      const tr = document.createElement('tr');
      const conns = item.connectedIso || [];

      let badgeClass = 'badge-full';
      if (item.statusType === 'partial') badgeClass = 'badge-partial';
      if (item.statusType === 'none') badgeClass = 'badge-none';

      // Connected ISO chips preview
      let connsHtml = '';
      if (conns.length === 0) {
        connsHtml = `<span style="color:var(--color-none); font-size:0.75rem;">None (NRB Unique)</span>`;
      } else {
        connsHtml = conns.slice(0, 4).map(c => `
          <span class="mini-control-chip" title="${c.isoCode} (${c.overlap})">${c.isoCode}</span>
        `).join(' ');
        if (conns.length > 4) {
          connsHtml += ` <span class="mini-control-chip-more">+${conns.length - 4} more</span>`;
        }
      }

      tr.innerHTML = `
        <td><span class="ref-badge">NRB ${item.ref}</span></td>
        <td><span class="table-sec-badge">Sec ${item.sectionId}: ${escapeHtml(item.sectionName || '')}</span></td>
        <td>
          <div class="table-req-text text-truncate" title="${escapeHtml(item.requirement)}">
            ${escapeHtml(item.requirement)}
          </div>
          ${item.notes ? `<div class="table-req-notes" title="${escapeHtml(item.notes)}">📝 ${escapeHtml(item.notes)}</div>` : ''}
        </td>
        <td>
          <span class="status-badge ${badgeClass}">${item.statusLabel}</span>
        </td>
        <td>
          <div class="table-conns-wrap">${connsHtml}</div>
        </td>
        <td style="text-align: right;">
          <div class="table-actions">
            <button class="btn-action-icon btn-edit-nrb" title="Edit Requirement & Links" data-id="${item.id}">
              ✏️
            </button>
            <button class="btn-action-icon btn-delete-nrb" title="Delete Requirement" data-id="${item.id}">
              🗑️
            </button>
          </div>
        </td>
      `;

      el.tbodyNrb.appendChild(tr);
    });

    if (el.nrbTableCount) {
      el.nrbTableCount.textContent = `Showing ${visibleCount} of ${activeData.nrbItems.length} requirements`;
    }

    // Bind Edit & Delete buttons
    el.tbodyNrb.querySelectorAll('.btn-edit-nrb').forEach(btn => {
      btn.addEventListener('click', () => {
        openEditNrbModal(btn.dataset.id);
      });
    });

    el.tbodyNrb.querySelectorAll('.btn-delete-nrb').forEach(btn => {
      btn.addEventListener('click', () => {
        deleteNrbRequirement(btn.dataset.id);
      });
    });
  }

  // --- Render ISO Table ---
  function renderIsoTable() {
    if (!el.tbodyIso) return;
    el.tbodyIso.innerHTML = '';

    const q = (el.searchIso ? el.searchIso.value : '').toLowerCase().trim();
    const themeFilter = el.filterIsoTheme ? el.filterIsoTheme.value : 'all';
    const scopeFilter = el.filterIsoScope ? el.filterIsoScope.value : 'all';

    let visibleCount = 0;

    activeData.isoItems.forEach(item => {
      if (themeFilter !== 'all') {
        if (themeFilter === 'Clauses' && item.category !== 'Clauses') return;
        if (themeFilter.startsWith('A.') && !item.code.startsWith(themeFilter)) return;
      }

      if (scopeFilter === 'mapped' && !item.isMapped) return;
      if (scopeFilter === 'unmapped' && item.isMapped) return;

      if (q) {
        const haystack = `${item.code} ${item.title} ${item.theme} ${item.category}`.toLowerCase();
        if (!haystack.includes(q)) return;
      }

      visibleCount++;

      const tr = document.createElement('tr');
      const conns = item.connectedNrb || [];

      let connsHtml = '';
      if (conns.length === 0) {
        connsHtml = `<span style="color:var(--text-muted); font-size:0.75rem;">Outside NRB Scope</span>`;
      } else {
        connsHtml = conns.slice(0, 4).map(c => `
          <span class="mini-control-chip chip-nrb" title="NRB ${c.nrbRef}">NRB ${c.nrbRef}</span>
        `).join(' ');
        if (conns.length > 4) {
          connsHtml += ` <span class="mini-control-chip-more">+${conns.length - 4} more</span>`;
        }
      }

      tr.innerHTML = `
        <td>
          <span class="ref-badge" style="background:var(--color-iso-bg); color:var(--color-iso);">${item.code}</span>
        </td>
        <td>
          <span class="table-sec-badge" style="border-color:rgba(56,189,248,0.3); color:var(--text-secondary);">
            ${escapeHtml(item.theme || item.category)}
          </span>
        </td>
        <td>
          <div class="table-req-text" title="${escapeHtml(item.title)}">
            ${escapeHtml(item.title)}
          </div>
        </td>
        <td>
          <span class="status-badge ${item.isMapped ? 'badge-full' : 'badge-iso-neutral'}">
            ${item.isMapped ? `${conns.length} NRB linked` : 'Unmapped'}
          </span>
        </td>
        <td>
          <div class="table-conns-wrap">${connsHtml}</div>
        </td>
        <td style="text-align: right;">
          <div class="table-actions">
            <button class="btn-action-icon btn-edit-iso" title="Edit ISO Control & Links" data-id="${item.id}">
              ✏️
            </button>
            <button class="btn-action-icon btn-delete-iso" title="Delete ISO Control" data-id="${item.id}">
              🗑️
            </button>
          </div>
        </td>
      `;

      el.tbodyIso.appendChild(tr);
    });

    if (el.isoTableCount) {
      el.isoTableCount.textContent = `Showing ${visibleCount} of ${activeData.isoItems.length} controls`;
    }

    // Bind Edit & Delete buttons
    el.tbodyIso.querySelectorAll('.btn-edit-iso').forEach(btn => {
      btn.addEventListener('click', () => {
        openEditIsoModal(btn.dataset.id);
      });
    });

    el.tbodyIso.querySelectorAll('.btn-delete-iso').forEach(btn => {
      btn.addEventListener('click', () => {
        deleteIsoControl(btn.dataset.id);
      });
    });
  }

  // --- Render Raw Data Editor ---
  function renderRawDataEditor() {
    if (!el.rawJsonTextarea) return;
    el.rawJsonTextarea.value = JSON.stringify(activeData, null, 2);
  }

  // --- Master Render Function ---
  function renderAll() {
    updateKpiRibbon();
    populateFilterDropdowns();
    populateLinkModalDropdowns();
    renderLinksTable();
    renderNrbTable();
    renderIsoTable();
    renderRawDataEditor();
  }

  // ==========================================================================
  // MODAL 1: LINK CRUD
  // ==========================================================================
  function openAddLinkModal(preSelectNrbId = null, preSelectIsoId = null) {
    el.modalLinkTitle.textContent = '➕ Add New Mapping Link';
    el.linkOriginalSource.value = '';
    el.linkOriginalTarget.value = '';
    populateLinkModalDropdowns();

    if (preSelectNrbId) el.linkSourceSelect.value = preSelectNrbId;
    if (preSelectIsoId) el.linkTargetSelect.value = preSelectIsoId;

    el.linkOverlapSelect.value = 'Full Overlap';
    el.linkTierSelect.value = 'Primary';
    el.linkRationaleInput.value = '';

    el.modalLinkOverlay.style.display = 'flex';
  }

  function openEditLinkModal(link) {
    el.modalLinkTitle.textContent = '✏️ Edit Mapping Link';
    el.linkOriginalSource.value = link.source;
    el.linkOriginalTarget.value = link.target;
    populateLinkModalDropdowns();

    el.linkSourceSelect.value = link.source;
    el.linkTargetSelect.value = link.target;
    el.linkOverlapSelect.value = link.overlap || 'Full Overlap';
    el.linkTierSelect.value = link.tier || 'Primary';
    el.linkRationaleInput.value = link.rationale || '';

    el.modalLinkOverlay.style.display = 'flex';
  }

  function closeLinkModal() {
    el.modalLinkOverlay.style.display = 'none';
  }

  function handleSaveLink(e) {
    e.preventDefault();
    const source = el.linkSourceSelect.value;
    const target = el.linkTargetSelect.value;
    const overlap = el.linkOverlapSelect.value;
    const tier = el.linkTierSelect.value;
    const rationale = el.linkRationaleInput.value.trim();

    if (!source || !target) {
      alert('Please select both an NRB Requirement and an ISO Control.');
      return;
    }

    const origSource = el.linkOriginalSource.value;
    const origTarget = el.linkOriginalTarget.value;

    // If editing existing link, remove it first
    if (origSource && origTarget) {
      activeData.links = activeData.links.filter(l => !(l.source === origSource && l.target === origTarget));
    }

    // Check if new link already exists
    const existingIdx = activeData.links.findIndex(l => l.source === source && l.target === target);
    if (existingIdx >= 0) {
      activeData.links[existingIdx] = { source, target, overlap, tier, rationale };
    } else {
      activeData.links.push({ source, target, overlap, tier, rationale });
    }

    saveChanges(true);
    closeLinkModal();
    renderAll();
    showToast(`Saved link: ${source} ⟷ ${target}`);
  }

  function deleteLink(idx) {
    const link = activeData.links[idx];
    if (!link) return;
    if (confirm(`Delete mapping link between ${link.source} and ${link.target}?`)) {
      activeData.links.splice(idx, 1);
      saveChanges(true);
      renderAll();
      showToast('Mapping link deleted.');
    }
  }

  // ==========================================================================
  // MODAL 2: NRB REQUIREMENT CRUD
  // ==========================================================================
  function openAddNrbModal() {
    el.modalNrbTitle.textContent = '➕ Add New NRB Requirement';
    el.nrbOriginalId.value = '';
    el.nrbRefInput.value = '';
    el.nrbSectionSelect.value = '1';
    el.nrbRequirementInput.value = '';
    el.nrbNotesInput.value = '';
    el.nrbModalMappedCount.textContent = '0';
    el.nrbModalMappedChips.innerHTML = '<span style="color:var(--text-muted); font-size:0.75rem;">Save requirement first to link ISO controls.</span>';
    el.btnAddLinkFromNrbModal.style.display = 'none';

    el.modalNrbOverlay.style.display = 'flex';
  }

  function openEditNrbModal(nrbId) {
    const item = activeData.nrbItems.find(i => i.id === nrbId);
    if (!item) return;

    el.modalNrbTitle.textContent = `✏️ Edit NRB ${item.ref}`;
    el.nrbOriginalId.value = item.id;
    el.nrbRefInput.value = item.ref;
    el.nrbSectionSelect.value = item.sectionId;
    el.nrbRequirementInput.value = item.requirement;
    el.nrbNotesInput.value = item.notes || '';

    // Render connected ISO controls inside modal
    const conns = item.connectedIso || [];
    el.nrbModalMappedCount.textContent = conns.length;
    el.nrbModalMappedChips.innerHTML = '';

    if (conns.length === 0) {
      el.nrbModalMappedChips.innerHTML = '<span style="color:var(--text-muted); font-size:0.75rem;">No ISO controls currently linked.</span>';
    } else {
      conns.forEach(c => {
        const chip = document.createElement('div');
        chip.className = 'modal-mapped-chip';
        chip.innerHTML = `
          <span>${c.isoCode} (${c.overlap})</span>
          <button type="button" class="chip-remove-btn" title="Unlink this ISO control" data-target="${c.isoId}">✕</button>
        `;
        chip.querySelector('.chip-remove-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          unlinkNrbIso(item.id, c.isoId);
          openEditNrbModal(item.id); // refresh chips
        });
        el.nrbModalMappedChips.appendChild(chip);
      });
    }

    el.btnAddLinkFromNrbModal.style.display = 'inline-flex';
    el.btnAddLinkFromNrbModal.onclick = () => {
      closeNrbModal();
      openAddLinkModal(item.id, null);
    };

    el.modalNrbOverlay.style.display = 'flex';
  }

  function closeNrbModal() {
    el.modalNrbOverlay.style.display = 'none';
  }

  function handleSaveNrb(e) {
    e.preventDefault();
    const origId = el.nrbOriginalId.value;
    const ref = el.nrbRefInput.value.trim();
    const sectionId = parseInt(el.nrbSectionSelect.value, 10);
    const requirement = el.nrbRequirementInput.value.trim();
    const notes = el.nrbNotesInput.value.trim();

    if (!ref || !requirement) {
      alert('Reference number and Requirement statement are required.');
      return;
    }

    const secObj = (activeData.nrbSections || []).find(s => s.id === sectionId) || { id: sectionId, name: `Section ${sectionId}` };
    const id = origId || `NRB-${ref.replace(/\./g, '_')}`;

    if (origId) {
      const idx = activeData.nrbItems.findIndex(i => i.id === origId);
      if (idx >= 0) {
        activeData.nrbItems[idx].ref = ref;
        activeData.nrbItems[idx].sectionId = sectionId;
        activeData.nrbItems[idx].sectionName = secObj.name;
        activeData.nrbItems[idx].requirement = requirement;
        activeData.nrbItems[idx].notes = notes;
      }
    } else {
      // Check duplicate ID
      if (activeData.nrbItems.some(i => i.id === id)) {
        alert(`An NRB requirement with ref ${ref} already exists.`);
        return;
      }
      activeData.nrbItems.push({
        id,
        ref,
        sectionId,
        sectionName: secObj.name,
        requirement,
        notes,
        statusType: 'none',
        statusLabel: 'NRB Unique / No ISO',
        connectedIso: []
      });
    }

    saveChanges(true);
    closeNrbModal();
    renderAll();
    showToast(`Saved NRB ${ref}`);
  }

  function deleteNrbRequirement(id) {
    const item = activeData.nrbItems.find(i => i.id === id);
    if (!item) return;

    if (confirm(`Delete requirement NRB ${item.ref}? All associated links will also be removed.`)) {
      activeData.nrbItems = activeData.nrbItems.filter(i => i.id !== id);
      activeData.links = activeData.links.filter(l => l.source !== id);
      saveChanges(true);
      renderAll();
      showToast(`Deleted NRB ${item.ref}`);
    }
  }

  function unlinkNrbIso(nrbId, isoId) {
    activeData.links = activeData.links.filter(l => !(l.source === nrbId && l.target === isoId));
    saveChanges(true);
    renderAll();
    showToast(`Unlinked ${nrbId} ⟷ ${isoId}`);
  }

  // ==========================================================================
  // MODAL 3: ISO CONTROL CRUD
  // ==========================================================================
  function openAddIsoModal() {
    el.modalIsoTitle.textContent = '➕ Add New ISO 27001 Control';
    el.isoOriginalId.value = '';
    el.isoCodeInput.value = '';
    el.isoTitleInput.value = '';
    el.isoModalMappedCount.textContent = '0';
    el.isoModalMappedChips.innerHTML = '<span style="color:var(--text-muted); font-size:0.75rem;">Save control first to link NRB requirements.</span>';
    el.btnAddLinkFromIsoModal.style.display = 'none';

    el.modalIsoOverlay.style.display = 'flex';
  }

  function openEditIsoModal(isoId) {
    const item = activeData.isoItems.find(i => i.id === isoId);
    if (!item) return;

    el.modalIsoTitle.textContent = `✏️ Edit ${item.code}`;
    el.isoOriginalId.value = item.id;
    el.isoCodeInput.value = item.code;
    el.isoThemeSelect.value = item.theme;
    el.isoTitleInput.value = item.title;

    // Render connected NRB requirements
    const conns = item.connectedNrb || [];
    el.isoModalMappedCount.textContent = conns.length;
    el.isoModalMappedChips.innerHTML = '';

    if (conns.length === 0) {
      el.isoModalMappedChips.innerHTML = '<span style="color:var(--text-muted); font-size:0.75rem;">Outside NRB Scope (no NRB requirements linked).</span>';
    } else {
      conns.forEach(c => {
        const chip = document.createElement('div');
        chip.className = 'modal-mapped-chip';
        chip.innerHTML = `
          <span>NRB ${c.nrbRef} (${c.overlap})</span>
          <button type="button" class="chip-remove-btn" title="Unlink this NRB requirement" data-source="${c.nrbId}">✕</button>
        `;
        chip.querySelector('.chip-remove-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          unlinkNrbIso(c.nrbId, item.id);
          openEditIsoModal(item.id); // refresh chips
        });
        el.isoModalMappedChips.appendChild(chip);
      });
    }

    el.btnAddLinkFromIsoModal.style.display = 'inline-flex';
    el.btnAddLinkFromIsoModal.onclick = () => {
      closeIsoModal();
      openAddLinkModal(null, item.id);
    };

    el.modalIsoOverlay.style.display = 'flex';
  }

  function closeIsoModal() {
    el.modalIsoOverlay.style.display = 'none';
  }

  function handleSaveIso(e) {
    e.preventDefault();
    const origId = el.isoOriginalId.value;
    const code = el.isoCodeInput.value.trim();
    const title = el.isoTitleInput.value.trim();
    const themeOpt = el.isoThemeSelect.options[el.isoThemeSelect.selectedIndex];
    const theme = themeOpt ? themeOpt.value : 'A.5 Organizational Controls';
    const category = themeOpt ? themeOpt.dataset.category || (code.startsWith('Clause') ? 'Clauses' : 'Annex A Controls') : 'Annex A Controls';

    if (!code || !title) {
      alert('Control Code and Title are required.');
      return;
    }

    const id = origId || `ISO-${code.replace(/\s+/g, '_').replace(/\./g, '_')}`;

    if (origId) {
      const idx = activeData.isoItems.findIndex(i => i.id === origId);
      if (idx >= 0) {
        activeData.isoItems[idx].code = code;
        activeData.isoItems[idx].title = title;
        activeData.isoItems[idx].theme = theme;
        activeData.isoItems[idx].category = category;
      }
    } else {
      if (activeData.isoItems.some(i => i.id === id)) {
        alert(`An ISO control with code ${code} already exists.`);
        return;
      }
      activeData.isoItems.push({
        id,
        code,
        title,
        category,
        theme,
        isMapped: false,
        status: 'unmapped',
        badge: 'Not Mapped',
        connectedNrb: []
      });
    }

    saveChanges(true);
    closeIsoModal();
    renderAll();
    showToast(`Saved ISO control: ${code}`);
  }

  function deleteIsoControl(id) {
    const item = activeData.isoItems.find(i => i.id === id);
    if (!item) return;

    if (confirm(`Delete ISO control ${item.code}? All associated links will also be removed.`)) {
      activeData.isoItems = activeData.isoItems.filter(i => i.id !== id);
      activeData.links = activeData.links.filter(l => l.target !== id);
      saveChanges(true);
      renderAll();
      showToast(`Deleted ${item.code}`);
    }
  }

  // ==========================================================================
  // BACKUP, EXPORT & RAW DATA
  // ==========================================================================
  function downloadDataJs() {
    recomputeDataIntegrity();
    const nowStr = new Date().toISOString();
    const jsContent = `/**
 * NRB IT Guidelines ↔ ISO/IEC 27001:2022 Mapping Data
 * Generated via Compliance Admin Data Manager
 * Exported: ${nowStr}
 */

const MAPPING_DATA = ${JSON.stringify(activeData, null, 2)};

if (typeof window !== 'undefined') {
  window.MAPPING_DATA = MAPPING_DATA;
}
`;
    const blob = new Blob([jsContent], { type: 'application/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Downloaded data.js successfully!');
  }

  function downloadJson() {
    recomputeDataIntegrity();
    const blob = new Blob([JSON.stringify(activeData, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mapping_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Downloaded mapping_data.json successfully!');
  }

  function handleImportFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      try {
        let parsed = null;
        if (text.includes('const MAPPING_DATA =') || text.includes('window.MAPPING_DATA =')) {
          // JS file
          const jsonStr = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
          parsed = JSON.parse(jsonStr);
        } else {
          parsed = JSON.parse(text);
        }

        if (parsed && Array.isArray(parsed.nrbItems) && Array.isArray(parsed.isoItems) && Array.isArray(parsed.links)) {
          activeData = parsed;
          saveChanges(true);
          renderAll();
          showToast(`Successfully imported dataset (${activeData.nrbItems.length} NRB, ${activeData.isoItems.length} ISO, ${activeData.links.length} Links)`);
        } else {
          alert('Invalid file format. Missing nrbItems, isoItems, or links arrays.');
        }
      } catch (err) {
        alert('Failed to parse file: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  function handleApplyRawJson() {
    try {
      const text = el.rawJsonTextarea.value.trim();
      const parsed = JSON.parse(text);
      if (parsed && Array.isArray(parsed.nrbItems) && Array.isArray(parsed.isoItems) && Array.isArray(parsed.links)) {
        activeData = parsed;
        saveChanges(true);
        renderAll();
        showToast('Applied raw JSON changes successfully!');
      } else {
        alert('Invalid JSON structure: Must contain nrbItems, isoItems, and links.');
      }
    } catch (e) {
      alert('Invalid JSON syntax: ' + e.message);
    }
  }

  function handleFormatRawJson() {
    try {
      const parsed = JSON.parse(el.rawJsonTextarea.value);
      el.rawJsonTextarea.value = JSON.stringify(parsed, null, 2);
    } catch (e) {
      alert('Cannot format invalid JSON: ' + e.message);
    }
  }

  // --- Utility Escape ---
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ==========================================================================
  // EVENT BINDINGS
  // ==========================================================================
  function bindEvents() {
    // Tab switching
    el.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        el.tabBtns.forEach(b => b.classList.remove('active'));
        el.tabPanes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetPane = document.getElementById(btn.dataset.tab);
        if (targetPane) targetPane.classList.add('active');

        if (btn.dataset.tab === 'tab-backup') {
          renderRawDataEditor();
        }
      });
    });

    // Top action buttons
    if (el.btnSaveAll) el.btnSaveAll.addEventListener('click', () => saveChanges(false));
    if (el.btnResetDefaults) el.btnResetDefaults.addEventListener('click', resetToDefaults);
    if (el.btnResetToDefaultsCard) el.btnResetToDefaultsCard.addEventListener('click', resetToDefaults);
    if (el.btnDownloadDataJs) el.btnDownloadDataJs.addEventListener('click', downloadDataJs);
    if (el.btnExportDataJsBig) el.btnExportDataJsBig.addEventListener('click', downloadDataJs);
    if (el.btnExportJson) el.btnExportJson.addEventListener('click', downloadJson);

    // File import
    if (el.fileInputJson) {
      el.fileInputJson.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          handleImportFile(e.target.files[0]);
          e.target.value = '';
        }
      });
    }

    // Raw JSON controls
    if (el.btnFormatRawJson) el.btnFormatRawJson.addEventListener('click', handleFormatRawJson);
    if (el.btnApplyRawJson) el.btnApplyRawJson.addEventListener('click', handleApplyRawJson);

    // Links Tab filters
    if (el.searchLinks) el.searchLinks.addEventListener('input', renderLinksTable);
    if (el.filterLinkOverlap) el.filterLinkOverlap.addEventListener('change', renderLinksTable);
    if (el.filterLinkSection) el.filterLinkSection.addEventListener('change', renderLinksTable);
    if (el.btnOpenAddLink) el.btnOpenAddLink.addEventListener('click', () => openAddLinkModal());

    // NRB Tab filters
    if (el.searchNrb) el.searchNrb.addEventListener('input', renderNrbTable);
    if (el.filterNrbSection) el.filterNrbSection.addEventListener('change', renderNrbTable);
    if (el.filterNrbStatus) el.filterNrbStatus.addEventListener('change', renderNrbTable);
    if (el.btnOpenAddNrb) el.btnOpenAddNrb.addEventListener('click', openAddNrbModal);

    // ISO Tab filters
    if (el.searchIso) el.searchIso.addEventListener('input', renderIsoTable);
    if (el.filterIsoTheme) el.filterIsoTheme.addEventListener('change', renderIsoTable);
    if (el.filterIsoScope) el.filterIsoScope.addEventListener('change', renderIsoTable);
    if (el.btnOpenAddIso) el.btnOpenAddIso.addEventListener('click', openAddIsoModal);

    // Link Modal events
    if (el.formLink) el.formLink.addEventListener('submit', handleSaveLink);
    if (el.btnCloseLinkModal) el.btnCloseLinkModal.addEventListener('click', closeLinkModal);
    if (el.btnCancelLinkModal) el.btnCancelLinkModal.addEventListener('click', closeLinkModal);

    // NRB Modal events
    if (el.formNrb) el.formNrb.addEventListener('submit', handleSaveNrb);
    if (el.btnCloseNrbModal) el.btnCloseNrbModal.addEventListener('click', closeNrbModal);
    if (el.btnCancelNrbModal) el.btnCancelNrbModal.addEventListener('click', closeNrbModal);

    // ISO Modal events
    if (el.formIso) el.formIso.addEventListener('submit', handleSaveIso);
    if (el.btnCloseIsoModal) el.btnCloseIsoModal.addEventListener('click', closeIsoModal);
    if (el.btnCancelIsoModal) el.btnCancelIsoModal.addEventListener('click', closeIsoModal);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeLinkModal();
        closeNrbModal();
        closeIsoModal();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveChanges(false);
      }
    });
  }

  // --- Initialize App ---
  function init() {
    renderAll();
    bindEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
