import './PhotosView.css';
import Photo from "../../components/Photo/Photo";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

function PhotosView() {
    return (
        <div className="photos-view">
            <TitleContainer 
            title={"FOTOS"}
            textColor={'var(--secondary-color)'}
            />
            <Photo />
        </div>
    );
}

export default PhotosView;