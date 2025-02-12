import { useState } from 'react'
import './App.css'
import {Routes , Route} from 'react-router-dom';
//import Navbar from '../src/components/Navbar';
import Newhome from '../src/pages/Newhome';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import axios  from 'axios';
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';
import Showdoctors from './pages/Showdoctors';
import Newshowdoctors from './pages/Newshowdoctors';
import Doctorbook  from './pages/Doctorbook';
import Showform from './pages/Showform';
import Bookafterlogin from './pages/Bookafterlogin';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials=true

function App() {
  const [count, setCount] = useState(0)

  return (
    //<UserContextProvider>

    <>

    
    

      
      
    
     
      <Toaster position = 'bottom-right' toastOptions={{duration : 2000}}/>
      <Routes>
      <Route path="/show" exact element={<Newshowdoctors/>} />
      <Route path="/show" exact element={<Showdoctors/>} />
        <Route path = '/' element={<Newhome/>}/>
        <Route path = '/register' element={<Register/>}/>
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/doctorbook' element={<Doctorbook/>}/>
        <Route path = '/showtouser' element={<Showform/>}/>
        <Route path = '/showafterlogin' element ={<Bookafterlogin/>}/>
        
      </Routes>
      
    </>
    //</UserContextProvider>
    
  )
}

export default App
