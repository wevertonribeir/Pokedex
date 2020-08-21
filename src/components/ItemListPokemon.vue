<template>
    <li v-if="pokemon" class="pokemon-item">
        <div class="pokemon-id">
            <p>N°{{pokemonId}}</p><br>
        </div>
        <figure>
            <router-link :to="`pokemon/${pokemon.id}`">
                <img :src="pokemon.sprites.other['official-artwork'].front_default">
            </router-link>
        </figure>
        <div class="pokemon-info">
            <h5>{{pokemon.name}}</h5>
            <div class="types">
                <span :class="`background-color-${type.type.name}`" v-for="type in pokemon.types" :key="type.name">{{type.type.name}}</span>
            </div>
        </div>
    </li>
    <li v-else class="loading">

    </li>
</template>

<script>
import { api } from "@/services.js";

export default {
    name: "ItemListPokemon",
    props: ["pokemonName"],
    data(){
        return {
            pokemon: null,
            s: false
        }
    },
    computed: {
        pokemonId(){
            return ("0000" + this.pokemon.id).slice(-3);
        }
    },
    created(){
        api.get(`pokemon/${this.pokemonName}`).then(response => {
            this.pokemon = response.data;
        });
    }
}
</script>

<style scoped>
    .pokemon-item{
        padding: 15px;
        margin: 5px;
        border-radius: 5px;
        border: solid 1px transparent;
        transition: all .3s;
        margin-bottom: 50px;
    }

    .pokemon-item:hover{
        background: #F5F6F7;
        border: solid 1px rgba(112,112,112, 14%);
        box-shadow: 0 0 3px rgba(0,0,0,.1);
    }

    img{
        width: 170px;
    }
    p, h5{
        text-align: center;
    }
    p, h5, span{
        font-family: 'Open Sans', sans-serif;
    }
    h5{
        font-size: 16px;
        text-transform: capitalize;
    }
    .loading{
        width: 202px;
        height: 295px;
        background: url("../assets/images/load.gif");
        background-position: center;
        background-size: 50%;
        background-repeat: no-repeat;
        padding: 15px;
        margin: 5px;
        border: solid 1px transparent;
        margin-bottom: 50px;
    }
    .pokemon-item{
        animation: carregarCard 1s forwards;
    }
    @keyframes carregarCard{
        0%{
            transform: scale(0);
        }
        50%{
            transform: scale(1.1);
        }
        100%{
            transform: scale(1);
        }
    }
</style>