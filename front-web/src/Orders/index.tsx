import React, { useEffect } from "react";
import './styles.css';
import StepsHeader from "./stepsHeader";
import ProductsList from "./productsList";
import { useState } from "react";
import { Product } from "./types";
import { fetchProducts } from "../api";

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    console.log(products)

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />
        </div>
    )
}

export default Orders;