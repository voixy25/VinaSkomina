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
      cat: 'Vipavska dolina, suho belo vino',
      title: 'Hišna bela zvrst',
      desc: 'Naše vino je zvrst vseh treh sort iz obeh vinogradov v Oševljeku: Malvazije, Rebule in Vitovske grganje, ki jo ročno potrgamo, združimo v eno belo zvrst ter točimo na liter v naši vinski kleti.',
      specs: [
        ['Sorte', 'Malvazija, Rebula, Vitovska grganja'],
        ['Profil vina', 'Suho, sveže, mineralno belo vino (1 hišna zvrst)'],
        ['Vinogradi', 'Spodnji in zgornji vinograd v Oševljeku'],
        ['Prodaja', 'Vino na liter (prevzem v vinski kleti)'],
        ['Trgatev', 'Ročna trgatev'],
        ['K hrani', 'Domače suhomesnine, napolitanske pice, bela riba']
      ],
      prices: [
        ['Bela zvrst (na liter)', 'Po dogovoru'],
        ['Večje količine (10 L+)', 'Po dogovoru']
      ]
    },
    en: {
      cat: 'Vipava Valley, dry white wine',
      title: 'House White Blend',
      desc: 'Our wine blends all three varietals from both Oševljek vineyards: Malvazija, Rebula, and Vitovska Grganja, harvested by hand, blended into one white wine, and poured by the liter in our wine cellar.',
      specs: [
        ['Varietals', 'Malvazija, Rebula, Vitovska Grganja'],
        ['Tasting profile', 'Dry, fresh, mineral white wine (1 house blend)'],
        ['Vineyards', 'Lower and upper parcels in Oševljek'],
        ['Format', 'Poured by the liter (cellar pickup)'],
        ['Harvest', 'Hand-harvested'],
        ['Food pairing', 'Homemade cured meats, Neapolitan pizza, white fish']
      ],
      prices: [
        ['House white blend (per liter)', 'By arrangement'],
        ['Larger quantities (10 L+)', 'By arrangement']
      ]
    },
    it: {
      cat: 'Valle del Vipacco, vino bianco secco',
      title: 'Uvaggio Bianco della Casa',
      desc: 'Il nostro vino unisce tutte e tre le varietà dei nostri due vigneti a Oševljek: Malvasia, Ribolla Gialla e Vitovska Grganja, vendemmiate a mano, unite in un unico uvaggio bianco e servite sfuse a litro nella nostra cantina.',
      specs: [
        ['Vitigni', 'Malvasia, Ribolla Gialla, Vitovska Grganja'],
        ['Profilo', 'Vino bianco secco, fresco e minerale (1 uvaggio della casa)'],
        ['Vigneti', 'Vigneto inferiore e superiore a Oševljek'],
        ['Vendita', 'Vino sfuso a litro (ritiro in cantina)'],
        ['Vendemmia', 'Vendemmia manuale'],
        ['Abbinamenti', 'Salumi fatti in casa, pizza napoletana, pesce bianco']
      ],
      prices: [
        ['Uvaggio bianco (al litro)', 'Su accordo'],
        ['Quantità maggiori (10 L+)', 'Su accordo']
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
      cat: 'Dolgoletna tradicionalna receptura',
      title: 'Domače suhomesnine',
      desc: 'Do pred nekaj leti smo prašiče redili sami, danes pa jih kupimo, zakoljemo in mesnine pripravimo na Dolenjskem. Pršut, šalam in panceto nato sušimo in zorimo v domači kleti v Oševljeku, pripravimo pa tudi sladke klobase in krodegine za kuhanje.',
      specs: [
        ['Suhe mesnine (zorene v kleti)', 'Pršut, šalam, panceta'],
        ['Za kuhanje', 'Sladke klobase in tradicionalne krodegine'],
        ['Priprava mesa', 'Prašiči in priprava mesnin na Dolenjskem'],
        ['Zorenje', 'Sušenje in zorenje v domači kleti v Oševljeku'],
        ['Nakup', 'Po predhodnem dogovoru ali ob degustaciji v kleti']
      ],
      prices: [
        ['Pršut (na kg / kos)', 'Po dogovoru'],
        ['Šalam (na kos)', 'Po dogovoru'],
        ['Panceta (na kg / kos)', 'Po dogovoru'],
        ['Sladke klobase (na par)', 'Po dogovoru'],
        ['Krodegine (na par)', 'Po dogovoru']
      ]
    },
    en: {
      cat: 'Longstanding traditional recipe',
      title: 'Homemade Cured Meats',
      desc: 'Until a few years ago we raised our own pigs; today we buy and slaughter them and prepare the meats in Dolenjska. We then dry and age prosciutto, šalam, and pancetta in our home cellar in Oševljek, and also make sladke klobase and krodegine sausages for cooking.',
      specs: [
        ['Cured cuts (cellar-aged)', 'Prosciutto, šalam, pancetta'],
        ['For cooking', 'Sladke klobase and traditional krodegine sausages'],
        ['Preparation', 'Pigs sourced and meats prepared in Dolenjska'],
        ['Aging', 'Dried and aged in our cellar in Oševljek'],
        ['Availability', 'By prior inquiry or during cellar tastings']
      ],
      prices: [
        ['Prosciutto (per kg / piece)', 'By arrangement'],
        ['Šalam salami (per piece)', 'By arrangement'],
        ['Pancetta (per kg / piece)', 'By arrangement'],
        ['Sladke klobase (per pair)', 'By arrangement'],
        ['Krodegine (per pair)', 'By arrangement']
      ]
    },
    it: {
      cat: 'Ricetta tradizionale di lunga data',
      title: 'Salumi Fatti in Casa',
      desc: 'Fino a qualche anno fa allevavamo i maiali noi stessi; oggi li acquistiamo, macelliamo e prepariamo le carni nella Dolenjska. Asciugiamo e stagioniamo poi prosciutto crudo, salame (šalam) e pancetta nella nostra cantina a Oševljek, oltre a preparare salsicce (sladke klobase) e cotechini (krodegine) da cuocere.',
      specs: [
        ['Salumi stagionati in cantina', 'Prosciutto crudo, salame (šalam), pancetta'],
        ['Da cuocere', 'Salsicce dolci (sladke klobase) e cotechini (krodegine)'],
        ['Preparazione', 'Maiali e lavorazione delle carni nella Dolenjska'],
        ['Stagionatura', 'Asciugatura e stagionatura nella cantina a Oševljek'],
        ['Acquisto', 'Su prenotazione o durante le degustazioni in cantina']
      ],
      prices: [
        ['Prosciutto crudo (al kg / pezzo)', 'Su accordo'],
        ['Salame šalam (al pezzo)', 'Su accordo'],
        ['Pancetta (al kg / pezzo)', 'Su accordo'],
        ['Salsicce dolci (al paio)', 'Su accordo'],
        ['Cotechini krodegine (al paio)', 'Su accordo']
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
      ],
      prices: [
        ['Klasična napolitanska pica (na pico)', 'Po dogovoru'],
        ['Pica z našimi mesninami (na pico)', 'Po dogovoru'],
        ['Degustacija s picami (na osebo)', 'Po dogovoru']
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
      ],
      prices: [
        ['Classic Neapolitan pizza (per pizza)', 'By arrangement'],
        ['Pizza with cured meats (per pizza)', 'By arrangement'],
        ['Pizza tasting menu (per person)', 'By arrangement']
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
      ],
      prices: [
        ['Pizza napoletana classica (a pizza)', 'Su accordo'],
        ['Pizza con i nostri salumi (a pizza)', 'Su accordo'],
        ['Menu degustazione con pizza (a persona)', 'Su accordo']
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

function formatWineOrderLabel(qty = wineQty, lang = currentLang) {
  const n = Math.max(1, parseInt(qty, 10) || 1);
  const wineName = itemData.zvrst.orderLabel[lang] || itemData.zvrst.orderLabel.sl;
  return `${wineName}, ${n} L`;
}

function updateQtyUI() {
  const unitText = getLiterUnitWord(wineQty, currentLang);
  const cardInput = document.getElementById('cardWineQty');
  const modalInput = document.getElementById('modalWineQty');
  const cardUnit = document.getElementById('cardWineQtyUnit');
  const modalUnit = document.getElementById('modalWineQtyUnit');

  if (cardInput) cardInput.value = wineQty;
  if (modalInput) modalInput.value = wineQty;
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
    const pattern = /(Bela zvrst|Hišna bela zvrst|House White Blend|Uvaggio Bianco della Casa)(?:,\s*\d+\s*L|\s*\(\d+\s*[^)]+\))/i;
    if (pattern.test(notes.value)) {
      notes.value = notes.value.replace(pattern, label);
    } else if (!notes.value.trim()) {
      notes.value = label;
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

  const seoByLang = {
    sl: {
      title: 'Degustacija vin v Vipavski dolini | Vina Skomina',
      desc: 'Doživite degustacijo domačega vina, suhomesnin in sveže pečenih napolitanskih pic v družinski vinski kleti Skomina v Vipavski dolini. Rezervirajte obisk.'
    },
    en: {
      title: 'Wine Tasting in Vipava Valley | Vina Skomina',
      desc: 'Experience homemade white wine, cellar-aged cured meats, and freshly baked Neapolitan pizza at the Skomina family wine cellar in the Vipava Valley. Book your visit.'
    },
    it: {
      title: 'Degustazione di vini nella Valle del Vipacco | Vina Skomina',
      desc: 'Vivete una degustazione di vino della casa, salumi artigianali e pizze napoletane appena sfornate nella cantina di famiglia Skomina nella Valle del Vipacco. Prenotate una visita.'
    }
  };
  const seo = seoByLang[lang] || seoByLang.sl;
  document.title = seo.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', seo.desc);

  updateQtyUI();
  syncFormRequirements();
  updateMapLanguage();
}

function toggleMenu() {
  const nav = document.getElementById('mainNav');
  const btn = document.getElementById('menuToggleBtn');
  const isOpen = nav.classList.toggle('open');
  document.getElementById('siteHeader').classList.toggle('menu-open', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
  btn.textContent = isOpen ? '✕' : '☰';
}

function closeMenu() {
  const nav = document.getElementById('mainNav');
  const btn = document.getElementById('menuToggleBtn');
  nav.classList.remove('open');
  document.getElementById('siteHeader').classList.remove('menu-open');
  btn.setAttribute('aria-expanded', 'false');
  btn.textContent = '☰';
}

let lastFocusedElement = null;

function focusModalFirstElement(modalEl) {
  if (!modalEl) return;
  const focusable = modalEl.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
  if (focusable.length) {
    setTimeout(() => focusable[0].focus({ preventScroll: true }), 20);
  }
}

function trapModalFocus(e) {
  if (e.key !== 'Tab') return;
  const openModal = document.querySelector('.modal-backdrop.open .modal');
  if (!openModal) return;
  const focusable = Array.from(openModal.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(el => el.offsetParent !== null);
  if (!focusable.length) return;
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

function lockPageScroll() {
  document.documentElement.classList.add('modal-open');
  document.body.classList.add('modal-open');
}

function unlockPageScroll() {
  document.documentElement.classList.remove('modal-open');
  document.body.classList.remove('modal-open');
}

function openItemModal(key) {
  lastFocusedElement = document.activeElement;
  currentModalKey = key;
  const item = itemData[key];
  const info = item[currentLang] || item.sl;
  document.getElementById('mCategory').textContent = info.cat;
  document.getElementById('mTitle').textContent = info.title;
  document.getElementById('mDesc').textContent = info.desc;

  const infoHeadingEl = document.getElementById('mInfoHeading');
  const priceHeadingEl = document.getElementById('mPriceHeading');
  const colHeadings = {
    sl: { info: 'Informacije', price: 'Cenik' },
    en: { info: 'Details', price: 'Pricing' },
    it: { info: 'Informazioni', price: 'Prezzi' }
  };
  const h = colHeadings[currentLang] || colHeadings.sl;
  if (infoHeadingEl) infoHeadingEl.textContent = h.info;
  if (priceHeadingEl) priceHeadingEl.textContent = h.price;

  const specsEl = document.getElementById('mSpecs');
  specsEl.innerHTML = info.specs.map(([label, val]) =>
    `<div class="spec-row"><span>${label}</span><span>${val}</span></div>`
  ).join('');

  const pricesEl = document.getElementById('mPrices');
  if (pricesEl) {
    pricesEl.innerHTML = (info.prices || []).map(([label, val]) =>
      `<div class="spec-row"><span>${label}</span><span>${val}</span></div>`
    ).join('');
  }

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

  const modalBackdrop = document.getElementById('wineModal');
  modalBackdrop.classList.add('open');
  lockPageScroll();
  focusModalFirstElement(modalBackdrop);
}

function closeWineModal() {
  const modalBackdrop = document.getElementById('wineModal');
  if (!modalBackdrop || !modalBackdrop.classList.contains('open')) return;
  modalBackdrop.classList.remove('open');
  unlockPageScroll();
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus({ preventScroll: true });
    lastFocusedElement = null;
  }
}

function syncFormRequirements() {
  const pkgSelect = document.getElementById('bPackage');
  if (!pkgSelect) return;
  const pkg = pkgSelect.value;
  const isOrder = pkg === 'order';
  const isPizza = pkg === 'pizza';

  const dateInput = document.getElementById('bDate');
  const dateLabel = document.getElementById('bDateLabel');
  const dateGroup = document.getElementById('dateGroup');
  const guestsGroup = document.getElementById('guestsGroup');
  const guestsSelect = document.getElementById('bGuests');
  const phoneGroup = document.getElementById('phoneGroup');
  const requiredGrid = document.getElementById('requiredFormGrid');
  const optionalGrid = document.getElementById('optionalFormGrid');

  if (dateInput) {
    dateInput.required = !isOrder;
  }

  if (dateGroup && requiredGrid && optionalGrid) {
    if (isOrder) {
      if (phoneGroup && dateGroup.parentElement !== optionalGrid) {
        optionalGrid.insertBefore(dateGroup, phoneGroup);
      }
      if (phoneGroup) phoneGroup.classList.remove('full');
    } else {
      if (guestsGroup && dateGroup.parentElement !== requiredGrid) {
        requiredGrid.insertBefore(dateGroup, guestsGroup);
      }
      if (phoneGroup) phoneGroup.classList.add('full');
    }
  }

  if (dateLabel) {
    if (isOrder) {
      if (currentLang === 'en') {
        dateLabel.textContent = 'Cellar pickup date';
      } else if (currentLang === 'it') {
        dateLabel.textContent = 'Data di ritiro in cantina';
      } else {
        dateLabel.textContent = 'Datum prevzema v kleti';
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
    // Napolitanske pice so za skupine 4 - 15 oseb
    Array.from(guestsSelect.options).forEach(opt => {
      if (opt.value === '2' || opt.value === '3') {
        opt.disabled = isPizza;
      }
    });
    if (isPizza && (guestsSelect.value === '2' || guestsSelect.value === '3')) {
      guestsSelect.value = '4';
    }
  }
  if (dateInput) {
    dateInput.required = false;
  }
  if (typeof syncAirbnbSelects === 'function') syncAirbnbSelects();
  if (typeof syncAirbnbDateDisplay === 'function') syncAirbnbDateDisplay();
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
  const winePattern = /(Bela zvrst|Hišna bela zvrst|House White Blend|Uvaggio Bianco della Casa)(?:,\s*\d+\s*L|\s*\(\d+\s*[^)]+\))/i;

  if (isWineWithQty && winePattern.test(notes.value)) {
    notes.value = notes.value.replace(winePattern, finalLabel);
  } else {
    notes.value = notes.value ? `${notes.value}, ${finalLabel}` : finalLabel;
  }

  scrollToBooking();
  setTimeout(() => notes.focus({ preventScroll: true }), 550);
}

function selectPizzaVisit(e) {
  if (e) e.preventDefault();
  const pkgSelect = document.getElementById('bPackage');
  pkgSelect.value = 'pizza';
  syncFormRequirements();
  scrollToBooking();
}

function selectTastingPackage(pkg) {
  const pkgSelect = document.getElementById('bPackage');
  if (pkgSelect) {
    pkgSelect.value = pkg;
    syncFormRequirements();
  }
  if (!isDesktopScrollMode()) {
    scrollToBooking();
  }
  const nameInput = document.getElementById('bName');
  if (nameInput) {
    setTimeout(() => nameInput.focus({ preventScroll: true }), isDesktopScrollMode() ? 250 : 600);
  }
}

function openFaqModal() {
  const modal = document.getElementById('faqModal');
  if (!modal) return;
  lastFocusedElement = document.activeElement;
  modal.classList.add('open');
  lockPageScroll();
  focusModalFirstElement(modal);
}

function closeFaqModal() {
  const modal = document.getElementById('faqModal');
  if (!modal || !modal.classList.contains('open')) return;
  modal.classList.remove('open');
  unlockPageScroll();
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus({ preventScroll: true });
    lastFocusedElement = null;
  }
}

function getPersonalizedSuccessText(name, email) {
  const safeName = name || (currentLang === 'en' ? 'guest' : (currentLang === 'it' ? 'ospite' : 'gost'));
  if (currentLang === 'en') {
    return `Thank you, ${safeName}! We received your inquiry and will reply within 24 hours to ${email}. For urgent matters, call +386 31 728 563.`;
  }
  if (currentLang === 'it') {
    return `Grazie, ${safeName}! Abbiamo ricevuto la richiesta e risponderemo entro 24 ore a ${email}. Per urgenze chiamate +386 31 728 563.`;
  }
  return `Hvala, ${safeName}! Povpraševanje smo prejeli. Odgovorimo v 24 urah na ${email}. Za nujne zadeve pokličite +386 31 728 563.`;
}

async function handleBooking(e) {
  e.preventDefault();
  const form = e.target;
  const honey = (document.getElementById('bHoney')?.value || '').trim();
  if (honey) return;

  const pkgEl = document.getElementById('bPackage');
  const pkgValue = pkgEl ? pkgEl.value : 'meats';
  const rawDate = (document.getElementById('bDate')?.value || '').trim();
  if (pkgValue !== 'order' && !rawDate) {
    if (typeof openAirbnbCalendar === 'function') openAirbnbCalendar();
    document.getElementById('bDateBtn')?.focus();
    return;
  }

  const submitBtn = document.getElementById('bookingSubmitBtn');
  const successEl = document.getElementById('bookingSuccess');
  const originalBtnText = submitBtn ? submitBtn.textContent : '';

  const name = (document.getElementById('bName')?.value || '').trim();
  const email = (document.getElementById('bEmail')?.value || '').trim();
  const phone = (document.getElementById('bPhone')?.value || '').trim();
  const pkgLabel = pkgEl && pkgEl.selectedOptions[0] ? pkgEl.selectedOptions[0].textContent : pkgValue;
  const date = rawDate || '-';
  const guests = pkgValue === 'order' ? '-' : (document.getElementById('bGuests')?.value || '-');
  const orderQty = pkgValue === 'order' ? `${wineQty} L` : '-';
  const notes = (document.getElementById('bNotes')?.value || '').trim();

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'en' ? 'Sending...' : (currentLang === 'it' ? 'Invio in corso...' : 'Pošiljanje...');
  }

  const payload = {
    _subject: `Vina Skomina — ${pkgLabel} (${name})`,
    _replyto: email,
    _template: 'table',
    Ime_in_priimek: name,
    E_posta: email,
    Telefon: phone || '-',
    Vrsta_povprasevanja: pkgLabel,
    Datum: date,
    Stevilo_oseb: guests,
    Kolicina_vina: orderQty,
    Opombe: notes || '-',
    Jezik: currentLang.toUpperCase()
  };

  try {
    const res = await fetch('https://formsubmit.co/ajax/vina@skomina.si', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error('HTTP ' + res.status);

    if (successEl) {
      successEl.textContent = getPersonalizedSuccessText(name, email);
      successEl.style.display = 'block';
    }
    form.reset();
    wineQty = 1;
    updateQtyUI();
    syncFormRequirements();
  } catch (err) {
    // Fallback: open pre-filled email client so no inquiry is ever lost
    const bodyLines = [
      `Ime in priimek: ${name}`,
      `E-pošta: ${email}`,
      `Telefon: ${phone || '-'}`,
      `Vrsta: ${pkgLabel}`,
      `Datum: ${date}`,
      pkgValue === 'order' ? `Količina: ${orderQty}` : `Število oseb: ${guests}`,
      `Opombe: ${notes || '-'}`
    ].join('\n');
    window.location.href = `mailto:vina@skomina.si?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(bodyLines)}`;
    if (successEl) {
      successEl.textContent = getPersonalizedSuccessText(name, email);
      successEl.style.display = 'block';
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  }
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
      short: 'Vinska klet',
      title: 'Vinska klet Skomina — Oševljek 14',
      desc: 'Oševljek 14, 5292 Renče. Družinska vinska klet Vina Skomina, zorilnica suhomesnin in vrtljiva peč za napolitanske pice.'
    },
    en: {
      short: 'Wine cellar',
      title: 'Skomina Wine Cellar — Oševljek 14',
      desc: 'Oševljek 14, 5292 Renče. Vina Skomina family wine cellar, curing room, and rotating pizza oven.'
    },
    it: {
      short: 'Cantina',
      title: 'Cantina Skomina — Oševljek 14',
      desc: 'Oševljek 14, 5292 Renče. Cantina di famiglia Vina Skomina, locale di stagionatura dei salumi e forno rotante per pizze napoletane.'
    }
  },
  lower: {
    coords: [45.87802, 13.69624],
    polygon: [
      [45.87824, 13.69604],
      [45.87823, 13.69627],
      [45.87797, 13.69644],
      [45.87774, 13.69626]
    ],
    color: '#2E7D47',
    zoom: 18,
    sl: {
      short: 'Spodnji vinograd',
      title: 'Spodnji vinograd',
      desc: 'Odprta sončna lega tik ob cesti pod vasjo Oševljek, zračena z vipavsko burjo na flišnih tleh.'
    },
    en: {
      short: 'Lower vineyard',
      title: 'Lower Vineyard',
      desc: 'Open sunlit parcel right alongside the road below Oševljek village, cooled by the Vipava bora wind.'
    },
    it: {
      short: 'Vigneto inferiore',
      title: 'Vigneto inferiore',
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
      short: 'Zgornji vinograd',
      title: 'Zgornji vinograd',
      desc: 'Zavetni vinograd na mirni gozdni jasi višje proti kraškemu robu, kjer se fliš sreča z apnencem.'
    },
    en: {
      short: 'Upper vineyard',
      title: 'Upper Vineyard',
      desc: 'Sheltered parcel in a quiet forest clearing higher toward the Karst edge where flysch meets limestone.'
    },
    it: {
      short: 'Vigneto superiore',
      title: 'Vigneto superiore',
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
  let linkText = 'Odpri v Google Maps';
  if (currentLang === 'en') linkText = 'Open in Google Maps';
  if (currentLang === 'it') linkText = 'Apri in Google Maps';
  const extIcon = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter" style="vertical-align:-1px;margin-left:4px;" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
  return `
    <div style="min-width:190px;max-width:240px;">
      <strong style="display:block;font-size:0.9rem;color:#141813;margin-bottom:3px;">${info.title}</strong>
      <p style="font-size:0.78rem;color:#4E554B;margin:0 0 6px;">${info.desc}</p>
      <a href="${gmapsUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;font-size:0.75rem;font-weight:600;color:#234B2E;text-decoration:underline;">${linkText}${extIcon}</a>
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
const snapSectionIds = ['domov', 'zgodba', 'terroir', 'vina', 'degustacije'];
let currentSectionIndex = 0;
let isSectionAnimating = false;
let wheelGestureLocked = false;
let animUnlockTimer = null;
let wheelQuietTimer = null;
let scrollAnimRafId = null;
let lastStepTime = 0;

function isDesktopScrollMode() {
  return window.innerWidth > 960 && !window.matchMedia('(pointer: coarse)').matches;
}

function getSnapSections() {
  return snapSectionIds.map(id => document.getElementById(id)).filter(Boolean);
}

function updateActiveDots(activeId) {
  const dots = Array.from(document.querySelectorAll('.section-dot'));
  const activeIdx = dots.findIndex(dot => dot.getAttribute('data-target') === activeId);
  dots.forEach((dot, i) => {
    const isActive = dot.getAttribute('data-target') === activeId;
    dot.classList.toggle('active', isActive);
    dot.classList.toggle('passed', activeIdx >= 0 && i < activeIdx);
  });
  document.querySelectorAll('#mainNav ul a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
  });
}

function animateScrollToY(targetY, duration = 460) {
  if (scrollAnimRafId) {
    cancelAnimationFrame(scrollAnimRafId);
    scrollAnimRafId = null;
  }

  const startY = window.scrollY;
  const diff = targetY - startY;
  if (Math.abs(diff) < 2) {
    window.scrollTo({ top: targetY, behavior: 'instant' });
    isSectionAnimating = false;
    return;
  }

  const startTime = performance.now();
  isSectionAnimating = true;
  clearTimeout(animUnlockTimer);

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    window.scrollTo({ top: Math.round(startY + diff * eased), behavior: 'instant' });

    if (progress < 1) {
      scrollAnimRafId = requestAnimationFrame(step);
    } else {
      window.scrollTo({ top: targetY, behavior: 'instant' });
      scrollAnimRafId = null;
      requestAnimationFrame(() => {
        isSectionAnimating = false;
      });
    }
  }

  scrollAnimRafId = requestAnimationFrame(step);
  // Safety fallback in case rAF is throttled
  animUnlockTimer = setTimeout(() => {
    isSectionAnimating = false;
  }, duration + 120);
}

function scrollToSectionIndex(idx) {
  const sections = getSnapSections();
  if (!sections.length) return;
  const clampedIdx = Math.max(0, Math.min(sections.length - 1, idx));
  currentSectionIndex = clampedIdx;
  const targetEl = sections[clampedIdx];

  isSectionAnimating = true;
  updateActiveDots(targetEl.id);
  animateScrollToY(targetEl.offsetTop, 950);
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
    if (el) animateScrollToY(el.offsetTop, 950);
  }
}

function scrollToBooking(e) {
  if (e) e.preventDefault();
  if (!isDesktopScrollMode()) {
    const bookingEl = document.getElementById('bookingBox') || document.getElementById('bookingForm') || document.getElementById('degustacije');
    if (bookingEl) bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  scrollToSection(null, 'degustacije');
}

function navJump(e, id) {
  closeMenu();
  scrollToSection(e, id);
}

function detectCurrentSectionIndex() {
  const sections = getSnapSections();
  const probeY = window.scrollY + window.innerHeight * 0.45;

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
  const viewH = window.innerHeight;

  // Allow internal scroll only when a section is genuinely taller than the viewport (e.g. small laptop)
  if (rect.height > viewH + 24) {
    if (deltaY > 0 && rect.bottom > viewH + 18) {
      return true;
    }
    if (deltaY < 0 && rect.top < -18) {
      return true;
    }
  }
  return false;
}

window.addEventListener('touchmove', (e) => {
  if (document.body.classList.contains('modal-open') && !e.target.closest('.modal')) {
    e.preventDefault();
  }
}, { passive: false });

window.addEventListener('wheel', (e) => {
  if (document.body.classList.contains('modal-open')) {
    const modal = e.target.closest('.modal');
    if (!modal) {
      e.preventDefault();
      return;
    }
    const canScroll = modal.scrollHeight > modal.clientHeight + 1;
    if (!canScroll) {
      e.preventDefault();
      return;
    }
    const atTop = modal.scrollTop <= 0 && e.deltaY < 0;
    const atBottom = modal.scrollTop + modal.clientHeight >= modal.scrollHeight - 1 && e.deltaY > 0;
    if (atTop || atBottom) {
      e.preventDefault();
    }
    return;
  }
  // On phone/tablet, use default native scroll
  if (!isDesktopScrollMode()) return;
  if (e.target.closest('#terroirMap') || e.target.closest('.modal')) return;

  const sections = getSnapSections();
  if (!sections.length) return;

  // Unlock gesture 120ms after wheel/trackpad events stop
  clearTimeout(wheelQuietTimer);
  wheelQuietTimer = setTimeout(() => {
    wheelGestureLocked = false;
  }, 120);

  // Sync base index from actual scroll position when not mid-animation
  const baseIdx = isSectionAnimating ? currentSectionIndex : detectCurrentSectionIndex();
  currentSectionIndex = baseIdx;
  const activeSection = sections[baseIdx];

  if (!isSectionAnimating && canSectionScrollInternally(activeSection, e.deltaY)) {
    wheelGestureLocked = true;
    return;
  }

  // Block native wheel scroll so browser momentum never carries over multiple sections
  e.preventDefault();

  if (Math.abs(e.deltaY) < 4) return;
  if (isSectionAnimating || wheelGestureLocked) return;

  wheelGestureLocked = true;
  lastStepTime = performance.now();

  const dir = e.deltaY > 0 ? 1 : -1;
  const nextIdx = Math.max(0, Math.min(sections.length - 1, baseIdx + dir));
  if (nextIdx !== baseIdx) {
    scrollToSectionIndex(nextIdx);
  }
}, { passive: false });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeWineModal();
    closeFaqModal();
    closeMenu();
    if (typeof closeAllAirbnbPopovers === 'function') closeAllAirbnbPopovers();
    return;
  }

  if (document.body.classList.contains('modal-open')) {
    trapModalFocus(e);
    return;
  }

  if (!isDesktopScrollMode()) return;
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

let parallaxRafId = null;
const parallaxCurrent = new WeakMap();
let heroParallaxCurrent = 0;

function requestParallaxFrame() {
  if (!parallaxRafId) {
    parallaxRafId = window.requestAnimationFrame(updateParallax);
  }
}

function updateParallax() {
  parallaxRafId = null;
  const scrollY = window.scrollY;
  const header = document.getElementById('siteHeader');

  // Keep transparent header everywhere; when scrolled, apply dark blurred backdrop so underlying text is masked.
  if (header) {
    header.classList.add('nav-transparent');
    header.classList.toggle('scrolled', scrollY > 24);
  }

  // Floating sticky CTA & Back-to-Top button visibility
  const floatingCta = document.getElementById('floatingCta');
  const floatingOfferCta = document.getElementById('floatingOfferCta');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const vinaEl = document.getElementById('vina');
  const degustacijeEl = document.getElementById('degustacije');
  if (backToTopBtn) {
    backToTopBtn.classList.toggle('is-hidden', scrollY < window.innerHeight * 0.5);
  }
  if (floatingCta) {
    const inDegustacije = degustacijeEl
      ? degustacijeEl.getBoundingClientRect().top < window.innerHeight * 0.65
      : false;
    floatingCta.classList.toggle('is-hidden', inDegustacije);
  }
  if (floatingOfferCta) {
    const inOrPastVina = vinaEl
      ? vinaEl.getBoundingClientRect().top < window.innerHeight * 0.65
      : false;
    floatingOfferCta.classList.toggle('is-hidden', inOrPastVina);
  }

  // Disable parallax and section tracking on mobile/tablet
  if (!isDesktopScrollMode() || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const heroImg = document.querySelector('[data-parallax-hero]');
    if (heroImg) heroImg.style.removeProperty('--hero-parallax');
    document.querySelectorAll('.about-bg-img, .section-bg-img').forEach(img => {
      img.style.removeProperty('--bg-parallax');
    });
    document.querySelectorAll('[data-parallax]').forEach(el => {
      el.style.removeProperty('--parallax-y');
    });
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

  let needsMoreFrames = false;
  const lerpFactor = 0.045;

  // Hero background parallax (lerped)
  const heroImg = document.querySelector('[data-parallax-hero]');
  if (heroImg) {
    const heroTarget = scrollY < window.innerHeight * 1.4 ? Math.min(55, scrollY * 0.12) : 55;
    const diff = heroTarget - heroParallaxCurrent;
    if (Math.abs(diff) > 0.15) {
      heroParallaxCurrent += diff * lerpFactor;
      needsMoreFrames = true;
    } else {
      heroParallaxCurrent = heroTarget;
    }
    heroImg.style.setProperty('--hero-parallax', `${heroParallaxCurrent.toFixed(2)}px`);
  }

  // Section background images gentle glide parallax
  const viewH = window.innerHeight;
  const viewportCenter = viewH / 2;
  document.querySelectorAll('.about-bg-img, .section-bg-img').forEach(img => {
    const sec = img.parentElement;
    if (!sec) return;
    const rect = sec.getBoundingClientRect();
    const secCenter = rect.top + rect.height / 2;
    const target = Math.max(-22, Math.min(22, (secCenter - viewportCenter) * -0.045));
    const prev = parallaxCurrent.get(img) ?? target;
    const diff = target - prev;
    let next = target;
    if (Math.abs(diff) > 0.15) {
      next = prev + diff * lerpFactor;
      needsMoreFrames = true;
    }
    parallaxCurrent.set(img, next);
    img.style.setProperty('--bg-parallax', `${next.toFixed(2)}px`);
  });

  // Multi-element section parallax (lerped)
  document.querySelectorAll('[data-parallax]').forEach(el => {
    const speed = (parseFloat(el.getAttribute('data-parallax')) || 0.1) * 0.35;
    const rect = el.getBoundingClientRect();
    const elCenter = rect.top + rect.height / 2;
    const distFromCenter = elCenter - viewportCenter;
    const target = Math.max(-22, Math.min(22, distFromCenter * speed));
    const prev = parallaxCurrent.get(el) ?? target;
    const diff = target - prev;
    let next = target;
    if (Math.abs(diff) > 0.15) {
      next = prev + diff * lerpFactor;
      needsMoreFrames = true;
    }
    parallaxCurrent.set(el, next);
    el.style.setProperty('--parallax-y', `${next.toFixed(2)}px`);
  });

  if (needsMoreFrames) {
    requestParallaxFrame();
  }
}

let scrollSettleTimer = null;

function settleDesktopSectionIfMidway() {
  if (!isDesktopScrollMode() || isSectionAnimating || document.body.classList.contains('modal-open')) return;
  const sections = getSnapSections();
  if (!sections.length) return;

  const y = window.scrollY;
  const viewH = window.innerHeight;

  // Check if legitimately inside a tall section that overflows the viewport
  for (const sec of sections) {
    if (sec.offsetHeight > viewH + 24) {
      const minY = sec.offsetTop;
      const maxY = sec.offsetTop + sec.offsetHeight - viewH;
      if (y >= minY - 4 && y <= maxY + 4) {
        return;
      }
    }
  }

  // Find nearest section top
  let nearestIdx = 0;
  let minDist = Infinity;
  sections.forEach((sec, i) => {
    const dist = Math.abs(y - sec.offsetTop);
    if (dist < minDist) {
      minDist = dist;
      nearestIdx = i;
    }
  });

  if (minDist > 6) {
    currentSectionIndex = nearestIdx;
    updateActiveDots(sections[nearestIdx].id);
    animateScrollToY(sections[nearestIdx].offsetTop, 700);
  }
}

window.addEventListener('scroll', () => {
  requestParallaxFrame();
  if (isDesktopScrollMode()) {
    clearTimeout(scrollSettleTimer);
    scrollSettleTimer = setTimeout(settleDesktopSectionIfMidway, 160);
  }
}, { passive: true });

window.addEventListener('resize', () => {
  requestParallaxFrame();
});

function initBottomSheetSwipe(backdropId, closeFn) {
  const backdrop = document.getElementById(backdropId);
  const modal = backdrop ? backdrop.querySelector('.modal') : null;
  if (!backdrop || !modal) return;

  let startY = 0;
  let startTime = 0;
  let currentDeltaY = 0;
  let isDragging = false;
  let startedNearTop = false;

  modal.addEventListener('touchstart', (e) => {
    if (window.innerWidth > 640 || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const rect = modal.getBoundingClientRect();
    startedNearTop = (touch.clientY - rect.top) <= 56;
    if (!startedNearTop && modal.scrollTop > 0) return;
    startY = touch.clientY;
    startTime = Date.now();
    currentDeltaY = 0;
    isDragging = false;
  }, { passive: true });

  modal.addEventListener('touchmove', (e) => {
    if (window.innerWidth > 640 || e.touches.length !== 1 || startY === 0) return;
    const dy = e.touches[0].clientY - startY;
    if (dy <= 0) {
      if (isDragging) {
        currentDeltaY = 0;
        modal.style.transform = 'translateY(0px)';
      }
      return;
    }
    if (!startedNearTop && modal.scrollTop > 0) return;

    isDragging = true;
    currentDeltaY = dy;
    if (e.cancelable) e.preventDefault();
    modal.style.transition = 'none';
    modal.style.transform = `translateY(${dy}px)`;
  }, { passive: false });

  const finishDrag = () => {
    if (!isDragging) {
      startY = 0;
      return;
    }
    const elapsed = Math.max(1, Date.now() - startTime);
    const velocity = currentDeltaY / elapsed;
    const shouldClose = currentDeltaY > 85 || (currentDeltaY > 36 && velocity > 0.45);

    modal.style.transition = 'transform 0.2s ease';
    if (shouldClose) {
      modal.style.transform = 'translateY(100%)';
      setTimeout(() => {
        closeFn();
        modal.style.transition = '';
        modal.style.transform = '';
      }, 200);
    } else {
      modal.style.transform = 'translateY(0px)';
      setTimeout(() => {
        modal.style.transition = '';
        modal.style.transform = '';
      }, 200);
    }
    isDragging = false;
    startY = 0;
    currentDeltaY = 0;
  };

  modal.addEventListener('touchend', finishDrag, { passive: true });
  modal.addEventListener('touchcancel', finishDrag, { passive: true });
}

function updateScrollProgress() {
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));

  const bar = document.getElementById('scrollProgress');
  if (bar) {
    bar.style.transform = `scaleX(${progress.toFixed(4)})`;
  }

  const wineFill = document.getElementById('wineStreamFill');
  if (wineFill) {
    wineFill.style.setProperty('--wine-progress', `${(progress * 100).toFixed(2)}%`);
  }

  const docH = Math.max(1, document.documentElement.scrollHeight);
  const tipRatio = Math.min(1, Math.max(0.18, (window.scrollY + window.innerHeight + 40) / docH));
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clipRect = document.getElementById('vineClipRect');
  if (clipRect) {
    const clipHeight = prefersReduced ? 4010 : Math.round(tipRatio * 4010);
    clipRect.setAttribute('height', `${clipHeight}`);
  }

  document.querySelectorAll('.vine-node[data-threshold]').forEach((node) => {
    const threshold = parseFloat(node.getAttribute('data-threshold') || '0');
    node.classList.toggle('is-bloomed', prefersReduced || tipRatio >= threshold);
  });
}

function initScrollReveals() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll(
    '.about-grid > div, .terroir-text, .terroir-card, .wines-header, .wine-card, .tastings-grid > div, .tasting-tier'
  );
  if (!targets.length) return;

  targets.forEach((el) => {
    el.classList.add('reveal-item');
    if (el.classList.contains('wine-card')) {
      const idx = Array.from(el.parentElement.children).indexOf(el);
      el.style.setProperty('--reveal-delay', `${Math.max(0, idx) * 70}ms`);
    } else if (el.classList.contains('tasting-tier')) {
      const tiers = Array.from(el.parentElement.querySelectorAll('.tasting-tier'));
      const idx = tiers.indexOf(el);
      el.style.setProperty('--reveal-delay', `${Math.max(0, idx) * 70}ms`);
    }
  });

  if (prefersReduced || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

  targets.forEach((el) => observer.observe(el));
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress, { passive: true });
window.addEventListener('load', updateScrollProgress);

/* Custom Airbnb-Style Select & Date Picker */
let calViewYear = new Date().getFullYear();
let calViewMonth = new Date().getMonth();

function closeAllAirbnbPopovers(exceptEl = null) {
  document.querySelectorAll('.airbnb-popover.open').forEach((pop) => {
    if (exceptEl && pop === exceptEl) return;
    pop.classList.remove('open');
    const btn = pop.parentElement?.querySelector('.airbnb-field-btn');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  });
}

function syncAirbnbSelects() {
  document.querySelectorAll('.airbnb-select').forEach((wrap) => {
    const selectId = wrap.dataset.for;
    const selectEl = document.getElementById(selectId);
    const btn = wrap.querySelector('.airbnb-field-btn');
    const valSpan = wrap.querySelector('.airbnb-field-value');
    const menu = wrap.querySelector('.airbnb-select-menu');
    if (!selectEl || !btn || !valSpan || !menu) return;

    const options = Array.from(selectEl.options);
    const selectedOpt = selectEl.selectedOptions[0] || options[0];
    if (selectedOpt) {
      valSpan.textContent = selectedOpt.getAttribute(`data-${currentLang}`) || selectedOpt.textContent;
    }

    menu.innerHTML = options
      .filter((opt) => !opt.disabled)
      .map((opt) => {
        const label = opt.getAttribute(`data-${currentLang}`) || opt.textContent;
        const isSel = opt.value === selectEl.value;
        return `
          <button type="button" class="airbnb-select-option${isSel ? ' selected' : ''}" role="option" aria-selected="${isSel}" data-value="${opt.value}">
            <span>${label}</span>
            <svg class="airbnb-select-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
          </button>
        `;
      })
      .join('');

    menu.querySelectorAll('.airbnb-select-option').forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        selectEl.value = item.dataset.value;
        selectEl.dispatchEvent(new Event('change', { bubbles: true }));
        syncAirbnbSelects();
        closeAllAirbnbPopovers();
      });
    });
  });
}

function positionAirbnbPopover(btn, popover) {
  if (!btn || !popover) return;
  const btnRect = btn.getBoundingClientRect();
  const popHeight = popover.offsetHeight || 320;
  const footer = document.querySelector('.integrated-footer');
  const bottomLimit = footer
    ? Math.min(window.innerHeight - 12, footer.getBoundingClientRect().top - 8)
    : (window.innerHeight - 12);
  const spaceBelow = bottomLimit - btnRect.bottom;
  const spaceAbove = btnRect.top - 72;
  const shouldOpenUp = spaceBelow < popHeight && spaceAbove > spaceBelow;
  popover.classList.toggle('open-up', shouldOpenUp);
}

function initAirbnbSelects() {
  document.querySelectorAll('.airbnb-select').forEach((wrap) => {
    const btn = wrap.querySelector('.airbnb-field-btn');
    const menu = wrap.querySelector('.airbnb-select-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !menu.classList.contains('open');
      closeAllAirbnbPopovers(willOpen ? menu : null);
      if (willOpen) {
        positionAirbnbPopover(btn, menu);
      }
      menu.classList.toggle('open', willOpen);
      btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  });
  syncAirbnbSelects();
}

function syncAirbnbDateDisplay() {
  const input = document.getElementById('bDate');
  const display = document.getElementById('bDateDisplay');
  if (!input || !display) return;
  const val = (input.value || '').trim();
  if (!val) {
    display.classList.add('is-placeholder');
    const ph = display.getAttribute(`data-${currentLang}`) || 'Izberite datum';
    display.textContent = ph;
  } else {
    display.classList.remove('is-placeholder');
    const [y, m, d] = val.split('-').map(Number);
    const dt = new Date(y, m - 1, d);
    const locale = currentLang === 'en' ? 'en-US' : (currentLang === 'it' ? 'it-IT' : 'sl-SI');
    display.textContent = dt.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' });
  }
  if (document.getElementById('airbnbCalendar')?.classList.contains('open')) {
    renderAirbnbCalendar();
  }
}

function renderAirbnbCalendar() {
  const cal = document.getElementById('airbnbCalendar');
  const input = document.getElementById('bDate');
  if (!cal || !input) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const minYear = today.getFullYear();
  const minMonth = today.getMonth();
  if (calViewYear < minYear || (calViewYear === minYear && calViewMonth < minMonth)) {
    calViewYear = minYear;
    calViewMonth = minMonth;
  }

  const locale = currentLang === 'en' ? 'en-US' : (currentLang === 'it' ? 'it-IT' : 'sl-SI');
  const monthTitle = new Date(calViewYear, calViewMonth, 1).toLocaleDateString(locale, { month: 'long', year: 'numeric' });
  const weekdaysByLang = {
    sl: ['Po', 'To', 'Sr', 'Če', 'Pe', 'So', 'Ne'],
    en: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    it: ['Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa', 'Do']
  };
  const weekdays = weekdaysByLang[currentLang] || weekdaysByLang.sl;
  const labelsByLang = {
    sl: { clear: 'Počisti', close: 'Zapri' },
    en: { clear: 'Clear', close: 'Close' },
    it: { clear: 'Cancella', close: 'Chiudi' }
  };
  const labels = labelsByLang[currentLang] || labelsByLang.sl;

  const firstDay = new Date(calViewYear, calViewMonth, 1);
  const startOffset = (firstDay.getDay() + 6) % 7; // Monday = 0
  const daysInMonth = new Date(calViewYear, calViewMonth + 1, 0).getDate();
  const selectedVal = (input.value || '').trim();
  const canGoPrev = !(calViewYear === minYear && calViewMonth === minMonth);

  let daysHtml = '';
  for (let i = 0; i < startOffset; i++) {
    daysHtml += '<span></span>';
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const cellDate = new Date(calViewYear, calViewMonth, day);
    const iso = `${calViewYear}-${String(calViewMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const isPast = cellDate < today;
    const isToday = cellDate.getTime() === today.getTime();
    const isSelected = iso === selectedVal;
    const cls = [
      'airbnb-cal-day',
      isToday ? 'is-today' : '',
      isSelected ? 'selected' : ''
    ].filter(Boolean).join(' ');
    daysHtml += `<button type="button" class="${cls}" data-iso="${iso}"${isPast ? ' disabled' : ''}>${day}</button>`;
  }

  cal.innerHTML = `
    <div class="airbnb-cal-head">
      <button type="button" class="airbnb-cal-nav" id="calPrevBtn" aria-label="Previous month"${canGoPrev ? '' : ' disabled'}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="airbnb-cal-title">${monthTitle}</div>
      <button type="button" class="airbnb-cal-nav" id="calNextBtn" aria-label="Next month">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
    <div class="airbnb-cal-weekdays">${weekdays.map((w) => `<span>${w}</span>`).join('')}</div>
    <div class="airbnb-cal-grid">${daysHtml}</div>
    <div class="airbnb-cal-footer">
      <button type="button" class="airbnb-cal-action" id="calClearBtn">${labels.clear}</button>
      <button type="button" class="airbnb-cal-action" id="calCloseBtn">${labels.close}</button>
    </div>
  `;

  cal.querySelector('#calPrevBtn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!canGoPrev) return;
    calViewMonth -= 1;
    if (calViewMonth < 0) {
      calViewMonth = 11;
      calViewYear -= 1;
    }
    renderAirbnbCalendar();
  });

  cal.querySelector('#calNextBtn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    calViewMonth += 1;
    if (calViewMonth > 11) {
      calViewMonth = 0;
      calViewYear += 1;
    }
    renderAirbnbCalendar();
  });

  cal.querySelectorAll('.airbnb-cal-day:not(:disabled)').forEach((dayBtn) => {
    dayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      input.value = dayBtn.dataset.iso;
      syncAirbnbDateDisplay();
      closeAllAirbnbPopovers();
    });
  });

  cal.querySelector('#calClearBtn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    input.value = '';
    syncAirbnbDateDisplay();
  });

  cal.querySelector('#calCloseBtn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeAllAirbnbPopovers();
  });
}

function openAirbnbCalendar() {
  const cal = document.getElementById('airbnbCalendar');
  const btn = document.getElementById('bDateBtn');
  if (!cal || !btn) return;
  closeAllAirbnbPopovers(cal);
  renderAirbnbCalendar();
  positionAirbnbPopover(btn, cal);
  cal.classList.add('open');
  btn.setAttribute('aria-expanded', 'true');
}

function initAirbnbDatePicker() {
  const btn = document.getElementById('bDateBtn');
  const cal = document.getElementById('airbnbCalendar');
  if (!btn || !cal) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (cal.classList.contains('open')) {
      closeAllAirbnbPopovers();
    } else {
      openAirbnbCalendar();
    }
  });
  cal.addEventListener('click', (e) => e.stopPropagation());
  syncAirbnbDateDisplay();
}

document.addEventListener('click', () => closeAllAirbnbPopovers());

window.addEventListener('DOMContentLoaded', () => {
  currentSectionIndex = detectCurrentSectionIndex();
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  if (urlLang && ['sl', 'en', 'it'].includes(urlLang)) {
    setLang(urlLang);
  }
  updateQtyUI();
  initAirbnbSelects();
  initAirbnbDatePicker();
  syncFormRequirements();
  initBottomSheetSwipe('wineModal', closeWineModal);
  initBottomSheetSwipe('faqModal', closeFaqModal);
  initScrollReveals();
  updateScrollProgress();

  const terroirEl = document.getElementById('terroir');
  if (terroirEl && 'IntersectionObserver' in window) {
    const mapObserver = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) {
        initTerroirMap();
        mapObserver.disconnect();
      }
    }, { rootMargin: '400px 0px' });
    mapObserver.observe(terroirEl);
  } else {
    initTerroirMap();
  }

  updateParallax();
});