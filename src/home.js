const landingPage = (function factory() {
  const content = document.querySelector('#content');

  function addNav() {
    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg navbar-dark bg-primary';
    nav.innerHTML = `<a class="navbar-brand" href="#">Restaurant</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link home" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu1" href="#">Menu 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu2" href="#">Menu 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu3" href="#">Menu 3</a>
        </li>
      </ul>
    </div>`;
    content.append(nav);
  }
  function welcome() {
    const div = document.createElement('div');
    div.innerHTML = '<h1>Welcome to my Restaurant</h1>';
    content.append(div);
  }
  return { addNav, welcome };
}());

export default landingPage;
