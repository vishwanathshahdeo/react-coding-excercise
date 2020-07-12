import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemList from './itemList';
import SelectedItem from './selectedItem';

class App extends Component {
 
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={ItemList} />
                    <Route path="/selectedItem/:itemId" exact component={SelectedItem} />
                </Switch>
            </Router>

        );
    }
}

export default App;
