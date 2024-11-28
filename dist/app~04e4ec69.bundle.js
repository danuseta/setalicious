"use strict";(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[446],{1249:function(n,A,e){var t=e(1354),a=e.n(t),r=e(6314),o=e.n(r)()(a());o.push([n.id,":root {\n    --warna-utama: #a27fcf;\n    --warna-kedua: #9a8c98;\n    --background-color: #e9e6f3;\n    --text-pertama: #a27fcf;\n    --text-kedua: #2c3e50;\n    --hover-color: #6f578d;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;\n    \n}\n\nbody {\n    background-color: var(--background-color);\n    min-height: 100vh;\n    padding-top: 64px;\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    overflow-y: scroll;\n\n}\n\n.skip-link {\n    position: absolute;\n    top: -40px;\n    left: 0;\n    background-color: var(--warna-utama);\n    color: white;\n    padding: 8px;\n    z-index: 1000;\n    text-decoration: none;\n    transition: top 0.3s ease;\n}\n\n.skip-link:focus {\n    top: 0;\n}\n\n.header {\n    background-color: var(--text-pertama);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 64px;\n    z-index: 999;\n}\n\n.header-inner {\n    padding: 0 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n}\n\n.brand h1 {\n    font-size: 1.2rem;\n    color: white;\n    margin: 0;\n    letter-spacing: 1px;\n    transition: transform 0.3s ease;\n}\n\n.brand h1:hover {\n    transform: scale(1.05);\n}\n\n.hamburger {\n    display: block;\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0.5rem;\n    min-width: 44px;\n    min-height: 44px;\n}\n\n.hamburger span {\n  display: block;\n  width: 25px;\n  height: 3px;\n  background-color: white;\n  position: relative;\n  transform-origin: center;\n  transition: transform 0.3s ease, opacity 0.3s ease;\n  will-change: transform, opacity;\n}\n\n.hamburger span:nth-child(1) {\n  transform: translateY(0);\n}\n\n.hamburger span:nth-child(2) {\n  transform: translateY(6px);\n}\n\n.hamburger span:nth-child(3) {\n  transform: translateY(12px);\n}\n\n.hamburger.active span:nth-child(1) {\n  transform: translateY(6px) rotate(45deg);\n}\n\n.hamburger.active span:nth-child(2) {\n  opacity: 0;\n}\n\n.hamburger.active span:nth-child(3) {\n  transform: translateY(-6px) rotate(-45deg);\n}\n\n.nav {\n    position: fixed;\n    background-color: var(--background-color);\n    top: 64px;\n    left: 0;\n    width: 100%;\n    height: calc(100vh - 64px);\n    transform: translateX(-100%);\n    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    z-index: 100;\n    padding: 1rem;\n    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);\n}\n\n.nav.open {\n    transform: translateX(0);\n}\n\n.nav-list {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.nav-list a {\n    text-decoration: none;\n    color: var(--text-pertama);\n    font-weight: 600;\n    padding: 0.5rem 1rem;\n    min-width: 44px;\n    min-height: 44px;\n    display: flex;\n    align-items: center;\n    transition: background-color 0.3s ease;\n    border-radius: 4px;\n    word-spacing: 1px;\n}\n\n.nav-list a:hover,\n.nav-list a:focus {\n    background-color: var(--hover-color);\n    color: white;\n}\n\n.hero {\n  position: relative;\n  width: 100%;\n  height: 80vh; \n  overflow: hidden;\n}\n\n.hero picture {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.hero img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  max-width: 100%;\n}\n\n.hero::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n\n\n.hero-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  text-align: center;\n  padding: 2rem 1rem;\n}\n\n\n.hero h2 {\n    font-size: 1.5rem;\n    margin-bottom: 0.5rem;\n    word-spacing: 1px;\n}\n\n.hero h3 {\n    font-size: 1rem;\n    font-weight: 500;\n    word-spacing: 2px;\n}\n\nmain {\n  flex: 1;\n  width: 100%;\n  margin: 0 auto;\n  padding: 1rem;\n}\n\n.content__heading {\n    text-align: center;\n    margin-bottom: 1.5rem;\n    color: var(--text-kedua);\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\n.loading-indicator {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n    text-align: center;\n}\n\n.loading-indicator.active {\n    display: flex;\n}\n\n@keyframes spin {\n    0% { transform: translate(-50%, -50%) rotate(0deg); }\n    100% { transform: translate(-50%, -50%) rotate(360deg); }\n}\n\n.loading-spinner {\n    width: 40px;\n    height: 40px;\n    border: 4px solid #f3f4f6;\n    border-top: 4px solid var(--warna-utama);\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n    margin-bottom: 1rem;\n}\n\n.restaurant-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 1rem;\n    width: 100%;\n}\n\n.restaurant-item {\n    background-color: white;\n    border-radius: 12px;\n    overflow: hidden;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.restaurant-item:hover,\n.restaurant-item:focus-within {\n    transform: translateY(-5px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n\n.restaurant-image-container {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n  background: #f0f0f0;\n}\n\n.restaurant-image-placeholder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  filter: blur(10px);\n  transform: scale(1.1);\n  transition: opacity 0.3s ease;\n}\n\n.restaurant-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0;\n  transform: scale(1);\n  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;\n}\n\n.restaurant-image.loaded {\n  opacity: 1;\n  transition: opacity 400ms ease-in;\n}\n\n.restaurant-image.loaded + .restaurant-image-placeholder {\n  opacity: 0;\n}\n\n.image-loading-progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 2px;\n  width: 0%;\n  background: var(--warna-utama);\n  transition: width 0.2s ease, opacity 0.3s ease;\n  z-index: 2;\n}\n\n.restaurant-item:hover .restaurant-image.loaded {\n  transform: scale(1.1);\n  transition: transform 0.5s ease-in-out;\n}\n\n.restaurant-item .restaurant-image.loaded {\n  transform: scale(1);\n  transition: transform 0.5s ease-in-out;\n}\n\n\n.restaurant-image-container::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(\n    to bottom,\n    transparent 50%,\n    rgba(0, 0, 0, 0.7) 100%\n  );\n  opacity: 0;\n  transition: opacity 0.5s ease;\n  z-index: 1;\n}\n\n.restaurant-image-container::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(\n    45deg,\n    transparent 40%,\n    rgba(255, 255, 255, 0.3) 50%,\n    transparent 60%\n  );\n  transform: translateX(-100%);\n  transition: transform 0.8s ease;\n  z-index: 2;\n}\n\n.restaurant-item:hover .restaurant-image-container::before {\n  opacity: 1;\n}\n\n.restaurant-item:hover .restaurant-image-container::after {\n  transform: translateX(100%);\n}\n\n  @media (hover: hover) {\n    .restaurant-item:hover .restaurant-image.loaded {\n      transform: scale(1.1);\n    }\n  }\n\n/* Loading State */\n/* .image-loading {\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(\n      110deg,\n      #ececec 8%,\n      #f5f5f5 18%,\n      #ececec 33%\n    );\n    background-size: 200% 100%;\n    animation: shimmer 1.5s linear infinite;\n  }\n  \n  @keyframes shimmer {\n    0% { background-position: 200% 0; }\n    100% { background-position: -200% 0; }\n  } */\n\n.restaurant-info {\n    padding: 0.75rem;\n}\n\n.restaurant-name {\n    font-size: 1.1rem;\n    margin-bottom: 0.5rem;\n    color: var(--text-kedua);\n}\n\n.restaurant-city,\n.restaurant-rating {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    margin-bottom: 0.5rem;\n    color: var(--text-kedua);\n    font-size: 0.9rem;\n}\n\n.restaurant-description {\n    color: var(--text-kedua);\n    font-size: 0.85rem;\n    line-height: 1.5;\n    display: -webkit-box;\n    line-clamp: 3;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    margin-bottom: 0.75rem;\n}\n\n.view-detail {\n    display: inline-block;\n    background-color: var(--warna-utama);\n    color: white;\n    padding: 0.75rem 1.5rem;\n    border-radius: 8px;\n    text-decoration: none;\n    min-width: 44px;\n    min-height: 44px;\n    transition: background-color 0.3s ease;\n}\n\n.view-detail:hover,\n.view-detail:focus {\n    background-color: var(--hover-color);\n}\n\n.restaurant-actions {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 1rem;\n}\n\n.restaurant-actions .favorite-button {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  min-width: 44px;\n  min-height: 44px;\n  width: 44px;\n  height: 44px;\n  background-color: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n\n.restaurant-actions .favorite-button:hover {\n    transform: scale(1.1);\n}\n\n.restaurant-actions .favorite-button .icon {\n    font-size: 1.5rem;\n}\n\n.feedback {\n    position: fixed;\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%) translateY(100%);\n    background: #333;\n    color: white;\n    padding: 1rem 2rem;\n    border-radius: 4px;\n    transition: transform 0.3s ease;\n    z-index: 1000;\n    font-size: 0.9rem;\n}\n\n.feedback.show {\n    transform: translateX(-50%) translateY(0);\n}\n\n.feedback.error {\n    background: #dc3545;\n}\n\n.feedback.success {\n    background: #28a745;\n}\n\nfooter {\n  min-height: 60px;\n  margin-top: auto;\n  background-color: var(--warna-utama);\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n}\n\n.footer-info {\n    text-align: center;\n    font-size: 0.9rem;\n    font-weight: 600;\n    letter-spacing: 0.7px;\n    word-spacing: 1px;\n}\n\n.footer-info p {\n    margin: 0.5rem 0;\n    color: white;\n}\n\n.search-container {\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: center;\n  padding: 0 1rem;\n}\n\n.search-input {\n  width: 100%;\n  min-height: 44px;\n  padding: 0.75rem 1rem;\n  border: 2px solid var(--warna-utama);\n  border-radius: 8px;\n  font-size: 1rem;\n  color: var(--text-kedua);\n  background-color: white;\n  transition: all 0.3s ease;\n}\n\n.search-input:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(162, 127, 207, 0.2);\n  border-color: var(--hover-color);\n}\n\n.search-input::placeholder {\n  color: var(--text-kedua);\n  opacity: 0.7;\n}\n\n.no-results {\n  text-align: center;\n  padding: 2rem;\n  color: var(--text-kedua);\n  font-size: 1.1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n\n.all-restaurants-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  background-color: var(--warna-utama);\n  color: white;\n  border-radius: 0.5rem;\n  text-decoration: none;\n  margin-top: 1rem;\n  transition: background-color 0.2s;\n  border: none;\n  font-size: 1rem;\n}\n\n.all-restaurants-button:hover {\n  background-color: var(--hover-color);\n}\n\n.all-restaurants-button i {\n  font-size: 1rem;\n}\n\n.search-container {\n    margin-bottom: 1.5rem;\n    display: flex;\n    justify-content: center;\n    padding: 0 1rem;\n  }\n  \n  .search-form {\n    width: 100%;\n    max-width: 500px; \n  }\n  \n  .search-input-container {\n    position: relative;\n    width: 100%;\n  }\n  \n  .search-input {\n    width: 100%;\n    padding: 0.5rem 1rem; \n    padding-right: 2.5rem; \n    border: 2px solid var(--warna-utama);\n    border-radius: 10px;\n    font-size: 0.95rem;\n    color: var(--text-kedua);\n    background-color: white;\n    transition: all 0.3s ease;\n    height: 40px; \n  }\n  \n  .search-button {\n    position: absolute;\n    right: 4px;\n    top: 50%;\n    transform: translateY(-50%);\n    background: none;\n    border: none;\n    padding: 6px;\n    color: var(--warna-utama);\n    cursor: pointer;\n    min-width: 44px;\n    min-height: 44px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: color 0.3s ease;\n  }\n  \n  .search-button:hover,\n  .search-button:focus {\n    color: var(--hover-color);\n  }\n\n\n  .search-input::-webkit-search-cancel-button,\n.search-input::-webkit-search-decoration {\n  -webkit-appearance: none;\n  appearance: none;\n  display: none;\n}\n\n.search-input[type=\"search\"] {\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.search-input::-ms-clear,\n.search-input::-ms-reveal {\n  display: none;\n  width: 0;\n  height: 0;\n}","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:[":root {\n    --warna-utama: #a27fcf;\n    --warna-kedua: #9a8c98;\n    --background-color: #e9e6f3;\n    --text-pertama: #a27fcf;\n    --text-kedua: #2c3e50;\n    --hover-color: #6f578d;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;\n    \n}\n\nbody {\n    background-color: var(--background-color);\n    min-height: 100vh;\n    padding-top: 64px;\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    overflow-y: scroll;\n\n}\n\n.skip-link {\n    position: absolute;\n    top: -40px;\n    left: 0;\n    background-color: var(--warna-utama);\n    color: white;\n    padding: 8px;\n    z-index: 1000;\n    text-decoration: none;\n    transition: top 0.3s ease;\n}\n\n.skip-link:focus {\n    top: 0;\n}\n\n.header {\n    background-color: var(--text-pertama);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 64px;\n    z-index: 999;\n}\n\n.header-inner {\n    padding: 0 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n}\n\n.brand h1 {\n    font-size: 1.2rem;\n    color: white;\n    margin: 0;\n    letter-spacing: 1px;\n    transition: transform 0.3s ease;\n}\n\n.brand h1:hover {\n    transform: scale(1.05);\n}\n\n.hamburger {\n    display: block;\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0.5rem;\n    min-width: 44px;\n    min-height: 44px;\n}\n\n.hamburger span {\n  display: block;\n  width: 25px;\n  height: 3px;\n  background-color: white;\n  position: relative;\n  transform-origin: center;\n  transition: transform 0.3s ease, opacity 0.3s ease;\n  will-change: transform, opacity;\n}\n\n.hamburger span:nth-child(1) {\n  transform: translateY(0);\n}\n\n.hamburger span:nth-child(2) {\n  transform: translateY(6px);\n}\n\n.hamburger span:nth-child(3) {\n  transform: translateY(12px);\n}\n\n.hamburger.active span:nth-child(1) {\n  transform: translateY(6px) rotate(45deg);\n}\n\n.hamburger.active span:nth-child(2) {\n  opacity: 0;\n}\n\n.hamburger.active span:nth-child(3) {\n  transform: translateY(-6px) rotate(-45deg);\n}\n\n.nav {\n    position: fixed;\n    background-color: var(--background-color);\n    top: 64px;\n    left: 0;\n    width: 100%;\n    height: calc(100vh - 64px);\n    transform: translateX(-100%);\n    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    z-index: 100;\n    padding: 1rem;\n    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);\n}\n\n.nav.open {\n    transform: translateX(0);\n}\n\n.nav-list {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.nav-list a {\n    text-decoration: none;\n    color: var(--text-pertama);\n    font-weight: 600;\n    padding: 0.5rem 1rem;\n    min-width: 44px;\n    min-height: 44px;\n    display: flex;\n    align-items: center;\n    transition: background-color 0.3s ease;\n    border-radius: 4px;\n    word-spacing: 1px;\n}\n\n.nav-list a:hover,\n.nav-list a:focus {\n    background-color: var(--hover-color);\n    color: white;\n}\n\n.hero {\n  position: relative;\n  width: 100%;\n  height: 80vh; \n  overflow: hidden;\n}\n\n.hero picture {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.hero img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  max-width: 100%;\n}\n\n.hero::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n\n\n.hero-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  text-align: center;\n  padding: 2rem 1rem;\n}\n\n\n.hero h2 {\n    font-size: 1.5rem;\n    margin-bottom: 0.5rem;\n    word-spacing: 1px;\n}\n\n.hero h3 {\n    font-size: 1rem;\n    font-weight: 500;\n    word-spacing: 2px;\n}\n\nmain {\n  flex: 1;\n  width: 100%;\n  margin: 0 auto;\n  padding: 1rem;\n}\n\n.content__heading {\n    text-align: center;\n    margin-bottom: 1.5rem;\n    color: var(--text-kedua);\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\n.loading-indicator {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n    text-align: center;\n}\n\n.loading-indicator.active {\n    display: flex;\n}\n\n@keyframes spin {\n    0% { transform: translate(-50%, -50%) rotate(0deg); }\n    100% { transform: translate(-50%, -50%) rotate(360deg); }\n}\n\n.loading-spinner {\n    width: 40px;\n    height: 40px;\n    border: 4px solid #f3f4f6;\n    border-top: 4px solid var(--warna-utama);\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n    margin-bottom: 1rem;\n}\n\n.restaurant-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 1rem;\n    width: 100%;\n}\n\n.restaurant-item {\n    background-color: white;\n    border-radius: 12px;\n    overflow: hidden;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.restaurant-item:hover,\n.restaurant-item:focus-within {\n    transform: translateY(-5px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n\n.restaurant-image-container {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n  background: #f0f0f0;\n}\n\n.restaurant-image-placeholder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  filter: blur(10px);\n  transform: scale(1.1);\n  transition: opacity 0.3s ease;\n}\n\n.restaurant-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0;\n  transform: scale(1);\n  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;\n}\n\n.restaurant-image.loaded {\n  opacity: 1;\n  transition: opacity 400ms ease-in;\n}\n\n.restaurant-image.loaded + .restaurant-image-placeholder {\n  opacity: 0;\n}\n\n.image-loading-progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 2px;\n  width: 0%;\n  background: var(--warna-utama);\n  transition: width 0.2s ease, opacity 0.3s ease;\n  z-index: 2;\n}\n\n.restaurant-item:hover .restaurant-image.loaded {\n  transform: scale(1.1);\n  transition: transform 0.5s ease-in-out;\n}\n\n.restaurant-item .restaurant-image.loaded {\n  transform: scale(1);\n  transition: transform 0.5s ease-in-out;\n}\n\n\n.restaurant-image-container::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(\n    to bottom,\n    transparent 50%,\n    rgba(0, 0, 0, 0.7) 100%\n  );\n  opacity: 0;\n  transition: opacity 0.5s ease;\n  z-index: 1;\n}\n\n.restaurant-image-container::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(\n    45deg,\n    transparent 40%,\n    rgba(255, 255, 255, 0.3) 50%,\n    transparent 60%\n  );\n  transform: translateX(-100%);\n  transition: transform 0.8s ease;\n  z-index: 2;\n}\n\n.restaurant-item:hover .restaurant-image-container::before {\n  opacity: 1;\n}\n\n.restaurant-item:hover .restaurant-image-container::after {\n  transform: translateX(100%);\n}\n\n  @media (hover: hover) {\n    .restaurant-item:hover .restaurant-image.loaded {\n      transform: scale(1.1);\n    }\n  }\n\n/* Loading State */\n/* .image-loading {\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(\n      110deg,\n      #ececec 8%,\n      #f5f5f5 18%,\n      #ececec 33%\n    );\n    background-size: 200% 100%;\n    animation: shimmer 1.5s linear infinite;\n  }\n  \n  @keyframes shimmer {\n    0% { background-position: 200% 0; }\n    100% { background-position: -200% 0; }\n  } */\n\n.restaurant-info {\n    padding: 0.75rem;\n}\n\n.restaurant-name {\n    font-size: 1.1rem;\n    margin-bottom: 0.5rem;\n    color: var(--text-kedua);\n}\n\n.restaurant-city,\n.restaurant-rating {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    margin-bottom: 0.5rem;\n    color: var(--text-kedua);\n    font-size: 0.9rem;\n}\n\n.restaurant-description {\n    color: var(--text-kedua);\n    font-size: 0.85rem;\n    line-height: 1.5;\n    display: -webkit-box;\n    line-clamp: 3;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    margin-bottom: 0.75rem;\n}\n\n.view-detail {\n    display: inline-block;\n    background-color: var(--warna-utama);\n    color: white;\n    padding: 0.75rem 1.5rem;\n    border-radius: 8px;\n    text-decoration: none;\n    min-width: 44px;\n    min-height: 44px;\n    transition: background-color 0.3s ease;\n}\n\n.view-detail:hover,\n.view-detail:focus {\n    background-color: var(--hover-color);\n}\n\n.restaurant-actions {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 1rem;\n}\n\n.restaurant-actions .favorite-button {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  min-width: 44px;\n  min-height: 44px;\n  width: 44px;\n  height: 44px;\n  background-color: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n\n.restaurant-actions .favorite-button:hover {\n    transform: scale(1.1);\n}\n\n.restaurant-actions .favorite-button .icon {\n    font-size: 1.5rem;\n}\n\n.feedback {\n    position: fixed;\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%) translateY(100%);\n    background: #333;\n    color: white;\n    padding: 1rem 2rem;\n    border-radius: 4px;\n    transition: transform 0.3s ease;\n    z-index: 1000;\n    font-size: 0.9rem;\n}\n\n.feedback.show {\n    transform: translateX(-50%) translateY(0);\n}\n\n.feedback.error {\n    background: #dc3545;\n}\n\n.feedback.success {\n    background: #28a745;\n}\n\nfooter {\n  min-height: 60px;\n  margin-top: auto;\n  background-color: var(--warna-utama);\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n}\n\n.footer-info {\n    text-align: center;\n    font-size: 0.9rem;\n    font-weight: 600;\n    letter-spacing: 0.7px;\n    word-spacing: 1px;\n}\n\n.footer-info p {\n    margin: 0.5rem 0;\n    color: white;\n}\n\n.search-container {\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: center;\n  padding: 0 1rem;\n}\n\n.search-input {\n  width: 100%;\n  min-height: 44px;\n  padding: 0.75rem 1rem;\n  border: 2px solid var(--warna-utama);\n  border-radius: 8px;\n  font-size: 1rem;\n  color: var(--text-kedua);\n  background-color: white;\n  transition: all 0.3s ease;\n}\n\n.search-input:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(162, 127, 207, 0.2);\n  border-color: var(--hover-color);\n}\n\n.search-input::placeholder {\n  color: var(--text-kedua);\n  opacity: 0.7;\n}\n\n.no-results {\n  text-align: center;\n  padding: 2rem;\n  color: var(--text-kedua);\n  font-size: 1.1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n\n.all-restaurants-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  background-color: var(--warna-utama);\n  color: white;\n  border-radius: 0.5rem;\n  text-decoration: none;\n  margin-top: 1rem;\n  transition: background-color 0.2s;\n  border: none;\n  font-size: 1rem;\n}\n\n.all-restaurants-button:hover {\n  background-color: var(--hover-color);\n}\n\n.all-restaurants-button i {\n  font-size: 1rem;\n}\n\n.search-container {\n    margin-bottom: 1.5rem;\n    display: flex;\n    justify-content: center;\n    padding: 0 1rem;\n  }\n  \n  .search-form {\n    width: 100%;\n    max-width: 500px; \n  }\n  \n  .search-input-container {\n    position: relative;\n    width: 100%;\n  }\n  \n  .search-input {\n    width: 100%;\n    padding: 0.5rem 1rem; \n    padding-right: 2.5rem; \n    border: 2px solid var(--warna-utama);\n    border-radius: 10px;\n    font-size: 0.95rem;\n    color: var(--text-kedua);\n    background-color: white;\n    transition: all 0.3s ease;\n    height: 40px; \n  }\n  \n  .search-button {\n    position: absolute;\n    right: 4px;\n    top: 50%;\n    transform: translateY(-50%);\n    background: none;\n    border: none;\n    padding: 6px;\n    color: var(--warna-utama);\n    cursor: pointer;\n    min-width: 44px;\n    min-height: 44px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: color 0.3s ease;\n  }\n  \n  .search-button:hover,\n  .search-button:focus {\n    color: var(--hover-color);\n  }\n\n\n  .search-input::-webkit-search-cancel-button,\n.search-input::-webkit-search-decoration {\n  -webkit-appearance: none;\n  appearance: none;\n  display: none;\n}\n\n.search-input[type=\"search\"] {\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.search-input::-ms-clear,\n.search-input::-ms-reveal {\n  display: none;\n  width: 0;\n  height: 0;\n}"],sourceRoot:""}]),A.A=o},6810:function(n,A,e){var t=e(5072),a=e.n(t),r=e(7825),o=e.n(r),i=e(7659),s=e.n(i),B=e(5056),C=e.n(B),c=e(540),d=e.n(c),l=e(1113),m=e.n(l),p=e(1249),g={};g.styleTagTransform=m(),g.setAttributes=C(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d();a()(p.A,g),p.A&&p.A.locals&&p.A.locals}}]);
//# sourceMappingURL=app~04e4ec69.bundle.js.map