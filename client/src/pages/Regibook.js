import React, { Component } from 'react';
import { RegiWrapper } from 'components/Regibooks';
import { Route, Switch } from 'react-router-dom';
import { Borrowbooks, Regibooks } from 'containers/Regi';
// import Main from 'pages/Main';



class Regibook extends Component {

      render() {
        return (
            <div>
                <RegiWrapper>
                    <Route path="/main/register" component={Regibooks} />
                    <Route path="/main/borrow" component={Borrowbooks} />
                </RegiWrapper>
                </div>
        );
    }
}
export default Regibook;