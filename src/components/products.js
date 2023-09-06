import "./styles/products.css";
import { useState, useEffect } from "react";
import { Cards } from "./cards";

export const Products = ({ handleClick }) => {
    const [products, setProducts] = useState([]);

    function getData() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
            })
    }

    useEffect(() => {
        let navbar = document.querySelector(".navbar");
        navbar.classList.add("visible");
        getData();
    }, [])

    const openDescription = (item) => {
        let visibleDescription = document.querySelectorAll(".visibleDescription");
        visibleDescription.forEach((description) => {
            if (description.id == item.id) {
                description.style.display = "block";
            }
        })
    }
    const closeDescription = (item) => {
        let visibleDescription = document.querySelectorAll(".visibleDescription");
        visibleDescription.forEach((description) => {
            if (description.id == item.id) {
                description.style.display = "none";
            }
        })
    }

    return (
        <div className="products">
            <div className="container">
                {
                    products.map((product) => {
                        return (
                            <Cards product={product} key={product.id} handleClick={handleClick} openDescription={openDescription} closeDescription={closeDescription} />
                        )
                    })
                }
            </div>
        </div>
    )
}