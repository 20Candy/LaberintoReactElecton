import React from 'react';
import { hot } from "react-hot-loader/root";

function Maze({maze}) {
    console.log("Here")

    return(
        <div className='container'> 
        {maze.map(temp =>(
            <p>{temp}</p>
        ))}
        </div>
    )
}

export default hot(Maze);

