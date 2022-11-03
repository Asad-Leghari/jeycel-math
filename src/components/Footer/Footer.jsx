import { Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = ({theme}) => {
  return (
    <>
      <Grid
        container
        justifyContent='center'
        spacing={2}
        xs={12}
        mt={4}
      >
        <Grid item sx={{textDecoration: 'underline'}}>Search</Grid>
        <Grid item sx={{textDecoration: 'underline'}}>Index</Grid>
        <Grid item sx={{textDecoration: 'underline'}}>About</Grid>
        <Grid item sx={{textDecoration: 'underline'}}>Contact</Grid>
        <Grid item sx={{textDecoration: 'underline'}}>Cite This Page</Grid>
      </Grid>
      <Grid container xs={12} justifyContent='center' mt={1} mb={2}>
        <Typography variant='subtitle2' color='jey.o1Clr'>Copyright © 2021 Jeycil-Thesis.com</Typography>
      </Grid>
    </>
  )
}

export default Footer