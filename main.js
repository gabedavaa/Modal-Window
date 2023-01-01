const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');

const closeBtn = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const openBtn = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

// console.log(modal);
// console.log(overlay);
// console.log(btnCloseModel);
// console.log(btnOpenModel);

for (let i = 0; i < btnOpenModel.length; i++) {
  btnOpenModel[i].addEventListener('click', openBtn);
}

btnCloseModel.addEventListener('click', closeBtn);

overlay.addEventListener('click', closeBtn);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeBtn();
  }
});
