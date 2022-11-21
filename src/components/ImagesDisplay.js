import { useEffect, useState } from "react";
import ThumbnailsCont from "./ThumbnailsCont"
const ImagesDisplay = () => {
    const [focusedThumbnail, setFocusedThumbnail] = useState(1);
    const [currentImg, setCurrentImg] = useState(`/images/image-product-${focusedThumbnail}.jpg`);
    useEffect(() => {
        setCurrentImg(`/images/image-product-${focusedThumbnail}.jpg`)
    }, [focusedThumbnail]);
    return (
        <div className="ImagesDisplay">
            <img src={currentImg} alt="" className="currentImageDisplayed" />
            <ThumbnailsCont focusedThumbnail={focusedThumbnail} setFocusedThumbnail={setFocusedThumbnail} />
        </div>
    );
}

export default ImagesDisplay;