import TitleContainer from "../TitleContainer/TitleContainer";
import'./Family.css';
import pai from '../../assets/images/pai.jpeg';
import mae from '../../assets/images/mae.jpeg';
import gato1 from '../../assets/images/gato1.jpeg';
import gato2 from '../../assets/images/gato2.jpeg';
import amanda from '../../assets/images/amanda.jpeg';

function Family() {
    return (
        <div className="family">            
            <TitleContainer 
            title="MY FAMILY"
            textColor='var(--secondary-color)'
            />
            <div className="family-info">
                <div className="family-card">
                    <h3>Amanda</h3>
                    <p>Novia</p>
                    <div className="family-img-container" style={{'backgroundImage': `url(${amanda})`}}>
                    </div>
                </div>
                <div className="family-card">
                    <h3>Luciana</h3>
                    <p>Madre</p>
                    <div className="family-img-container" style={{'backgroundImage': `url(${mae})`}}>
                    </div>
                </div>
                <div className="family-card">
                    <h3>Alexander</h3>
                    <p>Padre</p>
                    <div className="family-img-container" style={{'backgroundImage': `url(${pai})`}}>
                    </div>
                </div>
            </div>
            <div className="family-info">
                <div className="family-card">
                    <h3>Falavel</h3>
                    <p>Gato #1</p>
                    <div className="family-img-container" style={{'backgroundImage': `url(${gato1})`}}>
                    </div>
                </div>
                <div className="family-card">
                    <h3>Bagheera</h3>
                    <p>Gato #2</p>
                    <div className="family-img-container" style={{'backgroundImage': `url(${gato2})`}}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Family;