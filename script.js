const firebaseConfig = {
    apiKey: "AIzaSyDMfuoVZwNzMsnAuvzBW7qnStP7y8NP1oo",
    authDomain: "noduv-d146b.firebaseapp.com",
    projectId: "noduv-d146b",
    storageBucket: "noduv-d146b.firebasestorage.app",
    messagingSenderId: "644426808762",
    appId: "1:644426808762:web:7ac80b6141acfa292fb183",
    measurementId: "G-5LGG2BF6QY"
  };
  
  const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
  
  document.addEventListener('DOMContentLoaded', function () {
      
      const menuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      if (menuButton && mobileMenu) {
          menuButton.addEventListener('click', function () {
              mobileMenu.classList.toggle('hidden');
          });
  
          const menuLinks = mobileMenu.getElementsByTagName('a');
          for (let link of menuLinks) {
              link.addEventListener('click', function () {
                  mobileMenu.classList.add('hidden');
              });
          }
      }
  
      const loginModal = document.getElementById('login-modal');
      const registerModal = document.getElementById('register-modal');
      const passwordModal = document.getElementById('password-modal'); 
  
      const openLoginBtn = document.getElementById('open-login-button');
      const openLoginBtnMobile = document.getElementById('open-login-button-mobile');
      const openRegisterBtn = document.getElementById('open-register-button');
      const openRegisterBtn2 = document.getElementById('open-register-button-2');
      const openPasswordLink = document.getElementById('open-password-link'); 
  
      const closeLoginBtn = document.getElementById('close-login-modal');
      const closeRegisterBtn = document.getElementById('close-register-modal');
      const closePasswordBtn = document.getElementById('close-password-modal'); 
  
      const gotoRegisterLink = document.getElementById('open-register-link');
      const gotoLoginLink = document.getElementById('open-login-link');
      const backToLoginLink = document.getElementById('back-to-login-link'); 
  
      function hideAllModals() {
          if (loginModal) loginModal.classList.add('hidden');
          if (registerModal) registerModal.classList.add('hidden');
          if (passwordModal) passwordModal.classList.add('hidden');
      }
      
      function showLoginModal() { hideAllModals(); if (loginModal) loginModal.classList.remove('hidden'); }
      function showRegisterModal() { hideAllModals(); if (registerModal) registerModal.classList.remove('hidden'); }
      function showPasswordModal() { hideAllModals(); if (passwordModal) passwordModal.classList.remove('hidden'); }
  
      if (openLoginBtn) openLoginBtn.addEventListener('click', (e) => { e.preventDefault(); showLoginModal(); });
      if (openLoginBtnMobile) openLoginBtnMobile.addEventListener('click', (e) => { e.preventDefault(); showLoginModal(); });
      if (openRegisterBtn) openRegisterBtn.addEventListener('click', (e) => { e.preventDefault(); showRegisterModal(); });
      if (openRegisterBtn2) openRegisterBtn2.addEventListener('click', (e) => { e.preventDefault(); showRegisterModal(); });
      if (openPasswordLink) openPasswordLink.addEventListener('click', (e) => { e.preventDefault(); showPasswordModal(); });
  
      if (closeLoginBtn) closeLoginBtn.addEventListener('click', hideAllModals);
      if (closeRegisterBtn) closeRegisterBtn.addEventListener('click', hideAllModals);
      if (closePasswordBtn) closePasswordBtn.addEventListener('click', hideAllModals);
  
      if(gotoRegisterLink) gotoRegisterLink.addEventListener('click', (e) => { e.preventDefault(); showRegisterModal(); });
      if(gotoLoginLink) gotoLoginLink.addEventListener('click', (e) => { e.preventDefault(); showLoginModal(); });
      if(backToLoginLink) backToLoginLink.addEventListener('click', (e) => { e.preventDefault(); showLoginModal(); });
  
      [loginModal, registerModal, passwordModal].forEach(modal => {
          if(modal) {
              modal.addEventListener('click', function (e) {
                  if (e.target === modal) hideAllModals();
              });
          }
      });
  
      const loginForm = document.getElementById('login-form');
      const registerForm = document.getElementById('register-form');
      const passwordForm = document.getElementById('password-form');
      
      const loginError = document.getElementById('login-error');
      const registerError = document.getElementById('register-error');
      const passwordMessage = document.getElementById('password-message');
  
      if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "¡PEGA TU API KEY AQUÍ!") {
          console.warn('Ejecutando en modo de simulación base.');
  
          function simulateLogin(e) {
              e.preventDefault(); 
              console.log('Accediendo (Simulación)... Redirigiendo a dashboard.html');
              window.location.href = 'dashboard.html';
          }
          
          function simulatePasswordReset(e) {
              e.preventDefault();
              if (passwordMessage) {
                  passwordMessage.textContent = '¡Enlace enviado (Simulación)!';
                  passwordMessage.classList.remove('hidden');
              }
              console.log('Enviando enlace de recuperación (Simulación)...');
              setTimeout(hideAllModals, 2000);
          }
  
          if (loginForm) loginForm.addEventListener('submit', simulateLogin);
          if (registerForm) registerForm.addEventListener('submit', simulateLogin);
          if (passwordForm) passwordForm.addEventListener('submit', simulatePasswordReset);
      }
  });


  const translations = {
    es: {
    page_title: "Locksight - Sistema Inteligente de Seguridad",

    nav_inicio: "Inicio",
    nav_caracteristicas: "Características",
    nav_planes: "Planes",
    nav_equipo: "Equipo",

    btn_login: "Log In",
    btn_signup: "Sign Up",

    hero_title: "El control de tus almacenes, en tus manos.",
    hero_desc: "Monitorea accesos en tiempo real, detecta anomalías y prevén pérdidas mediante sensores IoT. La seguridad de tu negocio desde cualquier lugar.",

    btn_registrarse: "Registrarse",
    btn_planes: "Planes",

    features_eyebrow: "LAS HERRAMIENTAS QUE TÚ NECESITAS",
    features_title: "Una alternativa diferente al resto",

    feat_1_title: "Alertas inmediatas",
    feat_1_desc: "Recibe notificaciones en tiempo real ante cualquier eventualidad.",

    feat_2_title: "Trazabilidad total",
    feat_2_desc: "Audita el historial detallado de accesos de todos tus sensores.",

    feat_3_title: "Gestión centralizada",
    feat_3_desc: "Administra múltiples sucursales y permisos desde un solo panel.",

    planes_title: "Elige el plan ideal para tu negocio",

    plan_basic_title: "Básico",
    plan_basic_desc: "Ideal para bodegas comerciales y pequeños almacenes",
    plan_basic_price: "$49",
    plan_period: "por mes / facturación anual",

    plan_basic_li1: "Monitoreo en tiempo real",
    plan_basic_li2: "Alertas básicas (App/Web)",
    plan_basic_li3: "1 Almacén",
    plan_basic_li4: "Soporte estándar",

    plan_badge: "Recomendado",

    plan_premium_title: "Premium",
    plan_premium_desc: "Para empresas logísticas con múltiples zonas de acceso",
    plan_premium_price: "$120",

    plan_premium_li1: "Todo lo del plan Básico",
    plan_premium_li2: "Historial y auditoría",
    plan_premium_li3: "Múltiples usuarios y roles",
    plan_premium_li4: "Hasta 3 Almacenes",

    plan_corp_title: "Corporativo",
    plan_corp_desc: "Seguridad de alto nivel y analítica para grandes infraestructuras",
    plan_corp_price: "Cotizar",
    plan_corp_period: "Diseñado a la medida de tu operación",

    plan_corp_li1: "Todo lo del plan Premium",
    plan_corp_li2: "Almacenes ilimitados",
    plan_corp_li3: "Reglas IoT automáticas",
    plan_corp_li4: "Soporte 24/7 prioritario",

    btn_empezar: "Empezar",

    team_eyebrow: "NUESTRO EQUIPO",
    team_title: "Integrantes de Locksight",

    member_role: "Ingeniero de Software",

    cta_title: "¿Aún no te convence? ¡Regístrate y elige un plan!",
    cta_desc: "Regístrate en minutos y accede a alguno de nuestros planes. Desde el primer mes vas a poder notar beneficios y no te va a costar utilizar la plataforma.",

    btn_registrate_ya: "Regístrate Ya",

    btn_iniciar_sesion: "Iniciar sesión",

    footer_terms: "Términos",
    footer_terms_1: "Términos de Servicio",
    footer_privacy: "Política de Privacidad",
    footer_cookies: "Política de Cookies",

    footer_support: "Soporte",
    footer_doc: "Documentación",

    footer_networks: "Redes",
    footer_follow: "Síguenos en:"
    },
    en: {
    page_title: "Locksight - Intelligent Security System",

    nav_inicio: "Home",
    nav_caracteristicas: "Features",
    nav_planes: "Plans",
    nav_equipo: "Team",

    btn_login: "Log In",
    btn_signup: "Sign Up",

    hero_title: "Warehouse control, in your hands.",
    hero_desc: "Monitor access in real time, detect anomalies, and prevent losses through IoT sensors. Your business security from anywhere.",

    btn_registrarse: "Sign Up",
    btn_planes: "Plans",

    features_eyebrow: "THE TOOLS YOU NEED",
    features_title: "A Different Alternative",

    feat_1_title: "Instant Alerts",
    feat_1_desc: "Receive real-time notifications whenever an event occurs.",

    feat_2_title: "Full Traceability",
    feat_2_desc: "Audit the detailed access history of all your sensors.",

    feat_3_title: "Centralized Management",
    feat_3_desc: "Manage multiple branches and permissions from a single dashboard.",

    planes_title: "Choose the Ideal Plan for Your Business",

    plan_basic_title: "Basic",
    plan_basic_desc: "Ideal for commercial warehouses and small storage facilities",
    plan_basic_price: "$49",
    plan_period: "per month / annual billing",

    plan_basic_li1: "Real-time monitoring",
    plan_basic_li2: "Basic alerts (App/Web)",
    plan_basic_li3: "1 Warehouse",
    plan_basic_li4: "Standard support",

    plan_badge: "Recommended",

    plan_premium_title: "Premium",
    plan_premium_desc: "For logistics companies with multiple access areas",
    plan_premium_price: "$120",

    plan_premium_li1: "Everything included in the Basic plan",
    plan_premium_li2: "History and auditing",
    plan_premium_li3: "Multiple users and roles",
    plan_premium_li4: "Up to 3 Warehouses",

    plan_corp_title: "Corporate",
    plan_corp_desc: "Advanced security and analytics for large-scale infrastructures",
    plan_corp_price: "Request a Quote",
    plan_corp_period: "Tailored to your operation",

    plan_corp_li1: "Everything included in the Premium plan",
    plan_corp_li2: "Unlimited warehouses",
    plan_corp_li3: "Automated IoT rules",
    plan_corp_li4: "24/7 Priority Support",

    btn_empezar: "Get Started",

    team_eyebrow: "OUR TEAM",
    team_title: "Locksight Team Members",

    member_role: "Software Engineer",

    cta_title: "Still not convinced? Sign up and choose a plan!",
    cta_desc: "Register in minutes and gain access to one of our plans. From the very first month, you'll notice the benefits and find the platform easy to use.",

    btn_registrate_ya: "Sign Up Now",

    btn_iniciar_sesion: "Log In",

    footer_terms: "Terms",
    footer_terms_1: "Terms of Service",
    footer_privacy: "Privacy Policy",
    footer_cookies: "Cookie Policy",

    footer_support: "Support",
    footer_doc: "Documentation",

    footer_networks: "Networks",
    footer_follow: "Follow us on:"
}
};

let currentLang = localStorage.getItem('locksight_lang') || 'es';

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
    const langBtn = document.getElementById('btn-lang');
    if (langBtn) {
        langBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    updateLanguage();
    const langBtn = document.getElementById('btn-lang');

    if (langBtn) {
        langBtn.addEventListener('click', function() {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            localStorage.setItem('locksight_lang', currentLang);
            updateLanguage();
        });
    }

    const menuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      if (menuButton && mobileMenu) {
          menuButton.addEventListener('click', function () {
              mobileMenu.classList.toggle('hidden');
          });
  
          const menuLinks = mobileMenu.getElementsByTagName('a');
          for (let link of menuLinks) {
              link.addEventListener('click', function () {
                  mobileMenu.classList.add('hidden');
              });
          }
      }
  
      const loginModal = document.getElementById('login-modal');
      const registerModal = document.getElementById('register-modal');
      const passwordModal = document.getElementById('password-modal'); 
  
      const openLoginBtn = document.getElementById('open-login-button');
      const openLoginBtnMobile = document.getElementById('open-login-button-mobile');
      const openRegisterBtn = document.getElementById('open-register-button');
      const openRegisterBtn2 = document.getElementById('open-register-button-2');
      const openPasswordLink = document.getElementById('open-password-link'); 
  
      const closeLoginBtn = document.getElementById('close-login-modal');
      const closeRegisterBtn = document.getElementById('close-register-modal');
      const closePasswordBtn = document.getElementById('close-password-modal'); 
  
      const gotoRegisterLink = document.getElementById('open-register-link');
      const gotoLoginLink = document.getElementById('open-login-link');
      const backToLoginLink = document.getElementById('back-to-login-link'); 
  
      function hideAllModals() {
          if (loginModal) loginModal.classList.add('hidden');
          if (registerModal) registerModal.classList.add('hidden');
          if (passwordModal) passwordModal.classList.add('hidden');
      }
      
      function showLoginModal() { hideAllModals(); if (loginModal) loginModal.classList.remove('hidden'); }
      function showRegisterModal() { hideAllModals(); if (registerModal) registerModal.classList.remove('hidden'); }
      function showPasswordModal() { hideAllModals(); if (passwordModal) passwordModal.classList.remove('hidden'); }
  
      if (openLoginBtn) openLoginBtn.addEventListener('click', (e) => { e.preventDefault(); showLoginModal(); });
      if (openLoginBtnMobile) openLoginBtnMobile.addEventListener('click', (e) => { e.preventDefault(); showLoginModal(); });
      if (openRegisterBtn) openRegisterBtn.addEventListener('click', (e) => { e.preventDefault(); showRegisterModal(); });
      if (openRegisterBtn2) openRegisterBtn2.addEventListener('click', (e) => { e.preventDefault(); showRegisterModal(); });
      if (openPasswordLink) openPasswordLink.addEventListener('click', (e) => { e.preventDefault(); showPasswordModal(); });
  
      if (closeLoginBtn) closeLoginBtn.addEventListener('click', hideAllModals);
      if (closeRegisterBtn) closeRegisterBtn.addEventListener('click', hideAllModals);
      if (closePasswordBtn) closePasswordBtn.addEventListener('click', hideAllModals);
  
      if(gotoRegisterLink) gotoRegisterLink.addEventListener('click', (e) => { e.preventDefault(); showRegisterModal(); });
      if(gotoLoginLink) gotoLoginLink.addEventListener('click', (e) => { e.preventDefault(); showLoginModal(); });
      if(backToLoginLink) backToLoginLink.addEventListener('click', (e) => { e.preventDefault(); showLoginModal(); });
  
      [loginModal, registerModal, passwordModal].forEach(modal => {
          if(modal) {
              modal.addEventListener('click', function (e) {
                  if (e.target === modal) hideAllModals();
              });
          }
      });
  
      const loginForm = document.getElementById('login-form');
      const registerForm = document.getElementById('register-form');
      const passwordForm = document.getElementById('password-form');
      
      const loginError = document.getElementById('login-error');
      const registerError = document.getElementById('register-error');
      const passwordMessage = document.getElementById('password-message');
  
      if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "¡PEGA TU API KEY AQUÍ!") {
          console.warn('Ejecutando en modo de simulación base.');
  
          function simulateLogin(e) {
              e.preventDefault(); 
              console.log('Accediendo (Simulación)... Redirigiendo a dashboard.html');
              window.location.href = 'dashboard.html';
          }
          
          function simulatePasswordReset(e) {
              e.preventDefault();
              if (passwordMessage) {
                  passwordMessage.textContent = '¡Enlace enviado (Simulación)!';
                  passwordMessage.classList.remove('hidden');
              }
              console.log('Enviando enlace de recuperación (Simulación)...');
              setTimeout(hideAllModals, 2000);
          }
  
          if (loginForm) loginForm.addEventListener('submit', simulateLogin);
          if (registerForm) registerForm.addEventListener('submit', simulateLogin);
          if (passwordForm) passwordForm.addEventListener('submit', simulatePasswordReset);
      }
});
