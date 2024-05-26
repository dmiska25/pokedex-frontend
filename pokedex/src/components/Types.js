import styled from "@emotion/styled";
import colorTypes from "../constants/pokemonTypeColors";
/** @jsxRuntime classic /
/* @jsx jsx */
import { css, jsx } from "@emotion/react"

const TypeLabel = styled.p((props) => ({
  color: colorTypes[props.pokemonType].color,
  background: colorTypes[props.pokemonType].background,
  border: `1px solid ${colorTypes[props.pokemonType].border}`,
  fontWeight: "bold",
  padding: "1%",
  borderRadius: "40%",
  margin: "2%",
}));

const Types = ({ types }) => (
  <div
    css={css`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    `}
  >
    {types.map((type) => (
      <TypeLabel pokemonType={type} key={type}>
        {type}
      </TypeLabel>
    ))}
  </div>
);

export default Types;