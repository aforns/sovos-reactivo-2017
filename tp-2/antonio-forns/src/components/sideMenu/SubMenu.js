import React, {Component} from 'react';
import './SubMenu.scss';

class SubMenu extends Component {
  createSubMenu = () => {
    const alumnosList = Object.keys(this.props.alumnosList).map((index) => {
     return <a key={index} href="#">Ver Noticias de <b>{this.props.alumnosList[index].nombre}</b></a>
   });
   return alumnosList;
  }
  render() {
    return (
      <div className="sub_menu">
        <div>Menu</div>
        {this.createSubMenu()}
      </div>
    );
  }
}
SubMenu.propTypes = {
   alumnosList: React.PropTypes.array
};
export default SubMenu;
