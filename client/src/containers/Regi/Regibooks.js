import React, { Component } from 'react';
import { RegiContent, InputWithLabel, RegiButton } from 'components/Regibooks';
import { Link, withRouter } from "react-router-dom";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ImageUploader from 'react-images-upload';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerBook, findBook } from "../../actions/bookActions";

// import { registerUser } from "../../actions/authActions";




class Regibooks extends Component {

    constructor() {
        super();
        this.state = {
            QRid: "",
            name: "",
            author: "",
            subject: "",
            subject_category: "과목을 선택해주세여",
            register_user: "", //이걸 유저정보로.
            pictures: [],
            errors: {}
        };
        this.onDrop = this.onDrop.bind(this);
    }
    componentWillMount() {
        this.props.findBook({ QRid: this.props.match.params.id }, this.props.history)
    }
    handleChange = (event, index, subject_category) => this.setState({ subject_category });
    // componentDidMount() {
    // }


    // componentWillReceiveProps(nextProps) {
    // }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        console.log("submit")
        e.preventDefault();
        const newBook = {
            QRid: this.props.match.params.id,
            name: this.state.name,
            author: this.state.author,
            subject: this.state.subject,
            subject_category: this.state.subject_category,
            // register_user: this.state.register_user,
        };
        this.props.registerBook(newBook, this.props.history);

    };

    Setting() {
        this.setState({ qrid: this.props.match.params.id });
    }

    render() {
        const {user}=this.props.auth;
        console.log(user.username)

        // console.log(this.state.auth);
        const { errors } = this.state;
        return (
            <RegiContent title="Take a picture of your book">
                <form onSubmit={this.onSubmit}>
                    <ImageUploader
                        withIcon={true}
                        buttonText='Choose images'
                        onChange={this.onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />
                    <InputWithLabel
                        label="책 이름"
                        name="name"
                        placeholder="책 이름"
                        onChange={this.onChange}
                        value={this.state.name}
                        error={errors.name}
                        id="name"
                    />
                    <InputWithLabel
                        label="저자"
                        name="author"
                        placeholder="저자"
                        onChange={this.onChange}
                        value={this.state.author}
                        error={errors.author}
                        id="author"
                    />
                    <InputWithLabel
                        label="과목"
                        name="subject"
                        placeholder="과목"
                        onChange={this.onChange}
                        value={this.state.subject}
                        error={errors.subject}
                        id="subject"
                        type="subject"
                    />
                    <br />
                    <h4>Choose a subject category</h4>
                    <DropDownMenu value={this.state.subject_category} onChange={this.handleChange} style={styles.customWidth} autoWidth={false}>
                        <MenuItem value={1} primaryText="전공필수" />
                        <MenuItem value={2} primaryText="전공선택" />
                        <MenuItem value={3} primaryText="기초필수" />
                        <MenuItem value={4} primaryText="기초선택" />
                        <MenuItem value={5} primaryText="교양" />
                        <MenuItem value={6} primaryText="기타" />
                    </DropDownMenu>
                    <h3>Your QR ID is</h3>
                    <h4>{this.props.match.params.id}</h4>
                    <RegiButton onClick={this.onSubmit}>Register!</RegiButton>
                </form>
            </RegiContent>
        );

    }
}

const styles = {
    customWidth: {
        width: 200,
    },
};

Regibooks.propTypes = {
    registerBook: PropTypes.func.isRequired,
    findBook: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});


export default connect(
    mapStateToProps,
    { registerBook, findBook }
)(withRouter(Regibooks));

