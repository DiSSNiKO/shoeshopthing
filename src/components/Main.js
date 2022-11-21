import { useState } from "react";
import ImagesDisplay from "./ImagesDisplay"
import InfoNDAddToCart from "./InfoNDAddToCart";

const Main = (props) => {
    const { isCloaked, setIsCloaked } = props;
    const { focusedThumbnail, setFocusedThumbnail } = props;
    return (
        <div className="Main">
            <ImagesDisplay isCloaked={isCloaked} setIsCloaked={setIsCloaked} focusedThumbnail={focusedThumbnail} setFocusedThumbnail={setFocusedThumbnail} />
            <InfoNDAddToCart />
        </div>
    );
}

export default Main;