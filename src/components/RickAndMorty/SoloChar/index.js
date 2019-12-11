import { FlexBox, Wrapper } from "../../Global/styled";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Char from "../Char";
import { Link } from "react-router-dom";
import Loading from "../../Global/Loading";
import { getCharById } from "../../../store/actions/rickAndMorty";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function SoloChar() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => dispatch(getCharById(id)), [dispatch, id]);

  const char = useSelector(state => state.rickAndMorty.char);
  const getting = useSelector(state => state.rickAndMorty.getting);

  if (getting) return <Loading />;

  return (
    <Wrapper>
      <HomeLink to="/">Home</HomeLink>
      <BackLink to="/rick-and-morty">
        Back to Rick and Morty Characters
      </BackLink>
      <FlexBox wrap="wrap" justify="space-around">
        <Char key={char.id} char={char} />
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
const BackLink = styled(Link)`
  margin-bottom: 2rem;
  font-size: 1.4rem;
  padding: 0.3rem 1rem;
  border-radius: 0.25rem;
`;
