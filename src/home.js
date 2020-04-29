const landingPage = (function factory() {
  const content = document.querySelector('#content');

  function addNav() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Joy Eat</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#" class="home">Home</a></li>
        <li><a href="#" class="menu1">Menu1</a></li>
        <li><a href="#" class="menu2">Menu2</a></li>
        <li><a href="#" class="menu3">Menu3</a></li>
      </ul>
    </div>
  `;
    content.append(nav);
  }
  function welcome() {
    const div = document.createElement('div');
    div.className = 'welcome';
    div.innerHTML = '<h1>Welcome to my Restaurant</h1>';
    content.append(div);
  }
  return { addNav, welcome };
}());

export default landingPage;
