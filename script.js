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
        ['Profil vina', 'Suho, sveže, mineralno belo vino (1 hišna zvrst)'],
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
        ['Tasting profile', 'Dry, fresh, mineral white wine (1 house blend)'],
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
        ['Profilo', 'Vino bianco secco, fresco e minerale (1 uvaggio della casa)'],
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

function openItemModal(key) {
  lastFocusedElement = document.activeElement;
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

  const modalBackdrop = document.getElementById('wineModal');
  modalBackdrop.classList.add('open');
  document.body.classList.add('modal-open');
  focusModalFirstElement(modalBackdrop);
}

function closeWineModal() {
  const modalBackdrop = document.getElementById('wineModal');
  if (!modalBackdrop || !modalBackdrop.classList.contains('open')) return;
  modalBackdrop.classList.remove('open');
  document.body.classList.remove('modal-open');
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

function selectTastingPackage(pkg) {
  const pkgSelect = document.getElementById('bPackage');
  if (pkgSelect) {
    pkgSelect.value = pkg;
    syncFormRequirements();
  }
  const nameInput = document.getElementById('bName');
  if (nameInput) {
    setTimeout(() => nameInput.focus({ preventScroll: true }), 250);
  }
}

function openFaqModal() {
  const modal = document.getElementById('faqModal');
  if (!modal) return;
  lastFocusedElement = document.activeElement;
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  focusModalFirstElement(modal);
}

function closeFaqModal() {
  const modal = document.getElementById('faqModal');
  if (!modal || !modal.classList.contains('open')) return;
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
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

  const submitBtn = document.getElementById('bookingSubmitBtn');
  const successEl = document.getElementById('bookingSuccess');
  const originalBtnText = submitBtn ? submitBtn.textContent : '';

  const name = (document.getElementById('bName')?.value || '').trim();
  const email = (document.getElementById('bEmail')?.value || '').trim();
  const phone = (document.getElementById('bPhone')?.value || '').trim();
  const pkgEl = document.getElementById('bPackage');
  const pkgValue = pkgEl ? pkgEl.value : 'meats';
  const pkgLabel = pkgEl && pkgEl.selectedOptions[0] ? pkgEl.selectedOptions[0].textContent : pkgValue;
  const date = document.getElementById('bDate')?.value || '-';
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
  document.querySelectorAll('.section-dot').forEach(dot => {
    dot.classList.toggle('active', dot.getAttribute('data-target') === activeId);
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
    window.scrollTo(0, targetY);
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
    window.scrollTo(0, Math.round(startY + diff * eased));

    if (progress < 1) {
      scrollAnimRafId = requestAnimationFrame(step);
    } else {
      window.scrollTo(0, targetY);
      scrollAnimRafId = null;
      isSectionAnimating = false;
    }
  }

  scrollAnimRafId = requestAnimationFrame(step);
  // Safety fallback in case rAF is throttled
  animUnlockTimer = setTimeout(() => {
    isSectionAnimating = false;
  }, duration + 100);
}

function scrollToSectionIndex(idx) {
  const sections = getSnapSections();
  if (!sections.length) return;
  const clampedIdx = Math.max(0, Math.min(sections.length - 1, idx));
  currentSectionIndex = clampedIdx;
  const targetEl = sections[clampedIdx];

  updateActiveDots(targetEl.id);
  animateScrollToY(targetEl.offsetTop, 420);
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
    if (el) animateScrollToY(el.offsetTop, 420);
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

  // Allow internal scroll only when a section is genuinely taller than the viewport (e.g. small laptop)
  if (rect.height > viewH + 24) {
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

  // On desktop, all 5 sections have full-bleed dark-overlaid photography, so keep header transparent everywhere.
  // On mobile/tablet (free scroll), keep it transparent at top and switch to white translucent on scroll.
  const isTransparent = isDesktopScrollMode() ? true : (scrollY <= 24);

  if (header) {
    header.classList.toggle('nav-transparent', isTransparent);
    header.classList.toggle('scrolled', !isTransparent);
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
  const lerpFactor = 0.16;

  // Hero background parallax (lerped)
  const heroImg = document.querySelector('[data-parallax-hero]');
  if (heroImg) {
    const heroTarget = scrollY < window.innerHeight * 1.4 ? Math.min(110, scrollY * 0.28) : 110;
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
    const target = Math.max(-36, Math.min(36, (secCenter - viewportCenter) * -0.08));
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
    const speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
    const rect = el.getBoundingClientRect();
    const elCenter = rect.top + rect.height / 2;
    const distFromCenter = elCenter - viewportCenter;
    const target = Math.max(-44, Math.min(44, distFromCenter * speed));
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

window.addEventListener('scroll', () => {
  requestParallaxFrame();
}, { passive: true });

window.addEventListener('resize', () => {
  requestParallaxFrame();
});

window.addEventListener('DOMContentLoaded', () => {
  currentSectionIndex = detectCurrentSectionIndex();
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  if (urlLang && ['sl', 'en', 'it'].includes(urlLang)) {
    setLang(urlLang);
  }
  updateQtyUI();
  syncFormRequirements();

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