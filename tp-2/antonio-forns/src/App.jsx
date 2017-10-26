import React, {Component} from 'react';
import Header from './components/header/Header';
import SideMenu from './components/sideMenu/SideMenu';
import Menu from './components/menu/Menu';
import News from './components/news/News';
import './App.scss';

class App extends Component {
  render() {
    let alumnosList = [
        {nombre: 'peter'},
        {nombre: 'mocho'},
        {nombre: 'ernesto'},
        {nombre: 'perro'},
        {nombre: 'ivan'},
        {nombre: 'facu'},
        {nombre: 'euge'},
        {nombre: 'tincho'},
        {nombre: 'mariasol'}
      ];
    let noticiasList = [
      {
        titulo: 'Porque MariaSol no usa un editor como la gente',
        contenido: 'Los compas del curso se preguntan que pasa con el editor que usa esta alumna, el cual no posee ni siquiera color en las fuentes. No es novedad que esta un poco mal de la cabeza pero les parece demasiado que llegue a este tipo de acciones como las de usar un editor solo en gris y negro.',
        fecha: 'Octubre 18, 2017',
        creador: 'usuario anonimo',
        cantidadComentarios: 0
      },
      {
        titulo: 'Comentarios sobre el profe JPG',
        contenido: 'Muchos alumnos se llegaron por SRN para elogiar al profesor de ese curso, segun cuenta al parecer el joven es muy bueno enseñando ayudando y desarrollando apliacaciones React,',
        fecha: 'Octubre 18, 2017',
        creador: 'usuario anonimo',
        cantidadComentarios: 10
      },
      {
        titulo: 'Que paso en el After-Rafting',
        contenido: 'Algunos alumnos del curso se quedaron en salta luego del rafting, SRN (sovos reactivo news) pudo hablar con algunos de ellos sobre lo que hicieron el finde largo en Salta la Linda,',
        fecha: 'Octubre 15, 2017',
        creador: 'usuario anonimo',
        cantidadComentarios: 300
      }
    ];
    return (
      <div className="container">
        <Header />
        <Menu />
        <SideMenu alumnosList={alumnosList} />
        <News noticiasList={noticiasList} />
      </div>
    );
  }
}
export default App;
