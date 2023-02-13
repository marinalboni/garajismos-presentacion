import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </div>
  );
}

export default App;
