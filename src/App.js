import { AppWrapper } from "./components/Global/styled";
import HomePage from "./components/HomePage";
import React from "react";
import RickAndMorty from "./components/RickAndMorty";
import { Route } from "react-router-dom";
import SoloChar from "./components/RickAndMorty/SoloChar";

const App = () => {
  return (
    <AppWrapper>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/rick-and-morty" component={RickAndMorty} />
      <Route path="/rick-and-morty/:id" component={SoloChar} />
    </AppWrapper>
  );
};

export default App;
