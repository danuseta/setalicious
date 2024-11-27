import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../utils/url-parser';
import routes from '../routes/router';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  _toggleHeroVisibility(url) {
    const heroElement = document.querySelector('.hero');
    if (heroElement) {
      if (url.includes('/detail/')) {
        heroElement.style.display = 'none';
      } else {
        heroElement.style.display = 'flex';
      }
    }
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    this._toggleHeroVisibility(url);

    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;