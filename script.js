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
