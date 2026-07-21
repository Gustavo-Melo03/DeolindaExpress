// ==========================================================================
// gallery.js — lightbox acessível da galeria de serviços realizados
// ==========================================================================
export function initGallery(){
  const lightbox = document.getElementById('galleryLightbox');
  if (!lightbox) return;

  const image = lightbox.querySelector('.gallery-lightbox__image');
  const closeButton = lightbox.querySelector('.gallery-lightbox__close');
  const cards = document.querySelectorAll('[data-gallery-image]');
  let lastTrigger = null;

  function openGallery(card){
    lastTrigger = card;
    image.src = card.dataset.galleryImage;
    image.alt = card.dataset.galleryAlt || '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('gallery-open');
    closeButton.focus();
  }

  function closeGallery(){
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('gallery-open');
    image.src = '';
    if (lastTrigger) lastTrigger.focus();
  }

  cards.forEach(card => card.addEventListener('click', () => openGallery(card)));
  closeButton.addEventListener('click', closeGallery);
  lightbox.addEventListener('click', event => { if (event.target === lightbox) closeGallery(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) closeGallery();
  });
}
