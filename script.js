document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const toggleMenu = document.getElementById('toggle-menu');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;
  
  toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    body.classList.toggle('no-scroll');
    toggleMenu.innerHTML = navLinks.classList.contains('active') ? 
      '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        body.classList.remove('no-scroll');
        toggleMenu.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });

  // Theme Toggle
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

  // Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Animate elements when they come into view
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

  // Initialize animations
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();

  // Form Submission
  const contactForm = document.getElementById('contact-form');
  const formResponse = document.getElementById('form-response');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formResponse.textContent = 'Sending message...';
      formResponse.style.color = 'var(--primary)';

      // Simulate form submission
      setTimeout(() => {
        formResponse.textContent = 'Message sent successfully!';
        formResponse.style.color = 'green';
        contactForm.reset();
      }, 1500);
    });
  }

  // Show/hide mobile menu toggle based on screen size
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
  checkScreenSize(); // Run once on load
});