
import ThumbnailsCont from "./ThumbnailsCont"
const ImagesDisplay = (props) => {
    const { setIsCloaked } = props;
    const { focusedThumbnail, setFocusedThumbnail, setFocusedThumbnailCloak } = props;
    
    return (
        <div className="ImagesDisplay">
            <img src={`/images/image-product-${focusedThumbnail}.jpg`} alt="" className="currentImageDisplayed clickableMainImage" onClick={() => {
                setIsCloaked(false);
            }} />
            <ThumbnailsCont setFocusedThumbnailCloak={setFocusedThumbnailCloak} focusedThumbnail={focusedThumbnail} setFocusedThumbnail={setFocusedThumbnail} />
        </div>
    );
}

export default ImagesDisplay;