import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import './Home.css'
// import apple from './apple.jpg'
import science from './aw.jpg'
import dscience from './dw.jpg'
const Home = ({darkMode, setdarkMode, theme}) => {
  return (
    <>
      <Grid 
        container 
        justifyContent="center"
        alignItems="center"
        direction="column"
        sx={{margin: '5rem 0rem'}}
        xs={12}
      >
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
            <img src={darkMode ? dscience : science} alt="" className='science-img'/>
        </Grid>
        <Grid 
          item 
          xs={12} 
          >
          <Box>
            <div 
              className='grid-container' 
              style={{
                background: theme.palette.jey.bg,
                border: '.1rem solid',
                borderColor : theme.palette.jey.b2Clr
              }}>
              <div className="grid-item">
                <Typography variant='body1'>DIRECT VARIATIONS</Typography>
              </div>
              <div className="grid-item">INDIRECT VARIATION</div>
              <div className="grid-item">JOINT VARIATION</div>
              <div className="grid-item">COMBINED VARIATION</div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} mt={3}>
          <Box>
            <Grid 
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>Messages from visitors:</Grid>
              <Grid 
                item 
                className='sec-2'
                sx={{
                  background: theme.palette.jey.b1Clr,
                  border: '0.1rem solid',
                  borderColor: theme.palette.jey.b2Clr,
                }}
                mt={1}
                >
                  <Typography variant='body1'>"Amazing! I have never seen a site making math so much fun and easy to understand. Why isn`t it taught like this in schools? Thank you all!"</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/* <Grid item xs={12} mt={5}>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Grid 
              container
              xs={12}
              justifyContent='center'
              gap={2}
            >
              <Grid item className='sec-3-paper'>
                <Typography variant='h6'>DIRECT VARIATIONS</Typography>
                <img className='img-apple' src={apple} alt="" />
                <Typography variant='body1' textAlign='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deleniti, recusandae quod veritatis optio officiis.</Typography>
              </Grid>
              <Grid item className='sec-3-paper'>
                <Typography variant='h6'>Teacher's Page</Typography>
                <img className='img-apple' src={apple} alt="" />
                <Typography variant='body1' textAlign='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestias reiciendis asperiores accusamus iste! Dolore.</Typography>

              </Grid>
              <Grid item className='sec-3-paper'>
                <Typography variant='h6'>Teacher's Page</Typography>
                <img className='img-apple' src={apple} alt="" />
                <Typography variant='body1' textAlign='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deleniti, recusandae quod veritatis optio officiis.</Typography>

              </Grid>
              <Grid item className='sec-3-paper'>
                <Typography variant='h6'>Teacher's Page</Typography>
                <img className='img-apple' src={apple} alt="" />
                <Typography variant='body1' textAlign='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deleniti, recusandae quod veritatis optio officiis.</Typography>

              </Grid>
              <Grid item className='sec-3-paper'>
                <Typography variant='h6'>Teacher's Page</Typography>
                <img className='img-apple' src={apple} alt="" />
                <Typography variant='body1' textAlign='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deleniti, recusandae quod veritatis optio officiis.</Typography>

              </Grid>
              <Grid item className='sec-3-paper'>
                <Typography variant='h6'>Teacher's Page</Typography>
                <img className='img-apple' src={apple} alt="" />
                <Typography variant='body1' textAlign='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deleniti, recusandae quod veritatis optio officiis.</Typography>

              </Grid>
            </Grid>
          </Box>
        </Grid> */}
      </Grid>
  </>
  )
}

export default Home