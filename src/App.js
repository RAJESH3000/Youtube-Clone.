import { BrowserRouter,Route,Routes } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import Home from './pages/Home'
import Video from './pages/video'
function App() {
  const [data,setData] = useState([])
  const [page,setPage] = useState(0)
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://internship-service.onrender.com/videos?page=${page}`);
        setData(response.data.data.posts);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[page])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home data={data} page={page} setPage={setPage} loading={loading}/>}/>
      <Route path='/video/:id' element={<Video data={data}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
