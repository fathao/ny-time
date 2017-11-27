import React from "react";
import "./hero.css";

const Hero = props =>

<div className="hero text-center jumbotron">
  {props.children}
</div>

export default Hero;