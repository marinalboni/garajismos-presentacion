import './Hobbie.css'

function Hobbie({ img, title, video }) {
    return (
        <div className="hobbie">
            <h3>{ title }</h3>
            <div>
                {
                    img ? 
                    <img src={ img } alt={ title } className="hobbie-img" />
                    :
                    <video controls className="hobbie-img">
                        <source src={ video } type="video/mp4"></source>
                    </video>
                }
            </div>
        </div>
    );
}

export default Hobbie;