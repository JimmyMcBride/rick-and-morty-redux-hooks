import { FlexBox, Wrapper } from "../Global/styled";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Char from "./Char";
import { Link } from "react-router-dom";
import Loading from "../Global/Loading";
import { getChars } from "../../store/actions/rickAndMorty";
import styled from "styled-components";

export default function ReduxCounter() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getChars()), [dispatch]);

  const chars = useSelector(state => state.rickAndMorty.chars);
  const getting = useSelector(state => state.rickAndMorty.getting);

  if (getting) return <Loading />;

  return (
    <Wrapper>
      <HomeLink to="/">Home</HomeLink>
      <FlexBox wrap="wrap" justify="space-around">
        {chars.map(char => {
          return <Char key={char.id} char={char} />;
        })}
      </FlexBox>
    </Wrapper>
  );
}

const HomeLink = styled(Link)`
  margin-bottom: 2rem;
  font-size: 3rem;
  padding: 0.3rem 1rem;
  border-radius: 0.25rem;
`;
