import Vue from 'vue';
import App from './App';
import T from './locales';

Vue.config.productionTip = false;

Vue.mixin({
  created() {
    this.$T = T;
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
