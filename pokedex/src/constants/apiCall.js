import axios from 'axios';

export const getPokemon = axios.create({
    baseURL: 'https://intern-pokedex.myriadapps.com/api/v1/pokemon'
});