function handleBatonClick(button) {
  // Toggle the loading state
  button.classList.toggle('loading');
  
  // If adding loading state, remove it after a short delay for demo purposes
  if (button.classList.contains('loading')) {
    setTimeout(() => {
      button.classList.remove('loading');
    }, 3000); // Remove loading state after 3 seconds
  }
}