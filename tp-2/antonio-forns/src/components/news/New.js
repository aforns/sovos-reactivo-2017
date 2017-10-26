import React, {Component} from 'react';

class New extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.noticia.titulo}</h1>
        <p>{this.props.noticia.contenido}</p>
        <div className="post_info">
        {this.props.noticia.fecha}
          . | Posted By
          <a href="#"> {this.props.noticia.creador} </a> |
          <a href="#"> {this.props.noticia.cantidadComentarios} Comentarios</a>
        </div>
      </div>
    );
  }
}
New.propTypes = {
   noticia: React.PropTypes.object
}
export default New;
