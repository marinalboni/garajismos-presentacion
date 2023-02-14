import './TitleContainer.css';

function TitleContainer({ title }) {
    return (
        <div class="title-container">
            <p class="target">{ title }</p>
        </div>
    );
}

export default TitleContainer;