import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function Day1(props) {
    console.log(props.day);
    //console.log(props.weatherdata.list[1].main.temp_min);

// let hourlyarr=[];
//     for(let j=0;j<6;j++)
//     {
      
//      var time=props.weatherdata.list[j].dt_txt.split('')[1];
//     var min=props.weatherdata.list[j].main.temp_min;
//     var max=props.weatherdata.list[j].main.temp_max;
//     let arrobj={
//         Time:time,
//         Min:min,
//         Max:max
        
//     }

//     hourlyarr.push(arrobj);
//   }
    return(
    
    <div>
        <ul>
                <li>
                  <Link to="/hour">{props.day}</Link>
                </li>
        </ul>
        <Switch>
        <Route path="/hour">
        <ul>
         {/* { hourlyarr.map( (arrobj, id)=><li key={id}> Time: {arrobj.time} Hi: {arrobj.Min} Lo: {arrobj.Max} <br /></li>  )} */}
         
        </ul>
        </Route>
        
        </Switch>
        </div> 
          );
        }
        
        
    