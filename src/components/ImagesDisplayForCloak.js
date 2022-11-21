import { useEffect, useState } from "react";
import ThumbnailsContCloak from "./ThumbnailsContCloak";
const ImagesDisplayForCloak = (props) => {
    const { isCloaked, focusedThumbnail, setFocusedThumbnail } = props;
    const [focusedThumbnailCloak, setFocusedThumbnailCloak] = useState(1);
    useEffect(() => {
        setFocusedThumbnailCloak(focusedThumbnail)
    }, [isCloaked]);
    const [currentImg, setCurrentImg] = useState(`/images/image-product-${focusedThumbnailCloak}.jpg`);
    useEffect(() => {
        setCurrentImg(`/images/image-product-${focusedThumbnailCloak}.jpg`)
    }, [focusedThumbnailCloak]);
    return (
        <div className="ImagesDisplayCloaked">
            <img src={currentImg} alt="" className="currentImageDisplayed" />
            <ThumbnailsContCloak focusedThumbnailCloak={focusedThumbnailCloak} setFocusedThumbnailCloak={setFocusedThumbnailCloak} />
        </div>
    );
}

export default ImagesDisplayForCloak;