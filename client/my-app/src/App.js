import Userotp from './user/Userotp';
import axios from 'axios'
import {Route, Routes} from 'react-router-dom'
import Sign from './user/Sign';
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Table from './user/Table';


export const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers:{
    "Content-Type":"application/json"
  }
 
})


function App() {
  return (
    <div>
    <Routes>
    <Route path='/' element={ <Userotp/>}/>
    <Route path='/sign' element={<Sign/>}/>
    <Route path='/Table' element={<Table/>}/>
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
