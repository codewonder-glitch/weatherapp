import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import axios from 'axios';
  import './App.css';

  class App extends React.Component{

async getter(){


  const res= await axios.get("https://myapi-profstream.herokuapp.com/api/998b4a/persons")
  console.log(res.data);
}

componentDidMount(){

    this.getter();
}
render(){

  return(
<div>

</div>

  );
}

  }

 export default App;