import React, {Component} from "react";

class Header extends Component {
render(){
    return(
    
  <nav class="nav-extended">
  <div class="nav-wrapper">
    <a href="/" class="brand-logo">Devesh Seethi</a>
    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="https://google.com">Research</a></li>
      <li><a href="badges.html">Projects</a></li>
      <li><a href="collapsible.html">Hobbies</a></li>
      <li><a href="collapsible.html">Articles</a></li>
      <li><a href="/auth/google">Introduce</a></li>
    </ul>
  </div>
  <div class="nav-content">
    <ul class="tabs tabs-transparent">
      <li class="tab"><a href="#tab1">Tab 1</a></li>
      <li class="tab"><a class="active" href="#test2">Tab 2</a></li>
      <li class="tab"><a href="/auth/google">Tab 2</a></li>
      <li class="tab"><a href="/api/current_user">who am I?</a></li>
    </ul>
  </div>
</nav>


    )
}
}


export default Header;