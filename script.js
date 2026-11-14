let currentLang = 'sl';

const wineData = {
  malvazija: {
    orderLabel: 'Malvazija 2024 (14 €)',
    sl: {
      cat: 'Vipavska dolina, suho belo vino',
      title: 'Malvazija 2024',
      desc: 'Grozdje ročno poberemo na sončnih legah Oševljeka, ga za kratek čas hladno maceriramo in vino zorimo na drožeh v jekleni posodi.',
      specs: [
        ['Sorta', '100% Istrska malvazija'],
        ['Lega in tla', 'Oševljek, fliš in lapor'],
        ['Pridelava', 'Kratka hladna maceracija, zorenje na drožeh v inoxu'],
        ['Alkohol', '13,0 % vol.'],
        ['K hrani', 'Bela riba, testenine s tartufi, mladi siri']
      ]
    },
    en: {
      cat: 'Vipava Valley, dry white wine',
      title: 'Malvazija 2024',
      desc: 'We harvest by hand from sunlit slopes in Oševljek, macerate the skins briefly at low temperature, and age the wine on lees in stainless steel.',
      specs: [
        ['Varietal', '100% Malvazija'],
        ['Origin and soil', 'Oševljek, flysch marl'],
        ['Vinification', 'Brief cold maceration, stainless steel aging on lees'],
        ['Alcohol', '13.0% vol.'],
        ['Food pairing', 'Grilled sea bass, truffle pasta, young cheeses']
      ]
    }
  },
  rebula: {
    orderLabel: 'Rebula 2023 (15 €)',
    sl: {
      cat: 'Vipavska dolina, suho belo vino',
      title: 'Rebula 2023',
      desc: 'Grozdje ročno poberemo na vetrovni legi pod vasjo. Vino fermentira z lastnimi kvasovkami in delno zori v velikih lesenih sodih.',
      specs: [
        ['Sorta', '100% Rebula'],
        ['Lega in tla', 'Oševljek, fliš in lapor'],
        ['Pridelava', 'Spontana fermentacija, delno zorenje v velikem lesu'],
        ['Alkohol', '12,5 % vol.'],
        ['K hrani', 'Vipavski pršut, zelenjavne rižote, perutnina']
      ]
    },
    en: {
      cat: 'Vipava Valley, dry white wine',
      title: 'Rebula 2023',
      desc: 'Picked by hand on our wind-swept slope below the village. The wine ferments with wild yeasts and ages partly in large oak casks.',
      specs: [
        ['Varietal', '100% Rebula'],
        ['Origin and soil', 'Oševljek, flysch and marl'],
        ['Vinification', 'Wild fermentation, partial aging in large oak casks'],
        ['Alcohol', '12.5% vol.'],
        ['Food pairing', 'Vipava prosciutto, herb risotto, roast poultry']
      ]
    }
  },
  vitovska: {
    orderLabel: 'Vitovska Grganja 2023 (17 €)',
    sl: {
      cat: 'Primorska, suho belo vino',
      title: 'Vitovska Grganja 2023',
      desc: 'Avtohtona sorta obmejnega prostora med Vipavsko dolino in Krasom. Grozdje maceriramo nekaj dni in vino zorimo vlesenih sodih.',
      specs: [
        ['Sorta', '100% Vitovska grganja'],
        ['Lega in tla', 'Oševljek, prehod fliša v apnenec'],
        ['Pridelava', 'Nekajdnevna maceracija, zorenje v lesenem sodu'],
        ['Alkohol', '13,0 % vol.'],
        ['K hrani', 'Zorjeni siri, morski sadeži, šparglji']
      ]
    },
    en: {
      cat: 'Primorska, dry white wine',
      title: 'Vitovska Grganja 2023',
      desc: 'A local grape grown between the Vipava Valley and the Karst. We leave the juice on the skins for several days and mature the wine in neutral oak.',
      specs: [
        ['Varietal', '100% Vitovska Grganja'],
        ['Origin and soil', 'Oševljek, flysch and limestone'],
        ['Vinification', 'Several days of skin contact, neutral oak maturation'],
        ['Alcohol', '13.0% vol.'],
        ['Food pairing', 'Aged cheeses, shellfish, asparagus']
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

function openWineModal(key) {
  const wine = wineData[key];
  const info = wine[currentLang];
  document.getElementById('mCategory').textContent = info.cat;
  document.getElementById('mTitle').textContent = info.title;
  document.getElementById('mDesc').textContent = info.desc;

  const specsEl = document.getElementById('mSpecs');
  specsEl.innerHTML = info.specs.map(([label, val]) =>
    `<div class="spec-row"><span>${label}</span><span>${val}</span></div>`
  ).join('');

  document.getElementById('mOrderBtn').onclick = () => {
    closeWineModal();
    preselectOrder(wine.orderLabel);
  };

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

function preselectOrder(wineLabel) {
  const pkgSelect = document.getElementById('bPackage');
  pkgSelect.value = 'order';
  syncFormRequirements();

  const notes = document.getElementById('bNotes');
  const prefix = currentLang === 'sl' ? 'Naročilo: ' : 'Wine order: ';
  notes.value = notes.value ? `${notes.value}, 6x ${wineLabel}` : `${prefix}6x ${wineLabel}`;

  document.getElementById('degustacije').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => notes.focus({ preventScroll: true }), 400);
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