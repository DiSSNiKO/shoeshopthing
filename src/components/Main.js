import ImagesDisplay from "./ImagesDisplay"
import InfoNDAddToCart from "./InfoNDAddToCart";

const Main = (props) => {
    const { isCloaked, setIsCloaked } = props;
    const { focusedThumbnail, setFocusedThumbnail, setFocusedThumbnailCloak } = props;
    
    return (
        <div className="Main">
            <ImagesDisplay setFocusedThumbnailCloak={setFocusedThumbnailCloak} isCloaked={isCloaked} setIsCloaked={setIsCloaked} focusedThumbnail={focusedThumbnail} setFocusedThumbnail={setFocusedThumbnail} />
            <InfoNDAddToCart />
        </div>
    );
}

export default Main;