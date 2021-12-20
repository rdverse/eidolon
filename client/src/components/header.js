import React, {Component} from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Header extends Component {

// to decide what to show on the header
renderContent(){
  console.log(this.props.auth);

switch(this.props.auth){
  case null:
    return <li><a href="/">Wsait</a></li>

  case false:
    return <li><a href="/auth/google">Introduce</a></li>

  default:
    return <li><a href="/api/logout">Logout</a></li>
    
  }
  
}

render(){
    return(
    
  <nav className="nav-extended red lighten-4">
  <div className="nav-wrapper purple lighten-4">


    <Link 
    to={this.props.auth ? '/' : '/forms/new'} 
    href="/" 
    className="brand-logo"
    >
      Devesh Seethi
      </Link>
     

    <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><a href="https://google.com">Research</a></li>
      <li><a href="badges.html">Projects</a></li>
      <li><a href="collapsible.html">Hobbies</a></li>
      <li><a href="collapsible.html">Articles</a></li>
      {this.renderContent()}
    
    </ul>
  </div>
  <div className="nav-content">
    <ul className="tabs tabs-transparent">
      <li className="tab"><a href="#tab1">Tab 1</a></li>
      <li className="tab"><a className="active" href="#test2">Does nothing</a></li>
      <li className="tab"><a href="/auth/google">Tab 2</a></li>
      <li className="tab"><a href="/api/current_user">who am I?</a></li>
    </ul>
  </div>
</nav>

    )
}
}

// getting auth from state object in the arguments - check the index.js in authreducer.js
function mapStateToProps({auth}){
  return{auth:auth}
}

export default connect(mapStateToProps)(Header);