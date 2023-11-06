import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "@fontsource/roboto"; 
import './App.css';
import {Dashboard} from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </Router>    
  );
}

export default App;
