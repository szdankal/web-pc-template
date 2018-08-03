/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import Vuex from 'vuex';

import cart from './modules/shopcart';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  modules: {
    cart,
  },
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
