document.addEventListener('DOMContentLoaded', function() {

  const toggleMenu = document.getElementById('toggle-menu');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;
  
  toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    body.classList.toggle('no-scroll');
    toggleMenu.innerHTML = navLinks.classList.contains('active') ? 
      '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });

  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        body.classList.remove('no-scroll');
        toggleMenu.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });


  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = localStorage.getItem('theme') || 
                      (prefersDarkScheme.matches ? 'dark' : 'light');

  if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
      document.body.removeAttribute('data-theme');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'light');
    } else {
      document.body.setAttribute('data-theme', 'dark');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'dark');
    }
  });

  
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.timeline-item, .skill-progress');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('visible');
        
        if (element.classList.contains('skill-progress')) {
          const width = element.getAttribute('data-width');
          element.style.width = width + '%';
        }
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();


  const contactForm = document.getElementById('contact-form');
  const formResponse = document.getElementById('form-response');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formResponse.textContent = 'Sending message...';
      formResponse.style.color = 'var(--primary)';

    
      setTimeout(() => {
        formResponse.textContent = 'Message sent successfully!';
        formResponse.style.color = 'green';
        contactForm.reset();
      }, 1500);
    });
  }

 
  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      toggleMenu.style.display = 'block';
      themeToggle.style.display = 'block';
      navLinks.classList.remove('active');
      body.classList.remove('no-scroll');
    } else {
      toggleMenu.style.display = 'none';
      themeToggle.style.display = 'block';
      navLinks.classList.remove('active');
      body.classList.remove('no-scroll');
    }
  }

  window.addEventListener('resize', checkScreenSize);
  checkScreenSize(); 
});