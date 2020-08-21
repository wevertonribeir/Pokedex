<template>
  <section class="home content">
    <div class="container">
      <h1>POKÉDEX</h1>
      <Filters />
      <section class="pokedex-results" :style="`max-height:${height}px;`">
        <ul class="results">
          <ItemListPokemon v-for="pokemon in dados" :key="pokemon.name" :pokemonName="pokemon.name" />
        </ul>
        <button @click="loadmore">Carregar mais</button>
      </section>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import ItemListPokemon from "@/components/ItemListPokemon.vue";
import Filters from "@/components/Filters.vue";

export default {
  name: 'Home',
  components: {
    ItemListPokemon,
    Filters
  },
  data(){
    return {
      dados: null,
      offset: 0,
      height: 1400
    }
  },
  methods:{
    loadmore(){
      api.get(`pokemon?limit=24&offset=${this.offset}`)
      .then(response => {
        this.dados = this.dados.concat(response.data.results);
        this.offset += 24;
        this.height = this.height * 2;
      });
    }
  },
  created(){
    api.get(`pokemon?limit=24&offset=${this.offset}`)
      .then(response => {
        this.dados = response.data.results;
        this.offset += 24;
      });
  }
}
</script>


<style scoped>

  h1{
    font-family: 'Bebas Neue';
    font-size: 83px;
    letter-spacing: 20px;
    color: #353032;
    text-align: center;
  }

  button{
    background: #30a7d7;
    color: #fff;
    margin: 100px auto;
    display: block;
    border: navajowhite;
    font-size: 22px;
    padding: 20px;
    border-radius: 5px;
    cursor: pointer;
    outline: 0;
  }

  @media (max-width: 900px){
    h1{
      font-size: 50px;
    }
  }

</style>