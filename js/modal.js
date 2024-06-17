ocument.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.backdrop');
  const closeButton = document.querySelector('.form-button-close');
  const reviewButton = document.querySelector('.button-review');

  // Відкриття модального вікна при натисканні на кнопку "Leave a review"
  reviewButton.addEventListener('click', function () {
    modal.classList.remove('is-closed');
    modal.classList.add('is-open');
  });

  // Закриття модального вікна при натисканні на кнопку закриття
  closeButton.addEventListener('click', function () {
    modal.classList.remove('is-open');
    modal.classList.add('is-closed');
  });

  // Закриття модального вікна при натисканні поза модального вікна
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.classList.remove('is-open');
      modal.classList.add('is-closed');
    }
  });
});