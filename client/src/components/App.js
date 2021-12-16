import React from 'react';
// br - looks at url and changes contents, r - checks state and updates dom
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';

// const Header = () => <h1>Main webpage</h1>;
const Dashboard = () => <h2>Dashboard</h2>;
const FormsNew = () => <h2>New Form</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () =>{
return(
    <div className="container">
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path='/' component={Landing} /> 
                <Route exact path='/forms' component={Dashboard} /> 
                <Route path='/forms/new' component={FormsNew} /> 

            </div>
        </BrowserRouter>
    </div>
);
};

export default App;