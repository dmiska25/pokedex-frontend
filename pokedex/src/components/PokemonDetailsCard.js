import Card from "react-bootstrap/Card";
import colorTypes from "../constants/pokemonTypeColors";
import Types from "../components/Types";
import Stats from "../components/Stats";
/** @jsxRuntime classic /
/* @jsx jsx */
import { Global, css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

const PokemonDetailsCard = ({pokemon}) => {
    const { name, image, types, height, weight, abilities, egg_groups, stats, genus, description } = pokemon;
    const {color, background, border} = colorTypes[types[0]];

    const globalStyle = css`
      body {
        background-color: ${background};
      }
    `;

    const header = css({
      color: color,
      fontWeight: "bold",
    });

    const OverviewHeader = styled.h2(
      {
        textAlign: "center",
        width: "100%",
        marginTop: ".26%",
        marginBottom: ".26%",
      },
      header
    );

    const DetailHeader = styled.b(
      {
        marginRight: ".3rem",
      },
      header
    );

    const { Header, Footer, Body, Img } = Card;
    return (
      <Card
        className="pokemon-details-card"
        css={css`
          padding: 1rem;
          border: 0.2rem solid;
          border-color: ${border};
          width: 70%;
          min-width: 22rem;
          height: auto;
          overflow-y: scroll;
          background-color: white;
        `}
      >
        <Global styles={globalStyle} />
        <Header>
          <OverviewHeader>{name}</OverviewHeader>
        </Header>
        <hr />
        <Body
          css={css`
            height: 70%;
          `}
        >
          <Img
            src={image}
            css={css`
              width: 50%;
              min-width: 300px;
              height: auto;
              min-height: 300px;
              max-height: 100%;
              float: left;
            `}
          />
          <OverviewHeader
            css={css`
              width: 50%;
              float: left;
            `}
          >
            Stats
          </OverviewHeader>
          <Stats header={header} stats={stats} />
          <hr />
          <div
            css={css`
              margin-left: 50%;
              & p {
                width: 50%;
              }
            `}
          >
            <p
              css={css`
                float: left;
              `}
            >
              <DetailHeader>Height:</DetailHeader>
              {height}
            </p>
            <p
              css={css`
                float: right;
              `}
            >
              <DetailHeader>Weight:</DetailHeader>
              {weight}
            </p>
          </div>
          <div
            css={css`
              float: left;
              width: 100%;
            `}
          >
            <OverviewHeader>Details</OverviewHeader>
            <p>
              <DetailHeader>Description:</DetailHeader>
              {description}
            </p>
            <p>
              <DetailHeader>Abilities:</DetailHeader>
              {abilities.join(", ")}
            </p>
            <p>
              <DetailHeader>Egg Groups:</DetailHeader>
              {egg_groups.join(", ")}
            </p>
            <p>
              <DetailHeader>Genus:</DetailHeader>
              {genus}
            </p>
          </div>
        </Body>
        <Footer
          css={css`
            float: right;
            width: 100%;
          `}
        >
          <Types types={types}></Types>
        </Footer>
      </Card>
    );
};

export default PokemonDetailsCard;