import React, { Component } from 'react';
import { RegiContent, InputWithLabel, RegiButton } from 'components/Regibooks';
import { makeStyles } from '@material-ui/core/styles';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ImageUploader from 'react-images-upload';
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { registerUser } from "../../actions/authActions";



class Regibooks extends Component {

    constructor() {
        super();
        this.state = {
            qrid: "",
            name: "",
            author: "",
            subject: "",
            subject_category: "과목을 선택해주세여",
            register_user: "",
            pictures: [],
            errors: {}
        };
        this.onDrop = this.onDrop.bind(this);
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
    // onSubmit = e => {
    //     e.preventDefault();
    //     const newUser = {
    //         username: this.state.username,
    //         email: this.state.email,
    //         password: this.state.password,
    //         password2: this.state.password2
    //     };
    //     console.log(newUser);
    //     this.props.registerUser(newUser, this.props.history);
    // };


    render() {
        console.log(this.state);
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
export default Regibooks;

const styles = {
    customWidth: {
        width: 200,
    },
};
// Register.propTypes = {
//     registerUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired
// };
// const mapStateToProps = state => ({
//     auth: state.auth,
//     errors: state.errors
// });

// export default connect(
//     mapStateToProps,
//     { registerUser }
// )(withRouter(Register));