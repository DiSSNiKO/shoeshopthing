import ImagesDisplayForCloak from "./ImagesDisplayForCloak";

const CloakedImagesDisplay = (props) => {
    const isCloaked = props.isCloaked;
    const setIsCloaked = props.setIsCloaked;
    const {focusedThumbnailCloak, setFocusedThumbnailCloak} = props;
    let classname = `CloakedImageDisplay `;
    if (isCloaked) {
        classname += 'Cloaked';
    }
    return (
        <div className={classname} onClick={(e) => {
            if (e.target.classList.contains("CloakedImageDisplay")) {
                setIsCloaked(true);
            }
        }}>
            <ImagesDisplayForCloak focusedThumbnailCloak={focusedThumbnailCloak} setFocusedThumbnailCloak={setFocusedThumbnailCloak} isCloaked={isCloaked} setIsCloaked={setIsCloaked} focusedThumbnail={props.focusedThumbnail} setFocusedThumbnail={props.setFocusedThumbnail} />
        </div>

    );
}

export default CloakedImagesDisplay;