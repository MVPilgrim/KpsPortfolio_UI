import React, {Component} from 'react'

export default class NavMenu extends Component {
  render() {
    return(
      <div class="NavMenu">
        <p/>&nbsp;<i class="far fa-folder">&nbsp;&nbsp;</i><a href="about.html">About</a>
        <p/>&nbsp;<i class="far fa-folder">&nbsp;&nbsp;</i><a href="gospel.html">The Gospel</a>
        <p/>&nbsp;<i class="far fa-folder">&nbsp;&nbsp;</i><a href="doistMain.html">Doist Demo</a>
        <p/>&nbsp;<i class="far fa-folder">&nbsp;&nbsp;</i><a href="virtualSupport.html">Virtual Support</a>
        <p/>&nbsp;<i class="far fa-folder">&nbsp;&nbsp;</i><a href="wiseEliza.html">Wise Eliza</a>
        <p/>&nbsp;<i class="far fa-folder">&nbsp;&nbsp;</i><a href="childWebPage.html">Child-like Web Page</a>
     </div>
    );
  }
}
