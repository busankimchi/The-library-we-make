import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Popup } from 'semantic-ui-react'

const extra = (
    <a>
        <Icon name='user' />
        16 Friends
    </a>
)


const Book = (props) => (
    <Popup
        content='Sample'
        trigger={
            <Card
                image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra} />
        }
        position='right center'
    />
);


class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: [
                {
                    image: "",
                    header: "",
                    meta: "",   
                }
            ],
        }
    }

    getBookList = () => {
        this.setState()
    }

    componentWillMount() {
        this.getBookList();
    }
    

    render() {
        return (
            <Grid columns={5} container>
                <Grid.Row>
                    {this.state.bookList.map((book) => {
                        return (
                            <Grid.Column>
                                <Book />
                            </Grid.Column>
                        )
                    })}
                    

                </Grid.Row>
            </Grid>
        )
    }
}


export default Library;