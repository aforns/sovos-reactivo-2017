import React, {Component} from 'react';
import './SubMenu.scss';

class Puterios extends Component {
  render() {
    return (
      <div className="sub_menu">
        <div>Ultimos Puterios</div>
        <a href=""><li>Octubre 19, 2017</li></a>
        <a href=""><li>Octubre 18, 2017</li></a>
        <a href=""><li>Octubre 17, 2017</li></a>
      </div>
    );
  }
}
export default Puterios;
