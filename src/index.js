import React from 'react';
import ReactDom from 'react-dom';
import ReactPlayer from "react-player";
import './components/index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Img from "./components/Img";





function Roll() {
    return (
        <>
            <Header />
            <Navbar />
            <Img />
            <ReactPlayer url='https://fb.watch/k5blMm1Ac9/' />
            <Footer />
        </>
    );

}

ReactDom.render(<Roll />, document.getElementById('root'));