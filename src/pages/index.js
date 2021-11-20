import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import '../sass/basics.scss';
import NavBar from "../components/navbar";
import Layout from "../components/layout";
import IntroBlock from "../components/introBlock";
import AboutBlock from "../components/aboutBlock";
import ServicesBlock from "../components/servicesBlock";

const IndexPage = () => (
  <body>
    <NavBar/>
    <IntroBlock/>
    <AboutBlock/>
    <ServicesBlock/>
  </body>
)

export default IndexPage
