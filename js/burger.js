'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.modal');
  const closeButton = document.querySelector('.form-modal-close');
  const burgerButton = document.querySelector('.burger-button');

  // Відкриття модального вікна при натисканні на кнопку бургер
  burgerButton.addEventListener('click', function () {
    modal.classList.remove('is-closed');
    modal.classList.add('is-open');
  });

  // Закриття модального вікна при натисканні на кнопку
  closeButton.addEventListener('click', function () {
    modal.classList.add('is-closed');
    modal.classList.remove('is-open');
  });

  // Закриття модального вікна при натисканні поза модального вікна
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.classList.add('is-closed');
      modal.classList.remove('is-open');
    }
  });
});