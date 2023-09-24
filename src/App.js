import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home'
import DataIntegration from './pages/data-integration'
import Etl from './pages/etl'
import Datawerehousing from './pages/data-werehousing'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/about' element={<About/>}/> */}
        <Route path='/data-inegration' element={<DataIntegration/>}/>
        <Route path='/etl' element={<Etl/>}/>
        <Route path='/data-werehousing' element={<Datawerehousing/>}/>
        {/* <Route path='/big-data-processing' element={<BigDataProcessing/>}/>
        <Route path='/data-pipeline-development' element={<DataPipelineDevelopment/>}/>
        <Route path='/data-governance' element={<DataGovernance/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
