// Scroll-triggered animations using Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    // If user prefers reduced motion, show all elements immediately
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(element => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    });
    return;
  }

  // Create intersection observer
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element fully enters viewport
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the animate class to trigger the animation
        entry.target.classList.add('animate');
        // Stop observing this element once animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in-up class
  const animatedElements = document.querySelectorAll('.fade-in-up');
  animatedElements.forEach(element => {
    observer.observe(element);
  });
});