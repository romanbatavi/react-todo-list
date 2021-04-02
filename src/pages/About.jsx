import React from "react";

import Paper from "../components/paper/Paper";
import AboutHeader from "../components/aboutHeader/AboutHeader";

import Container from "../layout/Container";

const About = () => {
  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <AboutHeader />
      </Container>
    </Paper>
  );
};

export default About;
