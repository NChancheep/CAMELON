import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Aboutus from './components/aboutus';
import CrimeMap from './components/crimeMap/crimeMap';
function App() {
 return (
  <BrowserRouter>
  <div>
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/crimemap" element={<CrimeMap />} />
      </Routes>
  </div>
  </BrowserRouter>
 );
}

export default App;