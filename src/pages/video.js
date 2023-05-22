import React from 'react'
import {  useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import NevigationBar from '../components/Navigation';
const Video = ({data}) => {
    let { id } = useParams();
    const videoData = data.find((item)=>{
        return item.postId === id;
    })
    console.log(videoData)
  return (
    <div style={{height : '100vh', backgroundColor:'#000000',margin:'0px'}}>
    {/* <NevigationBar/> */}
    <div >
    <ReactPlayer margin={0} width={'95vw'} playing  url={videoData.submission.mediaUrl} controls/>
    </div>
    </div>
  )
}

export default Video
