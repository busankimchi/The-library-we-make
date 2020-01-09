import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route path="/about/:name" component={About} />
                    <Route path="/posts" component={Posts} />
                </div>
            </div>
        );
    }
}

export default App;


/*
< Switch >
    <Route path="/about/:name" component={About} />
    <Route path="/about" component={About} />
</Switch >
*/