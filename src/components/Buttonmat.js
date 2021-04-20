import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const StyledButton = withStyles({
    root: {
        background: 'var(--main-semi-0)',
        minWidth: '100px',
        padding: '0px 50px',
        borderRadius: '100px',
        color: 'black',
        height: 48,
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);
const Buttonmat = (props) => {
    const text = props.text;
    return (
        <StyledButton>
            {text}
        </StyledButton>
    );
};

export default Buttonmat;