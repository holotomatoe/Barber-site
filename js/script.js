'use strict';

var Scroll = {
  SHADE: 400,
  TOP: 100
};

var modalOpenButton = document.querySelector('.slider__btn--modalShow');
var modal = document.querySelector('.modal');
var modalCloseButton = modal.querySelector('.modal__close-btn');

var pricingBtn = document.querySelectorAll('.pricing__button');

var pageHeader = document.querySelector('.page-header');
var navigation = pageHeader.querySelector('.page-header__nav');

var onWindowScroll = function () {
  var shade = window.scrollY < Scroll.SHADE ? window.scrollY + Scroll.SHADE / 4 : Scroll.SHADE;
  var top = window.scrollY < Scroll.TOP ? window.scrollY : Scroll.TOP;

  navigation.style.backgroundColor =  'rgba(0, 0, 0, ' + shade / Scroll.SHADE +')';
  pageHeader.style.top = -(top / Scroll.TOP) * Scroll.TOP + 'px';
};

var onPricingBtnClick = function (evt) {
  evt.preventDefault();
  if (modal.classList.contains('modal--hide')) {
    modal.classList.remove('modal--hide');
    modalCloseButton.addEventListener('click', onModalCloseButtonClick);
    document.addEventListener('keydown', onDocumentKeydown);
  }
};

var onModalOpenButtonClick = function () {
  if (modal.classList.contains('modal--hide')) {
    modal.classList.remove('modal--hide');
    modalCloseButton.addEventListener('click', onModalCloseButtonClick);
    document.addEventListener('keydown', onDocumentKeydown);
  }
};

var onModalCloseButtonClick = function () {
  if (!modal.classList.contains('modal--hide')) {
    modal.classList.add('modal--hide');
    modalCloseButton.removeEventListener('click', onModalCloseButtonClick);
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

var onDocumentKeydown = function (evt) {
  if (evt.key === 'Escape' && !modal.classList.contains('modal--hide')) {
    modal.classList.add('modal--hide');
    modalCloseButton.removeEventListener('click', onModalCloseButtonClick);
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};


window.addEventListener('scroll', onWindowScroll);
modalOpenButton.addEventListener('click', onModalOpenButtonClick);
pricingBtn.forEach(function (btn) {
  btn.addEventListener('click', onPricingBtnClick);
})
