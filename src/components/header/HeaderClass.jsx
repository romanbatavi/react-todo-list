import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

// import Button from "../button/ButtonNoJSX";
import Button from "../button/ButtonClass";
// import Button from "../button/Button";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

// import styles from "./Header.module.css";
// import * as styles from "./Header.styles";

const StyledH1 = styled.h1`
  text-align: center;

  color: ${props => props.theme.color.primary.black};
  font-size: 3.6rem;
  font-family: "Homemade Apple", sans-serif;
  text-transform: lowercase;
`;

class Header extends React.Component {
  render() {
    const { showAddToggle, showAdd, clearTodos, theme } = this.props;
    return (
      <section className="header-component">
        <Container alignItems="flex-start">
          <Item flex={1}>
            <Button text={showAdd ? "Done" : "Add"} onClick={showAddToggle} />
          </Item>
          <Item flex={2}>
            {/* <h1 css={styles.headerTitle(theme)}>Todo Lists</h1> */}
            <StyledH1 theme={theme}>Todo Lists</StyledH1>
          </Item>
          <Item flex={1} align="right">
            <Button
              text="Clear"
              onClick={clearTodos}
              color="red"
              align="right"
            />
          </Item>
        </Container>
      </section>
    );
  }

  static propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodos: PropTypes.func.isRequired,
    theme: PropTypes.shape({
      color: PropTypes.shape({
        primary: PropTypes.objectOf(PropTypes.string)
      })
    })
  };
}

export default withTheme(Header);
