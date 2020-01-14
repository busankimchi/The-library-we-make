import React, { Component, Fragment, useState } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar, Grid, Dropdown, Button, Divider, Popup, List } from 'semantic-ui-react'
import styled from 'styled-components';


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

    render() {
        const UploadedIcon = (
            <>
                <Icon name='book' size='big' inverted />
                Uploaded Books
            </>
        );

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
                        Name
                    </Menu.Item>

                    <Menu.Item as={Popup}
                        trigger={<Icon name='book' size='big' inverted />}
                        position='right center'>

                        Uploaded Books
                    </Menu.Item>



                    <Menu.Item as='a'>
                        <Popup
                            trigger={<Icon name='book' size='big' inverted />}
                            position='right center'
                            offset='0, 50px'>

                        </Popup>
                        <Icon name='book' size='big' inverted />
                        Uploaded Books
                    </Menu.Item>

                    <Menu.Item as={Button}>
                        <Popup
                            trigger={<Icon name='book' size='big' inverted />}
                            position='right center'
                            offset='0, 50px'>

                        </Popup>
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
                        <Icon name='sticky note outline' />
                        Check Notes
                    </Menu.Item>

                    <Menu.Item
                        onClick={this.signOut}>
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

export default SideBarContainer;

