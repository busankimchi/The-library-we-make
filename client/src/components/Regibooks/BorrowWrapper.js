import React from 'react';
import styled from 'styled-components';
import { shadow } from 'lib/styleUtils';
import { Link } from 'react-router-dom';
import { cyan400 } from 'material-ui/styles/colors';

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
`;
const Container = styled.div`
    width: 500px;
`;

// 너비, 그림자 설정
const ShadowedBox = styled.div`
    width: 500px;
    border-radius: 35px;
    
    ${shadow(2)}
`;

// 로고
const LogoWrapper = styled.div`
    background: ${cyan400};
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
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
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
`;

const BorrowWrapper = ({ children }) => (
    <Positioner>
        <Container>
            <ShadowedBox>
                <LogoWrapper>
                    <Logo to="/" > Borrow this book!</Logo>
                </LogoWrapper>
                <Contents>
                    {children}
                </Contents>
            </ShadowedBox >
        </Container>
    </Positioner>
);


export default BorrowWrapper;