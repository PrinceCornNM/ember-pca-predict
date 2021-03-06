import { merge } from '@ember/polyfills';
import { set } from '@ember/object';
import config from '../config/environment';

export function initialize(appInstance) {
  if (!config['ember-pca-predict'].disabled && typeof FastBoot === 'undefined') {
    let emberPcaConfig = config['ember-pca-predict'];
    let emberPcaService = appInstance.lookup('service:ember-pca');

    Object.keys(emberPcaConfig).forEach((key) => {
      set(emberPcaService, key, emberPcaConfig[key]);
    });

    (function(n, t, i, r) {
        var u, f;
        n[i] = n[i] || {}, n[i].initial = {
            accountCode: emberPcaConfig.accountCode,
            host: emberPcaConfig.host
        }, n[i].on = n[i].on || function() {
            (n[i].onq = n[i].onq || []).push(arguments)
        }, u = t.createElement("script"), u.async = !0, u.src = r, f = t.getElementsByTagName("script")[0], f.parentNode.insertBefore(u, f)
    })(window, document, "pca", `https://${emberPcaConfig.host}/js/sensor.js`)
  }
}

export default {
  name: 'pca-setup',
  initialize
};
