const Navbar = (props) => {
    const {cartItemObjects, setCartItemObjects, setNumOfItems, numOfItems} = props;
    function handleTheHell(e) {
        let newArray = [];
        let itemsRemoved = 0;
        cartItemObjects.forEach((elem, i)=>{
            if(i!==Number(e.target.dataset.delIndex)){
                newArray.push(elem);
            } else {
                itemsRemoved = elem.amount;
            }
            setCartItemObjects(newArray);
            itemsRemoved>0 && setNumOfItems(numOfItems - itemsRemoved);
        });
    }
    return (
        <header className="navbar">
            <div className={`cart carted ${props.cartOpen ? "":"hideCart"}`}>
                <h3 className={`carted ${props.cartOpen ? "":"hideCartContent"}`}>Cart</h3>
                <div className={`cartContent carted ${props.cartOpen ? "":"hideCartContent"}`}>
                    {props.numOfItems === 0 && <div className="carted emptyCartAlert">Your cart is empty.</div>}
                    {
                        props.numOfItems>0 ? cartItemObjects.map((objekt, indx)=>{
                            return (
                                <div key={indx} className="cartItem carted">
                                    <img className="carted cartItemImage" src="/images/image-product-1-thumbnail.jpg" alt="" />
                                    <div className="titleAndPrice carted">
                                        <div className="carted">Fall Limited Edition Sneakers</div>
                                        <div className="carted">$125.00 x {objekt.amount} <strong>{objekt.totalPrice}</strong></div>
                                    </div>
                                    <img className="deleteCartItem carted" data-del-index={indx} src="/images/icon-delete.svg" alt="" onClick={(e)=> handleTheHell(e)}/>
                                </div>
                            )
                        })
                        :
                        null
                    }
                </div>
                <button className={`${props.cartOpen ? "":"hideCartContent"} ${numOfItems>0 ? "":"nodisplay"}`} id="uselessCheckoutButton">Checkout</button>
            </div>
            <div style={{ display: "flex" }}>
                <img src="/images/logo.svg" alt="" className="logosvg" />
                <div className="navButtons">
                    <a href="https://www.youtube.com/watch?v=mMaBVfIedFw">Collections</a>
                    <a href="https://www.youtube.com/watch?v=mMaBVfIedFw">Men</a>
                    <a href="https://www.youtube.com/watch?v=mMaBVfIedFw">Women</a>
                    <a href="https://www.youtube.com/watch?v=mMaBVfIedFw">About</a>
                    <a href="https://www.youtube.com/watch?v=mMaBVfIedFw">Contact</a>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="cartButton">
                    <img src="/images/icon-cart.svg" alt="" className="cartLogo" onClick={(e)=>{
                        if(props.cartOpen){
                            props.setCartOpen(false);
                            e.target.style.border = '2px solid white';
                        } else {
                            props.setCartOpen(true);
                            e.target.style.border = '2px solid lime';
                        }
                    }}/>
                    <div className={`cartItemCounter ${props.numOfItems>0 ? "":"hideCartContent"}`}>{props.numOfItems}</div>
                </div>
                <img src="/images/based.jpg" alt="" className="avatar" />
            </div>
        </header>
    );
}

export default Navbar;