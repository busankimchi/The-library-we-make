import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const extra = (
    <a>
        <Icon name='user' />
        16 Friends
    </a>
)

const Library = () => {
    return (
        <Card
            image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={extra}
        />
    );
};

export default Library;