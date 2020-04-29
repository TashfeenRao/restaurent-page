/* eslint-disable no-use-before-define */
import img3 from './pics/rice.jpg';

const dish3 = (function factory() {
  const content = document.querySelector('#content');
  const container = document.createElement('div');
  function addMenu1() {
    container.setAttribute('class', 'menu-container');
    container.innerHTML = '';
    addBeryanis();
    content.appendChild(container);
  }
  function addBeryanis() {
    const image1 = new Image();
    image1.src = img3;
    const row = document.createElement('div');
    row.className = 'row';
    const firstItem = document.createElement('article');

    firstItem.innerHTML = `
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img src="${img3}">
          <span class="card-title">Beryani</span>
        </div>
        <div class="card-content">
          <h4>Price Rs 400.</h4>
        </div>
        <div class="card-action">
          <a href="#">Order Now</a>
        </div>
      </div>
    </div>
      `;

    const secondItem = document.createElement('article');
    secondItem.innerHTML = `
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img src="${img3}">
          <span class="card-title">Beryani</span>
        </div>
        <div class="card-content">
          <h4>Price Rs 400.</h4>
        </div>
        <div class="card-action">
          <a href="#">Order Now</a>
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
            <img src="${img3}">
            <span class="card-title">Beryani</span>
          </div>
          <div class="card-content">
            <h4>Price Rs 400.</h4>
          </div>
          <div class="card-action">
            <a href="#">Order Now</a>
          </div>
        </div>
      </div>
        `;

    const fourthItem = document.createElement('article');
    fourthItem.innerHTML = ` <div class="col s12 m4">
    <div class="card">
      <div class="card-image">
        <img src="${img3}">
        <span class="card-title">Beryani</span>
      </div>
      <div class="card-content">
        <h4>Price Rs 400.</h4>
      </div>
      <div class="card-action">
        <a href="#">Order Now</a>
      </div>
    </div>
  </div>
    `;

    const fifthItem = document.createElement('article');
    fifthItem.innerHTML = `
      <div class="col s12 m4">
        <div class="card">
          <div class="card-image">
            <img src="${img3}">
            <span class="card-title">Beryani</span>
          </div>
          <div class="card-content">
            <h4>Price Rs 400.</h4>
          </div>
          <div class="card-action">
            <a href="#">Order Now</a>
          </div>
        </div>
      </div>
        `;

    const sixthItem = document.createElement('article');
    sixthItem.innerHTML = ` <div class="col s12 m4">
    <div class="card">
      <div class="card-image">
        <img src="${img3}">
        <span class="card-title">Beryani</span>
      </div>
      <div class="card-content">
        <h4>Price Rs 400.</h4>
      </div>
      <div class="card-action">
        <a href="#">Order Now</a>
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
  return { addMenu1, addBeryanis };
}());

export default dish3;
