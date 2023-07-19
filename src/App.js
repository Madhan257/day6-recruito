import './App.css';
import Home from './home';
import Login from './Login';
 import Createac from './Createac';
 import Profile from './profile';
 import Findjob from './findjob';
 import Applynow from './applynow';
 import Applied from './applied';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/Login"element={<Login/>}/>
        <Route path="/Createac"element={<Createac/>}/> 
        <Route path="/Profile"element={<Profile/>}/>
        <Route path="/findjob"element={<Findjob/>}/>
        <Route path="/applynow"element={<Applynow/>}/>
        <Route path="/applied"element={<Applied/>}/>
      </Routes>
    </Router>
  );
}export default App;