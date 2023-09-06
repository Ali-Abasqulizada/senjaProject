import "./styles/cart.css";
import close from "./icons/x-mark.svg";
import trash from "./icons/trash.svg"
import { useEffect, useState } from "react";

export const Cart = ({ cart, setCart, handleChange }) => {

    useEffect(() => {
        if (cart.length === 0) return;
        localStorage.setItem("cart", JSON.stringify([...cart]));
    }, [cart])

    useEffect(() => {
        const carts = JSON.parse(localStorage.getItem("cart"));
        if (carts) {
            setCart(carts);
        }
    }, [setCart]);

    function closeCard() {
        let shopping = document.querySelector(".shopping");
        shopping.classList.remove("opened");
    };

    function handleRemove(id) {
        const arr = cart.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify([...arr]));
        setCart(arr);
    };

    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.forEach((item) => {
            ans += item.quantity * item.price;
        })
        setPrice(ans);
    }

    useEffect(() => {
        handlePrice();
    })

    return (
        <div className="shopping">
            <img onClick={closeCard} src={close} alt="x" className="x" />
            <div className="support"></div>
            <div className="shoppingList">
                {
                    cart.map((item) => {
                        return (
                            <div className="newDiv" key={item.id}>
                                <div className="newDivImage"><img src={item.image} alt="newDivImage" /></div>
                                <div className="newDivInformations">
                                    <p>${item.price}</p>
                                    <div className="numbers">
                                        <button onClick={() => handleChange(item, -1)}>-</button>
                                        <div class="count">{item.quantity}</div>
                                        <button onClick={() => handleChange(item, +1)}>+</button>
                                    </div>
                                    <img src={trash} alt="trash" className="remove" onClick={() => handleRemove(item.id)} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div class="total">Total:<pre> $ </pre>{price}</div>
        </div>
    )
}