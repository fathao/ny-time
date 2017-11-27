import React from "react";

const Form = props => 
 
    <form>
      <div className="form-group">
        <label> Topic</label>
        <input type="text" className="form-comtrol" name="topic" value= {props.topic} id="topic" onChange={props.handleInputChange} />
      </div>  
    
      <div className="form-group">
        <label>Start Year</label>
          <input type="text" className="form-comtrol" name="start" value={props.start} id="start" onChange={props.handleInputChange} />
      </div>  
    
      <div className="form-group">
        <label>End Year</label>
          <input type="text" className="form-comtrol" name="end" value={props.end} id="end" onChange={props.handleInputChange}/>
      </div>  
    
      <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">Search</button>
    </form>

export default Form;