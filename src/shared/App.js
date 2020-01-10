import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth ,Main} from 'pages';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/auth" component={Auth} />
                    <Route path="/main" component={Main} />
                </div>
            </div>
        );
    }
}

export default App;
