let currentLang = 'sl';
let wineQty = 1;
let currentModalKey = null;

const itemData = {
  zvrst: {
    orderLabel: {
      sl: 'Bela zvrst',
      en: 'House White Blend',
      it: 'Uvaggio Bianco della Casa'
    },
    sl: {
      cat: 'Vipavska dolina, suho belo vino (na liter)',
      title: 'Hišna bela zvrst',
      desc: 'Naše vino je zvrst vseh treh sort iz obeh vinogradov v Oševljeku: Malvazije, Rebule in Vitovske grganje, ki jo ročno potrgamo, združimo v eno belo zvrst ter točimo na liter v naši vinski kleti.',
      specs: [
        ['Sorte', 'Malvazija, Rebula, Vitovska grganja'],
        ['Vinogradi', 'Spodnji in zgornji vinograd v Oševljeku'],
        ['Prodaja', 'Odprto vino na liter (prevzem v vinski kleti)'],
        ['Trgatev', 'Ročna trgatev'],
        ['K hrani', 'Domače suhomesnine, napolitanske pice, bela riba']
      ]
    },
    en: {
      cat: 'Vipava Valley, dry white wine (by the liter)',
      title: 'House White Blend',
      desc: 'Our wine blends all three varietals from both Oševljek vineyards: Malvazija, Rebula, and Vitovska Grganja, harvested by hand, blended into one white wine, and poured by the liter in our wine cellar.',
      specs: [
        ['Varietals', 'Malvazija, Rebula, Vitovska Grganja'],
        ['Vineyards', 'Lower and upper parcels in Oševljek'],
        ['Format', 'Poured by the liter (cellar pickup)'],
        ['Harvest', 'Hand-harvested'],
        ['Food pairing', 'Homemade cured meats, Neapolitan pizza, white fish']
      ]
    },
    it: {
      cat: 'Valle del Vipacco, vino bianco secco (a litro)',
      title: 'Uvaggio Bianco della Casa',
      desc: 'Il nostro vino unisce tutte e tre le varietà dei nostri due vigneti a Oševljek: Malvasia, Ribolla Gialla e Vitovska Grganja, vendemmiate a mano, unite in un unico uvaggio bianco e servite sfuse a litro nella nostra cantina.',
      specs: [
        ['Vitigni', 'Malvasia, Ribolla Gialla, Vitovska Grganja'],
        ['Vigneti', 'Vigneto inferiore e superiore a Oševljek'],
        ['Vendita', 'Vino sfuso a litro (ritiro in cantina)'],
        ['Vendemmia', 'Vendemmia manuale'],
        ['Abbinamenti', 'Salumi fatti in casa, pizza napoletana, pesce bianco']
      ]
    }
  },
  suhomesnine: {
    orderLabel: {
      sl: 'Domače suhomesnine',
      en: 'Homemade Cured Meats',
      it: 'Salumi Fatti in Casa'
    },
    sl: {
      cat: 'Iz domače zorilnice v kleti',
      title: 'Domače suhomesnine',
      desc: 'Do pred nekaj leti smo prašiče redili sami, danes pa jih kupimo, zakoljemo in mesnine pripravimo na Dolenjskem. Pršut, šalam in panceto nato sušimo in zorimo v domači kleti v Oševljeku, pripravimo pa tudi sladke klobase in krodegine za kuhanje.',
      specs: [
        ['Suhe mesnine (zorene v kleti)', 'Pršut, šalam, panceta'],
        ['Za kuhanje', 'Sladke klobase in tradicionalne krodegine'],
        ['Priprava mesa', 'Prašiči in priprava mesnin na Dolenjskem'],
        ['Zorenje', 'Sušenje in zorenje v domači kleti v Oševljeku'],
        ['Nakup', 'Po predhodnem dogovoru ali ob degustaciji v kleti']
      ]
    },
    en: {
      cat: 'Cellar-aged pork delicacies',
      title: 'Homemade Cured Meats',
      desc: 'Until a few years ago we raised our own pigs; today we buy and slaughter them and prepare the meats in Dolenjska. We then dry and age prosciutto, šalam, and pancetta in our home cellar in Oševljek, and also make sladke klobase and krodegine sausages for cooking.',
      specs: [
        ['Cured cuts (cellar-aged)', 'Prosciutto, šalam, pancetta'],
        ['For cooking', 'Sladke klobase and traditional krodegine sausages'],
        ['Preparation', 'Pigs sourced and meats prepared in Dolenjska'],
        ['Aging', 'Dried and aged in our cellar in Oševljek'],
        ['Availability', 'By prior inquiry or during cellar tastings']
      ]
    },
    it: {
      cat: 'Stagionati nella nostra cantina',
      title: 'Salumi Fatti in Casa',
      desc: 'Fino a qualche anno fa allevavamo i maiali noi stessi; oggi li acquistiamo, macelliamo e prepariamo le carni nella Dolenjska. Asciugiamo e stagioniamo poi prosciutto crudo, salame (šalam) e pancetta nella nostra cantina a Oševljek, oltre a preparare salsicce (sladke klobase) e cotechini (krodegine) da cuocere.',
      specs: [
        ['Salumi stagionati in cantina', 'Prosciutto crudo, salame (šalam), pancetta'],
        ['Da cuocere', 'Salsicce dolci (sladke klobase) e cotechini (krodegine)'],
        ['Preparazione', 'Maiali e lavorazione delle carni nella Dolenjska'],
        ['Stagionatura', 'Asciugatura e stagionatura nella cantina a Oševljek'],
        ['Acquisto', 'Su prenotazione o durante le degustazioni in cantina']
      ]
    }
  },
  pice: {
    orderLabel: {
      sl: 'Degustacija z napolitanskimi picami',
      en: 'Tasting with Neapolitan pizza',
      it: 'Degustazione con pizze napoletane'
    },
    sl: {
      cat: 'Ob najavljenih obiskih vinske kleti',
      title: 'Napolitanske pice iz vrtljive peči',
      desc: 'Za goste ob degustacijah v vinski kleti v naši električni vrtljivi peči pečemo sveže napolitanske pice, obložene tudi z našo panceto, šalamom ali pršutom.',
      specs: [
        ['Peč', 'Električna vrtljiva peč za pico'],
        ['Slog', 'Napolitanska pica'],
        ['Obloge', 'Klasične sestavine in naše domače mesnine'],
        ['Kdaj', 'Po predhodnem dogovoru za skupine v kleti'],
        ['K vinu', 'Postrežemo z našo belo zvrstjo']
      ]
    },
    en: {
      cat: 'Scheduled wine cellar visits',
      title: 'Neapolitan Pizza',
      desc: 'During scheduled wine cellar visits, we bake fresh Neapolitan pizzas in our rotating electric oven, often topped with our own pancetta, šalam, or prosciutto.',
      specs: [
        ['Oven', 'Rotating electric pizza oven'],
        ['Style', 'Neapolitan pizza'],
        ['Toppings', 'Classic toppings and our homemade cured meats'],
        ['Availability', 'By prior reservation for cellar groups'],
        ['Pairing', 'Served alongside our house white blend']
      ]
    },
    it: {
      cat: 'Visite in cantina su prenotazione',
      title: 'Pizze Napoletane dal Forno Rotante',
      desc: 'Durante le degustazioni in cantina sforniamo per gli ospiti pizze napoletane fresche nel nostro forno elettrico rotante, farcite anche con la nostra pancetta, salame o prosciutto crudo.',
      specs: [
        ['Forno', 'Forno elettrico rotante per pizza'],
        ['Stile', 'Pizza napoletana'],
        ['Farciture', 'Ingredienti classici e i nostri salumi fatti in casa'],
        ['Quando', 'Su prenotazione per gruppi in cantina'],
        ['Abbinamento', 'Servite con il nostro uvaggio bianco della casa']
      ]
    }
  }
};

function getLiterUnitWord(qty, lang = currentLang) {
  const n = Math.max(1, parseInt(qty, 10) || 1);
  if (lang === 'en') {
    return n === 1 ? 'liter' : 'liters';
  }
  if (lang === 'it') {
    return n === 1 ? 'litro' : 'litri';
  }
  const mod100 = n % 100;
  if (mod100 === 1) return 'liter';
  if (mod100 === 2) return 'litra';
  if (mod100 === 3 || mod100 === 4) return 'litri';
  return 'litrov';
}

function getOrderPrefix(lang = currentLang) {
  if (lang === 'en') return 'Order inquiry: ';
  if (lang === 'it') return 'Richiesta d\'ordine: ';
  return 'Povpraševanje za nakup: ';
}

function formatWineOrderLabel(qty = wineQty, lang = currentLang) {
  const n = Math.max(1, parseInt(qty, 10) || 1);
  const unit = getLiterUnitWord(n, lang);
  const wineName = itemData.zvrst.orderLabel[lang] || itemData.zvrst.orderLabel.sl;
  return `${wineName} (${n} ${unit})`;
}

function updateQtyUI() {
  const unitText = getLiterUnitWord(wineQty, currentLang);
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
  wineQty = isNaN(parsed) || parsed < 1 ? 1 : Math.min(500, parsed);
  updateQtyUI();

  if (updateNotesIfOrder) {
    const notes = document.getElementById('bNotes');
    if (!notes) return;
    const label = formatWineOrderLabel(wineQty, currentLang);
    const pattern = /(Bela zvrst|Hišna bela zvrst|House White Blend|Uvaggio Bianco della Casa)\s*\(\d+\s*[^)]+\)/i;
    if (pattern.test(notes.value)) {
      notes.value = notes.value.replace(pattern, label);
    } else if (!notes.value.trim()) {
      notes.value = `${getOrderPrefix(currentLang)}${label}`;
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
  const btnSl = document.getElementById('btnSl');
  const btnEn = document.getElementById('btnEn');
  const btnIt = document.getElementById('btnIt');
  if (btnSl) btnSl.classList.toggle('active', lang === 'sl');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  if (btnIt) btnIt.classList.toggle('active', lang === 'it');

  document.querySelectorAll('[data-sl]').forEach(el => {
    const translated = el.getAttribute('data-' + lang) || el.getAttribute('data-sl');
    if (translated !== null) {
      el.textContent = translated;
    }
  });

  document.querySelectorAll('[data-ph-sl]').forEach(el => {
    const ph = el.getAttribute('data-ph-' + lang) || el.getAttribute('data-ph-sl');
    if (ph !== null) {
      el.placeholder = ph;
    }
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
  const info = item[currentLang] || item.sl;
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
      const label = (item.orderLabel && item.orderLabel[currentLang]) || item.orderLabel.sl;
      preselectOrder(label);
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
      if (currentLang === 'en') {
        dateLabel.textContent = 'Cellar pickup date (optional)';
      } else if (currentLang === 'it') {
        dateLabel.textContent = 'Data di ritiro in cantina (opzionale)';
      } else {
        dateLabel.textContent = 'Datum prevzema v kleti (neobvezno)';
      }
    } else {
      if (currentLang === 'en') {
        dateLabel.textContent = 'Visit or pickup date';
      } else if (currentLang === 'it') {
        dateLabel.textContent = 'Data di visita o ritiro';
      } else {
        dateLabel.textContent = 'Datum obiska ali prevzema';
      }
    }
  }

  // Ko izbereš nakup vina ali suhomesnin, odstrani število oseb
  if (guestsGroup) {
    guestsGroup.style.display = isOrder ? 'none' : '';
  }
  if (guestsSelect) {
    guestsSelect.disabled = isOrder;
  }

  // Pokaži selector za količino litrov ob nakupu
  if (orderQtyGroup) {
    orderQtyGroup.style.display = isOrder ? '' : 'none';
  }
}

function preselectOrder(itemLabel, isWineWithQty = false) {
  let finalLabel = itemLabel;
  if (itemLabel === 'Domače suhomesnine' && itemData.suhomesnine.orderLabel[currentLang]) {
    finalLabel = itemData.suhomesnine.orderLabel[currentLang];
  }

  const pkgSelect = document.getElementById('bPackage');
  pkgSelect.value = 'order';
  syncFormRequirements();

  const notes = document.getElementById('bNotes');
  const prefix = getOrderPrefix(currentLang);
  const winePattern = /(Bela zvrst|Hišna bela zvrst|House White Blend|Uvaggio Bianco della Casa)\s*\(\d+\s*[^)]+\)/i;

  if (isWineWithQty && winePattern.test(notes.value)) {
    notes.value = notes.value.replace(winePattern, finalLabel);
  } else {
    notes.value = notes.value ? `${notes.value}, ${finalLabel}` : `${prefix}${finalLabel}`;
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
   Google Maps View (Vinska klet Oševljek 14 & Both Vineyards)
   ========================================== */
let terroirMap = null;
let googleSatLayer = null;
let googleRoadLayer = null;
let mapMarkers = {};
let mapBoundsGroup = null;

const mapLocations = {
  house: {
    coords: [45.88042, 13.69613],
    polygon: [
      [45.88058, 13.69610],
      [45.88055, 13.69629],
      [45.88041, 13.69637],
      [45.88030, 13.69635],
      [45.88029, 13.69617],
      [45.88030, 13.69594],
      [45.88039, 13.69593],
      [45.88054, 13.69602]
    ],
    color: '#B84A27',
    zoom: 18,
    sl: {
      short: 'Vinska klet (Oševljek 14)',
      title: 'Vinska klet Skomina — Oševljek 14',
      desc: 'Oševljek 14, 5292 Renče. Družinska vinska klet Vina Skomina, zorilnica suhomesnin in vrtljiva peč za napolitanske pice.'
    },
    en: {
      short: 'Wine cellar (Oševljek 14)',
      title: 'Skomina Wine Cellar — Oševljek 14',
      desc: 'Oševljek 14, 5292 Renče. Vina Skomina family wine cellar, curing room, and rotating pizza oven.'
    },
    it: {
      short: 'Cantina (Oševljek 14)',
      title: 'Cantina Skomina — Oševljek 14',
      desc: 'Oševljek 14, 5292 Renče. Cantina di famiglia Vina Skomina, locale di stagionatura dei salumi e forno rotante per pizze napoletane.'
    }
  },
  lower: {
    coords: [45.87809, 13.69629],
    polygon: [
      [45.87841, 13.69621],
      [45.87831, 13.69638],
      [45.87822, 13.69646],
      [45.87804, 13.69656],
      [45.87793, 13.69654],
      [45.87779, 13.69645],
      [45.87774, 13.69631],
      [45.87789, 13.69620],
      [45.87799, 13.69616],
      [45.87814, 13.69607],
      [45.87824, 13.69604],
      [45.87839, 13.69612]
    ],
    color: '#2E7D47',
    zoom: 18,
    sl: {
      short: 'Spodnji vinograd',
      title: 'Spodnji vinograd (pod vasjo)',
      desc: 'Odprta sončna lega tik ob cesti pod vasjo Oševljek, zračena z vipavsko burjo na flišnih tleh.'
    },
    en: {
      short: 'Lower vineyard',
      title: 'Lower Vineyard (below village)',
      desc: 'Open sunlit parcel right alongside the road below Oševljek village, cooled by the Vipava bora wind.'
    },
    it: {
      short: 'Vigneto inferiore',
      title: 'Vigneto inferiore (sotto il borgo)',
      desc: 'Parcella soleggiata lungo la strada sotto il borgo di Oševljek, ventilata dalla bora del Vipacco su terreni di flysch.'
    }
  },
  upper: {
    coords: [45.87650, 13.69690],
    polygon: [
      [45.87672, 13.69667],
      [45.87668, 13.69686],
      [45.87663, 13.69704],
      [45.87657, 13.69716],
      [45.87647, 13.69728],
      [45.87637, 13.69731],
      [45.87633, 13.69709],
      [45.87626, 13.69686],
      [45.87628, 13.69677],
      [45.87643, 13.69667],
      [45.87653, 13.69656],
      [45.87665, 13.69657]
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
    },
    it: {
      short: 'Vigneto superiore (radura)',
      title: 'Vigneto superiore (radura nel bosco)',
      desc: 'Parcella riparata in una tranquilla radura boschiva verso il ciglione carsico, dove il flysch incontra il calcare.'
    }
  }
};

function createPinIcon(locKey) {
  const loc = mapLocations[locKey];
  const info = loc[currentLang] || loc.sl;
  return L.divIcon({
    className: 'custom-map-pin-container',
    html: `<div class="custom-map-pin"><span class="pin-badge" style="background:${loc.color}"></span><span>${info.short}</span></div>`,
    iconSize: null,
    iconAnchor: [0, 0],
    popupAnchor: [0, -14]
  });
}

function createPopupHTML(locKey) {
  const loc = mapLocations[locKey];
  const info = loc[currentLang] || loc.sl;
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${loc.coords[0]},${loc.coords[1]}`;
  let linkText = 'Odpri v Google Maps ↗';
  if (currentLang === 'en') linkText = 'Open in Google Maps ↗';
  if (currentLang === 'it') linkText = 'Apri in Google Maps ↗';
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
    mapEl.innerHTML = `<iframe title="Google Maps Oševljek 14" width="100%" height="100%" style="border:0" loading="lazy" allowfullscreen src="https://maps.google.com/maps?q=45.88042,13.69613&t=k&z=16&ie=UTF8&iwloc=&output=embed"></iframe>`;
    return;
  }

  terroirMap = L.map('terroirMap', {
    center: [45.8784, 13.6964],
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
        weight: 2.4,
        fillColor: loc.color,
        fillOpacity: 0.3
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
   Strict 1-Gesture = 1-Section Jump Scrolling & Parallax (Desktop Only)
   ========================================== */
const snapSectionIds = ['domov', 'zgodba', 'terroir', 'vina', 'degustacije', 'kontakt'];
let currentSectionIndex = 0;
let isSectionAnimating = false;
let wheelGestureLocked = false;
let animUnlockTimer = null;
let wheelQuietTimer = null;
let lastWheelDeltaAbs = 0;
let lastWheelTime = 0;

function isDesktopScrollMode() {
  return window.innerWidth > 960 && window.matchMedia('(pointer: fine)').matches;
}

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
  clearTimeout(animUnlockTimer);
  animUnlockTimer = setTimeout(() => {
    isSectionAnimating = false;
  }, 820);

  updateActiveDots(targetEl.id);
  targetEl.scrollIntoView({ behavior: 'smooth', block: targetEl.tagName === 'FOOTER' ? 'end' : 'start' });
}

function scrollToSection(e, id) {
  if (e) e.preventDefault();
  if (!isDesktopScrollMode()) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
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
  const probeY = window.scrollY + headerH + window.innerHeight * 0.35;

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

  // Allow internal scroll only when a section is taller than the viewport on smaller screens
  if (rect.height > viewH - headerH + 36) {
    if (deltaY > 0 && rect.bottom > viewH + 18) {
      return true;
    }
    if (deltaY < 0 && rect.top < headerH - 18) {
      return true;
    }
  }
  return false;
}

window.addEventListener('wheel', (e) => {
  // On phone/tablet, use default native scroll
  if (!isDesktopScrollMode()) return;
  if (document.body.classList.contains('modal-open')) return;
  if (e.target.closest('#terroirMap') || e.target.closest('.modal')) return;

  const sections = getSnapSections();
  if (!sections.length) return;

  const activeSection = sections[currentSectionIndex] || sections[detectCurrentSectionIndex()];

  if (canSectionScrollInternally(activeSection, e.deltaY)) {
    return;
  }

  // Always block native wheel scroll on desktop so browser momentum never skips multiple sections
  e.preventDefault();

  const absDelta = Math.abs(e.deltaY);
  const now = performance.now();

  // Keep gesture locked as long as wheel/trackpad inertia events keep arriving
  clearTimeout(wheelQuietTimer);
  wheelQuietTimer = setTimeout(() => {
    wheelGestureLocked = false;
    lastWheelDeltaAbs = 0;
  }, 240);

  if (absDelta < 4) return;

  // Do not allow another section jump until BOTH the animation finished AND the wheel gesture ended
  if (isSectionAnimating || wheelGestureLocked) {
    lastWheelDeltaAbs = absDelta;
    lastWheelTime = now;
    return;
  }

  wheelGestureLocked = true;
  lastWheelDeltaAbs = absDelta;
  lastWheelTime = now;

  const dir = e.deltaY > 0 ? 1 : -1;
  const baseIdx = detectCurrentSectionIndex();
  const nextIdx = Math.max(0, Math.min(sections.length - 1, baseIdx + dir));
  if (nextIdx !== baseIdx) {
    scrollToSectionIndex(nextIdx);
  }
}, { passive: false });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeWineModal();
    closeMenu();
    return;
  }

  if (!isDesktopScrollMode()) return;
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

  // Disable parallax and section tracking on mobile/tablet
  if (!isDesktopScrollMode()) {
    const heroImg = document.querySelector('[data-parallax-hero]');
    if (heroImg) heroImg.style.removeProperty('--hero-parallax');
    document.querySelectorAll('[data-parallax]').forEach(el => {
      el.style.removeProperty('--parallax-y');
    });
    parallaxTicking = false;
    return;
  }

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

window.addEventListener('resize', () => {
  updateParallax();
});

window.addEventListener('DOMContentLoaded', () => {
  currentSectionIndex = detectCurrentSectionIndex();
  updateQtyUI();
  syncFormRequirements();
  initTerroirMap();
  updateParallax();
});