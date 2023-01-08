import { useEffect, useState } from "react";
import ThumbnailsContCloak from "./ThumbnailsContCloak";
const ImagesDisplayForCloak = (props) => {
    const { isCloaked, setIsCloaked, focusedThumbnail, focusedThumbnailCloak, setFocusedThumbnailCloak } = props;
    const goLeft = () => {
        if(focusedThumbnailCloak>1){
            setFocusedThumbnailCloak(focusedThumbnailCloak-1);
        } else {
            setFocusedThumbnailCloak(4);
        }
    };
    const goRight = () => {
        if(focusedThumbnailCloak<4){
            setFocusedThumbnailCloak(focusedThumbnailCloak+1);
        } else {
            setFocusedThumbnailCloak(1);
        }
    };
    useEffect(() => {
        setFocusedThumbnailCloak(focusedThumbnail);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCloaked]);
    const [currentImg, setCurrentImg] = useState(`/images/image-product-${focusedThumbnailCloak}.jpg`);
    useEffect(() => {
        setCurrentImg(`/images/image-product-${focusedThumbnailCloak}.jpg`)
    }, [focusedThumbnailCloak]);
    return (
        <div className="ImagesDisplayCloaked">
            <img src={currentImg} alt="" className="currentImageDisplayed" />
            <button className="closeCloakDisplay" onClick={()=>{
                setIsCloaked(true);
            }}>x</button>
            <button className="toLeft" onClick={goLeft}>&lt;</button>
            <button className="toRight" onClick={goRight}>&gt;</button>
            <ThumbnailsContCloak focusedThumbnailCloak={focusedThumbnailCloak} setFocusedThumbnailCloak={setFocusedThumbnailCloak} />
        </div>
    );
}

export default ImagesDisplayForCloak;