import { Box, Grid, List, ListItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import pic1 from './p2.png'

const CombinedVariations = ({theme}) => {
    function createData(name, calories, fat, carbs, protein,s,t) {
        return { name, calories, fat, carbs, protein, s,t};
      }
      
      const rows = [
        createData('n', 1,2,3,4,5,6),
        createData('c', 15,30,45,60,75,90),
      ];

      function createDatat(namet, caloriest, fatt, carbst, proteint,st,tt) {
        return { namet, caloriest, fatt, carbst, proteint, st,tt};
      }
      
      const rowst = [
        createDatat('Time(t)', 2,4,6,8),
        createDatat('Speed(S)', 240,120,80,60),
      ];

    return (
      <>
          <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
              sx={{margin: '5rem 0rem'}}
              xs={12}
              gap={2}
          >
              <Grid item xs={12}>
                  <Box 
                      sx={{
                          border: '0.1rem solid',
                          borderColor: theme.palette.jey.head,
                          width: '100%',
                          padding: '0.5rem'
                      }}
                  >
                      <Typography variant='h5' fontWeight='600' textAlign='center'>COMBINED VARIATIONS</Typography>
                  </Box>
              </Grid>
              <Grid item xs={12}>
                  <Box 
                      sx={{
                          border: '0.1rem solid',
                          borderColor: theme.palette.jey.borderColor,
                          maxWidth: '750px',
                          width: '100%',
                          borderRadius: '0px 20px 0px 20px',
                          padding: '1rem'
                      }}
                  >
                      <Typography variant='body1'>In this lesson, you will learn to:</Typography>
                      <List 
                          sx = {{
                              listStyleType: 'disc',
                              pl: 2,
                              ml: 3
                          }}
                      >
                          <ListItem sx={{ display: 'list-item' }}>Illustrate situations that involve combined variation</ListItem>
                          <ListItem sx={{ display: 'list-item' }}>Translate into variation statement a relationship involving combined variation between two quantities given by a mathematical equation, and vice versa.</ListItem>
                          <ListItem sx={{ display: 'list-item' }}>Solve problems involving combined variations.</ListItem>
                      </List>
                  </Box>
              </Grid>
              <Grid item xs={12}>
              <Typography variant='h4' color='jey.header'>What To Process</Typography>
              <Box 
                      sx={{
                          border: '0.15rem dashed',
                          borderColor: theme.palette.jey.borderColor,
                          maxWidth: '750px',
                          width: '100%',
                          padding: '1rem',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          mt: 2
                      }}
                  >
                      <Typography variant='body1'>Combined variation is another physical relationship among variables. This is the kind of variation that involves both the direct and inverse variations.</Typography>
                      <Typography variant='body1' alignSelf='flex-start'>The statement:</Typography>
                      <br />
                      <Typography>z varies directly as x and inversely as y</Typography>
                      <br />
                      <Typography variant='body1' alignSelf='flex-start'>are translated mathematically as </Typography>
                      <br />
                      <Typography variant='body1'>z = kx / y or k = zy / x where k is the constant of variation.</Typography>
                  </Box>
              </Grid>
              <Grid item xs={12}>
              <Typography variant='h4' color='jey.header'>EXAMPLE 1</Typography>
              <Box
                  sx={{
                      border: '0.15rem dashed',
                      borderColor: theme.palette.jey.borderColor,
                      maxWidth: '750px',
                      width: '100%',
                      padding: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      mt: 2,
                      gap: 2
                  }}
              >
                  <Typography variant='body1'>Hoverboard Company found that its number of hoverboard sold, N, varies directly with their advertising budget, A, and inversely proportional with the price of each hoverboard, P. When ₱54,000 was spent on advertising and the price of the Kart is ₱10,000, then 500 units are sold. What is the equation of the variation.</Typography>
                  <Typography alignSelf='center'>N = kA / P</Typography>
                  <Typography alignSelf='center'>₱500(10,000) = k(₱54,000) / 10,000</Typography>
                  <Typography alignSelf='center' variant='body1'>₱500(10,000) = k(₱54,000)</Typography>
                  <Typography alignSelf='center'>₱5,000,000 / ₱54,000= k(54,000) / ₱54000</Typography>
                  <Typography alignSelf='center'>K = 2500 / 27</Typography>
                  <Typography textAlign='left'>The constant of variation (k) is 2500 / 27. By substituting 2500 / 27 in N = kA / P, the equation of the variation is N = 2500(A) / 27(P).</Typography>
                  <Typography textAlign='left'>Using this pattern, determine the number of hoverboard sold if the amount of advertising budget is increased to ₱100,000.</Typography>
                  <Typography textAlign='left'>We can answer the question by substituting the given time in the equation.</Typography>
                  <Typography alignSelf='center'>N = 2500(A) / 27(P)</Typography>
                  <Typography alignSelf='center'>N = 2500(₱100,000) / 27(₱10,000)</Typography>
                  <Typography alignSelf='center'>N = 25000 / 27 &asymp; 925.93</Typography>
                  <Typography alignSelf='center'>Therefore, 25000 / 27 or approximately 926 hoverboard will be sold if the amount of advertising budget is increased to ₱100,000.</Typography>
              </Box>
              </Grid>
              <Grid item xs={12}>
                  <Typography variant='h4' color='jey.header'>EXAMPLE 3</Typography>
                  <Box
                      sx={{
                          border: '0.15rem dashed',
                          maxWidth: '750px',
                          padding: '1rem'
                      }}
                  >
                      <Typography>The maximum load of a horizontal beam that is supported at both ends varies jointly as the width and the square of the height and inversely as the length between the supports. A beam 7 m long, 0.1 m wide, and 1 m high supports a load of 360kg. What is the maximum load supported by a beam 9 m long, 0.2 m wide, and 2 m high?</Typography>
                      <Typography ml= {3}>Since the maximum load of a horizontal beam that is supported at both ends varies jointly as the width and the square of the height and inversely as the length between the supports, the equation of the variation is Weight = kwh<sup>2</sup> / l. </Typography>
                      <Typography ml= {3}>To solve for the constant of variation (k), we substitute the given.</Typography>
                      <Stack direction='row'>
                          <Box minWidth='50%'>
                              <Typography textAlign='center'>360kg = k(0.1m)(1m)<sup>2</sup> / 7m</Typography>
                              <Typography textAlign='center'>2520kg*m = (0.1m<sup>3</sup>)(k)</Typography>
                              <Typography textAlign='center'>2520kg*m / 0.1<sup>3</sup>) = (0.1m<sup>3</sup>)(k) / 0.1m<sup>3</sup>)</Typography>
                              <Typography textAlign='center'>25,200 kg/m<sup>2</sup> = k</Typography>
                          </Box>
                          <Box
                              minWidth='50%'
                              sx={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                              }}
                          >
                              <img style={{width: '75%'}} src={pic1} alt="" />
                          </Box>
                      </Stack>
                      <Typography>The constant of variation (k) is 25,200 kg/m<sup>2</sup>). By substituting 25,200 kg/m<sup>2</sup>) in Weight = kwh<sup>2</sup> / l, the equation of the variation is Weight = (25,200 kg/m<sup>2</sup>)(wh<sup>2</sup>) / l.</Typography> 
                      <Typography>We can now solve for the maximum load supported by a beam 9 m long, 0.2 m wide, and 2 m high since we already have the constant of variation (k). </Typography>
                      <Typography ml={3}>Substituting the given, we have:</Typography>
                      <Typography textAlign='center'>Weight = (25,200 kg/m<sup>2</sup>)(wh<sup>2</sup>) / l.</Typography>
                      <Typography textAlign='center'>Weight = (25,200 kg/m<sup>2</sup>)(0.2m)(2m)<sup>2</sup>) / 9m.</Typography>
                      <Typography textAlign='center'>Weight = (20,160 kg/m)/ 9m.</Typography>
                      <Typography textAlign='center'>Weight = 2,240kg</Typography>
                      <Typography>Therefore, 2,240kg is the maximum load supported by a beam 9m long, 0.2m wide, and 2m high.</Typography>
                  </Box>
              </Grid>
              <Grid item xs={12}>
                  <Typography variant='h4' color='jey.header'>It's Your Turn</Typography>
                  <Box
                      sx={{
                          border: '0.15rem dashed',
                          maxWidth: '750px',
                          padding: '1rem'
                      }}
                  >
                      <Typography>H. Write an equation for the following statements:</Typography>
                      <ol start="10">
                              <ListItem sx={{ display: 'list-item' }}>The electrical resistance R of a wire varies directly as its length l and inversely as the square of its diameter d.</ListItem>
                              <ListItem sx={{ display: 'list-item' }}>The acceleration A of a moving object varies directly as the distance d it travels and inversely as the square of the time t it travels.</ListItem>
                              <ListItem sx={{ display: 'list-item' }}>The pressure P of a gas varies directly as its temperature t and inversely as its volume V.
                                  <ol type="I">
                                      <li>y varies directly as x and inversely as the square of z, and y = 6 when x = 32, and z = 4. Find the constant of variation (k).</li>
                                      <li style={{listStyle: 'none', marginTop: '1rem'}}>Find the following:</li>
                                  </ol>
                              </ListItem>
                          </ol>
                          <ol start='14'>
                              <ListItem sx={{ display: 'list-item' }}>x when y = 9 and z = 7.</ListItem>
                              <ListItem sx={{ display: 'list-item' }}>y when x = -4 and z = 2.</ListItem>
                              <ListItem sx={{ display: 'list-item' }}>z when x = 10, find x when x = 1.2.</ListItem>
                          </ol>
                    <Typography>J.	This activity will be a group activity. The class will be divided into 4 groups. Let your teacher group you. Each group will be assigned to answer 1 set of problems shown below. Once finished, you will present your work in front of the class. Good luck!</Typography>
                    <Typography fontWeight='600'>Group 1</Typography>
                    <Typography ml={3}>Tin cans of beverages are collected for recycling purposes in many places in the Philippines. Junk shops pay Php 15.00 for every kilo of tin cans bought from collectors. In the following table, c is the cost in peso and n is the number of kilos of tin cans:</Typography>
                    <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center', maxWidth: '500px', margin: 2, alignItems: 'center'}}>
                    <Table sx={{ maxWidth: '500px' }} aria-label="simple table">
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ border: '0.1rem solid' }}
                            >
                            <TableCell sx={{}} component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.calories}</TableCell>
                            <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.fat}</TableCell>
                            <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.carbs}</TableCell>
                            <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.protein}</TableCell>
                            <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.s}</TableCell>
                            <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.t}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <ol style={{marginLeft: '1.5rem'}} type='a'>
                    <li>Write a mathematical statement that relates the two quantities n and c.</li>
                    <li>What is the constant of variation?</li>
                    <li>How much would 20 kilos of tin cans cost if at the end of month, the cost for every kilo of tin cans will increase by 5 pesos? </li>
                    <li>Graph the relation.</li>
                </ol>
                {/* G2*/}
                <Typography fontWeight='600'>Group 2</Typography>
                <Typography>John is figuring out a way to reach Baguio at the shortest possible time. Using his car, he can reach Baguio in 8 hours at an average speed of 60 km per hour. </Typography>
                <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center', maxWidth: '500px', margin: 2, alignItems: 'center'}}>
                <Table sx={{ maxWidth: '500px' }} aria-label="simple table">
                    <TableBody>
                    {rowst.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ border: '0.1rem solid' }}
                        >
                        <TableCell sx={{}} component="th" scope="row">
                            {row.namet}
                        </TableCell>
                        <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.caloriest}</TableCell>
                        <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.fatt}</TableCell>
                        <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.carbst}</TableCell>
                        <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.proteint}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <ol style={{marginLeft: '1.5rem'}} type='a'>
                    <li>Write a mathematical statement that relates the two quantities t and s.</li>
                    <li>What is the constant of variation?</li>
                    <li>How fast should he drive to reach Baguio in 7 hours?</li>
                    <li>Graph the relation.</li>
                </ol>
                {/* G3*/}
                <Typography fontWeight='600'>Group 3</Typography>
                <Typography>The volume of a cone varies jointly as its height, and the square of its radius. If a cone with a height of 8 centimeters and a radius of 2 centimeters has a volume of 33.5 cm<sup>3</sup>,</Typography>
                <ol style={{marginLeft: '1.5rem'}}>
                    <li>Write a mathematical statement that relates the two quantities?</li>
                    <li>What is the constant of variation?</li>
                    <li>what is the volume of a cone with a height of 6 centimeters and a radius of 4 centimeters?</li>
                </ol>
                {/* G4*/}
                <Typography fontWeight='600'>Group 4</Typography>
                <Typography>The maximum weight that a rectangular beam can support varies jointly as its width and the square of its height and inversely as its length. The beam that measures 1/2 foot wide, 1/3 foot high, and 10 feet long can support 12 tons</Typography>
                <ol style={{marginLeft: '1.5rem'}}>
                    <li>Write a mathematical statement that relates the two quantities?</li>
                    <li>What is the constant of variation?</li>
                    <li>Find how much a similar beam can support if the beam is 2/3 foot wide, 1/2 foot high, and 16 feet long.</li>
                </ol>
                </Box>    
              </Grid>
          </Grid> 
      </>
    )
  }

export default CombinedVariations