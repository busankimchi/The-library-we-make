import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BorrowWrapper } from 'components/Regibooks';
import { Borrowbooks, Regibooks } from 'containers/Regi';
import CircularProgress from 'material-ui/CircularProgress';
import styled from 'styled-components';

class Borrow extends Component {
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
    render() {
        return (
            <div>
                {!this.state.loading ? (
                    <Positioner>
                        <CircularProgress size={120} thickness={7} />
                    </Positioner>
                ) : (
                        <BorrowWrapper>
                            <Route path="/main/borrow/:id" component={Borrowbooks} />
                        </BorrowWrapper>
                    )
                }
            </div>
        )
    }
}

export default Borrow;

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
`;