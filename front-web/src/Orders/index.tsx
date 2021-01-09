import React, { useEffect } from "react";
import './styles.css';
import StepsHeader from "./stepsHeader";
import ProductsList from "./productsList";
import { useState } from "react";
import { OrderLocationData, Product } from "./types";
import { fetchProducts } from "../api";
import OrderLocation from "./orderLocation";

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const[orderLocation, setOrderLocation] = useState<OrderLocationData>();

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </div>
    )
}

export default Orders;