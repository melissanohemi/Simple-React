import React from "react";

export default function Counter(props){
    
    const number = props.number || 0 
    const places = number.toString().split("").reverse()
    console.log(places);

return  <div className="Container">
              <div className="Box"><h1><i className="fas fa-clock"></i></h1> </div>
              <div className="Box"><h1> {places.length > 5 ? places[5] : 0}</h1></div>
              <div className="Box"><h1> {places.length > 4 ? places[4] : 0}</h1></div>
              <div className="Box"><h1> {places.length > 3 ? places[3] : 0}</h1></div>
              <div className="Box"><h1> {places.length > 2 ? places[2] : 0 }</h1></div>
              <div className="Box"><h1> {places.length > 1 ? places[1] : 0 }</h1></div>
              <div className="Box"><h1> {places[0]}</h1> </div>

</div>
}
