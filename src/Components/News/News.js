import React, { Component } from 'react';
import axios from 'axios';
import NewSingle from './NewSingle';

class News extends Component {
constructor(props){
    super(props);
    this.state ={
      news: [],
      error: false
    };
}

  componentDidMount() {
    const url = 'https://api.myjson.com/bins/77dr8';

    axios.get(url)
      .then((response) => {
        this.setState({
          news: response.data.articles
        })
      })
      .catch((error) => { // if there is error calling api then set the error to true
        this.setState({
          error: true
        })
      });
  }

    renderItems() {
      if(!this.state.error) {
      return this.state.news.map((item) => (
         <NewSingle item={item} />
      ));
      } 
    }

    render(){
        return (
          <div className="row">
            {this.renderItems()}
          </div>
        );
    }
}

export default News;
