import React from "react";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.style";
import "./homepage.styles.scss";

const Homepage = () => (
  <HomePageContainer className="homepage">
    <Directory />
  </HomePageContainer>
);

export default Homepage;
