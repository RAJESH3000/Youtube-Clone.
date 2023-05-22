import React from 'react'
import NavComponent from '../components/Drawer'
import { Avatar, Box,Grid } from '@mui/material'
import { styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
const Home = ({data,page,setPage,loading}) => {
  console.log(page)
  const pageChange=(e)=>{
    setPage(--e)
    window.scroll(0,0)
  }
  console.log(data)
  return (
    <div>
      <NavComponent/>
      <Box sx={{marginX:'60px',marginTop:'75px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
        <DrawerHeader/>
        {loading? <CircularProgress/>:
        <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} direction="row" justifyContent="space-around" alignItems="center">
          {data.map((post, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
                <Card sx={{ maxWidth: '65vw' }}>
                    <Link to={`/video/${post.postId}`}>
                    <CardMedia
                      sx={{ height: 500 ,objectFit: 'cover'}}
                      image={post.submission.thumbnail}
                      title="green iguana"
                    /></Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" marginX={1}>
                    {post.submission.title}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'} marginY={'5px'}>
                  <Avatar src={post.creator.pic}/>
                  <Typography variant="body2" color="text.secondary" marginLeft={'5px'}>
                    {post.creator.handle}
                  </Typography>
                  </Box>
                </CardContent>
                </Card>
            </Grid>
              ))}
        </Grid>
}
        </Box>
      <Divider/>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',margin:'20px',bottom:0}}>
      <Pagination 
        count={10} 
        variant="outlined" 
        color="primary"
        onChange={(e)=>{pageChange(e.target.textContent)}}
        />
      </div>
    </div>
  )
}

export default Home
