import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Day4(props) {
  console.log("-----Hello day4")
    console.log(props.weatherdata);
    let hourlyarr=[];
    for(let j=24;j<=32;j++)
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
    
      <div className="rendertimetemp">
     
     { hourlyarr.map( (arrobj, id)=><li key={id}> Time: {arrobj.Time} Lo: {arrobj.Min} Hi: {arrobj.Max} <br /></li>  )} 
         
    </div> 
          );
        }