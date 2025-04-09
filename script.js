
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav');
  
  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
      const spans = mobileMenuBtn.querySelectorAll('span');
      spans[0].classList.toggle('rotate-45');
      spans[0].classList.toggle('translate-y-2');
      spans[1].classList.toggle('opacity-0');
      spans[2].classList.toggle('-rotate-45');
      spans[2].classList.toggle('-translate-y-2');
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // Close mobile menu if open
        if (nav.classList.contains('active')) {
          nav.classList.remove('active');
        }
        
        // Scroll to target
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.boxShadow = 'none';
      }
    });
  }

  // Toast notification function
  function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (toast && toastMessage) {
      toastMessage.textContent = message;
      toast.classList.add('show');
      
      setTimeout(function() {
        toast.classList.remove('show');
      }, duration);
    }
  }

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const name = this.querySelector('#name').value;
      const email = this.querySelector('#email').value;
      const service = this.querySelector('#services').value;
      const message = this.querySelector('#message').value;
      
      // Basic validation (more could be added)
      if (!name || !email || !message) {
        showToast('Please fill out all required fields');
        return;
      }
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address');
        return;
      }
      
      // In a real scenario, you would send this data to a server
      console.log('Form submission:', { name, email, service, message });
      
      // For demo purposes, we'll just show a success message and reset the form
      showToast('Thank you! Your message has been sent successfully.');
      contactForm.reset();
    });
  }

  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = this.querySelector('input[type="email"]').value;
      
      // Basic validation
      if (!email) {
        showToast('Please enter your email address');
        return;
      }
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address');
        return;
      }
      
      // In a real scenario, you would send this to a server
      console.log('Newsletter subscription:', email);
      
      // For demo purposes, we'll just show a success message and reset the form
      showToast('Thank you for subscribing to our newsletter!');
      newsletterForm.reset();
    });
  }
  
  // Animate elements on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .pricing-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial state for animations
  const elementsToAnimate = document.querySelectorAll('.service-card, .portfolio-item, .pricing-card');
  elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Run once on page load
  setTimeout(animateOnScroll, 300);
  
  // Then on scroll
  window.addEventListener('scroll', animateOnScroll);
});
