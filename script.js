'use strict';

const showModalBtns = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const onShowModal = () => {
  console.log('brtbbbbbbbbb');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const onCloseModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

showModalBtns.forEach(btn => btn.addEventListener('click', onShowModal));
closeModalBtn.addEventListener('click', onCloseModal);
overlay.addEventListener('click', onCloseModal);
