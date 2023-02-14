import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomeView from './views/HomeView/HomeView';
import HistoryView from './views/HistoryView/HistoryView';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/history" element={<HistoryView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
