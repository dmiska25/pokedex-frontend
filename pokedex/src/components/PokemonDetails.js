import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useLastLocation } from "react-router-last-location";
import PokemonDetailsCard from "./PokemonDetailsCard";
import { getPokemon } from "../constants/apiCall";
/** @jsxRuntime classic /
/* @jsx jsx */
import { css, jsx } from "@emotion/react";
import leftArrow from "../images/left_arrow.png";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState([]);
  const { id } = useParams();
  const lastLocation = useLastLocation();
  const history = useHistory();

  const goBack = () => {
    if (lastLocation?.pathname === "/pokemon") history.goBack();
    else history.push("/pokemon");
  };

  const {push} = history;
  useEffect(() => {
    getPokemon
      .get(`/${id}`)
      .then((res) => setPokemon(res.data.data))
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          push("/pokemon");
        }
      });
  }, [id, push]);

  if (pokemon.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pokemon-details-page">
      <div>
        <div
          css={css`
            width: 25%;
            height: 2.4rem;
            float: left;
          `}
        >
          <input
            alt="navigation button"
            type="image"
            src={leftArrow}
            onClick={goBack}
            css={css`
              width: auto;
              height: 100%;
              margin-left: 5%;
            `}
          />
        </div>
        <div
          css={css`
            width: 75%;
            height: 2.4rem;
            text-align: center;
          `}
        >
          <h1>{pokemon.name}</h1>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
        `}
      >
        <PokemonDetailsCard pokemon={pokemon} />
      </div>
    </div>
  );
};

export default PokemonDetails;
