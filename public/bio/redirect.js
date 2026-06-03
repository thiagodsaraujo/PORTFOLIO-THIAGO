(function () {
  const config = window.BIO_CONFIG || {};
  const linkId = document.documentElement.dataset.linkId;
  const link = config.links && config.links[linkId];
  const fallbackLink = document.getElementById('redirect-link');
  const label = document.getElementById('redirect-label');
  const measurementId = config.gaMeasurementId;
  const hasMeasurementId = measurementId && measurementId !== 'GA_MEASUREMENT_ID';

  if (!link) {
    if (label) {
      label.textContent = 'link';
    }
    return;
  }

  if (fallbackLink) {
    fallbackLink.href = link.destination_url;
    fallbackLink.textContent = `Abrir ${link.link_label}`;
  }

  if (label) {
    label.textContent = link.link_label;
  }

  function go() {
    window.location.href = link.destination_url;
  }

  if (!hasMeasurementId) {
    window.setTimeout(go, 450);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  let redirected = false;
  const redirectOnce = () => {
    if (redirected) {
      return;
    }
    redirected = true;
    go();
  };

  window.gtag('event', config.eventName || 'bio_link_clicked', {
    link_id: link.link_id,
    link_label: link.link_label,
    destination_url: link.destination_url,
    placement: link.placement,
    event_callback: redirectOnce,
    event_timeout: 900
  });

  window.setTimeout(redirectOnce, 1200);
}());
