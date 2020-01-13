import React, { Component, Fragment } from 'react';

import { Route, Link } from 'react-router-dom';
import { Library, Wanted, Borrow, Regibook } from 'pages';
import SideBarProfile from 'components/SideBarProfile';
import Sidebar from "react-sidebar";
import styled from 'styled-components';

/*
import {
    Header,
    Menu,
    Ref,
    Icon,
    Segment,
    Sidebar
} from 'semantic-ui-react';
*/

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


const mql = window.matchMedia(`(min-width: 800px)`);

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            sidebarDocked: mql.matches,
            isOpen: false,
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    // componentWillUnmount() {
    //     this.state.mql.removeListener(this.mediaQueryChanged);
    // }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
    }

    render() {
        const sidebarStyle = {
            sidebar: {
                background: "white",
                width: this.state.sideBarSize,
            },
        };

        return (
            <div>
                <Container>
                    <Sidebar
                        sidebar={<SideBarProfile />}
                        open={this.state.sidebarOpen}
                        docked={this.state.sidebarDocked}
                        onSetOpen={this.onSetSidebarOpen}
                        styles={sidebarStyle}>

                        <Navbar color="light" light expand="md">
                            <NavbarBrand href="/main">우책공</NavbarBrand>
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem>
                                        <NavLink tag={Link} exact to="/main" >Library</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} exact to="/main/wanted" >Wanted</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} exact to="/main/borrow" >Borrow</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} exact to="/main/register" >Register book</NavLink>
                                    </NavItem>
                                </Nav>
                                <NavbarText>우책공</NavbarText>
                            </Collapse>
                        </Navbar>
                        <div>
                            <Route exact path="/main" component={Library} />
                            <Route path="/main/wanted" component={Wanted} />
                            <Route path="/main/borrow" component={Borrow} />
                            <Route path="/main/register" component={Regibook} />
                        </div>
                    </Sidebar>
                </Container>
            </div>
        );
    }
}

export default Main;

const Container = styled.div`
  position: absolute;
  top: 64;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${process.env.PUBLIC_URL + '/sample2.png'});
`;

