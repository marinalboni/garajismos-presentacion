import Map from "../Map/Map";
import TitleContainer from "../TitleContainer/TitleContainer";
import'./MapSection.css';

function MapSection() {
    const myCities = [
        {
            address: 'Curitiba',
            lat: -25.451414,
            lng: -49.283618
        },
        {
            address: 'Balneário Camboriu',
            lat: -26.992398,
            lng: -48.633810
        },
        {
            address: 'Recife',
            lat: -8.175865,
            lng: -34.921374
        },
        {
            address: 'Tahoe City',
            lat: 39.166300,
            lng: -120.146585
        },
        {
            address: 'Myrtle Beach',
            lat: 33.713151,
            lng: -78.872695
        },
        {
            address: 'Madrid',
            lat: 40.408300,
            lng: -3.699980
        },
        {
            address: 'Buenos Aires',
            lat: -34.477173,
            lng: -58.522105
        }
    ]

    return (
        <div className="map-section">            
            <TitleContainer 
            title="MAP"
            textColor='var(--main-color)'
            />
            <div className="map-section-info">
                <Map 
                arrayOfCities = {myCities}
                />
            </div>
        </div>
    );
}

export default MapSection;