import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      username: "未登录",
      role: "noLogin",
    },
  }),
  getters: {},
  actions: {
    getLoginUser({ commit, state }, payload) {
      // todo 改为远程登录
      // commit("updateUser", { userName: "123456" });
      commit("updateUser", payload);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
