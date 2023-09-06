import info from "./icons/info.svg";

export const Cards = ({product, handleClick, openDescription, closeDescription}) => {
    const {image, title, price, category, description} = product

    return (
        <div className="card">
            <div className="imageContainer">
                <img src={image} alt="product" className="cardImage" />
            </div>
            <div className="textContainer">
                <h2 className="title">{title}</h2>
                <p className="price"><b>Price: </b>${price}</p>
                <p className="category"><b>Category: </b>{category}</p>
                <p className="description"><b>Description: </b><img src={info} alt="info" className="info" onClick={() => openDescription(product)}/></p>
                <div className="visibleDescription" id = {product.id}>
                    <b>Description: </b>
                    <p>{description}</p>
                    <button className="visibleDescriptionClose" onClick={() => closeDescription(product)}>Close</button>
                </div>
                <p className="rate"><b>Rating: </b><span>{product.rating.rate}</span>/5</p>
                <button className="buy" onClick={() => handleClick(product)}>Add</button>
            </div>
        </div>
    )
}