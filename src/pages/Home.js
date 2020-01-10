import React from 'react';
import styled from "styled-components";
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container>
                <Positioner>
                    <ShadowedBox>
                        <LogoWrapper>
                        <Logo to="/auth/login">시 작 하 기</Logo>
                        </LogoWrapper>
                    </ShadowedBox>
                </Positioner>
        </Container>
    );
};


const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${process.env.PUBLIC_URL + '/sample.png'});
`;

const Positioner = styled.div`
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const ShadowedBox = styled.div`
    width: 500px;
    border-radius : 500px;
    ${shadow(2)}
`;

const LogoWrapper = styled.div`
    background: ${oc.teal[7]};
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius : 20px;
`;

const Logo = styled(Link)`
    color: white;
    font-family: 'Rajdhani';
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
`;

export default Home;