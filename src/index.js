import React from 'react';
import ReactDom from 'react-dom';
import ReactPlayer from "react-player";
import './components/index.css';





function Roll() {
    return (
        <>
            <h1> Position, position and position </h1>
            <ReactPlayer url='https://fb.watch/k5blMm1Ac9/' />
        </>
    );

}

ReactDom.render(<Roll />, document.getElementById('root'));