import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Acasa from './components/pages/acasa/Acasa'
import Istorie from './components/pages/istorie/Istorie'
import Imagini from './components/pages/imagini/Imagini'
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Acasa/>}/>
          <Route path='/Istorie' element={<Istorie/>}/>
          <Route path='/Imagini' element={<Imagini/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
