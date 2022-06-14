const Item = () => {
    return (
        <div>
            <div className="left">
                Image
            </div>
            <div className="right">
                <h1>Brand</h1>
                <h2>Name</h2>
                <form>
                    <label htmlFor="size">Size: </label>
                    <input type="checkbox" name="size" id="size" />
                    <label htmlFor="color">Color: </label>
                    <input type="checkbox" name="color" id="color" />
                </form>
                <p className="price">Price: </p>
                <button type="submit">Add to cart</button>
                <p>Description</p>
            </div>
        </div>
    )
}

export default Item;