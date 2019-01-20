import React, {Component} from 'react'

export default class NavMenu extends Component {
  render() {
    return(
      <div class="NavMenu">
        <div>&nbsp;</div>
        <div>&nbsp;<i class="far fa-folder">&nbsp;&nbsp;</i><a href="about.html">About</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i class="far fa-folder">&nbsp;&nbsp;</i><a href="gospel.html">The Gospel</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i class="far fa-folder">&nbsp;&nbsp;</i><a href="doistMain.html">Doist Demo</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i class="far fa-folder">&nbsp;&nbsp;</i><a href="virtualSupport.html">Virtual Support</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i class="far fa-folder">&nbsp;&nbsp;</i><a href="wiseEliza.html">Wise Eliza</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i class="far fa-folder">&nbsp;&nbsp;</i><a href="childlikeHomepage.html">Childlike Homepage</a></div>
     </div>
    );
  }
}
