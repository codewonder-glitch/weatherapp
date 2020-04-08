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

const Apikey=process.env.REACT_APP_API_KEY

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
    case "Clouds":
    return Cloud_Weather
    case "Rain":
    return Rainy_Weather
    case "Clear":
    return Sun_Weather
    case "Snow":
    return Snowy_Weather

    }

   }
   componentDidUpdate(){
     this.getData();
   }

   async getData(){
   
      const res=axios.get("https://api.openweathermap.org/data/2.5/forecast?q=irving&appid="+Apikey).
 then(res=>{
   this.setState({mintemp:this.fToC(res.data.list[0].main.temp_min),
   maxtemp:this.fToC(res.data.list[0].main.temp_max),
   data:res.data,
   description:this.findimg(res.data.list[0].weather[0].main),
   day1min:fToC(res.data.list[7].main.temp_min),
   day1max:fToC(res.data.list[7].main.temp_max),
   day1desc:this.findimg(res.data.list[7].weather[0].main),
   day2min:fToC(res.data.list[15].main.temp_min),
   day2max:fToC(res.data.list[15].main.temp_max),
   day2desc:this.findimg(res.data.list[15].weather[0].main),
   day3min:fToC(res.data.list[23].main.temp_min),
   day3max:fToC(res.data.list[23].main.temp_max),
   day3desc:this.findimg(res.data.list[23].weather[0].main),
   day4min:fToC(res.data.list[31].main.temp_min),
   day4max:fToC(res.data.list[31].main.temp_max),
   day4desc:this.findimg(res.data.list[31].weather[0].main)
   })

   console.log("value of day4"+this.findimg(res.data.list[4].weather[0].main));
 }).catch(function (error) {
   console.log(error);
 });
 

   

   }
  fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = Math.round((fTemp - 32) * 5 / 9);
  return fToCel;
} 

  
  render(){
     


return (
  
     <div>
            <Router>
          <nav>
          <div>
          <Link to={{ pathname:"/Day1",
         Mintemp:this.state.mintemp,
         Maxtemp:this.state.maxtemp}}>
         <img src={this.state.description} />
         </Link>
      <h1></h1>
      {/* <Day1 weatherdata={this.state.data} day={this.state.day} /> */}
      </div>
      <div>
      <Link to={{ pathname:"/Day1",
         Mintemp:this.state.mintemp,
         Maxtemp:this.state.maxtemp}}>
  <img src={this.state.day1desc} />
     
         </Link>
      {/* <Day1 weatherdata={this.state.data} day={this.state.day} /> */}
      </div>
      <div>
      <Link to={{ pathname:"/Day1",
         Mintemp:this.state.mintemp,
         Maxtemp:this.state.maxtemp}}>
  <img src={this.state.day2desc} />
     
         </Link>
      {/* <Day1 weatherdata={this.state.data} day={this.state.day} /> */}
      </div>
      <div>
      <Link to={{ pathname:"/Day1",
         Mintemp:this.state.mintemp,
         Maxtemp:this.state.maxtemp}}>
  <img src={this.state.day3desc} />
     
         </Link>
      
      {/* <Day1 weatherdata={this.state.data} day={this.state.day} /> */}
      </div>
      <div>
      <Link to={{ pathname:"/Day1",
         Mintemp:this.state.mintemp,
         Maxtemp:this.state.maxtemp}}>
  <img src={this.state.day4desc} />
     
         </Link>
        
      {/* <Day1 weatherdata={this.state.data} day={this.state.day} /> */}
      </div> 
      </nav>
      <Switch>
              <Route exact path="/Day0" component={Day1} />
              <Route exact path="/Day1" component={Day1} />
              <Route exact path="/Day2" component={Day1} />
              <Route exact path="/Day3" component={Day1} />
              <Route exact path="/Day4" component={Day1} />
              <Route exact path="/Day5" component={Day1} />
            </Switch>
      
      </Router>
    </div>
 
  
)}
  }
export default App;
