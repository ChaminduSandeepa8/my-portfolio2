// Mobile menu toggle
const toggleBtn = document.getElementById('toggle-menu');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact form submit
const form = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name === '' || email === '' || message === '') {
    formResponse.style.color = 'red';
    formResponse.textContent = 'Please fill in all fields.';
    return;
  }

  // Simulate sending message
  formResponse.style.color = '#27ae60';
  formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;

  // Clear form
  form.reset();

  setTimeout(() => {
    formResponse.textContent = '';
  }, 5000);
});

// Tab functionality for Skills/Experience/Education
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active to clicked button and its content
    button.classList.add('active');
    const target = document.getElementById(button.dataset.tab);
    target.classList.add('active');
  });
});
