import React, { Component } from 'react';
import { RegiContent,InfoofBook,Available,RegiButton} from 'components/Regibooks';




class Borrowbooks extends Component {

    constructor() {
        super();
        this.state = {
            QRid: "df",
            name: "이재환",
            author: "안재웅",
            subject: "미적2",
            subject_category: "기초필수",
            register_user: "남경욱",
            status: "대여능",
            borrower: "df",
            howlong: "",
            pictures: [],
            errors: {}
        };
    }
    componentWillMount() {
        //서버에서 빌릴책정보를 state에 넣어주기.
    }
    handleChange = (event, index, howlong) => this.setState({ howlong });
    // componentDidMount() {
    // }


    // componentWillReceiveProps(nextProps) {
    // }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    

    render() {
        console.log(this.state);
        const { errors } = this.state;
        return (
            <RegiContent title="Check the profile of book!">
                <form onSubmit={this.onSubmit}>
                    <InfoofBook 
                    bookname = {this.state.name}
                    author = {this.state.author}
                    subject = {this.state.subject}
                    subject_category = {this.state.subject_category}
                    registerer = {this.state.register_user}
                    ></InfoofBook>
                    <br />
                    <Available 
                    QRid = {this.props.match.params.id}
                    name = {this.state.name}
                    author = {this.state.author}
                    subject = {this.state.subject}
                    subject_category = {this.state.subject_category}
                    status = {this.state.status}
                    ></Available>                 
                </form>
            </RegiContent>
        );

    }
}

export default Borrowbooks;

