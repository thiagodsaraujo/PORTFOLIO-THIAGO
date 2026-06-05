(function () {
  window.dataLayer = window.dataLayer || [];

  function setupBioTypingAnimation() {
    const typedFocus = document.getElementById('bio-typed-focus');

    if (!typedFocus) {
      return;
    }

    const focusItems = [
      'Backend systems',
      'Product execution',
      'AI workflows',
      'SaaS delivery',
      'LLM orchestration'
    ];
    let focusIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentFocus = focusItems[focusIndex];
      typedFocus.textContent = currentFocus.slice(0, charIndex);

      if (!isDeleting && charIndex < currentFocus.length) {
        charIndex += 1;
        window.setTimeout(type, 72);
        return;
      }

      if (!isDeleting && charIndex === currentFocus.length) {
        isDeleting = true;
        window.setTimeout(type, 1150);
        return;
      }

      if (isDeleting && charIndex > 0) {
        charIndex -= 1;
        window.setTimeout(type, 34);
        return;
      }

      isDeleting = false;
      focusIndex = (focusIndex + 1) % focusItems.length;
      window.setTimeout(type, 220);
    };

    type();
  }

  window.addEventListener('load', () => {
    document.body.classList.add('bio-ready');
    setupBioTypingAnimation();
  });
}());
