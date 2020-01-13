import React, { Component, Fragment, useState } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar, Grid } from 'semantic-ui-react'
import styled from 'styled-components';


const SideBarContainer = ({ visible, children }) => {
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
                    <Menu.Item as='a'>
                        <Icon name='home' />
                        My Profile
                    </Menu.Item>

                    <Menu.Item as='a'>
                        <Icon name='gamepad' />
                        Games
                    </Menu.Item>


                    <Menu.Item as='a'>
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

const StyledSidebarContainer = styled(SideBarContainer)`
    height: 900px;
`

export default SideBarContainer;

