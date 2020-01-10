import React, { Component, Fragment } from 'react';

import { Route, Link } from 'react-router-dom';
import { Library, Wanted} from 'pages';
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
            sideBarSize: "10%",
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.handleMouseHover = this.handleMouseHover.bind(this);
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return { sideBarSize: (state.sideBarSize == "10%") ? "30%" : "10%" };
    }

    render() {
        const sidebarStyle = {
            sidebar: {
                background: "white",
                width: this.state.sideBarSize,
            },
        };

        return (
                <Sidebar
                    sidebar={<SideBarProfile />}
                    open={this.state.sidebarOpen}
                    docked={this.state.sidebarDocked}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={sidebarStyle}
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                >
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/main">
                            우책공
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
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
                </Sidebar>
        );
    }
}

const Button = styled.button`
  background: palevioletred;
  border-radius: 6px;
  border: none;
  color: white;
`

export default Main;

