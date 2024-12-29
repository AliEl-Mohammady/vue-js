import { createStore } from "vuex";
import productModule from "@/store/product_module/product.js";
import productCounter from "@/store/product_module/product_counter.js";

export default createStore({
  //State : contain data of the application globally to access
//from any where
  state: {
    name:"El-Mohammady",
    age : 25,
    job : "Odoo Developer",
    email : "1M2gJ@example.com",
  },
  //Getters : contain computed properties of the application globally to access
  getters: {

    getNameWithPostion(state) {
      return  "Welcome on board "+state.name + " " + state.job ;
    }
  },
  //Mutations : contain methods to change the state
  mutations: {
    changeAge(state,age) {
      state.age = age
    },
    removeProduct(state) {
      state.products = ""
    }
  },
  //Actions : contain methods to handle asynchronous tasks like API calls
  actions: {},
  //Modules : contain state, getters, mutations, actions from external modules
  modules: {
    productModule,
    productCounter
  },
});


