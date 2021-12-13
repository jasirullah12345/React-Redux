import React from 'react';
import {Link, useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

const Navbar = (props) => {
    let location = useLocation().pathname;
    const amount = useSelector(state => state.amount);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.text}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                            <li className="nav-item">
                                <Link className={`nav-link ${location === "/" ? "active" : ""}`} aria-current="page"
                                      to="/">Home</Link>
                            </li>}
                            {
                            <li className="nav-item">
                                <Link className={`nav-link ${location === "/about" ? "active" : ""}`}
                                      to="/about">About</Link>
                            </li>}
                        </ul>
                        <div>
                            <button className="btn btn-primary pe-none">Balance: {amount}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
Navbar.propTypes = {
    text: PropTypes.string
}
Navbar.defaultProps = {
    text: 'Navbar'
}
export default Navbar;
