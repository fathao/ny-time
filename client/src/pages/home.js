import React, { Component } from "react";
import Hero from "../components/hero";
import API from "../utilities/API";
import Form from "../components/searchform/searchform";
import SearchResults from "../components/searchresult/searchresult";

 class Home extends Component {
  state = {
    topic: "",
    start: "",
    end: "",
    results: []
  }

handleFormSubmit = event => {
  event.preventDefault();
    API.getArticles(this.state.topic, this.state.start, this.state.end)
    .then(res => {
    this.setState({results: res, start: "", end: "", topic: ""})
  });
}

handleInputChange = event => {
  // console.log(event.target.name);
  const name = event.target.name;
  const value = event.target.value;
  this.setState({ [name]: value })
  
}

render() {
  return(
  <div>
    <Hero>
     <h1>NY Times Home Page</h1>
    </Hero>  
    <Form
    topic={this.state.topic}
    start={this.state.start}
    end={this.state.end}
    handleInputChange={this.handleInputChange}
    handleFormSubmit={this.handleFormSubmit} />
    <br />
    <SearchResults results={this.state.results} />
  </div>
  )
}

}
export default Home;
