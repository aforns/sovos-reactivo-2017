import React, {Component} from 'react';
import SubMenu from './SubMenu';
import Puterios from './Puterios';
import './SideMenu.scss';

class SideMenu extends Component {
  render() {
    return (
      <div className="main_nav">
        <SubMenu alumnosList={this.props.alumnosList} />
        <Puterios />
      </div>
    );
  }
}
SideMenu.propTypes = {
   alumnosList: React.PropTypes.array
};
export default SideMenu;
