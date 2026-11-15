let currentLang = 'sl';

const itemData = {
  zvrst: {
    orderLabel: 'Hišna bela zvrst',
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
  const item = itemData[key];
  const info = item[currentLang];
  document.getElementById('mCategory').textContent = info.cat;
  document.getElementById('mTitle').textContent = info.title;
  document.getElementById('mDesc').textContent = info.desc;

  const specsEl = document.getElementById('mSpecs');
  specsEl.innerHTML = info.specs.map(([label, val]) =>
    `<div class="spec-row"><span>${label}</span><span>${val}</span></div>`
  ).join('');

  const orderBtn = document.getElementById('mOrderBtn');
  if (key === 'pice') {
    orderBtn.onclick = () => {
      closeWineModal();
      selectPizzaVisit();
      document.getElementById('degustacije').scrollIntoView({ behavior: 'smooth' });
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
  const pkg = document.getElementById('bPackage').value;
  document.getElementById('bDate').required = (pkg !== 'order');
}

function preselectOrder(itemLabel) {
  const pkgSelect = document.getElementById('bPackage');
  pkgSelect.value = 'order';
  syncFormRequirements();

  const notes = document.getElementById('bNotes');
  const prefix = currentLang === 'sl' ? 'Povpraševanje za nakup: ' : 'Order inquiry: ';
  notes.value = notes.value ? `${notes.value}, ${itemLabel}` : `${prefix}${itemLabel}`;

  document.getElementById('degustacije').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => notes.focus({ preventScroll: true }), 400);
}

function selectPizzaVisit() {
  const pkgSelect = document.getElementById('bPackage');
  pkgSelect.value = 'pizza';
  syncFormRequirements();
}

function handleBooking(e) {
  e.preventDefault();
  document.getElementById('bookingSuccess').style.display = 'block';
  e.target.reset();
  syncFormRequirements();
}

window.addEventListener('scroll', () => {
  document.getElementById('siteHeader').classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeWineModal();
    closeMenu();
  }
});