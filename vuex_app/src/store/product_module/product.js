export default {
  state: {
    products: "",
  },
  getters: {},
  mutations: {
    changeProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    async doGetProducts(context) {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        context.commit("changeProducts", products);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    }
  }
};

