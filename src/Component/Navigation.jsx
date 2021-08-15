import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from './About';
import Dashboard from './Dashboard';
import Default from './Default';
import Home from './Home';
import Navbar from './Navbar';
export class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                  <Navbar />
                    <hr></hr>
                    <Switch>
                       
                        <Route  path="/about" component={About} />
                        <Route  path="/dashboard" component={Dashboard} />
                        
                        <Route  exact path="/" component={Home} />
                        <Route  component={Default} />
                      
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Navigation
