/* ==========================================================================
   Cozy Homes — script.js
   --------------------------------------------------------------------------
   TABLE OF CONTENTS
   01. Mobile navigation menu
   02. Language switch (PT / EN)
   03. Contact form (Formspree)
   04. Before/after sliders (project cards)
   ========================================================================== */


/* ==========================================================================
   01. Mobile navigation menu
   ========================================================================== */
   var navToggle = document.getElementById('navToggle');
   var navLinks = document.getElementById('navLinks');
   
   // Close the dropdown menu
   function closeMenu() {
     navLinks.classList.remove('open');
     navToggle.setAttribute('aria-expanded', 'false');
   }
   
   // Open/close when the hamburger button is clicked
   navToggle.addEventListener('click', function () {
     var isOpen = navLinks.classList.toggle('open');
     navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
   });
   
   // Close the menu when a link is clicked
   navLinks.querySelectorAll('a').forEach(function (a) {
     a.addEventListener('click', closeMenu);
   });
   
   // Close the menu when clicking anywhere outside it
   document.addEventListener('click', function (e) {
     if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
       closeMenu();
     }
   });
   
   // Close the menu with the Escape key
   document.addEventListener('keydown', function (e) {
     if (e.key === 'Escape') closeMenu();
   });
   
   // Close the menu if the screen grows back to desktop size
   window.addEventListener('resize', function () {
     if (window.innerWidth > 920) closeMenu();
   });
   
   
   /* ==========================================================================
      02. Language switch (PT / EN)
      --------------------------------------------------------------------------
      - Portuguese is the default language and is written in index.html.
        At startup, the script reads the Portuguese text from the page, so you
        only need to edit Portuguese text in index.html.
      - English text lives in `translations.en` below.
      - Each translatable element in index.html has a data-i18n="key" attribute
        (see the note at the top of index.html). Add the same key below.
      - If an English key is missing, the Portuguese text is shown instead.
      ========================================================================== */
   
   var translations = {
   
     /* Portuguese: only texts that are NOT in the HTML (used by the form script).
        Everything else is read automatically from index.html. */
     pt: {
       'form.sending': 'A enviar...',
       'form.success': 'Pedido enviado! Entraremos em contacto o mais brevemente possível.',
       'form.error': 'Não foi possível enviar. Tente novamente ou contacte-nos por telefone ou WhatsApp.'
     },
   
     /* English */
     en: {
       /* Page */
       'meta.title': 'Cozy Homes — Renovation and Construction',
       'meta.description': 'Cozy Homes — interior and exterior renovation and construction in Porto and surrounding areas. 3D rendering and AutoCAD design, execution and turnkey delivery.',
   
       /* Navigation */
       'nav.services': 'Services',
       'nav.process': 'How we work',
       'nav.projects': 'Projects',
       'nav.contact': 'Contact',
       'nav.cta': 'Request a quote',
       'nav.openMenu': 'Open menu',
   
       /* Language button (shows the language you will switch TO) */
       'lang.button': 'PT',
       'lang.switch': 'Switch language to Portuguese',
   
       /* Hero */
       'hero.eyebrow': 'Interiors · Exteriors · Turnkey projects',
       'hero.title': 'Your dream home, <em>in the house you have always lived in.</em>',
       'hero.lede': 'We guide you through the whole process, from your first ideas to handover — with 3D rendering and AutoCAD design (optional), material suggestions and selection, execution and final finishing.',
       'hero.ctaPrimary': 'Request a free quote',
       'hero.ctaSecondary': 'See projects',
   
       /* Stats */
       'stats.years': 'Years of experience',
       'stats.projects': 'Projects completed',
       'stats.team': 'Professionals on the team',
       'stats.clients': 'Satisfied clients',
   
       /* Services */
       'services.tag': 'What we do',
       'services.title': 'Renovation',
       'services.intro': 'From the first idea to turnkey handover — design, materials and execution handled by us, from start to finish.',
       'services.interiors.title': 'Interiors',
       'services.interiors.text': 'Kitchens, bathrooms, drywall, painting, flooring and carpentry — redesigned from scratch or renewed to a high standard.',
       'services.exteriors.title': 'Exteriors',
       'services.exteriors.text': 'Facades, external insulation (ETICS), roofs, waterproofing, gardens and pools — so the house looks as good outside as it does inside.',
       'services.utilities.title': 'Electrical & plumbing',
       'services.utilities.text': 'Water, sewage and electrical panel installations and upgrades, integrated into the overall project plan.',
       'services.special.title': 'Special spaces',
       'services.special.text': 'Cinema rooms, spas, game rooms, soundproofed studios and glazed structures — tailor-made projects for those who like something out of the ordinary.',
       'services.design.title': 'Design & planning',
       'services.design.text': '3D rendering and AutoCAD (optional), material suggestions and selection, so everything is decided before work begins.',
       'services.commercial.title': 'Commercial spaces',
       'services.commercial.text': 'Renovation of shops, offices and other business spaces, delivered turnkey.',
   
       /* Process */
       'process.tag': 'How we work',
       'process.title': 'Four phases, no surprises',
       'process.intro': 'The same process in every project, so you always know where your works stand.',
       'process.step1.title': 'Consultation and visit',
       'process.step1.text': 'We visit the site, listen to what you need and assess the technical conditions before any proposal.',
       'process.step2.title': 'Design and quote',
       'process.step2.text': 'We present solutions in 3D rendering and, optionally, AutoCAD, with a detailed quote before we start.',
       'process.step3.title': 'Works execution',
       'process.step3.text': 'Our own crew on site, with weekly progress reports and a single point of contact.',
       'process.step4.title': 'Handover and warranty',
       'process.step4.text': 'Final walkthrough with you and a warranty on labour and installed materials.',
   
       /* Projects */
       'projects.tag': 'Recent work',
       'projects.title': 'Some of our projects',
       'tile.before': 'Before',
       'tile.after': 'After',
       'tile.renovation': 'Renovation',
   
       'tile1.name': 'Room, Gaia',
       'tile1.altAfter': 'Kitchen after renovation',
       'tile1.altBefore': 'Kitchen before renovation',
       'tile1.slider': 'Compare before and after: Room, Gaia',
   
       'tile2.name': 'Office, Gondomar',
       'tile2.alt': 'Renovated wardrobe',
       'tile3.name': 'Kitchen, Gondomar',
       'tile3.alt': 'Renovated kitchen',
       'tile4.name': 'Bathroom, Gondomar',
       'tile4.alt': 'Renovated bathroom',
       'tile5.name': 'Bathroom, Gaia',
       'tile5.alt': 'Renovated bathroom',
       'tile6.name': 'Hallway, Porto',
       'tile6.alt': 'Renovated hallway',
   
       /* Call-to-action banner */
       'cta.title': 'Have a project in mind? Let\'s talk about it.',
       'cta.button': 'Request a free quote',
   
       /* Contact */
       'contact.tag': 'Contact',
       'contact.title': 'Let\'s start your project',
       'contact.phone': 'Phone',
       'contact.email': 'Email',
       'contact.area': 'Area of operation',
       'contact.areaValue': 'Porto and surrounding areas',
       'contact.social': 'Social media',
   
       /* Contact form */
       'form.name': 'Name',
       'form.namePlaceholder': 'Your name',
       'form.phone': 'Phone',
       'form.email': 'Email',
       'form.emailPlaceholder': 'youremail@example.com',
       'form.service': 'Type of service',
       'form.opt1': 'Interior renovation',
       'form.opt2': 'New build / extension',
       'form.opt3': 'Finishing & painting',
       'form.opt4': 'Plumbing & electrical',
       'form.opt5': 'Roofing & waterproofing',
       'form.opt6': 'Other',
       'form.message': 'Message',
       'form.messagePlaceholder': 'Tell us a little about your project...',
       'form.submit': 'Send request',
       'form.sending': 'Sending...',
       'form.success': 'Request sent! We will get back to you as soon as possible.',
       'form.error': 'Could not send. Please try again or contact us by phone or WhatsApp.',
   
       /* Footer */
       'footer.about': 'Your dream home is just a contact away. Renovation of interiors and exteriors in Porto and surrounding areas, from design to turnkey handover.',
       'footer.navigation': 'Navigation',
       'footer.contact': 'Contact',
       'footer.rights': '© 2026 Cozy Homes. All rights reserved.',
   
       /* WhatsApp button */
       'whatsapp.label': 'Chat on WhatsApp'
     }
   };
   
   /* Settings */
   var DEFAULT_LANG = 'pt';
   var STORAGE_KEY = 'cozyLang';                          // where the visitor's choice is remembered
   var HTML_LANG_CODES = { pt: 'pt-PT', en: 'en' };       // value for <html lang="...">
   var currentLang = DEFAULT_LANG;
   
   /* Elements */
   var langToggle = document.getElementById('langToggle');
   var langField = document.getElementById('langField');   // hidden form field (tells you the visitor's language)
   var metaDescription = document.querySelector('meta[name="description"]');
   
   /* Attribute-based translations: [HTML attribute with the key, attribute to translate] */
   var ATTRIBUTE_BINDINGS = [
     ['data-i18n-placeholder', 'placeholder'],
     ['data-i18n-aria', 'aria-label'],
     ['data-i18n-alt', 'alt']
   ];
   
   /* Get a translated string for the current language (falls back to Portuguese) */
   function t(key) {
     var dict = translations[currentLang] || {};
     if (key in dict) return dict[key];
     return (key in translations.pt) ? translations.pt[key] : key;
   }
   
   /* Read the Portuguese text that is already written in index.html
      and store it in translations.pt, so we can switch back to it later. */
   function capturePortuguese() {
     var pt = translations.pt;
   
     var sources = [
       { attr: 'data-i18n',             read: function (el) { return el.textContent.trim(); } },
       { attr: 'data-i18n-html',        read: function (el) { return el.innerHTML.trim(); } },
       { attr: 'data-i18n-placeholder', read: function (el) { return el.getAttribute('placeholder'); } },
       { attr: 'data-i18n-aria',        read: function (el) { return el.getAttribute('aria-label'); } },
       { attr: 'data-i18n-alt',         read: function (el) { return el.getAttribute('alt'); } }
     ];
   
     sources.forEach(function (source) {
       document.querySelectorAll('[' + source.attr + ']').forEach(function (el) {
         var key = el.getAttribute(source.attr);
         if (!(key in pt)) pt[key] = source.read(el);
       });
     });
   
     pt['meta.title'] = document.title;
     pt['meta.description'] = metaDescription.getAttribute('content');
   }
   
   /* Apply a language to the whole page */
   function applyLanguage(lang) {
     currentLang = lang;
   
     // Page-level settings
     document.documentElement.lang = HTML_LANG_CODES[lang];
     document.title = t('meta.title');
     metaDescription.setAttribute('content', t('meta.description'));
   
     // Text content
     document.querySelectorAll('[data-i18n]').forEach(function (el) {
       el.textContent = t(el.getAttribute('data-i18n'));
     });
   
     // Text that contains HTML (e.g. the hero title with <em>)
     document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
       el.innerHTML = t(el.getAttribute('data-i18n-html'));
     });
   
     // Attributes (placeholder, aria-label, alt)
     ATTRIBUTE_BINDINGS.forEach(function (binding) {
       document.querySelectorAll('[' + binding[0] + ']').forEach(function (el) {
         el.setAttribute(binding[1], t(el.getAttribute(binding[0])));
       });
     });
   
     // Tell the form which language the visitor is using
     if (langField) langField.value = lang;
   
     // Remember the choice for the next visit
     try {
       localStorage.setItem(STORAGE_KEY, lang);
     } catch (err) {
       /* Storage blocked (private mode, etc.) — the switch still works */
     }
   }
   
   /* Read the language saved on a previous visit (or use the default) */
   function getSavedLanguage() {
     try {
       var saved = localStorage.getItem(STORAGE_KEY);
       if (saved === 'pt' || saved === 'en') return saved;
     } catch (err) {
       /* Storage blocked — fall through to the default */
     }
     return DEFAULT_LANG;
   }
   
   /* Switch between PT and EN when the button is clicked */
   langToggle.addEventListener('click', function () {
     applyLanguage(currentLang === 'pt' ? 'en' : 'pt');
   });
   
   /* Start-up: capture the Portuguese text, then apply the saved language */
   capturePortuguese();
   applyLanguage(getSavedLanguage());
   
   
   /* ==========================================================================
      03. Contact form (Formspree)
      ========================================================================== */
   var form = document.getElementById('contactForm');
   var btn = document.getElementById('formBtn');
   var statusEl = document.getElementById('formStatus');
   
   form.addEventListener('submit', async function (e) {
     e.preventDefault();
   
     // Let the browser show its own messages for missing/invalid fields
     if (!form.checkValidity()) {
       form.reportValidity();
       return;
     }
   
     // Sending state
     btn.disabled = true;
     btn.textContent = t('form.sending');
     statusEl.removeAttribute('data-i18n');
     statusEl.className = 'form-status';
     statusEl.textContent = '';
   
     try {
       var res = await fetch(form.action, {
         method: 'POST',
         body: new FormData(form),
         headers: { 'Accept': 'application/json' }
       });
   
       if (res.ok) {
         // Success: clear the form and show a confirmation
         form.reset();
         langField.value = currentLang;   // form.reset() restores the default value, so set it again
         statusEl.setAttribute('data-i18n', 'form.success');
         statusEl.textContent = t('form.success');
         statusEl.className = 'form-status ok';
       } else {
         throw new Error('Send failed');
       }
     } catch (err) {
       // Error: show a message with alternative contacts
       statusEl.setAttribute('data-i18n', 'form.error');
       statusEl.textContent = t('form.error');
       statusEl.className = 'form-status err';
     } finally {
       // Restore the button
       btn.disabled = false;
       btn.textContent = t('form.submit');
   
       // Make sure the message is visible on small screens
       statusEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
     }
   });
   
   
   /* ==========================================================================
      04. Before/after sliders (project cards)
      --------------------------------------------------------------------------
      Dragging the invisible range input updates the --pos CSS variable,
      which moves the divider line and clips the "before" photo.
      ========================================================================== */
   document.querySelectorAll('.project-tile.ba').forEach(function (tile) {
     var range = tile.querySelector('.ba-range');
   
     range.addEventListener('input', function () {
       tile.style.setProperty('--pos', range.value + '%');
     });
   });