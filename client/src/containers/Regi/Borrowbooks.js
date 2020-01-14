import React, { Component } from 'react';
import { RegiContent, InfoofBook, Available, RegiButton } from 'components/Regibooks';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { findBook } from "../../actions/bookActions";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import CircularProgress from 'material-ui/CircularProgress';
import styled from 'styled-components';


class Borrowbooks extends Component {

    constructor() {
        super();
        this.state = {
            QRid: "xxx",
            name: "default",
            author: "default",
            subject: "default",
            subject_category: "기준",
            register_user: "남경욱",
            current_user: "나플라",
            status: "대여 가능",
            borrower: "df",
            howlong: "",
            pictures: [],
            errors: {},
            temper: ""
        };
    }
    componentWillMount() {
        const find = axios.post("/api/books/find", {QRid : this.props.match.params.id})
        function getData() {
            return new Promise((resolve, reject) => resolve(find));
        }
        getData().then((resolvedData) => {
            const temp = resolvedData.data;
            console.log(temp)
            this.setState(temp)
        });  
    }
    componentDidMount() {
        //const temp = this.props.findBookAndGet({ QRid: this.props.match.params.id }, this.props.history)
        //console.log(temp)
        //this.setState({ temp: this.props.findBookAndGet({ QRid: this.props.match.params.id }, this.props.history), isLoading: false });
    }
    handleChange = (event, index, howlong) => this.setState({ howlong });

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    render() {
        const { errors } = this.state;
       
        if(this.state.subject_category =="기준"){
            return(
                <h3 align="center">Wait for a second plz:)</h3>
            );
        }
        else{
            return (
                <RegiContent title="Check the profile of book!">
                    <form onSubmit={this.onSubmit}>
                        <InfoofBook
                            bookname={this.state.name}
                            author={this.state.author}
                            subject={this.state.subject}
                            subject_category={this.state.subject_category}
                            currentowner={this.state.current_user}
                        ></InfoofBook>
                        <br />
                        <Available
                            QRid={this.props.match.params.id}
                            name={this.state.name}
                            author={this.state.author}
                            subject={this.state.subject}
                            subject_category={this.state.subject_category}
                            status={this.state.status}
                        ></Available>
                    </form>
                </RegiContent>
            );
        }    
    }
}

Borrowbooks.propTypes = {
    findBook: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { findBook }
)(withRouter(Borrowbooks));


const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
`;
