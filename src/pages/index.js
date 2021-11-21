import * as React from "react";
import '../sass/basics.scss';
import NavBar from "../components/navbar";
import IntroBlock from "../components/introBlock";
import AboutBlock from "../components/aboutBlock";
import ServicesBlock from "../components/servicesBlock";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <NavBar/>
    <IntroBlock/>
    <AboutBlock/>
    <ServicesBlock/>
  </Layout>
)

export default IndexPage
