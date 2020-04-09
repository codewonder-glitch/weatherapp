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
    data1:[],
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
    datearr:[]
    
}

  }
  
  today(dt) {
    var n;
    var date = new Date(dt);
    console.log(dt);
    var wkday=date.getDay()
    var weekday = new Array(7);
    var newStateArray=[]
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
     n = weekday[wkday];
console.log("wkday is",wkday)
if(this.state.datearr!==undefined)
      newStateArray = this.state.datearr.slice();
newStateArray.push(n);
this.setState({datearr: newStateArray});
    
    console.log(this.state.datearr)
  }
  componentDidMount(){
    
    this.getData();
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
   

   async getData(){
   
      const res=await axios.get("https://api.openweathermap.org/data/2.5/forecast?q=irving&appid="+Apikey+"&unit=metric").
 then(res=>{
   this.setState({mintemp:res.data.list[0].main.temp_min,
   maxtemp:res.data.list[0].main.temp_max,
  data1:res.data,
   description:this.findimg(res.data.list[0].weather[0].main),
   day1min:res.data.list[7].main.temp_min,
   day1max:res.data.list[7].main.temp_max,
   day1desc:this.findimg(res.data.list[7].weather[0].main),
   day2min:res.data.list[15].main.temp_min,
   day2max:res.data.list[15].main.temp_max,
   day2desc:this.findimg(res.data.list[15].weather[0].main),
   day3min:res.data.list[23].main.temp_min,
   day3max:res.data.list[23].main.temp_max,
   day3desc:this.findimg(res.data.list[23].weather[0].main),
   day4min:res.data.list[31].main.temp_min,
   day4max:res.data.list[31].main.temp_max,
   day4desc:this.findimg(res.data.list[31].weather[0].main)
   })
   this.today(res.data.list[0].dt_txt.split(' ')[0]);
   this.today(res.data.list[7].dt_txt.split(' ')[0])
   this.today(res.data.list[15].dt_txt.split(' ')[0])
   this.today(res.data.list[23].dt_txt.split(' ')[0])
   this.today(res.data.list[31].dt_txt.split(' ')[0])

   console.log("State Variable data1 is",this.state.data1)
 }).catch(function (error) {
   console.log(error);
 });
 

 
 
   

   }
  

  
  render(){
     


return (
  
     <div>
       <Router>
       <div id="container">
            
          
         
<div>
          <Link to={{pathname:"/Day1"}}>
          <p>{this.state.datearr[0]}</p>
        <img src={this.state.description}  />
<p>{this.state.mintemp}/{this.state.maxtemp}</p>
         </Link>
     
 </div>
 <div>
    
      <Link to={{ pathname:"/Day1"}}>
      <p>{this.state.datearr[1]}</p>
        <img src={this.state.description}  />
<p>{this.state.mintemp}/{this.state.maxtemp}</p>
     
         </Link>
         </div>
 <div>
    
      
      <Link to={{ pathname:"/Day1"}}>
      <p>{this.state.datearr[2]}</p>
  <img src={this.state.day2desc} />
  <p>{this.state.mintemp}/{this.state.maxtemp}</p>
     
         </Link>
         </div>
 <div>
    
     
      <Link to={{ pathname:"/Day1"}}>
      <p>{this.state.datearr[3]}</p>
  <img src={this.state.day3desc} />
  <p>{this.state.mintemp}/{this.state.maxtemp}</p>
     
         </Link>
         </div>
 <div>
    
      
     
      <Link to={{ pathname:"/Day1"}}>
      <p>{this.state.datearr[4]}</p>
  <img src={this.state.day4desc} />
  <p>{this.state.mintemp}/{this.state.maxtemp}</p>
     
         </Link>
        
         </div>
 
    </div>
    
      
      <Switch>
              <Route exact path="/Day0"><Day1 weatherdata={this.state.data1} date={this.state.date}/></Route> 
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
