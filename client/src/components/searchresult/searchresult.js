import React from "react";

const SearchResults = props => {
  return (
    <div>
      <div className="panel panel-default" id="panel">
        {props.results.map(res =>
        <div className="panel-body" key={res.title}>
          <h5>{res.title}</h5>
          <h5>{res.publish}</h5>
          <button className="btn btn-default"><a href={res.link} target="_blank">Link</a></button>
          <button className="btn btn-default" data-title={res.title} data-link={res.link} data-publish={res.publish}>Save</button>
      </div>    
      )}
      
    </div>
  </div>
  )
}
 

export default SearchResults;
