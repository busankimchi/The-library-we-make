import React, { Component } from 'react';
import { AuthWrapper } from 'components/Auth';
import { Route, Switch } from 'react-router-dom';
import styled from "styled-components";
import { Login, Register } from 'containers/Auth';

class Auth extends Component {
    render() {
        return (
            <div>
                <Container>
                    <AuthWrapper>
                        <Route path="/auth/login" component={Login} />
                        <Route path="/auth/register" component={Register} />
                    </AuthWrapper>
                </Container>
            </div>
        );
    }
}
//아마 요기 바꿔야할듯

export default Auth;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${process.env.PUBLIC_URL + '/sample.png'});
`;