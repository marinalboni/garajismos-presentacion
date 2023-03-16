import './HobbiesView.css';
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import Hobbie from '../../components/Hobbie/Hobbie';
import tattoo from '../../assets/images/tattoo.mp4';
import juegos from '../../assets/images/jogos.jpg';
import acuarela from '../../assets/images/aquarela.jpeg';
import ukulele from '../../assets/images/ukulele.jpeg';
import casa from '../../assets/images/casa.jpeg';
import comida from '../../assets/images/comida.jpeg';
import cerveza from '../../assets/images/cerveza.jpeg';
import meme from '../../assets/images/meme.jpeg';

function HobbiesView() {
    return (
        <div className="hobbies-view">
            <TitleContainer 
            title={"HOBBIES"}
            textColor={'var(--secondary-color)'}
            />
            <div className='hobbies-flex'>
                <Hobbie 
                title="Cocinar"
                img={ comida }
                />
                <Hobbie 
                title="Pintar acuarela"
                img={ acuarela }
                />
                <Hobbie 
                title="Trabajar en la casa"
                img={ casa }
                />
                <Hobbie 
                title="Juegos de mesa"
                img={ juegos }
                />
                <Hobbie 
                title="Memes"
                img={ meme }
                />
                <Hobbie 
                title="Tocar ukulele"
                img={ ukulele }
                />
                <Hobbie 
                title="Cervezas"
                img={ cerveza }
                />
                <Hobbie 
                title="Hacer tattoos"
                video={ tattoo }
                />
            </div>
        </div>
    );
}

export default HobbiesView;