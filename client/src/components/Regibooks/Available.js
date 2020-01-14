import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { RegiButton } from 'components/Regibooks';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { borrowBook, findBook } from "../../actions/bookActions";
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
            status: "대여 가능",
            howlong: ""
        };
    }
    componentWillMount() {
        this.setState({ QRid: this.props.QRid })
        this.setState({ name: this.props.name })
        this.setState({ author: this.props.author })
        this.setState({ subject: this.props.subject })
        this.setState({ subject_category: this.props.subject_category })
        this.setState({ status: this.props.status })
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    handleChange = (event, index, howlong) => this.setState({ howlong });

    onSubmit = e => {
        console.log("submit")
        e.preventDefault();
        const changeBookDB = {
            QRid: this.state.QRid,
            name: this.state.name,
            author: this.state.author,
            subject: this.state.subject,
            subject_category: this.state.subject_category,
            howlong: this.state.howlong,
            current_user: this.props.auth.user.id,
            status: "대여 중"
        };
        this.props.borrowBook(changeBookDB, this.props.history);
        // 북DB status 수정
        // 대여DB 새로운 event 생성.

    };
    render() {
        if (this.state.status == "대여 가능") {
            return (
                <div>
                    <h4>How long do you want?</h4>
                    <DropDownMenu value={this.state.howlong} onChange={this.handleChange} style={styles.customWidth} autoWidth={false}>
                        <MenuItem value={"week"} primaryText="1 week" />
                        <MenuItem value={"month"} primaryText="1 month" />
                        <MenuItem value={"semester"} primaryText="1 semester" />
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
    borrowBook: PropTypes.func.isRequired,
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
    { borrowBook, findBook }
)(withRouter(Available));