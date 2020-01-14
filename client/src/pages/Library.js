import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Popup } from 'semantic-ui-react'
import axios from "axios";
import CircularProgress from 'material-ui/CircularProgress';
import styled from 'styled-components';
// const extra = (
//     <a>
//         <Icon name='user' />
//         16 Friends
//     </a>
// )


function BookData(data) {
    this.data = data;
}

const Book = (props) => {

    return (
        <Popup
            content='연락하기'
            trigger={
                <Card
                    //image={`data:image/jpeg;base64,${props.book.image.data.data}`}
                    header={props.book.name}
                    meta={"저자: "+ props.book.author}
                    description={"과목: "+props.book.subject}
                >
                </Card>
            }
            position='right center'
        />
    )
};


class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: [
                {
                    image: "",
                    name: "책 제목",
                    author: "저자",
                    subject: "과목"
                }
            ],
            loading: undefined
        }
    }

    getBookList = () => {
        this.setState();
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: true
            })
        }, 5000) // 시간. 2초 후 실행

    }

    componentWillMount() {
        const find = axios.get("/api/books")
        function getData() {
            return new Promise((resolve, reject) => resolve(find));
        }
        getData().then((resolvedData) => {
            console.log("hihi")
            const temp = resolvedData.data;
            temp.map((contents) => {
                this.setState({
                    bookList: this.state.bookList.concat(contents)
                })
            })
            console.log(this.state.bookList)
        });
    }


    render() {
        return (
            <div>
                {!this.state.loading ? (
                    <Positioner>
                        <CircularProgress size={120} thickness={7} />
                    </Positioner>
                ) : (
                        <Grid columns={5} container>
                            <Grid.Row>
                                {this.state.bookList.map((book) => {
                                    return (
                                        <Grid.Column>
                                            <Book book={book} />
                                        </Grid.Column>
                                    )
                                })}
                            </Grid.Row>
                        </Grid>
                    )
                }
            </div>
        )
    }
}


export default Library;

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
`;