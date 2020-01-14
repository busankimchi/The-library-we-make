import React, { Component } from 'react';
import { RegiWrapper } from 'components/Regibooks';
import { Route } from 'react-router-dom';
import { Borrowbooks, Regibooks } from 'containers/Regi';
import CircularProgress from 'material-ui/CircularProgress';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerBook, findBook } from "../actions/bookActions";
import styled from 'styled-components';
import { Borrow } from 'pages';
// import Main from 'pages/Main';



class Regibook extends Component {
    constructor() {
        super();
        this.state = {
            loading: undefined,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: true
            })
        }, 2000) // 시간. 2초 후 실행
                
    }
    componentWillMount(){
        console.log(this.props.match.params.id)
        this.props.findBook({ QRid: this.props.match.params.id }, this.props.history)
    }

    render() {
        return (
            <div>
                {!this.state.loading ? (
                    <Positioner>
                        <CircularProgress size={120} thickness={7} />
                    </Positioner>
                ) : (
                        <RegiWrapper>
                            <Route path="/main/register/:id" component={Regibooks} />
                            <Route path="/main/borrow/:id" component={Borrow} />
                        </RegiWrapper>
                    )
                }
            </div>
        );
    }
}
Regibook.propTypes = {
    findBook: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
`;


export default connect(
    mapStateToProps,
    {findBook }
)(withRouter(Regibook));