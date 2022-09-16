import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      username: 'coder',
      id: 'dawei123',
    };
  },
  actions: {
    updateName(name) {
      this.username = name;
    },
  },
});
