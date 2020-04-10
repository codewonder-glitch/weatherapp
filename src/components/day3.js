import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Day3(props) {
  console.log("-----Hello day 3")
    console.log(props.weatherdata);
    let hourlyarr=[];
    for(let j=15;j<=22;j++)
    {
      var time=props.weatherdata.list[j].dt_txt.split(" ")[1];
    var min=props.weatherdata.list[j].main.temp_min;
    var max=props.weatherdata.list[j].main.temp_max;
    let arrobj={
        Time:time,
        Min:min,
        Max:max
    }
    hourlyarr.push(arrobj);
 }
    return(
    
    <div>
      { hourlyarr.map( (arrobj, id)=><li key={id}> Time: {arrobj.Time} Lo: {arrobj.Min} Hi: {arrobj.Max} <br /></li>  )} 
         
    </div> 
          );
        }
        
        
    
