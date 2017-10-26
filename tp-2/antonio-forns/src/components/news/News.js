import React, {Component} from 'react';
import New from './New';
import './News.scss';

class News extends Component {
  createNews = () => {
     const noticiasList = Object.keys(this.props.noticiasList).map((index) => {
      return <New key={index} noticia={this.props.noticiasList[index]} />
    });
    return noticiasList;
  }
  render() {
    return (
      <div className="content">
        {this.createNews()}
      </div>
    );
  }
}
News.propTypes = {
   noticiasList: React.PropTypes.array
};
export default News;
