import React, { Component, Fragment, useState } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar, Grid, Dropdown, Button, Divider, Popup, List } from 'semantic-ui-react'
import styled from 'styled-components';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";



class SideBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    signOut = () => {

    }

    UploadedBookList = () => {

    }

    BorrowedBookList = () => {
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;
        return (
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='push'
                    icon='labeled'
                    inverted
                    vertical
                    visible={this.props.visible}
                    width='thin'>
                    <Menu.Item>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='small' />
                        <Divider />
                        {user.username}
                    </Menu.Item>

                    <Menu.Item as='a'>
                        <Icon name='book' />
                        Uploaded Books
                    </Menu.Item>

                    <Menu.Item as='a'>
                        <Icon name='bookmark' />
                        Borrowed Books
                    </Menu.Item>

                    <Menu.Item as='a'>
                        <Icon name='edit' />
                        Send Note
                    </Menu.Item>

                    <Menu.Item as='a'>
                        <Icon name='sticky note' />
                        Check Notes
                    </Menu.Item>

                    <Menu.Item
                        onClick={this.onLogoutClick}>
                        <Icon name='sign out' />
                        Sign Out
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher
                //dimmed={this.props.visible}
                >
                    {this.props.children}
                </Sidebar.Pusher>

            </Sidebar.Pushable>
        );
    }
}

const StyledSidebarContainer = styled(SideBarContainer)`
    height: 900px;
`
SideBarContainer.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(SideBarContainer);