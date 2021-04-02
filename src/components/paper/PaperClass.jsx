import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

const StyledPaper = styled.div`
  width: 600px;
  height: 800px;
  background-color: #f2eecb;
  border-radius: 4px;

  padding: 32px;
`;

const StyledFrame = styled.div`
  border: 1px solid ${props => props.theme.color.primary.black};
  height: 100%;
`;

class Paper extends React.Component {
  render() {
    const { children, theme } = this.props;
    return (
      <StyledPaper>
        <StyledFrame theme={theme}>{children}</StyledFrame>
      </StyledPaper>
    );
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    theme: PropTypes.shape({
      color: PropTypes.shape({
        primary: PropTypes.objectOf(PropTypes.string)
      })
    })
  };
}

export default withTheme(Paper);
