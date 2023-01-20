import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Aboutus from './components/aboutus';
function App() {
 return (
  <BrowserRouter>
  <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
  </div>
  </BrowserRouter>
 );
}

export default App;