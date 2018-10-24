import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import * as NavBarActions from '../../actions/navbar.actions';
import React from 'react';
import './AppBar.css';

class AppBar extends React.Component {

  constructor(props){
    super(props);
    this.tabMouseOver = this.tabMouseOver.bind(this);
    this.tabMouseOut = this.tabMouseOut.bind(this);
    this.tabClick = this.tabClick.bind(this);
    console.log(props);
  }
  tabMouseOver(event){
    this.props.NavBarActions.NavBarMouseOver(event.target.text);
  }
  tabMouseOut(event){
    this.props.NavBarActions.NavBarMouseOut(event.target.text);
  }
  tabClick(event){
    this.props.NavBarActions.NavBarSwitch(event.target.text);
  }
  render(){
    return(
      <div className="navbar">
        <div className="appTitle">
          {this.props.appName}
        </div>
        <div className="navbarTabContainer">
          {this.props.appBar.tabs.map((tab,i) => (
              <div className="navbarTab" key={i} data-active={this.props.appBar.currentSelected === tab}>
                <Link
                  to={this.props.appBar.options[tab].toLink}
                  onMouseEnter={this.tabMouseOver}
                  onMouseOut={this.tabMouseOut}
                  onClick={this.tabClick}>
                  {tab}
                </Link>
                <div className="submenu" data-active={this.props.appBar.dropdown.dropped && this.props.appBar.dropdown.tab === tab}>
                  {this.props.appBar.options[tab].itemsList.map((subitem,i) => (
                    <Link className="subMenuItem" to={subitem['toLink']}>{subitem['displayName']}</Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  // console.log(state);
  return {
    appBar: state.appBar
  };
}

function mapDispatchToProps(dispatch){
  return {
    NavBarActions: bindActionCreators(NavBarActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
// export default AppBar;
