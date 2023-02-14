import AboutMe from '../../components/AboutMe/AboutMe';
import './HomeView.css';

export default function HomeView() {
    return ( 
        <div className="homeview">
            <div className='home-bg-img'></div>
            <AboutMe />
        </div>
    );
}