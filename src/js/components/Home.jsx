import React, {useState, useEffect} from "react";
import TrafficLight from "./trafficlight";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[color, setColor] =useState(null);
	return (
		<div className="trafficLight">
			<div className="lightTop"></div>
			<div className="lightBottom">
			<div
          className={`light red ${color === "red" ? "selected" : ""}`}
          onClick={() => setColor("red")}
        ></div>
               <div
          className={`light yellow ${color === "yellow" ? "selected" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>
               <div 
          className={`light green ${color === "green" ? "selected" : ""}`}
          onClick={() => setColor("green")}
        ></div>

			</div>


		</div>
)};

export default Home;