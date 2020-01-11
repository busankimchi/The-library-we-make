import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth ,Main} from 'pages';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/auth" component={Auth} />
                    <Route path="/main" component={Main} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
