let currentLang = 'sl';
let wineQty = 1;
let currentModalKey = null;

const itemData = {
  zvrst: {
    orderLabel: 'Bela zvrst',
    sl: {
      cat: 'Vipavska dolina, suho belo vino',
      title: 'Hišna bela zvrst',
      desc: 'Naše vino je zvrst vseh treh sort iz obeh vinogradov v Oševljeku: Malvazije, Rebule in Vitovske grganje. Eno leto smo vsako sorto pridelali tudi ločeno.',
      specs: [
        ['Sorte', 'Malvazija, Rebula, Vitovska grganja'],
        ['Vinogradi', 'Spodnji in zgornji vinograd v Oševljeku'],
        ['Tla', 'Vipavski fliš, lapor in bližina kraškega apnenca'],
        ['Trgatev', 'Ročna trgatev'],
        ['K hrani', 'Domače suhomesnine, napolitanske pice, bela riba']
      ]
    },
    en: {
      cat: 'Vipava Valley, dry white wine',
      title: 'House White Blend',
      desc: 'Our wine blends all three varietals from both Oševljek vineyards: Malvazija, Rebula, and Vitovska Grganja. For one vintage, we also bottled each varietal separately.',
      specs: [
        ['Varietals', 'Malvazija, Rebula, Vitovska Grganja'],
        ['Vineyards', 'Lower and upper parcels in Oševljek'],
        ['Soil', 'Vipava flysch marl near Karst limestone'],
        ['Harvest', 'Hand-harvested'],
        ['Food pairing', 'Homemade cured meats, Neapolitan pizza, white fish']
      ]
    }
  },
  suhomesnine: {
    orderLabel: 'Domače suhomesnine',
    sl: {
      cat: 'Domača predelava',
      title: 'Domače suhomesnine',
      desc: 'Do pred nekaj leti smo prašiče redili doma, danes pa jih kupimo in zakoljemo na Dolenjskem, mesnine pa po družinskih receptih pripravimo v Oševljeku.',
      specs: [
        ['Izdelki', 'Pršut, šalam, panceta, sladke klobase, krodegine'],
        ['Poreklo mesa', 'Prašiči z Dolenjske'],
        ['Priprava', 'Domača predelava in sušenje v Oševljeku'],
        ['Krodegine', 'Tradicionalne kuhane klobase za zimske mesece'],
        ['Nakup', 'Po predhodnem dogovoru ali ob degustaciji']
      ]
    },
    en: {
      cat: 'Homemade cured pork',
      title: 'Homemade Cured Meats',
      desc: 'Until a few years ago we raised our own pigs; today we buy and slaughter them in Dolenjska, then cure and season all pork cuts at home in Oševljek.',
      specs: [
        ['Products', 'Prosciutto, šalam, pancetta, sladke klobase, krodegine'],
        ['Pork sourcing', 'Pigs sourced and slaughtered in Dolenjska'],
        ['Curing', 'Prepared and cured at home in Oševljek'],
        ['Krodegine', 'Traditional boiled pork sausages served in winter'],
        ['Availability', 'By prior inquiry or during tastings']
      ]
    }
  },
  pice: {
    orderLabel: 'Degustacija z napolitanskimi picami',
    sl: {
      cat: 'Ob najavljenih obiskih',
      title: 'Napolitanske pice iz vrtljive peči',
      desc: 'Za goste ob degustacijah v naši električni vrtljivi peči pečemo sveže napolitanske pice, obložene tudi z našo panceto, šalamom ali pršutom.',
      specs: [
        ['Peč', 'Električna vrtljiva peč za pico'],
        ['Slog', 'Napolitanska pica'],
        ['Obloge', 'Klasične sestavine in naše domače mesnine'],
        ['Kdaj', 'Po predhodnem dogovoru za skupine'],
        ['K vinu', 'Postrežemo z našo belo zvrstjo']
      ]
    },
    en: {
      cat: 'Scheduled cellar visits',
      title: 'Neapolitan Pizza',
      desc: 'During scheduled visits, we bake fresh Neapolitan pizzas in our rotating electric oven, often topped with our own pancetta, šalam, or prosciutto.',
      specs: [
        ['Oven', 'Rotating electric pizza oven'],
        ['Style', 'Neapolitan pizza'],
        ['Toppings', 'Classic toppings and our homemade cured meats'],
        ['Availability', 'By prior reservation for groups'],
        ['Pairing', 'Served alongside our house white blend']
      ]
    }
  }
};

function getBottleUnitWord(qty, lang = currentLang) {
  const n = Math.max(1, parseInt(qty, 10) || 1);
  if (lang === 'en') {
    return n === 1 ? 'bottle' : 'bottles';
  }
  const mod100 = n % 100;
  if (mod100 === 1) return 'steklenica';
  if (mod100 === 2) return 'steklenici';
  if (mod100 === 3 || mod100 === 4) return 'steklenice';
  return 'steklenic';
}

function formatWineOrderLabel(qty = wineQty, lang = currentLang) {
  const n = Math.max(1, parseInt(qty, 10) || 1);
  const unit = getBottleUnitWord(n, lang);
  const wineName = lang === 'sl' ? 'Bela zvrst' : 'House White Blend';
  return `${wineName} (${n} ${unit})`;
}

function updateQtyUI() {
  const unitText = getBottleUnitWord(wineQty, currentLang);
  const cardInput = document.getElementById('cardWineQty');
  const modalInput = document.getElementById('modalWineQty');
  const formInput = document.getElementById('bOrderQty');
  const cardUnit = document.getElementById('cardWineQtyUnit');
  const modalUnit = document.getElementById('modalWineQtyUnit');

  if (cardInput) cardInput.value = wineQty;
  if (modalInput) modalInput.value = wineQty;
  if (formInput) formInput.value = wineQty;
  if (cardUnit) cardUnit.textContent = unitText;
  if (modalUnit) modalUnit.textContent = unitText;
}

function syncWineQty(val, updateNotesIfOrder = false) {
  const parsed = parseInt(val, 10);
  wineQty = isNaN(parsed) || parsed < 1 ? 1 : Math.min(60, parsed);
  updateQtyUI();

  if (updateNotesIfOrder) {
    const notes = document.getElementById('bNotes');
    if (!notes) return;
    const label = formatWineOrderLabel(wineQty, currentLang);
    const pattern = /(Bela zvrst|Hišna bela zvrst|House White Blend)\s*\(\d+\s*[^)]+\)/i;
    if (pattern.test(notes.value)) {
      notes.value = notes.value.replace(pattern, label);
    } else if (!notes.value.trim()) {
      const prefix = currentLang === 'sl' ? 'Povpraševanje za nakup: ' : 'Order inquiry: ';
      notes.value = `${prefix}${label}`;
    }
  }
}

function stepWineQty(delta, updateNotesIfOrder = false) {
  syncWineQty(wineQty + delta, updateNotesIfOrder);
}

function orderWineWithQty() {
  const label = formatWineOrderLabel(wineQty, currentLang);
  preselectOrder(label, true);
}

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.getElementById('btnSl').classList.toggle('active', lang === 'sl');
  document.getElementById('btnEn').classList.toggle('active', lang === 'en');

  document.querySelectorAll('[data-sl]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });

  document.querySelectorAll('[data-ph-sl]').forEach(el => {
    el.placeholder = el.getAttribute('data-ph-' + lang);
  });

  updateQtyUI();
  syncFormRequirements();
  updateMapLanguage();
}

function toggleMenu() {
  const nav = document.getElementById('mainNav');
  const btn = document.getElementById('menuToggleBtn');
  const isOpen = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen);
  btn.textContent = isOpen ? '✕' : '☰';
}

function closeMenu() {
  const nav = document.getElementById('mainNav');
  const btn = document.getElementById('menuToggleBtn');
  nav.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  btn.textContent = '☰';
}

function openItemModal(key) {
  currentModalKey = key;
  const item = itemData[key];
  const info = item[currentLang];
  document.getElementById('mCategory').textContent = info.cat;
  document.getElementById('mTitle').textContent = info.title;
  document.getElementById('mDesc').textContent = info.desc;

  const specsEl = document.getElementById('mSpecs');
  specsEl.innerHTML = info.specs.map(([label, val]) =>
    `<div class="spec-row"><span>${label}</span><span>${val}</span></div>`
  ).join('');

  const qtyWrap = document.getElementById('mQtyWrap');
  if (qtyWrap) {
    qtyWrap.style.display = key === 'zvrst' ? 'flex' : 'none';
  }
  updateQtyUI();

  const orderBtn = document.getElementById('mOrderBtn');
  if (key === 'pice') {
    orderBtn.onclick = () => {
      closeWineModal();
      selectPizzaVisit();
    };
  } else if (key === 'zvrst') {
    orderBtn.onclick = () => {
      closeWineModal();
      orderWineWithQty();
    };
  } else {
    orderBtn.onclick = () => {
      closeWineModal();
      preselectOrder(item.orderLabel);
    };
  }

  document.getElementById('wineModal').classList.add('open');
  document.body.classList.add('modal-open');
}

function closeWineModal() {
  document.getElementById('wineModal').classList.remove('open');
  document.body.classList.remove('modal-open');
}

function syncFormRequirements() {
  const pkgSelect = document.getElementById('bPackage');
  if (!pkgSelect) return;
  const pkg = pkgSelect.value;
  const isOrder = pkg === 'order';

  const dateInput = document.getElementById('bDate');
  const dateLabel = document.getElementById('bDateLabel');
  const guestsGroup = document.getElementById('guestsGroup');
  const guestsSelect = document.getElementById('bGuests');
  const orderQtyGroup = document.getElementById('orderQtyGroup');

  if (dateInput) {
    dateInput.required = !isOrder;
  }

  if (dateLabel) {
    if (isOrder) {
      dateLabel.textContent = currentLang === 'sl' ? 'Datum prevzema (neobvezno)' : 'Pickup date (optional)';
    } else {
      dateLabel.textContent = currentLang === 'sl' ? 'Datum obiska ali prevzema' : 'Visit or pickup date';
    }
  }

  // Ko izbereš nakup vina ali suhomesnin, odstrani število oseb
  if (guestsGroup) {
    guestsGroup.style.display = isOrder ? 'none' : '';
  }
  if (guestsSelect) {
    guestsSelect.disabled = isOrder;
  }

  // Pokaži selector za količino steklenic ob nakupu
  if (orderQtyGroup) {
    orderQtyGroup.style.display = isOrder ? '' : 'none';
  }
}

function preselectOrder(itemLabel, isWineWithQty = false) {
  const pkgSelect = document.getElementById('bPackage');
  pkgSelect.value = 'order';
  syncFormRequirements();

  const notes = document.getElementById('bNotes');
  const prefix = currentLang === 'sl' ? 'Povpraševanje za nakup: ' : 'Order inquiry: ';
  const winePattern = /(Bela zvrst|Hišna bela zvrst|House White Blend)\s*\(\d+\s*[^)]+\)/i;

  if (isWineWithQty && winePattern.test(notes.value)) {
    notes.value = notes.value.replace(winePattern, itemLabel);
  } else {
    notes.value = notes.value ? `${notes.value}, ${itemLabel}` : `${prefix}${itemLabel}`;
  }

  scrollToSection(null, 'degustacije');
  setTimeout(() => notes.focus({ preventScroll: true }), 550);
}

function selectPizzaVisit(e) {
  if (e) e.preventDefault();
  const pkgSelect = document.getElementById('bPackage');
  pkgSelect.value = 'pizza';
  syncFormRequirements();
  scrollToSection(null, 'degustacije');
}

function handleBooking(e) {
  e.preventDefault();
  document.getElementById('bookingSuccess').style.display = 'block';
  e.target.reset();
  wineQty = 1;
  updateQtyUI();
  syncFormRequirements();
}

/* ==========================================
   Google Maps View (Oševljek 14 & Both Vineyards)
   ========================================== */
let terroirMap = null;
let googleSatLayer = null;
let googleRoadLayer = null;
let mapMarkers = {};
let mapBoundsGroup = null;

const mapLocations = {
  house: {
    coords: [45.88063, 13.69531],
    color: '#B84A27',
    zoom: 18,
    sl: {
      short: 'Hiša (Oševljek 14)',
      title: 'Hiša in vinska klet — Oševljek 14',
      desc: 'Oševljek 14, 5292 Renče. Domačija Vina Skomina, klet, sušilnica suhomesnin in vrtljiva peč za napolitanske pice.'
    },
    en: {
      short: 'House (Oševljek 14)',
      title: 'Homestead & Cellar — Oševljek 14',
      desc: 'Oševljek 14, 5292 Renče. Vina Skomina family house, wine cellar, curing room, and rotating pizza oven.'
    }
  },
  lower: {
    coords: [45.87885, 13.69415],
    polygon: [
      [45.87932, 13.69375],
      [45.87922, 13.69458],
      [45.87838, 13.69445],
      [45.87848, 13.69362]
    ],
    color: '#2E7D47',
    zoom: 18,
    sl: {
      short: 'Spodnji vinograd',
      title: 'Spodnji vinograd (pod vasjo)',
      desc: 'Odprta sončna lega tik pod vasjo Oševljek, zračena z vipavsko burjo na flišnih tleh.'
    },
    en: {
      short: 'Lower vineyard',
      title: 'Lower Vineyard (below village)',
      desc: 'Open sunlit slope just below Oševljek village, cooled by the Vipava bora wind on flysch soil.'
    }
  },
  upper: {
    coords: [45.87675, 13.69685],
    polygon: [
      [45.87712, 13.69632],
      [45.87702, 13.69742],
      [45.87638, 13.69728],
      [45.87648, 13.69618]
    ],
    color: '#D49B27',
    zoom: 18,
    sl: {
      short: 'Zgornji vinograd (jasa)',
      title: 'Zgornji vinograd (gozdna jasa)',
      desc: 'Zavetni vinograd na mirni gozdni jasi višje proti kraškemu robu, kjer se fliš sreča z apnencem.'
    },
    en: {
      short: 'Upper vineyard (clearing)',
      title: 'Upper Vineyard (forest clearing)',
      desc: 'Sheltered parcel in a quiet forest clearing higher toward the Karst edge where flysch meets limestone.'
    }
  }
};

function createPinIcon(locKey) {
  const loc = mapLocations[locKey];
  const label = loc[currentLang].short;
  return L.divIcon({
    className: 'custom-map-pin-container',
    html: `<div class="custom-map-pin"><span class="pin-badge" style="background:${loc.color}"></span><span>${label}</span></div>`,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
    popupAnchor: [0, -14]
  });
}

function createPopupHTML(locKey) {
  const loc = mapLocations[locKey];
  const info = loc[currentLang];
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${loc.coords[0]},${loc.coords[1]}`;
  const linkText = currentLang === 'sl' ? 'Odpri v Google Maps ↗' : 'Open in Google Maps ↗';
  return `
    <div style="min-width:190px;max-width:240px;">
      <strong style="display:block;font-size:0.9rem;color:#141813;margin-bottom:3px;">${info.title}</strong>
      <p style="font-size:0.78rem;color:#4E554B;margin:0 0 6px;">${info.desc}</p>
      <a href="${gmapsUrl}" target="_blank" rel="noopener noreferrer" style="font-size:0.75rem;font-weight:600;color:#234B2E;text-decoration: underline;">${linkText}</a>
    </div>
  `;
}

function initTerroirMap() {
  const mapEl = document.getElementById('terroirMap');
  if (!mapEl) return;

  if (typeof L === 'undefined') {
    mapEl.innerHTML = `<iframe title="Google Maps Oševljek 14" width="100%" height="100%" style="border:0" loading="lazy" allowfullscreen src="https://maps.google.com/maps?q=O%C5%A1evljek+14,+5292+Ren%C4%8De,+Slovenija&t=k&z=16&ie=UTF8&iwloc=&output=embed"></iframe>`;
    return;
  }

  terroirMap = L.map('terroirMap', {
    center: [45.8787, 13.6955],
    zoom: 16,
    scrollWheelZoom: false
  });

  // Google Maps Hybrid (Satellite + Labels) & Google Roadmap tiles
  googleSatLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=y&hl=sl&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    attribution: '© Google Maps'
  });

  googleRoadLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=m&hl=sl&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    attribution: '© Google Maps'
  });

  googleSatLayer.addTo(terroirMap);

  const groupLayers = [];

  Object.keys(mapLocations).forEach(key => {
    const loc = mapLocations[key];

    if (loc.polygon) {
      const poly = L.polygon(loc.polygon, {
        color: loc.color,
        weight: 2.2,
        fillColor: loc.color,
        fillOpacity: 0.28
      }).addTo(terroirMap);
      groupLayers.push(poly);
    }

    const marker = L.marker(loc.coords, {
      icon: createPinIcon(key)
    }).addTo(terroirMap);

    marker.bindPopup(createPopupHTML(key));
    mapMarkers[key] = marker;
    groupLayers.push(marker);
  });

  mapBoundsGroup = L.featureGroup(groupLayers);
  terroirMap.fitBounds(mapBoundsGroup.getBounds().pad(0.28));
}

function setMapLayer(mode) {
  if (!terroirMap) return;
  const btnSat = document.getElementById('btnLayerSat');
  const btnMap = document.getElementById('btnLayerMap');
  if (btnSat) btnSat.classList.toggle('active', mode === 'sat');
  if (btnMap) btnMap.classList.toggle('active', mode === 'map');

  if (mode === 'sat') {
    if (terroirMap.hasLayer(googleRoadLayer)) terroirMap.removeLayer(googleRoadLayer);
    if (!terroirMap.hasLayer(googleSatLayer)) terroirMap.addLayer(googleSatLayer);
  } else {
    if (terroirMap.hasLayer(googleSatLayer)) terroirMap.removeLayer(googleSatLayer);
    if (!terroirMap.hasLayer(googleRoadLayer)) terroirMap.addLayer(googleRoadLayer);
  }
}

function focusMapLocation(locKey) {
  document.querySelectorAll('.map-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-loc') === locKey);
  });

  if (!terroirMap) return;

  if (locKey === 'all') {
    terroirMap.closePopup();
    if (mapBoundsGroup) {
      terroirMap.flyToBounds(mapBoundsGroup.getBounds().pad(0.28), { duration: 0.75 });
    }
  } else if (mapLocations[locKey] && mapMarkers[locKey]) {
    const loc = mapLocations[locKey];
    terroirMap.flyTo(loc.coords, loc.zoom, { duration: 0.75 });
    setTimeout(() => {
      if (mapMarkers[locKey]) mapMarkers[locKey].openPopup();
    }, 450);
  }
}

function updateMapLanguage() {
  if (!terroirMap) return;
  Object.keys(mapMarkers).forEach(key => {
    mapMarkers[key].setIcon(createPinIcon(key));
    mapMarkers[key].setPopupContent(createPopupHTML(key));
  });
}

/* ==========================================
   Section-to-Section Jump Scrolling & Parallax
   ========================================== */
const snapSectionIds = ['domov', 'zgodba', 'terroir', 'vina', 'degustacije', 'kontakt'];
let currentSectionIndex = 0;
let isSectionAnimating = false;
let wheelUnlockTimer = null;

function getSnapSections() {
  return snapSectionIds.map(id => document.getElementById(id)).filter(Boolean);
}

function updateActiveDots(activeId) {
  document.querySelectorAll('.section-dot').forEach(dot => {
    dot.classList.toggle('active', dot.getAttribute('data-target') === activeId);
  });
}

function scrollToSectionIndex(idx) {
  const sections = getSnapSections();
  if (!sections.length) return;
  const clampedIdx = Math.max(0, Math.min(sections.length - 1, idx));
  currentSectionIndex = clampedIdx;
  const targetEl = sections[clampedIdx];

  isSectionAnimating = true;
  clearTimeout(wheelUnlockTimer);
  wheelUnlockTimer = setTimeout(() => {
    isSectionAnimating = false;
  }, 760);

  updateActiveDots(targetEl.id);
  targetEl.scrollIntoView({ behavior: 'smooth', block: targetEl.tagName === 'FOOTER' ? 'end' : 'start' });
}

function scrollToSection(e, id) {
  if (e) e.preventDefault();
  const idx = snapSectionIds.indexOf(id);
  if (idx !== -1) {
    scrollToSectionIndex(idx);
  } else {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

function navJump(e, id) {
  closeMenu();
  scrollToSection(e, id);
}

function detectCurrentSectionIndex() {
  const sections = getSnapSections();
  const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 72;
  const probeY = window.scrollY + headerH + window.innerHeight * 0.32;

  let bestIdx = 0;
  sections.forEach((sec, i) => {
    if (probeY >= sec.offsetTop) {
      bestIdx = i;
    }
  });
  return bestIdx;
}

function canSectionScrollInternally(sectionEl, deltaY) {
  if (!sectionEl) return false;
  const rect = sectionEl.getBoundingClientRect();
  const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 72;
  const viewH = window.innerHeight;

  // If the section is taller than the visible viewport, allow scrolling to its edge before jumping
  if (rect.height > viewH - headerH + 24) {
    if (deltaY > 0 && rect.bottom > viewH + 14) {
      return true;
    }
    if (deltaY < 0 && rect.top < headerH - 14) {
      return true;
    }
  }
  return false;
}

window.addEventListener('wheel', (e) => {
  if (document.body.classList.contains('modal-open')) return;
  if (e.target.closest('#terroirMap') || e.target.closest('.modal')) return;
  if (Math.abs(e.deltaY) < 12) return;

  const sections = getSnapSections();
  if (!sections.length) return;

  const activeIdx = detectCurrentSectionIndex();
  const activeSection = sections[activeIdx];

  if (canSectionScrollInternally(activeSection, e.deltaY)) {
    return;
  }

  e.preventDefault();
  if (isSectionAnimating) return;

  const dir = e.deltaY > 0 ? 1 : -1;
  const nextIdx = Math.max(0, Math.min(sections.length - 1, activeIdx + dir));
  if (nextIdx !== activeIdx) {
    scrollToSectionIndex(nextIdx);
  }
}, { passive: false });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeWineModal();
    closeMenu();
    return;
  }

  if (document.body.classList.contains('modal-open')) return;
  const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
  if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

  if (e.key === 'ArrowDown' || e.key === 'PageDown') {
    const sections = getSnapSections();
    const activeIdx = detectCurrentSectionIndex();
    if (!canSectionScrollInternally(sections[activeIdx], 1)) {
      e.preventDefault();
      if (!isSectionAnimating && activeIdx < sections.length - 1) {
        scrollToSectionIndex(activeIdx + 1);
      }
    }
  } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    const sections = getSnapSections();
    const activeIdx = detectCurrentSectionIndex();
    if (!canSectionScrollInternally(sections[activeIdx], -1)) {
      e.preventDefault();
      if (!isSectionAnimating && activeIdx > 0) {
        scrollToSectionIndex(activeIdx - 1);
      }
    }
  }
});

let parallaxTicking = false;
function updateParallax() {
  const scrollY = window.scrollY;
  document.getElementById('siteHeader').classList.toggle('scrolled', scrollY > 12);

  if (!isSectionAnimating) {
    const idx = detectCurrentSectionIndex();
    currentSectionIndex = idx;
    const sections = getSnapSections();
    if (sections[idx]) {
      updateActiveDots(sections[idx].id);
    }
  }

  // Hero background parallax
  const heroImg = document.querySelector('[data-parallax-hero]');
  if (heroImg && scrollY < window.innerHeight * 1.4) {
    const heroOffset = Math.min(140, scrollY * 0.34);
    heroImg.style.setProperty('--hero-parallax', `${heroOffset.toFixed(1)}px`);
  }

  // Multi-element section parallax
  const viewportCenter = window.innerHeight / 2;
  document.querySelectorAll('[data-parallax]').forEach(el => {
    const speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
    const rect = el.getBoundingClientRect();
    const elCenter = rect.top + rect.height / 2;
    const distFromCenter = elCenter - viewportCenter;
    const offset = Math.max(-48, Math.min(48, distFromCenter * speed));
    el.style.setProperty('--parallax-y', `${offset.toFixed(1)}px`);
  });

  parallaxTicking = false;
}

window.addEventListener('scroll', () => {
  if (!parallaxTicking) {
    window.requestAnimationFrame(updateParallax);
    parallaxTicking = true;
  }
}, { passive: true });

window.addEventListener('DOMContentLoaded', () => {
  updateQtyUI();
  syncFormRequirements();
  initTerroirMap();
  updateParallax();
});