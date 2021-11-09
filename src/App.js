import React from 'react';
import Home from "./Components/Home";
import {Route, Routes} from "react-router-dom";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
    return (
        <>
            <Navbar/>
            <div className="container pt-3">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </>
    );
};

export default App;
