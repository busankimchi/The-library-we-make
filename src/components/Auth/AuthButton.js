import React from 'react';
import styled from 'styled-components';
import { cyan200, cyan400, cyan500 } from 'material-ui/styles/colors';
import { shadow } from 'lib/styleUtils';


const Wrapper = styled.div`
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;

    background: ${cyan400};
    color: white;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;
    border-radius : 20px;
    &:hover {
        background: ${cyan200};
        ${shadow(0)}
    }

    &:active {
        background: ${cyan500};
    }

`;

const AuthButton = ({children, onClick}) => (
        <Wrapper onClick={onClick}>{children}</Wrapper>
);

export default AuthButton;