import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
const StyledButton = styled(Button)`
  background-color: rgba(255, 255, 255, 0.7);
  min-width: 100px;
  border-radius: 100px;
  color: black;
  border: 1px solid transparent;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 25px;
  &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: var(--main-text);
      border: 1px solid var(--main-semi-0);
  }
`;
const Buttonmat = (props) => {
    const text = props.text;
    return (
        <StyledButton>
            {text}
        </StyledButton>
    );
};

export default Buttonmat;