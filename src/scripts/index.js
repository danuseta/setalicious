import '../styles/alert.css';
import '../styles/main.css';
import '../styles/details.css';
import '../styles/responsive.css';
import '../styles/fav.css';
import '../styles/skeleton-item.css';
import '../styles/skeleton-home.css';
import './components/restaurant-item';
import App from './views/app';
import swRegister from './utils/sw-register';
import CONFIG from './config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

const init = async () => {
  app.renderPage();
  await swRegister();
};

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', init);

window.CONFIG = CONFIG;