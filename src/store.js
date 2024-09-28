import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state: {
      userName: '',
      messages: [],
    },
    mutations: {
      setUserName(state, name) {
        state.userName = name;
      },
      clearUserName(state) {
        state.userName = '';
      },
      setMessages(state, messages) {
        state.messages = messages;
      },
      addMessage(state, message) {
        state.messages.push(message);
      },
    },
    actions: {
      updateUserName({ commit }, name) {
        commit('setUserName', name);
      },
      logout({ commit }) {
        commit('clearUserName');
      },
      fetchMessages({ commit }, messages) {
        commit('setMessages', messages);
      },
      sendMessage({ commit }, message) {
        commit('addMessage', message);
      },
    },
    plugins: [createPersistedState({
        paths: ['userName']
    })],
  });

export default store;