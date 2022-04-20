import React, { useState, useEffect } from 'react';
import { hot } from "react-hot-loader/root";
import Page from './page';
import Movements from './movements';
import Spinner from "./spinner";
import "./css/App.css";
import image_src from "/src/images/back.png";


function App(){


	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(false);
  
	useEffect(() => {
	  if (loading) {
		setTimeout(() => {
		  setLoading(false);
		}, 2000);
	  }
	}, [loading]);
  
	const Handeler = () => {
	  setLoading(!loading);
	  setTimeout(() => {
		setLoading(!loading);
		setShow(!show);
	  }, 2000);
	};
 		
	const [maze, setMaze] = useState<string[]>([])
	const [wTemp, setWtemp] = useState<number>(5);
	const [hTemp, setHtemp] = useState<number>(5);

	const handleWidth = event => {
        setWtemp(event.target.value);  
    };

    const handleHeight = event => {
        setHtemp(event.target.value);  
    };

	const getMaze = () => {

		let array : string[] = []

		fetch("https://maze.juanelcaballo.club/?type=json&w="+wTemp+"&h="+hTemp).then(response => {
		return response.json();

		}).then(responseInJSON => {
		
			responseInJSON.map(obj1 => {
			let objeto = "";
			obj1.forEach(i => {
				if (i == " ") {
					objeto = objeto + " ";
				} else {
					objeto = objeto + i;
				}
			});

			array.push(objeto)
			});

			setMaze(array)

		});

		
	}

	useEffect(() =>{
		document.onkeydown = (e) => {
			e = e || window.event;
			let Newmaze = Movements(maze, e.key)
			setMaze([...Newmaze])
		}
	
	});

	if (loading) return <Spinner />;

	return(
        <div className="App" style={{backgroundImage:  `url(${image_src})`}}>
            <div className="bottom">
				{!show && <button className ="start"onClick={Handeler}>Start Game</button>}
        		{show && 
					<div className="App">
						<h1>Ori's Maze</h1>
						<input placeholder="Ancho" onChange={handleWidth}/>
            			<input placeholder="Largo" onChange={handleHeight}/>

						<button onClick={getMaze}>New Game</button>

						<Page maze={maze}/>  
	
					</div>

				}

            </div>
           
        </div> 
    

    )

}

 
export default hot(App);