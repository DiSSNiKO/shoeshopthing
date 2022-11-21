const InfoNDAddToCart = () => {
    return (
        <div className="InfoAndCart">
            <h2 style={{ color: "hsl(26, 100%, 55%)" }} className="marginable">SNEAKER COMPANY</h2>
            <h1 className="sneakerName marginable">Fall Limited Edition Sneakers</h1>
            <p>
                i sat here
                listening to the sound of rain
                thinking what had happened
                to me
                after all those years
                like many other people
                my life slips away
                without me caring
                BUT
                i grew sick of thinking
                it is time i made a change
                i yearn for a future attainable to those who smile
                lets sing
                OOOOOOOOHHH
                life is so beautiful
                hope breathes life into everything
                OOOOOOOOHHH
                let's forget what had passed
                and build a better future
            </p>
            <div className="newPriceInfo marginable">
                <h1>$125.00</h1>
                <h2>50%</h2>
            </div>
            <h2 className="marginable">$250</h2>
            <div className="cartFunctionality marginable">
                <div className="amountCont">
                    <img src="/images/icon-minus.svg" id="minus" alt="" />
                    <span className="amount">11</span>
                    <img src="/images/icon-plus.svg" id="plus" alt="" />
                </div>
                <button className="buyButton">
                    <img src="/images/icon-cart-checkout.svg" alt="" />
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    );
}

export default InfoNDAddToCart;