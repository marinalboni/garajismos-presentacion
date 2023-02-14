import './TitleContainer.css';

function TitleContainer({ title, borderColor, bgColor, textColor }) {
    const textStyle = {
        'color': `${textColor}`
    };

    return (
        <div class="title-container">
            <p style={textStyle} class="target">{ title }</p>
        </div>
    );
}

export default TitleContainer;