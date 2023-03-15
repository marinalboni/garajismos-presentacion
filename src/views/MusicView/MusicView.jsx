import './MusicView.css';
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import { Spotify } from 'react-spotify-embed';  

function MusicView() {
    return (
        <div className="music-view">
            <TitleContainer 
            title={"MUSICA"}
            textColor={'var(--secondary-color)'}
            />
            <div className='flex'>
                <Spotify link="https://open.spotify.com/playlist/57VZYdwkphMScRi4QynrU9?si=2cd8606805b64de0" />
            </div>
        </div>
    );
}

export default MusicView;