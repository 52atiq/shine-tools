import './App.css';

import {Route, Routes} from 'react-router-dom'
import Navbar from './pages/shared/Navbar';
import Login from './pages/login/Login';


function App() {
  return (
    <div>
   <Navbar></Navbar>
      <Routes>
        {/* <Route path='' element={Home}></Route> */}
        <Route path='login' element={<Login></Login>}></Route>

      </Routes>
    
    </div>
  );
}

export default App;
