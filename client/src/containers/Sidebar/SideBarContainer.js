import React, { Component, Fragment, useState } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar, Grid, Dropdown, Button, Divider } from 'semantic-ui-react'
import styled from 'styled-components';


const signOut = () => {

}

const UploadedBookList = () => {

}

const BorrowedBookList = () => {

}

/*
const SideBarContainer = ({ visible, children }) => {
    const [uploadedBookList, loadUBL] = useState([]);
    const [borrowedBookList, loadBBL] = useState([]);

    const updateUBL = () => {
        loadUBL();
    }
    

    return (
        <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation='push'
                icon='labeled'
                inverted
                vertical
                visible={visible}
                width='thin'>
                <Menu.Item>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='small' />
                    <Divider />
                    Name
                </Menu.Item>

                <Menu.Item as='a'>
                    <Icon name='book' />
                    <Dropdown
                        text='Uploaded Books'
                        basic>
                        <Dropdown.Menu>
                            <Dropdown.Item text='test' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>

                <Menu.Item as='a'>
                    <Icon name='bookmark' />
                    Borrowed Books
                    </Menu.Item>

                <Menu.Item
                    onClick={signOut}>
                    <Icon name='sign out' />
                    Sign Out
                    </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
                {children}
            </Sidebar.Pusher>

        </Sidebar.Pushable>
    )
}
*/

class SideBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
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

                    <Menu.Item as='a'>
                        <Icon name='book' />
                        <Dropdown
                            text='Uploaded Books'
                            basic>
                            <Dropdown.Menu>
                                <Dropdown.Item text='test' />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>

                    <Menu.Item as='a'>
                        <Icon name='bookmark' />
                        Borrowed Books
                    </Menu.Item>

                    <Menu.Item as='a'>
                        <Icon.Group>
                            <Icon name='sticky note' />
                            <Icon corner='bottom right' name='arrow right' />
                        </Icon.Group>
                        Send Note
                    </Menu.Item>

                    <Menu.Item as='a'>
                        <Icon.Group>
                            <Icon name='sticky note' />
                            <Icon corner='bottom right' name='arrow left' />
                        </Icon.Group>
                        Check Note
                    </Menu.Item>

                    <Menu.Item
                        onClick={signOut}>
                        <Icon name='sign out' />
                        Sign Out
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
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

