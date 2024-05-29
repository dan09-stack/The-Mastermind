const visionImgContainer = document.querySelector('.vision-img-container');

// Wait for the element to be rendered
window.addEventListener('load', () => {
  visionImgContainer.animate(
    [
      { width: '50%' },
      { width: '75%' },
      { width: '50%' }
    ],
    {
      duration: 2000, // 2 seconds
      delay: 2000, // 2 second delay
      iterations: 1, // Run the animation once
      fill: 'forwards' // Retain the final state after the animation completes
    }
  );
});