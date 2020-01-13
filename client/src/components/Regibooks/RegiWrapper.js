import React from 'react';
import styled from 'styled-components';
import { shadow } from 'lib/styleUtils';
import { Link } from 'react-router-dom';
import { cyan400 } from 'material-ui/styles/colors';

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  
`;
const Containver = styled.div`
    width: 1200px;
`;

// 너비, 그림자 설정
const ShadowedBox = styled.div`
    width: 1200px;
    border-radius: 50px;
    
    ${shadow(2)}
`;

// 로고
const LogoWrapper = styled.div`
    background: ${cyan400};
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`;

const Logo = styled(Link)
    `
    color: white;
    font-family: 'Rajdhani';
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
`;

// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`;

const RegiWrapper = ({ children }) => (
    <Positioner>
        <Containver>
            <ShadowedBox>
                <LogoWrapper>
                    <Logo to="/" > Register your book! </Logo>
                </LogoWrapper>
                <Contents>
                    {children}
                </Contents>
            </ShadowedBox >
        </Containver>
    </Positioner>
);


export default RegiWrapper;