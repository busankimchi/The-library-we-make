import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { RegiContent, InputWithLabel, RegiButton } from 'components/Regibooks';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Regibooks } from '.';
// import { registerUser } from "../../actions/authActions";



class Register extends Component {

    constructor() {
        super();
        this.state = {
            qrid: "",
            name: "",
            author: "",
            subject: "",
            subject_category: "",
            register_user: "",
            errors: {}
        };
    }

    componentDidMount() {
        // 실행되기전, register_user를 redux로 부터 받아와야 한다.
    }


    componentWillReceiveProps(nextProps) {
        // 컴포넌트가 prop 을 새로 받았을 때 실행됩니다.
        // prop 에 따라 state 를 업데이트 해야 할 때 사용하면 유용합니다.
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
        const { errors } = this.state;
        return (
            <RegiContent title="Register your books!">
                <form onSubmit={this.onSubmit}>
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
                    <RegiButton onClick={this.onSubmit}>Register</RegiButton>
                </form>
            </RegiContent>
        );
    }
}
export default Regibooks;

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