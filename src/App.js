
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Datas from './pages/content';
import Signin from './pages/SignIn';
function App() {
  
  return (
    <div >
    <Router>
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Signup' element={<Signup/>}></Route>
        <Route exact path='/Signin' element={<Signin/>}></Route>
        <Route exact path='/data' element={<Datas/>}></Route> 
     </Routes>
    </Router>
    </div>
  );
}

export default App;
