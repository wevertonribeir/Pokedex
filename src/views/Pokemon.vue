<template>
    <div class="pokemon content">
        <div v-if="pokemon" class="container pokemon-inside">
            <div class="info">
                <router-link to="/" class="back">&#8678;</router-link>
                <h2>#{{pokemonId}}</h2>
                <h1>{{pokemon.name}}</h1>
                <div class="types">
                    <span :class="`background-color-${type.type.name}`" v-for="type in pokemon.types" :key="type.name">{{type.type.name}}</span>
                </div>
                <div class="stats">
                    <ul>
                        <Stats v-for="stat in pokemon.stats" :key="stat.index" :base="stat.base_stat">
                            <span>{{stat.stat.name}}</span>
                        </Stats>
                    </ul>
                </div>
                <p>Height: {{pokemon.height}}</p>
                <p>Weight: {{pokemon.weight}}</p>
            </div>
            <div class="photo">
                <picture>
                    <img :src="pokemon.sprites.other['official-artwork'].front_default">
                </picture>
            </div>
        </div>
  </div>
</template>

<script>
    import { api } from '@/services.js';
    import Stats from '@/components/Stats.vue'

    export default {
        name: "pokemon",
        props: ["id"],
        data(){
            return {
                pokemon: null
            }
        },
        components:{
            Stats
        },
        computed: {
            pokemonId(){
                return ("0000" + this.pokemon.id).slice(-3);
            }
        },
        created(){
            api.get(`pokemon/${this.id}`)
                .then(response => {
                    this.pokemon = response.data;
                });
        }
    }  
</script>

<style scoped>
    .pokemon-inside{
        display: flex;
        justify-content: space-around;
    }
    h1{
        font-family: 'Bebas Neue';
        font-size: 83px;
        letter-spacing: 20px;
        color: #353032;
    }
    h2, p{
        font-family: 'Open Sans', sans-serif;
        font-size: 24px;
        font-weight: 600;
        font-size: 18px;
    }
    .types{
        justify-content: flex-start;
    }
    .stats{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .info{
        width: 100%;
        max-width: 500px;
    }
    .back{
        font-size: 40px;
        text-decoration: none;
        color: #353032;
    }
    @media (max-width: 850px){
        .pokemon-inside{
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
            margin: 0 auto;
        }
        .photo{
            grid-row: 1;
        }
        h1{
            font-size: 40px;
            letter-spacing: 10px;
        }
    }
</style>