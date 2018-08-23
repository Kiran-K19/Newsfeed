import React from 'react';

const NewSingle = ({item}) => (
    <div className="col-md-4">
     <div className="card">
       <div className="card-image">
          <img src={item.urlToImage} alt={item.title} />
        </div>
        <span className="card-title">{item.source.name}</span>
        <div className="card-content">
          <p>{item.title}</p>
        </div>
        <div className="card-action">
          <a href={item.url} target="_blank">Full article</a>
        </div>
      </div>
    </div>
);

export default NewSingle;


