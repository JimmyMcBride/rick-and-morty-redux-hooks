import PickleRick from "../img/picklerick.png";
import React from "react";
import { Wrapper } from "../styled";
import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingWrapper justify="center">
      <img src={PickleRick} alt="Pickle Rick" />
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled(Wrapper)`
  height: 100vh;
  width: 100vw;
`;
