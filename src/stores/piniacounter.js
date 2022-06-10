import { defineStore } from 'pinia';

export const useCounter = defineStore('counter', {
  state: () => {
    return {
      seconds: 0,
    };
  },
  actions: {
    triggerCounter() {
      const ac = this;

      setInterval(() => {
        ac.seconds += 1;
      }, 1000);
    },
  },
  getters: {
    getSeconds(state) {
      return state.seconds;
    },
  },
});
