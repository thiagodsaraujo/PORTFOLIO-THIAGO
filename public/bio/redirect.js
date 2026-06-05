(function () {
  const config = window.BIO_CONFIG || {};
  const linkId = document.documentElement.dataset.linkId;
  const link = config.links && config.links[linkId];
  const fallbackLink = document.getElementById('redirect-link');
  const label = document.getElementById('redirect-label');
  const hasGtm = config.gtmContainerId === 'GTM-T6K3NTDN';

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

  if (!hasGtm) {
    window.setTimeout(go, 450);
    return;
  }

  window.dataLayer = window.dataLayer || [];

  let redirected = false;
  const redirectOnce = () => {
    if (redirected) {
      return;
    }
    redirected = true;
    go();
  };

  window.dataLayer.push({
    event: config.eventName || 'bio_link_clicked',
    element_id: link.element_id,
    element_label: link.element_label,
    element_type: link.element_type,
    page_section: link.page_section,
    link_id: link.link_id,
    link_label: link.link_label,
    placement: link.placement,
    destination_type: link.destination_type,
    destination_domain: link.destination_domain,
    is_outbound: link.is_outbound,
    eventCallback: redirectOnce,
    eventTimeout: 900
  });

  window.setTimeout(redirectOnce, 1200);
}());
