import React, { Component, Fragment } from 'react';

import { Route, Link } from 'react-router-dom';
import { Library, Wanted } from 'pages';
import SideBarProfile from 'components/SideBarProfile';
//import Sidebar from "react-sidebar";
import styled from 'styled-components';

import { Header, Icon, Image, Menu, Segment, Sidebar, Grid } from 'semantic-ui-react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import SideBarContainer from '../containers/Sidebar/SideBarContainer';


const mql = window.matchMedia(`(min-width: 800px)`);

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            width: 0,
            height: 0,
        };
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    toggleSidebar() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const sidebarStyle = {
            sidebar: {
                background: "white",
                width: this.state.sideBarSize,
            },
        };

        let profile = "";

        if (!this.state.isOpen)
            profile = "Open My Profile"
        else profile = "Close My Profile"

        return (
            <SideBarContainer visible={this.state.isOpen}>
                <MainContainer>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/main">우책공</NavbarBrand>
                        <Collapse isOpen={true} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} onClick={this.toggleSidebar}>
                                        {profile}
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} exact to="/main" >Library</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} exact to="/main/wanted" >Wanted</NavLink>
                                </NavItem>
                            </Nav>
                            <NavbarText>우책공</NavbarText>
                        </Collapse>
                    </Navbar>

                    <div>
                        <Route exact path="/main" component={Library} />
                        <Route path="/main/wanted" component={Wanted} />
                    </div>
                </MainContainer>
            </SideBarContainer>
        );
    }
}

const MainContainer = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 800px;
`

export default Main;

