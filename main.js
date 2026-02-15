// Wait for DOM to be fully loaded
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing...');
  
  const letterContainer = document.getElementById('letterContainer');
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeBtn');

  console.log('Letter container:', letterContainer);
  console.log('Modal:', modal);
  console.log('Close button:', closeBtn);

  // Check if elements exist
  if (!letterContainer || !modal || !closeBtn) {
    console.error('Required elements not found');
    // If elements don't exist, just start animation
    document.body.classList.remove('not-loaded');
    return;
  }

  console.log('All elements found, setting up event listeners...');

  // Click on letter to open modal
  letterContainer.addEventListener('click', () => {
    console.log('Letter clicked, opening modal');
    modal.classList.add('active');
  });

  // Click close button to start animation
  closeBtn.addEventListener('click', () => {
    console.log('Close button clicked');
    // Close modal
    modal.classList.remove('active');
    
    // Hide letter
    letterContainer.classList.add('hidden');
    
    // Start flower animation after a short delay
    setTimeout(() => {
      console.log('Starting flower animation');
      document.body.classList.remove('not-loaded');
    }, 300);
  });

  // Also allow clicking outside modal to close it
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      console.log('Clicked outside modal, closing');
      modal.classList.remove('active');
      letterContainer.classList.add('hidden');
      setTimeout(() => {
        document.body.classList.remove('not-loaded');
      }, 300);
    }
  });
  
  console.log('Setup complete!');
});
