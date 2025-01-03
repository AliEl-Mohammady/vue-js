export default {
    state: {
        counter: 0,
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2;
        },
    },
    mutations: {
        increment(state) {
            state.counter++;
        },

        decrement(state) {
            state.counter--;
        },
    },
    actions: {
        increment(context) {
            context.commit("increment");
        },
        decrement(context) {
            context.commit("decrement");
        },
    },
}