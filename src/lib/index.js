const isTawkAPIInitialized = () => {
  return window.Tawk_API !== undefined;
};

const installTawkAPI = (options) => {
  if (!isTawkAPIInitialized()) {
    const Tawk_API = {};
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = options.tawkSrc;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
    window.Tawk_API = Tawk_API
  }
};

const TawkPlugin = {
  install(Vue, options) {
    Vue.prototype.$Tawk = {
      $startChat: () => {
        installTawkAPI(options);
      },
      $updateChatUser: (user) => {
        if (!isTawkAPIInitialized() || !user) return;
        window.Tawk_API.setAttributes({
          'name': user.name,
          'email': user.email,
          'hash': user.hash
        }, (error) => {
          if (error) {
            console.error(error);
          }
        });
      },
      $endChat: () => {
        if (isTawkAPIInitialized()) {
          window.Tawk_API.endChat();
        }
      },
      $isInit: () => {
        return isTawkAPIInitialized();
      },
      $toggle: () => {
        if (isTawkAPIInitialized()) {
          window.Tawk_API.toggle();
        }
      },
      $maximize: () => {
        if (isTawkAPIInitialized()) {
          window.Tawk_API.maximize();
        }
      },
      $minimize: () => {
        if (isTawkAPIInitialized()) {
          window.Tawk_API.minimize();
        }
      },
      $toggleVisibility: () => {
        if (isTawkAPIInitialized()) {
          window.Tawk_API.toggleVisibility();
        }
      },
      $popup: () => {
        if (isTawkAPIInitialized()) {
          window.Tawk_API.popup();
        }
      },
      $hideWidget: () => {
        if (isTawkAPIInitialized()) {
          window.Tawk_API.hideWidget();
        }
      },
      $showWidget: () => {
        if (isTawkAPIInitialized()) {
          window.Tawk_API.showWidget();
        }
      },
      $logout: () => {
        if (isTawkAPIInitialized()) {
          window.Tawk_API.logout();
        }
      },
      $onChatStarted: (callback) => {
        if (isTawkAPIInitialized()) {
          window.Tawk_API.onChatStarted = callback;
        }
      },
      $onChatEnded: (callback) => {
        if (isTawkAPIInitialized()) {
          window.Tawk_API.onChatEnded = callback;
        }
      },
      $onChatHidden: (callback) => {
        if (isTawkAPIInitialized()) {
          window.Tawk_API.onChatHidden = callback;
        }
      },
      $onChatMinimized: (callback) => {
        if (isTawkAPIInitialized()) {
          window.Tawk_API.onChatMinimized = callback;
        }
      },
      $onChatSatisfaction: (callback) => {
        if (isTawkAPIInitialized()) {
          window.Tawk_API.onChatSatisfaction = callback;
        }
      },
      $onAgentJoinChat: (callback) => {
        if (isTawkAPIInitialized()) {
          window.Tawk_API.onAgentJoinChat = callback;
        }
      },
      $onAgentLeaveChat: (callback) => {
        if (isTawkAPIInitialized()) {
          window.Tawk_API.onAgentLeaveChat = callback;
        }
      }
    };
  }
};

export default TawkPlugin;