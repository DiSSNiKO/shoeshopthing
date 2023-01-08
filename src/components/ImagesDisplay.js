import { useEffect, useState } from "react";
import ThumbnailsCont from "./ThumbnailsCont"
const ImagesDisplay = (props) => {
    const { setIsCloaked } = props;
    const { focusedThumbnail, setFocusedThumbnail, setFocusedThumbnailCloak } = props;
    const [currentImg, setCurrentImg] = useState(`/images/image-product-${focusedThumbnail}.jpg`);
    useEffect(() => {
        setCurrentImg(`/images/image-product-${focusedThumbnail}.jpg`);
    }, [focusedThumbnail]);
    return (
        <div className="ImagesDisplay">
            <img src={currentImg} alt="" className="currentImageDisplayed clickableMainImage" onClick={() => {
                setIsCloaked(false);
            }} />
            <ThumbnailsCont setFocusedThumbnailCloak={setFocusedThumbnailCloak} focusedThumbnail={focusedThumbnail} setFocusedThumbnail={setFocusedThumbnail} />
        </div>
    );
}

export default ImagesDisplay;