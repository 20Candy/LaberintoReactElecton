import React from 'react';
import image_src from "/src/images/ori.gif";
import image_src2 from "/src/images/back.png";


function Spinner(){

    return (
        <div className="App" style={{backgroundImage:  `url(${image_src2})`}}>
            <h1 className='loader'  style={{backgroundImage:  `url(${image_src})`}} > Loading the adventure...</h1>
        </div>


    );

}

export default Spinner;