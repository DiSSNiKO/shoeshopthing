import { useEffect, useState } from "react";

const ThumbnailsContCloak = (props) => {
    const focusedThumbnailCloak = props.focusedThumbnailCloak;
    const setFocusedThumbnailCloak = props.setFocusedThumbnailCloak;
    useEffect(() => {
        const buttons = document.querySelectorAll(".ThumbnailsCont")[1].childNodes;
        buttons.forEach((but) => {
            but.classList.remove("ThumbIsClicked");
        })
        buttons.forEach((but) => {
            if (Number(but.id[3]) === focusedThumbnailCloak) {
                but.classList.add('ThumbIsClicked');
            }
        });
    }, [focusedThumbnailCloak]);

    const handleClick = (e) => {
        const eTarget = e.target;
        setFocusedThumbnailCloak(Number(eTarget.id[3]));
    }

    return (
        <div className="ThumbnailsCont">
            <img src="/images/image-product-1-thumbnail.jpg" id='thb1' alt="" onClick={(e) => { handleClick(e) }} />
            <img src="/images/image-product-2-thumbnail.jpg" id='thb2' alt="" onClick={(e) => { handleClick(e) }} />
            <img src="/images/image-product-3-thumbnail.jpg" id='thb3' alt="" onClick={(e) => { handleClick(e) }} />
            <img src="/images/image-product-4-thumbnail.jpg" id='thb4' alt="" onClick={(e) => { handleClick(e) }} />
        </div>
    );
}

export default ThumbnailsContCloak;