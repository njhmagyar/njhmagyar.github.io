document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.nhm-card--horizontal');
  const body = document.body;
  let currentColor = null;
  let defaultColor = '#ffffff'; // Default white background
  
  // Create a throttled scroll handler for better performance
  let ticking = false;
  
  function updateBackground() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let activeProject = null;
    
    // Find which project is currently in the center of the viewport
    projectCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardTop = rect.top + window.scrollY;
      const cardBottom = cardTop + rect.height;
      
      if (scrollPosition >= cardTop && scrollPosition <= cardBottom) {
        // Get the background color from the project's data attribute
        const projectLink = card.querySelector('a[href]');
        if (projectLink) {
          const backgroundColor = card.dataset.backgroundColor;
          if (backgroundColor && backgroundColor !== currentColor) {
            activeProject = backgroundColor;
          }
        }
      }
    });
    
    // Update background color if it changed
    if (activeProject && activeProject !== currentColor) {
      currentColor = activeProject;
      body.style.backgroundColor = activeProject;
    } else if (!activeProject && currentColor !== defaultColor) {
      // Reset to default when no project is active
      currentColor = defaultColor;
      body.style.backgroundColor = defaultColor;
    }
    
    ticking = false;
  }
  
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateBackground);
      ticking = true;
    }
  }
  
  // Add scroll listener
  window.addEventListener('scroll', onScroll);
  
  // Initialize on page load
  updateBackground();
});