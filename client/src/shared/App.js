import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Auth ,Main} from 'pages';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import jwt_decode from "jwt-decode";
import setAuthToken from "utils/setAuthToken";
import { setCurrentUser, logoutUser } from "actions/authActions";

//redux 여기에 세팅하는게 맞나?
import { Provider } from "react-redux";
import store from "../store";
import PrivateRoute from "components/private-route/PrivateRoute";

if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "./auth/login";
    }
}



class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/auth" component={Auth} />
                        // <Route path="/main" component={Main} />
                        <Switch>
                            <PrivateRoute exact path="/main" component={Main} />
                        </Switch>

                    </div>
                </MuiThemeProvider>

            </Provider>
        );
    }
}

export default App;
