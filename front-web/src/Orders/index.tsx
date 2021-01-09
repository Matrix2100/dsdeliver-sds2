import React from "react";
import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import StepsHeader from "./stepsHeader";

function Orders() {
    return (
        <div className="orders-container">
            <StepsHeader />
        </div>
    )
}

export default Orders;