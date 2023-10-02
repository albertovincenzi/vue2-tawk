import actions from './actions';
import getters from './getters';
import setters from './setters';
import listeners from './listeners';

const isTawkAPIInitialized = () => {
  return window.Tawk_API !== undefined;
};

const installTawkAPI = (options) => {
  if (isTawkAPIInitialized()) {
    return;
  }

  const s1 = document.createElement("script");
  const s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.charset = 'UTF-8';
  s1.src = `https://embed.tawk.to/${options.propertyId}/${options.widgetId}`;
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);

  window.Tawk_API = {};
  window.Tawk_LoadStart = new Date();
};

const TawkPlugin = {
  install(Vue, options) {
    Vue.prototype.$Tawk = {
      init: () => {
        installTawkAPI(options);
      },
      isInit: () => {
        return isTawkAPIInitialized();
      },

      ...actions,
      ...getters,
      ...setters,
      ...listeners,
    };
  }
};

export default TawkPlugin;