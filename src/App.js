import NavComponent from "./components/Drawer";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import Main from './pages/main'
function App() {
  const api = "https://internship-service.onrender.com/videos?page=0";
  const [data,setData] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setData(response.data.data.posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
