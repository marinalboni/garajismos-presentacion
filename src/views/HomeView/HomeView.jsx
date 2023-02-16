import AboutMe from '../../components/AboutMe/AboutMe';
import Family from '../../components/Family/Family';
import QA from '../../components/QA/QA';
import './HomeView.css';

export default function HomeView() {
    return ( 
        <div className="home-view">
            <div className='home-bg-img'></div>
            <AboutMe />
            <Family />
            <QA />
        </div>
    );
}