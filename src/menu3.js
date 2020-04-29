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
    const firstItem = document.createElement('article');
    firstItem.setAttribute('class', 'card');
    firstItem.innerHTML = `
      
              <h2>Barbeque Beryani</h2>
              <h4>$20.00</h4>
            `;

    const secondItem = document.createElement('article');
    secondItem.setAttribute('class', 'card');
    secondItem.innerHTML = `
      
              <h2>Beef Beryani</h2>
              <h4>$30.00</h4>
            `;

    const thirdItem = document.createElement('article');
    thirdItem.setAttribute('class', 'card');
    thirdItem.innerHTML = `
      
              <h2>Cheese Beryani</h2>
              <h4>$25.00</h4>
            `;

    const fourthItem = document.createElement('article');
    fourthItem.setAttribute('class', 'card');
    fourthItem.innerHTML = `
      
              <h2>Chicken Beryani</h2>
              <h4>$15.00</h4>
            `;

    const fifthItem = document.createElement('article');
    fifthItem.setAttribute('class', 'card');
    fifthItem.innerHTML = `
      
              <h2>HamBeryani</h2>
              <h4>$22.00</h4>
            `;


    const sixthItem = document.createElement('article');
    sixthItem.setAttribute('class', 'card');
    sixthItem.innerHTML = `
      
              <h2>Veggie Beryani</h2>
              <h4>$10.00</h4>
            `;

    container.appendChild(firstItem);
    container.appendChild(secondItem);
    container.appendChild(thirdItem);
    container.appendChild(fourthItem);
    container.appendChild(fifthItem);
    container.appendChild(sixthItem);
  }
  return { addMenu1, addBeryanis };
}());

export default dish3;
