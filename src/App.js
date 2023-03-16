import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomeView from './views/HomeView/HomeView';
import HistoryView from './views/HistoryView/HistoryView';
import PhotosView from './views/PhotosView/PhotosView';
import MusicView from './views/MusicView/MusicView';
import HobbiesView from './views/HobbiesView/HobbiesView';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/history" element={<HistoryView />} />
        <Route path="/photos" element={<PhotosView />} />
        <Route path="/music" element={<MusicView />} />
        <Route path="/hobbies" element={<HobbiesView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
