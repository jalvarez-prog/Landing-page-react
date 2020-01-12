import React from 'react';
import Navbar from './../components/navbar';
import Encabezado from './../components/tarjeta';

const Home = (props) => {
    return (
        <>
        <Navbar />
        <Encabezado />
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <i className="fab fa-html5 fa-5x"></i>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <p className="text-success">Welcome to Webpack, Bootstrap and ReactJS</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
