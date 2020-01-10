import React, { Component } from 'react';
import { AuthWrapper } from 'components/Auth';
import { Route } from 'react-router-dom';
import styled from "styled-components";
import { Login, Register } from 'containers/Auth';

class Auth extends Component {
    render() {
        return (
            <Container>
                <AuthWrapper>
                    <Route path="/auth/login" component={Login}/>
                    <Route path="/auth/register" component={Register}/>
                </AuthWrapper>
            </Container>
        );
    }
}

export default Auth;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${process.env.PUBLIC_URL + '/sample.png'});
`;