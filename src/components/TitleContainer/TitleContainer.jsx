import './TitleContainer.css';

function TitleContainer({ title, borderColor, bgColor, textColor }) {
    const textStyle = {
        'color': `${textColor}`
    };

    return (
        <div className="title-container">
            <p style={textStyle} className="target">{ title }</p>
        </div>
    );
}

export default TitleContainer;