const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this._closeDrawer(event, drawer, button);
      }
    });
  },

  _toggleDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    button.classList.toggle('active');

    const isExpanded = drawer.classList.contains('open');
    button.setAttribute('aria-expanded', isExpanded);
  },

  _closeDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.remove('open');
    button.classList.remove('active');
    button.setAttribute('aria-expanded', false);
  },
};

export default DrawerInitiator;