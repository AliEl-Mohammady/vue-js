<template>
  <div class="home">
    <h1>Hello from Home Page</h1>
    <h2>Name : {{ $store.state.name }}</h2>
    <h2>Age : {{ $store.state.age }}</h2>
    <p>{{ getNameWithPostion }}</p>
    <!-- <input type="text" v-model="$store.state.name"> -->
    <button @click="changeAge(10)">Change Age</button>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: "HomeView",
  components: {    },
  computed: {
    ...mapState(['name']),
    ...mapGetters(['getNameWithPostion'])
  },
  methods : {
    ...mapMutations(['changeAge']),
    ...mapActions(['doGetProducts']),
    async doGetProductsFun() {
      await this.doGetProducts()
    }
  }
};
</script>

<style scoped lang="scss">
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
