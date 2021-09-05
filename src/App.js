import React from 'react'
import './App.css'
import Home from './Pages/index'
import Message from './Pages/message'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/contact" component={Message} exact />
            </Switch>
        </Router>
    );
}

export default App
