/* eslint-disable no-use-before-define */
import img2 from './pics/pizza.jpg';

const dish2 = (function factory() {
  const content = document.querySelector('#content');
  const container = document.createElement('div');
  function addMenu1() {
    container.setAttribute('class', 'menu-container');
    container.innerHTML = '';
    addPizzas();
    content.appendChild(container);
  }
  function addPizzas() {
    const image1 = new Image();
    image1.src = img2;
    const row = document.createElement('div');
    row.className = 'row';
    const firstItem = document.createElement('article');

    firstItem.innerHTML = `
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img src="${img2}">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
      `;

    const secondItem = document.createElement('article');
    secondItem.innerHTML = `
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img src="${img2}">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
      `;

    const thirdItem = document.createElement('article');
    const row2 = document.createElement('div');
    row2.className = 'row';
    thirdItem.innerHTML = `
      <div class="col s12 m4">
        <div class="card">
          <div class="card-image">
            <img src="${img2}">
            <span class="card-title">Card Title</span>
          </div>
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
        `;

    const fourthItem = document.createElement('article');
    fourthItem.innerHTML = ` <div class="col s12 m4">
    <div class="card">
      <div class="card-image">
        <img src="${img2}">
        <span class="card-title">Card Title</span>
      </div>
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
    `;

    const fifthItem = document.createElement('article');
    fifthItem.innerHTML = `
      <div class="col s12 m4">
        <div class="card">
          <div class="card-image">
            <img src="${img2}">
            <span class="card-title">Card Title</span>
          </div>
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
        `;

    const sixthItem = document.createElement('article');
    sixthItem.innerHTML = ` <div class="col s12 m4">
    <div class="card">
      <div class="card-image">
        <img src="${img2}">
        <span class="card-title">Card Title</span>
      </div>
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
    `;

    row.appendChild(firstItem);
    row.appendChild(secondItem);
    row.appendChild(thirdItem);
    row2.appendChild(fourthItem);
    row2.appendChild(fifthItem);
    row2.appendChild(sixthItem);
    container.appendChild(row);
    container.appendChild(row2);
  }
  return { addMenu1, addPizzas };
}());

export default dish2;
