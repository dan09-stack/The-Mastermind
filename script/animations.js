document.addEventListener('DOMContentLoaded', () => {
    const animateWidthElement = document.querySelector('.animate-width');
  
    if (animateWidthElement) {
      const keyframes = [
        { width: '50%' },
        { width: '75%' },
        { width: '50%' }
      ];
  
      const options = {
        duration: 2000, // 2 seconds
        delay: 2000, // 2 second delay
        iterations: 1, // Run the animation once
        fill: 'forwards' // Retain the final state after the animation completes
      };
  
      animateWidthElement.animate(keyframes, options);
    }
  });