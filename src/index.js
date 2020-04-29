/* eslint-disable no-use-before-define */
import './aws.scss';
import landingPage from './home';
import dish from './menu1';
import dish2 from './menu2';
import dish3 from './menu3';

document.addEventListener('DOMContentLoaded', () => {
  landingPage.addNav();
  landingPage.welcome();
});

window.onload = () => {
  const nav = document.querySelector('.navbar-brand');
  const home = document.querySelector('.home');
  const menu1 = document.querySelector('.menu1');
  const menu2 = document.querySelector('.menu2');
  const menu3 = document.querySelector('.menu3');

  nav.addEventListener('click', populatehome, { once: true });
  home.addEventListener('click', populatehome, { once: true });
  menu1.addEventListener('click', populateMenu1, { once: true });
  menu2.addEventListener('click', populateMenu2, { once: true });
  menu3.addEventListener('click', populateMenu3, { once: true });
};

function populatehome() {
  const content = document.querySelector('#content');
  content.removeChild(content.lastChild);
  landingPage.welcome();
  const nav = document.querySelector('.navbar-brand');
  const menu1 = document.querySelector('.menu1');
  const menu2 = document.querySelector('.menu2');
  const menu3 = document.querySelector('.menu3');
  nav.addEventListener('click', populatehome, { once: true });
  menu1.addEventListener('click', populateMenu1, { once: true });
  menu2.addEventListener('click', populateMenu2, { once: true });
  menu3.addEventListener('click', populateMenu3, { once: true });
}

function populateMenu1() {
  const content = document.querySelector('#content');
  content.removeChild(content.lastChild);
  dish.addMenu1();
  const home = document.querySelector('.home');
  const menu2 = document.querySelector('.menu2');
  const menu3 = document.querySelector('.menu3');
  home.addEventListener('click', populatehome, { once: true });
  menu2.addEventListener('click', populateMenu2, { once: true });
  menu3.addEventListener('click', populateMenu3, { once: true });
}
function populateMenu2() {
  const content = document.querySelector('#content');
  content.removeChild(content.lastChild);
  dish2.addMenu1();
  const home = document.querySelector('.home');
  const menu1 = document.querySelector('.menu1');
  const menu3 = document.querySelector('.menu3');
  home.addEventListener('click', populatehome, { once: true });
  menu1.addEventListener('click', populateMenu1, { once: true });
  menu3.addEventListener('click', populateMenu3, { once: true });
}
function populateMenu3() {
  const content = document.querySelector('#content');
  content.removeChild(content.lastChild);
  dish3.addMenu1();
  const home = document.querySelector('.home');
  const menu2 = document.querySelector('.menu2');
  const menu1 = document.querySelector('.menu1');
  home.addEventListener('click', populatehome, { once: true });
  menu2.addEventListener('click', populateMenu2, { once: true });
  menu1.addEventListener('click', populateMenu1, { once: true });
}
