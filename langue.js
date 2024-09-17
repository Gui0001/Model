function ChangeLanguage(){
    const languageToggle = document.getElementById('language-toggle');
    const elementsToTranslate = {
      "home-title": "homeTitle",
      "model-title": "model",
      "about-title": "aboutTitle",
      "who-am-i": "whoAmI",
      "who-am-i-desc": "whoAmIDesc",
      "why-work-with-me": "whyWorkWithMe",
      "why-work-with-me-desc": "whyWorkWithMeDesc",
      "my-style": "myStyle",
      "my-style-desc": "myStyleDesc",
      "view-photos": "viewPhotos",
      "services-title": "myServices",
      "photo-shoots": "photoShoots",
      "photo-shoots-desc": "photoShootsDesc",
      "my-info": "myInformation",
      "my-info-desc": "MyInfo",
      "contact-title": "contactMe",
      "contact-me": "contactMe",
      "contact-me-desc": "contactMeDesc",
      "email-title": "email",
      "instagram-title": "instagram",
      "send-message": "sendMessage"
    };
    
    let currentLanguage = 'en'; // default language
  
    function loadLanguage(lang) {
      fetch(`lang-${lang}.json`)
        .then(response => response.json())
        .then(data => {
          Object.keys(elementsToTranslate).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
              element.textContent = data[elementsToTranslate[id]];
            }
          });
        });
    }
  
    languageToggle.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
      loadLanguage(currentLanguage);
    });
  
    // Initial load
    loadLanguage(currentLanguage);
  }
  

    