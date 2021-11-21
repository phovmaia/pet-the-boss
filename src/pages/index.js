import * as React from "react";
import '../sass/basics.scss';
import NavBar from "../components/navbar";
import IntroBlock from "../components/introBlock";
import AboutBlock from "../components/aboutBlock";
import ServicesBlock from "../components/servicesBlock";

const IndexPage = () => (
  <>
    <NavBar/>
    <IntroBlock/>
    <AboutBlock/>
    <ServicesBlock/>
  </>
)

export default IndexPage
