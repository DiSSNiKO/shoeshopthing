import ImagesDisplay from "./ImagesDisplay"
import InfoNDAddToCart from "./InfoNDAddToCart";

const Main = (props) => {
    const { isCloaked, setIsCloaked } = props;
    const { focusedThumbnail, setFocusedThumbnail, setFocusedThumbnailCloak, numOfItems, setNumOfItems, cartItemObjects, setCartItemObjects } = props;
    
    return (
        <div className="Main">
            <ImagesDisplay setFocusedThumbnailCloak={setFocusedThumbnailCloak} isCloaked={isCloaked} 
            setIsCloaked={setIsCloaked} focusedThumbnail={focusedThumbnail} 
            setFocusedThumbnail={setFocusedThumbnail} />
            <InfoNDAddToCart numOfItems={numOfItems} setNumOfItems={setNumOfItems} cartItemObjects={cartItemObjects} setCartItemObjects={setCartItemObjects}/>
        </div>
    );
}

export default Main;