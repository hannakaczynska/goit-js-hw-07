import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryGrid = galleryItems
  .map(
    item =>
      `<div class="gallery__item">
      <a class="gallery__link" href=${item.original}>
      <img class="gallery__image" src=${item.preview} data-source=${item.original} alt=${item.description}/>
      </a>
      </div>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryGrid);
gallery.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: instance => {
        window.addEventListener('keydown', closeModal);
      },
      onClose: instance => {
        window.removeEventListener('keydown', closeModal);
      },
    }
  );
  function closeModal(e) {
    if (e.key === 'Escape') {
      instance.close();
    }
  }
  instance.show();
}
