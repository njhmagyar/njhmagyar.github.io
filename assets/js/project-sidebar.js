// Project sidebar navigation for H2 anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Only run on project pages (check if we have project layout elements)
  const projectHero = document.querySelector('[data-project-detail]');
  if (!projectHero) return;

  // Find all H2 elements in the content area
  const headings = document.querySelectorAll('.nhm-wrapper [data-sidebar]');
  if (headings.length === 0) return;

  const sidebarList = document.querySelector('.project-sidebar__list');
  const sidebarItems = [];

  // Generate unique IDs and create navigation items
  headings.forEach((heading, index) => {
    // Create unique ID for heading if it doesn't have one
    if (!heading.id) {
      const id = heading.textContent
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      heading.id = id + (index > 0 ? '-' + index : '');
    }

    // Create sidebar navigation item
    const listItem = document.createElement('li');
    listItem.className = 'project-sidebar__item';
    
    const link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = heading.textContent;
    link.className = 'project-sidebar__link';
    
    listItem.appendChild(link);
    sidebarList.appendChild(listItem);
    
    sidebarItems.push({
      id: heading.id,
      element: heading,
      link: link,
      listItem: listItem
    });

    // Smooth scroll behavior for anchor links
    link.addEventListener('click', function(e) {
      e.preventDefault();
      heading.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  // Intersection Observer for active section highlighting
  const observerOptions = {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const item = sidebarItems.find(item => item.element === entry.target);
      if (item) {
        if (entry.isIntersecting) {
          // Remove active class from all items
          sidebarItems.forEach(sidebarItem => {
            sidebarItem.listItem.classList.remove('active');
          });
          // Add active class to current item
          item.listItem.classList.add('active');
        }
      }
    });
  }, observerOptions);

  // Observe all headings
  headings.forEach(heading => {
    observer.observe(heading);
  });

  // Set first item as active initially
  if (sidebarItems.length > 0) {
    sidebarItems[0].listItem.classList.add('active');
  }
});