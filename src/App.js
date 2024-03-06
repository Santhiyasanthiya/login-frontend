import logo from './logo.svg';
import './App.css';
import Login from './auth/Login';
import Register from './auth/Register';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import NavBar from './Components/NavBar';



function App() {
  return (
    <div>
 
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Register/>}/>
     <Route path="/login" element={<Login/>}/>
    <Route path="/navbar" element={<NavBar/>}/>
   
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
