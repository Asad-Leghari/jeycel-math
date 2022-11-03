import { Box, Grid, List, ListItem, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import pic1 from './P1.png'
import pic2 from './p2.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const InDirectVariations = ({theme}) => {

    function createData(name, calories, fat, carbs, protein,s) {
        return { name, calories, fat, carbs, protein, s};
      }
      
      const rows = [
        createData('Number of persons (n)', 2,4,6,8),
        createData('Number of days (d)', 12,6,4,3),
      ];

    function createDatat(namet, caloriest, fatt, carbst, proteint,st,ts) {
    return { namet, caloriest, fatt, carbst, proteint, st,ts};
    }
    
    const rowst = [
    createDatat('p', 3,6,12,24,48),
    createDatat('p', 16,8,4,2,1),
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
                    <Typography variant='h5' fontWeight='600' textAlign='center'>INDIRECT VARIATIONS</Typography>
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
                        <ListItem sx={{ display: 'list-item' }}>Illustrate situations that involve inverse variation</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Translate into variation statement a relationship involving inverse variation between two quantities given by a table of values, a mathematical equation, and a graph, and vice versa.</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Solve problems involving inverse variations.</ListItem>
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
                    <Typography variant='body1'>Inverse variation occurs whenever a situation produces pairs of numbers whose product is constant. For two quantities x and y an increase in x causes a decrease in y or vice versa.</Typography>
                    <Typography variant='body1' alignSelf='flex-start'>The statement:</Typography>
                    <br />
                    <Typography>y varies inversely to x</Typography>
                    <br />
                    <Typography variant='body1' alignSelf='flex-start'>are translated mathematically as </Typography>
                    <br />
                    <Typography variant='body1'>y = k / x ; where k is the constant of variation.</Typography>
                    <br />
                    <Typography variant='body1'>For instance, if you walk slowly going to school, it will take you longer time to reach the school. On the other hand, if you walk fast, it will take you shorter time to reach the school. Your speed in walking varies inversely with the time. The faster you walk, the shorter the time it takes you to reach your destination.</Typography>
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
                    mt: 2,
                    gap: 2
                }}
            >
                <Typography variant='body1'>The number of persons n needed to do a job varies inversely as the number of days d to finish the job.</Typography>
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
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography variant='body1'>The more people who do the job, the shorter time it takes to finish the job. Therefore, d varies directly as n. Mathematically, d = k / n.</Typography>
                <Stack direction="row" spacing={2} width='100%'>
                    <Box minWidth='50%'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography>Using one of the pairs of values, (4,6), from the table, substitute the values of d and n in d = k / n and solve for k. </Typography>
                    </Box>
                    <Box minWidth='50%'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <Typography>d = k / n</Typography>
                        <Typography>6 = k / 4</Typography>
                        <Typography>k = (6)(4)</Typography>
                        <Typography>k = 24</Typography>
                    </Box>
                </Stack>
                <Typography>The constant of variation (k) is 24. By substituting 24 in d = k / n, the equation of the indirect variation is d = 24 / n.</Typography>
            </Box>
            </Grid>
            <Grid item xs={12}>
                <Box
                    sx={{
                        border: '0.15rem dashed',
                        padding: '1rem'
                    }}
                >
                    <Typography variant='body1' fontWeight='600'>Using this pattern, how many days would it take for 10 men to finish the job?</Typography>
                    <Typography variant='body1'>Given:</Typography>
                    <Typography textAlign='center' fontWeight='600' variant='body1'>d = <sup>24</sup>&frasl;<sub>n</sub></Typography>
                    <Typography variant='body1'>We can answer the question by substituting the given time in the equation.</Typography>
                    <Typography textAlign='center' fontWeight='600' variant='body1'>d = <sup>24</sup>&frasl;<sub>n</sub></Typography>
                    <Typography textAlign='center' fontWeight='600' variant='body1'>d = <sup>24</sup>&frasl;<sub>10</sub></Typography>
                    <Typography textAlign='center' fontWeight='600' variant='body1'>d = 2.4</Typography>
                    <Typography variant='body1'>Therefore, it would take 2.4 days for 10 men to finish the job.</Typography>
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
                    <Typography>If y varies inversely as x and y = 10 when x = 2. Find y when x = 10?</Typography>
                    <Typography>We solve this by using same method as shown above.</Typography>
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
                        borderColor: theme.palette.jey.borderColor,
                        maxWidth: '750px',
                        width: '100%',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 2,
                        gap: 2,
                    }}
                >
                    <Typography>C. Write an equation for the following statements:</Typography>

                    <ol start="4">
                            <ListItem sx={{ display: 'list-item' }}>The acceleration a of a car is inversely proportional to its mass m.</ListItem>
                            <ListItem sx={{ display: 'list-item' }}>The number of carrot plants c in a row varies inversely as the space s between them.</ListItem>
                            <ListItem sx={{ display: 'list-item' }}>The rate r at which a person types his project varies inversely as the time t spent in typing.
                                <ol start="4" type="A">
                                    <li>Find the constant of variation and write the equation representing the relationship between the quantities in each of the following:</li>
                                </ol>
                            </ListItem>
                    </ol>

                    <ol>
                    
                    <li>
                    <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center', maxWidth: '500px', margin: 2}}>
                        <Table sx={{ maxWidth: '500px'}} aria-label="simple table">
                            <TableBody>
                            {rowst.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ border: '0.1rem solid' }}
                                >
                                <TableCell align="center" component="th" scope="row">
                                    {row.namet}
                                </TableCell>
                                <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.caloriest}</TableCell>
                                <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.fatt}</TableCell>
                                <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.carbst}</TableCell>
                                <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.proteint}</TableCell>
                                <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.st}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </li>

                    <li>
                    <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center', maxWidth: '500px', margin: 2}}>
                        <Table sx={{ maxWidth: '500px'}} aria-label="simple table">
                            <TableBody>
                            {rowst.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ border: '0.1rem solid' }}
                                >
                                <TableCell align="center" component="th" scope="row">
                                    {row.namet}
                                </TableCell>
                                <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.caloriest}</TableCell>
                                <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.fatt}</TableCell>
                                <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.carbst}</TableCell>
                                <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.proteint}</TableCell>
                                <TableCell sx={{ border: '0.1rem solid' }} align="center">{row.st}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </li>

                    </ol>

                    <ol type="A" start="5">
                        <li>In each of the following, y varies inversely as x. Find the values as indicated.</li>
                    </ol>

                    <ol start="6">
                        <li style={{marginBottom: "1rem"}}>If y = 3 when x = 4, find y when x = 6.</li>                 
                        <li style={{marginBottom: "1rem"}}>If y = -2 when x = -8, find x when y = 2.</li>                 
                        <li style={{marginBottom: "1rem"}}>If y = 12 when x = 8, find x when y = 6.</li>                 
                        <li style={{marginBottom: "1rem"}}>If y = 10 when x = 5, find x when y = 25.</li>                 
                        <li style={{marginBottom: "1rem"}}>If y = 8 when x = 3, find y when x = 12.</li>                 
                    </ol>

                    <ol start="4" type="A">
                        <li>Read the phrases below. Encircle the statement if it is a direct variation, box it if it is an inverse variation. If the relationship is neither direct nor inverse variation, skip it.</li>
                        <ol>
                            <li>The number of hours to finish a project to the number of students working.</li>
                            <li>The number of persons sharing an ice cream to the number of ice cream scoops.</li>
                            <li>The area of a box to its length, width, and height.</li>
                            <li>The principal amount to its interest, rate, and time.</li>
                            <li>The amount of paint to the area of the wall.</li>
                            <li>The number of students to the time a teacher spends checking assignments.</li>
                            <li>The distance a bird flies to the time travelling.</li>
                            <li>The number of pages a kid reads to the number of hours he is reading.</li>
                            <li>The area of a box to its length, width, and height.</li>
                            <li>The acceleration of a car to its velocity and time.</li>
                        </ol>
                    </ol>

                </Box>    
            </Grid>
        </Grid> 
    </>
  )
}

export default InDirectVariations
