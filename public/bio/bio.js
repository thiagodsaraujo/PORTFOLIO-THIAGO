(function () {
  const config = window.BIO_CONFIG || {};
  const measurementId = config.gaMeasurementId;
  const hasMeasurementId = measurementId && measurementId !== 'GA_MEASUREMENT_ID';

  function loadAnalytics() {
    if (!hasMeasurementId || window.gtag) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);

    window.gtag('js', new Date());
    window.gtag('config', measurementId);
  }

  loadAnalytics();

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
