import { defineStore } from "pinia";

// defineStore need two arguments: unique name and object.
export const useCounterStore = defineStore("counter", {
  // this state will hold the initial state of our store
  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    // increment method
    increment(val = 1) {
      this.count += val;
    },
    async waitAndAdd() {
        setTimeout(() => {
            this.count++
        }, 2000)
    }
  },
  // getters is essencially computed props for store
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});
