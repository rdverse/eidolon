import React, {Component} from 'react';
// br - looks at url and changes contents, r - checks state and updates dom
import {BrowserRouter, Route} from 'react-router-dom';

import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './header';
import Welcome from './welcome';
// const Header = () => <h1>Main webpage</h1>;
const Dashboard = () => <h2>Dashboards</h2>;
const FormsNew = () => <h2>User is :</h2>;
// const Welcome = () => <h2>Welcome</h2>;

class App extends Component{
componentDidMount(){
    // console.log(this);
    // console.log(this.props);
    // console("sasdf");
this.props.fetchUser();
}

    render(){
        return(
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path='/' component={Welcome} /> 
                        <Route exact path='/forms' component={Dashboard} /> 

                    </div>
                </BrowserRouter>
            </div>
    );
}
};

export default connect(null,actions)(App);