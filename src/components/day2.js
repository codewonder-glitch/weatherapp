import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function Day2(props) {
let hourlyarr=[];
    for(let j=0;j<8;j++)
    {
      var time=this.props.weatherdata.list[j].dt_txt.split(" ")[1];
    var min=this.props.weatherdata.list[j].main.temp_min;
    var max=this.props.weatherdata.list[j].main.temp_max;
    let arrobj={
        Time:time,
        Min:min,
        Max:max
        
    }
    hourlyarr.push(arrobj);
 }
    return(
    
    <div>
        <ul>
                <li>
                  <Link to="/hour">{this.props.day}</Link>
                </li>
        </ul>
        <Switch>
        <Route path="/hour">
        <ul>
        { hourlyarr.map( (arrobj, id)=><li key={id}> Time: {arrobj.time} Hi: {arrobj.Min} Lo: {arrobj.Max} <br /></li>  )}
        
        </ul>
        </Route>
        
        </Switch>
        </div> 
          );
        }
        
        
    
