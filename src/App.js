import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import './App.css';
import Day1 from './components/day1'
import Cloud_Weather from './Images/Cloud_Weather.png'
import Rainy_Weather from './Images/Rainy_Weather.png'
import Snowy_Weather from './Images/Snowy_Weather.png'
import Sun_Weather from './Images/Sun_Weather.png'

class App extends Component {
  constructor(props){
super(props);
this.state={

  mintemp:[],
    maxtemp:[],
    day:null,
    description0:null,
    data:[],
    hourlyarr:[],
    day1min:null,
    day1max:null,
    day1desc:null,
    day2min:null,
    day2max:null,
    day2desc:null,
    day3min:null,
    day3max:null,
    day3desc:null,
    day4min:null,
    day4max:null,
    day4desc:null,
    
}

  }
  
  today() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var n = weekday[d.getDay()];
  this.setState({day:n});
  }
  componentDidMount(){
    //this.fivedayweather();
    this.today();
   }
   findimg(desc)
   {
     switch (desc){
    case "clouds":
    return Cloud_Weather
    case "Rain":
    return Rainy_Weather
    case "Sun":
    return Sun_Weather
    case "Snow":
    return Snowy_Weather

    }

   }

  
  render(){
     const res=axios.get("https://api.openweathermap.org/data/2.5/forecast?q=dallas&appid=process.env.REACT_APP_API_KEY").
then(res=>{
  this.setState({mintemp:res.data.list[0].main.temp_min,
  maxtemp:res.data.list[0].main.temp_max,
  data:res.data,
  description:this.findimg(res.data.list[0].weather[0].description),
  day1min:res.data.list[1].main.temp_min,
  day1max:res.data.list[1].main.temp_max,
  day1desc:this.findimg(res.data.list[1].weather[0].description),
  day2min:res.data.list[2].main.temp_min,
  day2max:res.data.list[2].main.temp_max,
  day2desc:this.findimg(res.data.list[2].weather[0].description),
  day3min:res.data.list[3].main.temp_min,
  day3max:res.data.list[3].main.temp_max,
  day3desc:this.findimg(res.data.list[3].weather[0].description),
  day4min:res.data.list[4].main.temp_min,
  day4max:res.data.list[4].main.temp_max,
  day4desc:this.findimg(res.data.list[4].weather[0].description)
  })
  console.log("value of day4"+this.state.data.list[0].main.temp_max);
}).catch(function (error) {
  console.log(error);
});

return (
   
         
     <div>
          <nav>
          <div>
         <h1>{this.state.mintemp}</h1>
         <img src={this.state.description} />
      <h1>{this.state.maxtemp}</h1>
      {/* <Day1 weatherdata={this.state.data} day={this.state.day} /> */}
      </div>
      <div>
<h1>{this.state.mintemp}</h1>
         <img src={this.state.day1desc} />
      <h1>{this.state.maxtemp}</h1>
      {/* <Day1 weatherdata={this.state.data} day={this.state.day} /> */}
      </div>
      <div>
         <h1>{this.state.mintemp}</h1>
         <img src={this.state.day2desc} />
      <h1>{this.state.maxtemp}</h1>
      {/* <Day1 weatherdata={this.state.data} day={this.state.day} /> */}
      </div>
      <div>
         <h1>{this.state.mintemp}</h1>
         <img src={this.state.day3desc} />
      <h1>{this.state.maxtemp}</h1>
      {/* <Day1 weatherdata={this.state.data} day={this.state.day} /> */}
      </div>
      <div>
         <h1>{this.state.mintemp}</h1>
         <img src={this.state.day4desc} />
      <h1>{this.state.maxtemp}</h1>
      {/* <Day1 weatherdata={this.state.data} day={this.state.day} /> */}
      </div> 
      </nav>
      
     
    </div>
 
  
)}
  }
export default App;
