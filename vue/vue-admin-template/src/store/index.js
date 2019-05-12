import Vuex from 'vuex';
import Vue from 'vue';

import { info } from '@/api/user';

Vue.use(Vuex);

const state = {
  user: null,
};

const getters = {
  user: stateParam => stateParam.user,
};

const mutations = {
  SET_USER(stateParam, user) {
    stateParam.user = user;
  },
};

const actions = {
  setUser(store) {
    // getUser().then((res) => {
    //   store.commit('SET_USER', res.data);
    // });
    info().then((res) => {
      console.log(res);
      store.commit('SET_USER', res.data.user);
    });
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
