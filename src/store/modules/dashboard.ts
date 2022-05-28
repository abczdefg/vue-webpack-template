import { Commit } from 'vuex';

export interface DashboardState {
  message: string;
}

const state: DashboardState = {
  message: 'helloWorld...'
};

const getters = {
  getterMessage: (state: DashboardState): string => {
    console.log('gettermessage...');
    return 'getter-' + state.message;
  }
};

const mutations = {
  messageMutations(state: DashboardState, payload: { message: string }): void {
    state.message = payload.message;
  }
};

const actions = {
  messageAction(context: { commit: Commit; state: DashboardState }, payload: { message: string }): void {
    setTimeout(() => {
      context.commit('messageMutations', payload);
    }, 1000);
  }
};

export const dashboard = {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
};
