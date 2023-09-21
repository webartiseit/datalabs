import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Home/>}/>
        {/* <Route path='/contact' element={<Home/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
