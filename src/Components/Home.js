import React from 'react';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {amountAction} from "../Store/Actions/Actions"

const Home = () => {
    const dispatch = useDispatch();
    const {withdrawMoney, depositMoney} = bindActionCreators(amountAction, dispatch);
    return (
        <>
            <div className="text-center">
                <h3>Adidas Shoes</h3>
                <button className="btn btn-primary mx-5" onClick={() => {
                    withdrawMoney(200)
                }}> -
                </button>
                Add to Cart (Rs-200)
                <button className="btn btn-primary mx-5" onClick={() => {
                    depositMoney(200)
                }}>+</button>
            </div>
        </>
    );
};

export default Home;
