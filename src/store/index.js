import { createStore as createVuexStore } from 'vuex';
import { fetchContacts, createGroup } from '../services/api';

const state = {
  contacts: [],
  selectedContacts: [],
  groupName: '',
  groupImage: null,
};

const mutations = {
  setContacts(state, contacts) {
    state.contacts = contacts;
  },
  setSelectedContacts(state, selectedContacts) {
    state.selectedContacts = selectedContacts;
  },
  setGroupName(state, groupName) {
    state.groupName = groupName;
  },
  setGroupImage(state, groupImage) {
    state.groupImage = groupImage;
  },
};

const actions = {
  async fetchContacts({ commit }) {
    const contacts = await fetchContacts();
    console.log(contacts);
    commit('setContacts', contacts);
  },

  async createGroup({ state }) {
    const response = await createGroup(state.groupName, state.selectedContacts, state.groupImage);
    console.log(response);
  },
};

const store = createVuexStore({
  state,
  mutations,
  actions,
});

export function createTestStore() {
  return createVuexStore({
    state,
    mutations,
    actions,
  });
}

export default store;






