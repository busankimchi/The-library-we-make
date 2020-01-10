import React, { Component, Fragment } from 'react';

import { Route, Link } from 'react-router-dom';
import { Library, About, Posts, Wanted } from 'pages';
import SideBarProfile from 'components/SideBarProfile';
//import MenuBar from 'components/MenuBar';

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

class App extends Component {
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
            <>
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
                        <NavbarBrand href="/">
                            우책공
                        </NavbarBrand>


                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} exact to="/" >Library</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink tag={Link} to="/wanted" >Wanted</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink tag={Link} exact to="/about" >About</NavLink>
                                </NavItem>

                                {/*
                                <NavItem>
                                    <NavLink tag={Link} to="/about/foo" >About Foo</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink tag={Link} to="/posts" >Posts</NavLink>
                                </NavItem>
                                */}


                                {/*
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                                    </DropdownToggle>

                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Option 1
                                        </DropdownItem>

                                        <DropdownItem>
                                            Option 2
                                        </DropdownItem>

                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                */}
                            </Nav>
                            <NavbarText>우책공</NavbarText>
                        </Collapse>
                    </Navbar>



                    <div>
                        <Route exact path="/" component={Library} />
                        <Route path="/wanted" component={Wanted} />
                        <Route exact path="/about" component={About} />
                        {/*
                        <Route path="/about/:name" component={About} />
                        <Route path="/posts" component={Posts} />
                        */}

                    </div>


                </Sidebar>

            </>

        );
    }
}

const Button = styled.button`
  background: palevioletred;
  border-radius: 6px;
  border: none;
  color: white;
`


export default App;


/*
< Switch >
            <Route path="/about/:name" component={About} />
            <Route path="/about" component={About} />
        </Switch >
        */