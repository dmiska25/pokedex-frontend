import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Types from "../components/Types";
/** @jsxRuntime classic /
/* @jsx jsx */
import { css, jsx } from "@emotion/react";

const card = css`
  padding: 1rem;
  border: 0.2rem solid;
  border-color: black;
  text-align: center;
  width: 10rem;
  background-color: white;
  transition: transform 0.2s;
  &: hover {
    transform: scale(1.1);
    box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, 0.3);
  }
`;

const PokemonListCard = ({ pokemon: { id, name, types, image } }) => {
  const {Header, Footer, Title, Img} = Card;

  return (
    <Link
      to={`/pokemon/${id}`}
      style={{ textDecoration: "none" }}
      className="pokemon-list-card-link"
      css={css`
        margin: 1rem;
      `}
    >
      <Card className="pokemon-list-card" css={card}>
        <Header>
          <Title
            css={css`
              font-weight: bold;
            `}
          >
            {name}
          </Title>
        </Header>
        <hr />
        <Img
          css={css`
            width: 100%;
          `}
          src={image}
        />
        <Footer>
          <Types types={types}></Types>
        </Footer>
      </Card>
    </Link>
  );
};

export default PokemonListCard;
