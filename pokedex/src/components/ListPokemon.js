import { useEffect, useState, useRef } from "react";
import PokemonListCard from "./PokemonListCard";
import Navigation from "./Navigation";
import Search from "./Search";
import { getPokemon } from "../constants/apiCall";
/** @jsxRuntime classic /
/* @jsx jsx */
import { Global, css, jsx } from "@emotion/react";
import PokemonBanner from "../images/pokemon_banner.png";

const ListPokemon = () => {
  const [requestData, setRequestData] = useState({ pokedex: [], meta: [] });
  const queryString = useRef(window.location.search);
  const setQueryString = (str) => {
    queryString.current=str;
    updatePokemonList();
  };

  // on mount
  useEffect(() => {
    updatePokemonList();
  }, []);

  const updatePokemonList = () => {
    getPokemon
    .get(queryString.current)
    .then((res) => {
        setRequestData({ pokedex: res.data.data, meta: res.data.meta});
        window.history.pushState("", "", queryString.current);
    })
    .catch((err) => console.log(err));
  };

  const renderPokemon = 
    requestData.pokedex.map((pokemon) => (
      <PokemonListCard pokemon={pokemon} key={pokemon.id}></PokemonListCard>
    ));

  return (
    <div className="pokemon-listing-page">
      <Global
        styles={css`
          body {
            background-color: lightblue;
          }
        `}
      />
      <div
        className="pokemon-listing-header"
        css={css`
          background: url(${PokemonBanner}) no-repeat center;
          background-size: cover;
          text-align: center;
        `}
      >
        <h1>Pokédex</h1>
        <div
          className="navigation-bar"
          css={css`
            display: flex;
            justify-content: space-between;
            width: 100%;

          `}
        >
          <Navigation
            meta={requestData.meta}
            queryString={queryString}
            offset={-1}
            onClick={setQueryString}
          />
          <Search 
            queryString={queryString} 
            onClick={setQueryString}
          />
          <Navigation
            meta={requestData.meta}
            queryString={queryString}
            offset={1}
            onClick={setQueryString}
           />
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        `}
      >
        {renderPokemon}
      </div>
    </div>
  );
};

export default ListPokemon;
