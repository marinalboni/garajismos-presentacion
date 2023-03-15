import TitleContainer from "../TitleContainer/TitleContainer";
import'./EarlyLife.css';

function EarlyLife() {
    return (
        <div className="early-life">            
            <TitleContainer 
            title="LIFE"
            textColor='var(--white)'
            />
            <div className="early-life-info">
                <div className="early-life-div">
                    <h5 className="hr-lines-after">1993</h5>
                    <p>Nacida el 10 de Mayo en Curitiba, Brasil</p>
                </div>
                <div className="early-life-div">
                    <h5 className="hr-lines-after">2000</h5>
                    <p>Se mudó a Recife con su família por el trabajo de su papá</p>
                </div>
                <div className="early-life-div">
                    <h5 className="hr-lines-after">2001</h5>
                    <p>Vuelve a Curitiba, por donde se queda más 5 años.</p>
                </div>
                <div className="early-life-div">
                    <h5 className="hr-lines-after">2006</h5>
                    <p>Se muda para Balneário Camboriú.</p>
                </div>
                <div className="early-life-div">
                    <h5 className="hr-lines-after">2009/2012</h5>
                    <p>Intercambios en EEUU - el primero en Myrtle Beach, y el segundo en Tahoe City.</p>
                </div>
                <div className="early-life-div">
                    <h5 className="hr-lines-after">2017</h5>
                    <p>Se muda a Buenos Aires con sus padres.</p>
                </div>
                <div className="early-life-div">
                    <h5 className="hr-lines-after">2018</h5>
                    <p>Se muda a Madrid, donde sigue viviendo hasta el momento.</p>
                </div>
            </div>
        </div>
    );
}

export default EarlyLife;