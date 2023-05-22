import React from 'react'
import {  useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import NevigationBar from '../components/Navigation';
import { Typography,Avatar,Box } from '@mui/material';

const Video = ({data}) => {
    let { id } = useParams();
    const videoData = data.find((item)=>{
        return item.postId === id;
    })
    console.log(videoData)
  return (
    <div style={{height : '100vh',margin:'0px'}}>
     <NevigationBar/> 
    <div style={{display:'flex',justifyContent:'center',alignContent:'center', margin:'10px 0px'}}>
    <ReactPlayer margin={0} width={'95vw'} playing  url={videoData.submission.mediaUrl} controls/>
    </div>
    <div style={{display:'flex',justifyContent:'flex-start',alignContent:'flex-start',flexDirection:'column', margin:'10px 0px'}}>
    <Typography color={'black'} sx={{color:'black',marginLeft:'3.5vw'}} variant='h4'>{videoData.submission.title}</Typography>
    <Box sx={{display:'flex',flexDirection:'row',marginTop:'25px',borderBottom:'1px solid white',paddingBottom:'15px'}}>
    <Avatar sx={{color:'black',marginLeft:'3.5vw'}} src={videoData.creator.pic}/>
    <Typography color={'black'} sx={{color:'black',marginLeft:'5px'}} variant='h6'>{videoData.creator.handle}</Typography>
    </Box>
    <Typography color={'black'} sx={{color:'black',marginLeft:'3.5vw',marginTop:'15px'}} variant='h6'>Description :</Typography>
    <Typography color={'black'} sx={{color:'black',marginLeft:'3.5vw',marginTop:'5px',marginRight:'3.5vw'}} variant='subtitle1'>{videoData.submission.description}</Typography>
    </div>
    </div>
  )
}

export default Video
