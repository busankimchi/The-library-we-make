import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { RegiButton } from 'components/Regibooks';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerBook, findBook } from "../../actions/bookActions";
import { Link, withRouter } from "react-router-dom";


class Available extends Component {
    constructor() {
        super();
        this.state = {
            QRid: "",
            name: "",
            author: "",
            subject: "",
            subject_category: "",
            status: "",
            howlong: ""
        };
    }
    componentWillMount() {
        this.setState({QRid:this.props.QRid})
        this.setState({name:this.props.name})
        this.setState({author:this.props.author})
        this.setState({subject:this.props.subject})
        this.setState({subject_category:this.props.subject_category})
        this.setState({status:this.props.status})
    }

    onSubmit = e => {
        console.log("submit")
        e.preventDefault();
        const newBook = {
            QRid: this.state.QRid,
            name: this.state.name,
            author: this.state.author,
            subject: this.state.subject,
            subject_category: this.state.subject_category,
            howlong: this.state.howlong
            // register_user: this.state.register_user,
        };
        this.props.registerBook(newBook, this.props.history);
        // 북DB status 수정
        // 대여DB 새로운 event 생성.

    };
    render() {
        if (this.state.status=="대여가능") {
            return (
                <div>
                    <h4>How long do you want?</h4>
                    <DropDownMenu value={this.state.howlong} onChange={this.handleChange} style={styles.customWidth} autoWidth={false}>
                        <MenuItem value={1} primaryText="1 week" />
                        <MenuItem value={2} primaryText="1 month" />
                        <MenuItem value={3} primaryText="1 semester" />
                    </DropDownMenu>       
                    <RegiButton onClick={this.onSubmit}>Borrow!</RegiButton>      
                </div>
            );
        }
        else {
            return (
                <h3>It is already borrowed by others</h3>
            );
        }

    }
}

const styles = {
    customWidth: {
        width: 200,
    },
};

Available.propTypes = {
    registerBook: PropTypes.func.isRequired,
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
    { registerBook, findBook }
)(withRouter(Available));