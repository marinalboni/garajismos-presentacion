import TitleContainer from "../TitleContainer/TitleContainer";
import'./AboutMe.css';

function AboutMe() {
    return (
        <div className="about-me">            
            <TitleContainer 
            title={"ABOUT ME"}
            textColor={'var(--main-color)'}
            />
            <div className="about-me-info">
                <img src="https://avatars.githubusercontent.com/u/42067593?v=4" alt="" />
                <ul>
                    <li>Nombre: Marina</li>
                    <li>Edad: 29</li>
                    <li>Fecha nacimiento: 10/05/1993</li>
                    <li>Signo: Tauro</li>
                    <li>Brasileña y Suiza</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutMe;