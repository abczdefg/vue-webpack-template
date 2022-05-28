import Vue from 'vue';
import Vuex from 'vuex';
import { Commit } from 'vuex';
import { DashboardState, dashboard } from './modules/dashboard';
import { ListState, list } from './modules/list';

Vue.use(Vuex);

interface IndexState {
  rootSay: string;
}

export interface RootState extends IndexState {
  dashboard: DashboardState;
  list: ListState;
}

const state: IndexState = {
  rootSay: 'hahaha...'
};

const getters = {
  doneRootSay: (state: IndexState): string => {
    console.log('getDoneRootSay...');
    return 'getter-' + state.rootSay;
  }
};

const mutations = {
  sayMutations(state: IndexState, payload: { say: string }): void {
    state.rootSay = payload.say;
  }
};

const actions = {
  sayAction(context: { commit: Commit }, payload: { say: string }): void {
    setTimeout(() => {
      context.commit('sayMutations', payload);
    }, 1000);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    dashboard,
    list,
  }
});
