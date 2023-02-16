import TitleContainer from "../TitleContainer/TitleContainer";
import'./QA.css';

function QA() {
    return (
        <div className="qa">            
            <TitleContainer 
            title={"Q&A"}
            textColor={'var(--secondary-color)'}
            />
            <div className="qa-info">
               <div className="qa-divs">
                <div className="qa-div">
                    <h3 className="qa-number">1</h3>
                    <div>
                        <h3>¿TEAM GATOS O TEAM PERROS?</h3>
                        <p>Pues la verdad TEAM GATOS, y no menos importante también TEAM PERROS. Ya tenemos que decidir muchas cosas en la vida, pero esta decisión no la voy a tomar!</p>
                    </div>
                </div>
                <div className="qa-div">
                    <h3 className="qa-number">2</h3>
                    <div>
                        <h3>¿QUÉ ES CORRECTO: ARROZ SOBRE FRIJOLES O FRIJOLES SOBRE EL ARROZ?</h3>
                        <p>Frijoles sobre arroz siempre. Sin dudas. El caldo de los frijoles tiene que contenerlo el arroz.</p>
                    </div>
                </div>
                <div className="qa-div">
                    <h3 className="qa-number">3</h3>
                    <div>
                        <h3>¿TORTILLA CON O SIN CEBOLLA?</h3>
                        <p>100% concebollista. Pero para todo, no solo para las tortillas.</p>
                    </div>
                </div>           
                <div className="qa-div">
                    <h3 className="qa-number">4</h3>
                    <div>
                        <h3>SI PUDIERA ELEGIR UN SUPERPODER, ¿CUAL SERÍA?</h3>
                        <p>Esta para mi, es una de las preguntas más faciles de contestar. Siempre he soñado en poder volar. De vez en cuando, me despierto y recuerdo que estaba soñando que volaba. Molaría mazooooo.</p>
                    </div>
                </div>           
                <div className="qa-div">
                    <h3 className="qa-number">5</h3>
                    <div>
                        <h3>¿PLAYA O MONTAÑA?</h3>
                        <p>Playa. Siento que solo con ver el mar, me siento mejor. Me encanta poder pasar el día en la playa. Si estoy con amigos, mejor aún. </p>
                    </div>
                </div>           
               </div>
            </div>
        </div>
    );
}

export default QA;