import { Link } from "react-router-dom";
import React from "react";
import { Wrapper } from "../Global/styled";
import styled from "styled-components";
import theme from "../Global/theme";

const Char = ({ char }) => {
  return (
    <CharWrapper>
      <Link to={`/rick-and-morty/${char.id}`} key={char.id}>
        <p>
          <strong>{char.name}</strong>
        </p>
        <img src={char.image} alt="profile pic" />
      </Link>
      <p>
        <strong>Species:</strong> {char.species}
      </p>
      {char.type ? (
        <p>
          <strong>Species type:</strong> {char.type}
        </p>
      ) : null}

      <p>
        <strong>Gender:</strong> {char.gender}
      </p>
      <p>
        <strong>Original universe:</strong> {char.origin && char.origin.name}
      </p>
      {/* {console.log("Individual character in list:", char)} */}
    </CharWrapper>
  );
};

const CharWrapper = styled(Wrapper)`
  background-color: ${theme.gs2};
  border-radius: 0.3rem;
  margin-bottom: 3rem;
  text-align: center;
  padding: 1rem;
  width: 300px;
`;

export default Char;
