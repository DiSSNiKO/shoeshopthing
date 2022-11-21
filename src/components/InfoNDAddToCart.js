import { useState } from "react";

const InfoNDAddToCart = () => {
    const [amount, setAmount] = useState(0);
    const lowerAmount = () => {
        if (amount > 0) {
            setAmount((prev) => {
                return prev -= 1;
            });
        }
    }
    const increaseAmount = () => {
        setAmount((prev) => {
            return prev += 1;
        })
    }
    return (
        <div className="InfoAndCart">
            <h2 style={{ color: "hsl(26, 100%, 55%)" }} className="marginable">SNEAKER COMPANY</h2>
            <h1 className="sneakerName marginable">Fall Limited Edition Sneakers</h1>
            <p className="marginable">
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
            <h2 className="marginable oldprice">$250.00</h2>
            <div className="cartFunctionality marginable">
                <div className="amountCont">
                    <img src="/images/icon-minus.svg" id="minus" alt="" onClick={lowerAmount} />
                    <span className="amount">{amount}</span>
                    <img src="/images/icon-plus.svg" id="plus" alt="" onClick={increaseAmount} />
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