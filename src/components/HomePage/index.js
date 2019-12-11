import { Linkton, Wrapper } from "../Global/styled";

import PickleRick from "../Global/img/picklerick.png";
import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <HomeWrapper>
      <h1>Welcome to the Rick and Morty API!</h1>
      <Linkton to="/rick-and-morty">Rick and Morty Characters</Linkton>
      <img src={PickleRick} alt="Pickle Rick" />
    </HomeWrapper>
  );
};

const HomeWrapper = styled(Wrapper)`
  img {
    margin-top: 2rem;
  }
`;

export default HomePage;
