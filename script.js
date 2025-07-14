// Mobile Menu Toggle
const toggleMenu = document.getElementById('toggle-menu');
const navLinks = document.querySelector('.nav-links');

toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  toggleMenu.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme or prefered scheme
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

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 70,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      toggleMenu.textContent = '☰';
    }
  });
});

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = 'flex';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Project Card Animation
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0) rotateX(0)';
  });
});

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

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
  // Add any initialization code here
});

// Animate skill bars when scrolled to
function animateSkills() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width + '%';
  });
}

// Check if skills section is in view
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Animate skills when section comes into view
window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  if (isInViewport(skillsSection)) {
    animateSkills();
    // Remove event listener after animation
    window.removeEventListener('scroll', arguments.callee);
  }
});

// Form submission
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formResponse.textContent = 'Sending message...';
    formResponse.style.color = 'var(--primary)';

    // Simulate form submission (replace with actual AJAX call)
    setTimeout(() => {
      formResponse.textContent = 'Message sent successfully!';
      formResponse.style.color = 'green';
      contactForm.reset();
    }, 1500);
  });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
  // Check if skills section is already in view on page load
  const skillsSection = document.getElementById('skills');
  if (isInViewport(skillsSection)) {
    animateSkills();
  }
});

// CV Download Functionality
document.getElementById('download-cv').addEventListener('click', function() {
  // Replace with your actual CV file path
  const cvUrl = 'path/to/your-cv.pdf';
  
  // Create a temporary anchor element
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = 'Chamindu_Sandeepa_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Optional: Add download confirmation
  const downloadToast = document.createElement('div');
  downloadToast.textContent = 'Downloading CV...';
  downloadToast.style.position = 'fixed';
  downloadToast.style.bottom = '20px';
  downloadToast.style.right = '20px';
  downloadToast.style.padding = '10px 20px';
  downloadToast.style.background = 'var(--primary)';
  downloadToast.style.color = 'white';
  downloadToast.style.borderRadius = '5px';
  downloadToast.style.zIndex = '1000';
  downloadToast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  document.body.appendChild(downloadToast);
  
  setTimeout(() => {
    downloadToast.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(downloadToast);
    }, 500);
  }, 3000);
});


// Animate timeline items when scrolled to
function animateTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach((item, index) => {
    if (isInViewport(item)) {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 150 * index);
    }
  });
}

// Initialize timeline animation
document.addEventListener('DOMContentLoaded', () => {
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.5s ease';
  });
  
  window.addEventListener('scroll', animateTimeline);
  animateTimeline(); // Run once on load
});