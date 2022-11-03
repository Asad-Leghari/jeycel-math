import { Box, Grid, List, ListItem, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import pic1 from './Picture2.png'
import pic2 from './Picture3.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const DirectVariations = ({theme}) => {

    function createData(name, calories, fat, carbs, protein,s,ss) {
        return { name, calories, fat, carbs, protein, s, ss };
      }
      
      const rows = [
        createData('Time (t)', 1,2,3,4,5),
        createData('Distance (d)', 10,20,30,40,50),
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
                    <Typography variant='h5' fontWeight='600' textAlign='center'>DIRECT VARIATIONS</Typography>
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
                        <ListItem sx={{ display: 'list-item' }}>Illustrate situations that involve direct variation</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Translate into variation statement a relationship involving direct variation between two quantities given by a table of values, a mathematical equation, and a graph, and vice versa.</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>solve problems involving direct variations.</ListItem>
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
                    <Typography variant='body1'>There are varied things around you that you should know how things are related to each other. Like how is time related to the speed of a vehicle or even as simple as the relationship of the length of your arm span with your height. </Typography>
                    <Typography variant='body1'>There is direct variation whenever a situation produces pairs of numbers in which their ratio is constant. </Typography>
                    <Stack direction='row' alignItems='center' gap={2} className='duck'>
                        <Box
                            sx={{
                                border: '0.1rem solid',
                                maxWidth: '450px',
                                padding: '1rem',
                                margin: '1rem'
                            }}
                        >
                        <Typography variant='body1'>The statements: </Typography>
                        <List 
                            sx = {{
                                listStyleType: 'disc',
                                pl: 4,
                                ml: 3,
                            }}
                        >
                            <ListItem sx={{ display: 'list-item' }}>y varies directly as x</ListItem>
                            <ListItem sx={{ display: 'list-item' }}>y is directly proportional to x</ListItem>
                            <ListItem sx={{ display: 'list-item' }}>y is proportional to x</ListItem>
                        </List>
                        <Typography variant='body1'>are translated mathematically as </Typography>
                        <Typography variant='body1' textAlign='center'>y = kx; where k is the constant of variation</Typography>
                        </Box>
                    </Stack>
                    <Typography>For two quantities x and y, an increase in x causes an increase in y as well. Similarly, a decrease in x causes a decrease in y.</Typography>
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
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 2
                }}
            >
                <Typography variant='body1'>Using his bicycle, Jericho travels a distance of 10 kilometers per hour on a steep road. The table shows the distance he has travelled at a particular length of time.</Typography>
                <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center', maxWidth: '500px', margin: 2}}>
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
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography variant='body1'>As Jericho gets farther, the time of his travel also increases. Therefore, d varies directly as t.</Typography>
                <Typography variant='body1'>Mathematically, d = kt</Typography>
                <Typography variant='body1'>Using one of the pairs of values, (3, 30), from the table, substitute the values of d and t in d = kt and solve for k.</Typography>
                <Typography variant='body1'>d = kt</Typography>
                <Typography variant='body1'>30 = k(3)</Typography>
                <Typography variant='body1'>k = <sup>30</sup>&frasl;<sub>2</sub></Typography>
                <Typography variant='body1'>k = 10</Typography>
                <Typography variant='body1'>The constant of variation (k) is 10. By substituting 10 in d = kt, the equation of the direct variation is d = 10t.</Typography>
            </Box>
            </Grid>
            <Grid item xs={12}>
                <Box
                    sx={{
                        border: '0.15rem dashed',
                        padding: '1rem'
                    }}
                >
                    <Typography variant='body1' fontWeight='600'>Using this pattern, how many kilometers would Jericho have travelled in 8 <sup>1</sup>&frasl;<sub>2</sub> hours?</Typography>
                    <Typography variant='body1'>Given:</Typography>
                    <Typography textAlign='center' fontWeight='600' variant='body1'>t = 8 <sup>1</sup>&frasl;<sub>2</sub></Typography>
                    <Typography variant='body1'>We can answer the question by substituting the given time in the equation</Typography>
                    <Typography textAlign='center' fontWeight='600' variant='body1'>d = 10t</Typography>
                    <Typography textAlign='center' fontWeight='600' variant='body1'>d = 10 (8 <sup>1</sup>&frasl;<sub>2</sub>)</Typography>
                    <Typography textAlign='center' fontWeight='600' variant='body1'>d = 10 (8 <sup>17</sup>&frasl;<sub>2</sub>)</Typography>
                    <Typography textAlign='center' fontWeight='600' variant='body1'>d = <sup>170</sup>&frasl;<sub>2</sub></Typography>
                    <Typography textAlign='center' fontWeight='600' variant='body1'>d = 85</Typography>
                    <Typography variant='body1'>Therefore, Jericho would have travelled 85 kilometers in 8 <sup>1</sup>&frasl;<sub>2</sub> hours.</Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Stack 
                    direction='row'
                    sx={{
                        maxWidth: '600px',
                        background: 'white'
                    }}
                >
                    <img style={{width: '50%'}} src={pic1} alt="" />
                    <img style={{width: '50%'}} src={pic2} alt="" />
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h4' color='jey.header'>EXAMPLE 2</Typography>
                <Box
                    sx={{
                        border: '0.15rem dashed',
                        maxWidth: '750px',
                        padding: '1rem'
                    }}
                >
                    <Typography>If x varies directly as y and x = 35 when y = 7, what is the value of y when x = 25?</Typography>
                    <Typography>We solve this by using same method as shown above. But this time, let us use another method which is by establishing a proportion.</Typography>
                    <Typography>Since <sup>x</sup>&frasl;<sub>y</sub> is a constant, then we can write k = <sup>x</sup>&frasl;<sub>y</sub>. And so, our proportion is <sup>x</sup><sub>1</sub> &frasl; y<sub>1</sub> = <sup>x</sup><sub>2</sub> &frasl; y<sub>2</sub>.</Typography>
                    <Typography>Given:</Typography>
                    <Typography textAlign='center'>x<sub>1</sub> = 35, y<sub>1</sub> = 7, x<sub>2</sub> = 25</Typography>
                    <Typography>Substituting the values, we get</Typography>
                    <Typography textAlign='center'><sup>x</sup><sub>1</sub> &frasl; y<sub>1</sub> = <sup>x</sup><sub>2</sub> &frasl; y<sub>2</sub></Typography>
                    <Typography textAlign='center'><sup>35</sup>&frasl;<sub>7</sub> = <sup>25</sup>&frasl; y<sub>2</sub></Typography>
                    <Typography textAlign='center'>5 = <sup>25</sup>&frasl; <sub>5</sub></Typography>
                    <Typography textAlign='center'>y<sub>2</sub> = 5</Typography>
                    <Typography>Therefore, y = 5 when x = 25</Typography> 
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
                    <Typography>In each of the following, y varies directly as x. Find the values as indicated.</Typography>
                    <List 
                            sx = {{
                                listStyleType: 'number',
                                pl: 4,
                                ml: 3,
                            }}
                        >
                            <ListItem sx={{ display: 'list-item' }}>If y = 12 when x = 4, find y when x = 12.</ListItem>
                            <ListItem sx={{ display: 'list-item' }}>If y = -18 when x = 9, find y when x = 7.</ListItem>
                            <ListItem sx={{ display: 'list-item' }}>If y = 3 when x = -4, find x when y = 2.</ListItem>
                            <ListItem sx={{ display: 'list-item' }}>If y = 3 when x = 10, find x when y = 1.2.</ListItem>
                            <ListItem sx={{ display: 'list-item' }}>If y = 2.5 when x = 0.25, find y when x = 0.75.</ListItem>
                        </List>
                </Box>    
            </Grid>
        </Grid> 
    </>
  )
}

export default DirectVariations