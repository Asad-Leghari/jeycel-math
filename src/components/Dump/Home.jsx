import { Box, Grid, Switch, Typography } from '@mui/material'
import React from 'react'
import './Home.css'
import apple from './apple.jpg'
const Home = ({darkMode, setdarkMode}) => {
  return (
    <>
      <div className='dark-btn'>
        <Switch checked={darkMode} onChange={() => setdarkMode(!darkMode) }/>
      </div>
      <Grid 
        container 
        justifyContent="center"
        alignItems="center"
        direction="column"
        sx={{margin: '1rem 0rem'}}
        xs={12}
        spacing={2}
      >
        <Grid 
          item 
          xs={12} 
          >
          <Box>
            <div 
              className='grid-container' 
              style={{
                background: darkMode ? 'linear-gradient(120deg,hsl(210, 80%, 9%) 0%,hsl(210, 80%, 12%) 100%)' :'linear-gradient(120deg,hsl(213, 100%, 96%) 0%,hsl(214, 100%, 93%) 100%)',
                border: darkMode ? '1 px solid white' : '.1rem solid hsl(214, 100%, 84%)'
              }}>
              <div className="grid-item">Index</div>
              <div className="grid-item">Algebra</div>
              <div className="grid-item">Data</div>
              <div className="grid-item">Geometry</div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Grid 
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item sx={{color: darkMode ? 'white' : 'black', paddingBottom: '0.5rem'}}>Messages from visitors:</Grid>
              <Grid 
                item 
                className='sec-2'
                sx={{
                  border: darkMode ? '0.1rem solid hsl(210, 100%, 25%)' : '0.1rem solid hsl(214, 100%, 84%)',
                  background: darkMode ? 'hsl(210, 80%, 12%)' : 'hsl(214, 100%, 93%)',
                  color: darkMode ? 'white' : 'black'
                }}
                >
                  <Typography variant='body1'>"Amazing! I have never seen a site making math so much fun and easy to understand. Why isn`t it taught like this in schools? Thank you all!"</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Grid 
              container
              className='sec-3'
              xs={10}
            >
              <Grid item xs={4} className='sec-3-paper' justifyContent='center' alignItems='center'>
                <Typography variant='h6'>Teacher's Page</Typography>
                <img className='img-apple' src={apple} alt="" />
                <Typography variant='body1'>Lorem ipsum dolor sit amet.</Typography>
              </Grid>
              <Grid item xs={4} className='sec-3-paper' justifyContent='center' alignItems='center'>
                <Typography variant='h6'>Teacher's Page</Typography>
                <img className='img-apple' src={apple} alt="" />
                <Typography variant='body1'>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</Typography>

              </Grid>
              <Grid item xs={4} className='sec-3-paper' justifyContent='center' alignItems='center'>
                <Typography variant='h6'>Teacher's Page</Typography>
                <img className='img-apple' src={apple} alt="" />
                <Typography variant='body1'>Lorem ipsum dolor sit amet.</Typography>

              </Grid>
              <Grid item xs={4} className='sec-3-paper' justifyContent='center' alignItems='center'>
                <Typography variant='h6'>Teacher's Page</Typography>
                <img className='img-apple' src={apple} alt="" />
                <Typography variant='body1'>Lorem ipsum dolor sit amet.</Typography>

              </Grid>
              <Grid item xs={4} className='sec-3-paper' justifyContent='center' alignItems='center'>
                <Typography variant='h6'>Teacher's Page</Typography>
                <img className='img-apple' src={apple} alt="" />
                <Typography variant='body1'>Lorem ipsum dolor sit amet.</Typography>

              </Grid>
              <Grid item xs={4} className='sec-3-paper' justifyContent='center' alignItems='center'>
                <Typography variant='h6'>Teacher's Page</Typography>
                <img className='img-apple' src={apple} alt="" />
                <Typography variant='body1'>Lorem ipsum dolor sit amet.</Typography>

              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
  </>
  )
}

export default Home
/*
<Grid 
              container
              xs={12}
            >
              <Grid item className='sec-1-a'>Index</Grid>
              <Grid item className='sec-1-a'>Algebra</Grid>
              <Grid item className='sec-1-a'>Data</Grid>
              <Grid item className='sec-1-a'>Geometry</Grid>
            </Grid>
*/