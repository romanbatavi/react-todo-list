import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

const StyledButton = styled.button`
  font-size: 1.8rem;
  font-family: "Bungee", sans-serif;
  color: ${props => props.color};
  text-align: ${props => props.align};

  padding: 16px;
  cursor: pointer;

  background: unset;
  border: unset;
  outline: unset;

  &:active {
    text-shadow: 1px 1px 2px ${props => props.color};
  }
`;

class Button extends React.Component {
  render() {
    const { text, color, align, onClick, theme } = this.props;
    const {
      color: { primary }
    } = theme;

    let textColor;
    switch (color) {
      case "black":
        textColor = primary.black;
        break;
      case "red":
        textColor = primary.red;
        break;
      default:
        textColor = "black";
    }

    return (
      <StyledButton color={textColor} align={align} onClick={onClick}>
        {text}
      </StyledButton>
    );
  }

  static defaultProps = {
    text: "Button",
    color: "black",
    align: "left"
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.oneOf(["black", "red"]),
    align: PropTypes.oneOf(["left", "right"]),
    onClick: PropTypes.func,
    theme: PropTypes.shape({
      color: PropTypes.shape({
        primary: PropTypes.objectOf(PropTypes.string)
      })
    })
  };
}

export default withTheme(Button);
