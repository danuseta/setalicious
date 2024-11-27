const API_ENDPOINT = 'https://restaurant-api.dicoding.dev';

const checkInternetConnection = () => {
  if (!navigator.onLine) {
    return Promise.resolve(false);
  }

  return fetch(`${API_ENDPOINT}/list`, { method: 'HEAD' })
    .then(() => true)
    .catch(() => false);
};

let isFirstCheck = true;
let lastConnectionStatus = null;

const showToast = (isOnline) => {
  const toastElement = document.createElement('div');
  toastElement.className = isOnline ? 'online-toast' : 'offline-toast';
  toastElement.innerHTML = `
    <div class="${isOnline ? 'online' : 'offline'}-toast-content">
      <span>${isOnline ? '✅ Connected' : '⚠️ No Internet Connection'}</span>
      <p>${isOnline ? 'Internet connection restored' : 'You are working in offline mode'}</p>
    </div>
  `;
  document.body.appendChild(toastElement);
  setTimeout(() => toastElement.remove(), 3000);
};

const showConnectionStatus = async () => {
  const isOnline = await checkInternetConnection();

  if ((isFirstCheck && !isOnline) || (!isFirstCheck && lastConnectionStatus !== isOnline)) {
    try {
      if (typeof Swal !== 'undefined') {
        Swal.fire({
          icon: isOnline ? 'success' : 'warning',
          title: isOnline ? 'Connected' : 'No Internet Connection',
          text: isOnline ?
            'Your internet connection has been restored.' :
            'You are working in offline mode. Some features may be limited.',
          position: 'top-end',
          timer: 3000,
          toast: true,
          showConfirmButton: false
        });
      } else {
        showToast(isOnline);
      }
    } catch (error) {
      console.warn('SweetAlert2 failed, using fallback toast:', error);
      showToast(isOnline);
    }
  }

  lastConnectionStatus = isOnline;
  isFirstCheck = false;

  return isOnline;
};

const startConnectionMonitoring = () => {
  showConnectionStatus();

  window.addEventListener('online', () => {
    lastConnectionStatus = false;
    isFirstCheck = false;
    showConnectionStatus();
  });

  window.addEventListener('offline', () => {
    lastConnectionStatus = true;
    isFirstCheck = false;
    showConnectionStatus();
  });

  setInterval(async () => {
    await showConnectionStatus();
  }, 30000);
};

export {
  checkInternetConnection,
  showConnectionStatus,
  startConnectionMonitoring
};
