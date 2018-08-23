import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
constructor(props){
    super(props);
    this.state ={
      news: [],
    };
}

  componentDidMount() {
    const url = 'https://newsapi.org/v2/everything?q=apple&from=2018-08-22&to=2018-08-22&sortBy=popularity&apiKey=a87269f66e3046b88be33a9b8e80496b';

    fetch(url)
      .then((response) => {
          return response.json();
      })
      .then((data) => {
          this.setState({
              news: data.articles
          })
      })
      .catch((error) => console.log(error));
  }

    renderItems(){
      return this.state.news.map((item) => (
         <NewSingle key={item.url} item={item} />
      ));
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
