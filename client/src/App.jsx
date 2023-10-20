import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/Signin';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import About from './Pages/About';


export default function App() {
  return <BrowserRouter>
  <Routes>
    < Route path='/' element={<Home/>}/>
    < Route path='/sign-in' element={<SignIn/>}/>
    < Route path='/sign-up' element={<SignUp/>}/>
    < Route path='/about' element={<About/>}/>
    < Route path='/profile' element={<Profile/>}/>
  </Routes>
  
  
  </BrowserRouter>;
}
