import { Commit } from 'vuex';

export interface ListState {
  list: string[];
}

const state: ListState = {
  list: Array.from({ length: 10 }).map((v, i) => `list-item-${i + 1}`),
};

const getters = {
  getterlist: (state: ListState): string[] => {
    console.log('getterlist...');
    return state.list.map(v => 'getter-' + v);
  }
};

const mutations = {
  listMutations(state: ListState, payload: { list: string[] }): void {
    state.list = payload.list;
  }
};

const actions = {
  listAction(context: { commit: Commit; state: ListState }, payload: { list: string[] }): void {
    setTimeout(() => {
      context.commit('listMutations', payload);
    }, 1000);
  }
};

export const list = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
