<template>
  <div class="about">
    <h1 style="text-align: center; font-size: 2em; font-weight: bold">Welcome to Our Beautiful Store</h1>
    <h2 style="text-align: center; font-size: 1.5em; font-weight: bold">{{ $store.state.name }} Store</h2>

    <button @click="doGetProductsFun">Get products</button>
    <button @click="$store.commit('productModule/removeProduct')">Remove products</button>
    <div class="product-cards">
      <div v-for="product in this.$store.state.productModule.products" :key="product.id" class="card">
        <img :src="product.image" :alt="product.name"
          style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;">
        <h6 style=" font-size: 1.1em; color: #333;font-weight: 'bold'">{{ product.title}}</h6>
        <p style="font-family: 'Lato', sans-serif; font-size: 1em; color: #666">Category: {{ product.category }}</p>
        <p style="font-family: 'Lato', sans-serif; font-size: 1em; color: #666">Price: ${{ product.price }}</p>
        <p style="font-family: 'Lato', sans-serif; font-size: 1em; color: #666">Rating: <span
            style="font-size: 1.5em; color: #f1c40f">&#x2605;</span>{{ product.rating }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    ...mapActions(['doGetProducts']),
    async doGetProductsFun() {
      await this.doGetProducts()
    }
  }
}
</script>
<style scoped>
.about {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.card {
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  margin-top: 0;
  font-size: 1.2em;
}

.card p {
  margin: 10px 0;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;

}
</style>

