import React, { Component } from 'react';
import styled, { createGlobalStyle, keyframes } from "styled-components";
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { shadow } from 'lib/styleUtils';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class Login extends Component {
    static muiName = 'FlatButton';
    render() {
        return (
            <FlatButton {...this.props} label="Login" />
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

Logged.muiName = 'IconMenu';
class Home extends Component {
    state = {
        logged: true,
    };

    handleChange = (event, logged) => {
        this.setState({ logged: logged });
    };
    render() {
        return (
            <div>
                <AppBar
                    title="우리들의 작은 도서관"
                    iconElementRight={this.state.logged ? <Logged /> : <Login />}
                />
                <Container>
                    <Wheal></Wheal>
                    <Positioner>
                        <ShadowedBox>
                            <Link to="/auth/login">
                                <RaisedButton
                                    label="시작하기"
                                    fullWidth={true}
                                    primary={true}
                                    labelStyle={{ fontSize: '25px' }}
                                ></RaisedButton>
                            </Link>
                        </ShadowedBox>
                    </Positioner>
                </Container>
            </div>
        );
    }
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Wheal = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    width: 100px;
    height: 100px;
    transform: translate(-50%, -50%);
    background: url(${process.env.PUBLIC_URL + '/helo.png'});
    animation: ${rotate360} infinite 15s linear;
`;

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
    width: 250px;
    height: 130px;
    transform: translate(-50%, -50%);
`;
const ShadowedBox = styled.div`
    ${shadow(2)}
`;

// const LogoWrapper = styled.div`
//     background: ${cyan500};
//     height: 5rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius : 20px;
// `;

export default Home;