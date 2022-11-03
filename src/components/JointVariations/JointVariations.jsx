import { Box, Grid, List, ListItem, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import pic1 from './p1.png'

const JointVariations = ({theme}) => {

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
                    <Typography variant='h5' fontWeight='600' textAlign='center'>JOINT VARIATIONS</Typography>
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
                        <ListItem sx={{ display: 'list-item' }}>Illustrate situations that involve joint variation</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Translate into variation statement a relationship involving joint variation between two quantities given by a mathematical equation, and vice versa.</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Solve problems involving joint variations.</ListItem>
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
                    <Typography variant='body1'>The concept of joint variation will help you deal with problems involving more than two variables or quantities. </Typography>
                    <Typography variant='body1' alignSelf='flex-start'>The statement:</Typography>
                    <br />
                    <Typography>a varies jointly as b and c</Typography>
                    <br />
                    <Typography variant='body1' alignSelf='flex-start'>are translated mathematically as </Typography>
                    <br />
                    <Typography variant='body1'>a = kbc or k = a / bc where k is the constant of variation.</Typography>
                    <br />
                    <Typography variant='body1'>If the ratio of one quantity to the product of the other two quantities is constant, the they vary jointly.</Typography>
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
                <Typography variant='body1'>Find the equation of variation where a varies jointly as b and c, and a = 64 when b = 8 and c = 2.</Typography>
                <Typography>Since a varies jointly as b and c, then the equation of variation is a = kbc.
                    Substituting the values, we get
                </Typography>
                <Typography alignSelf='center'>a = kbc</Typography>
                <Typography alignSelf='center'>64 = k(8)(2)</Typography>
                <Typography alignSelf='center' variant='body1'>64 = 16k</Typography>
                <Typography alignSelf='center'>K = 64 / 16</Typography>
                <Typography alignSelf='center'>K = 4</Typography>
                <Typography textAlign='left'>Therefore, the required equation of variation is a = 4bc.</Typography>
                <Typography>Using the variation a = 4bc, find b when c = 5 and a = 60.</Typography>
                <Typography>Formula:</Typography>
                <Typography alignSelf='center'>a = 4bc</Typography>
                <Typography>Substituting the values, we get</Typography>
                <Typography alignSelf='center'>60 = 4b(5)</Typography>
                <Typography alignSelf='center'>60 = 20b</Typography>
                <Typography alignSelf='center'>60 / 20 = 20b / 20</Typography>
                <Typography alignSelf='center'>B = 3</Typography>
                <Typography>Therefore, in the variation a = 4bc, b = 3when c = 5 and a = 60.</Typography>
            </Box>
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
                    <Typography>The volume v of a right circular cylinder varies jointly as the height h and the square of the radius r. The volume of a right cylinder, with radius of 5cm and height of 6cm, is 150 &#8719;cm<sup>3</sup>. Find the volume of another cylinder with radius of 8 cm and height of 10 cm.</Typography>
                    <Typography ml= {3}>Since The volume v of a right circular cylinder varies jointly as the height h and the square of the radius r, the equation of variation is V = &#8719; r<sup>2</sup> h.</Typography>
                    <Typography ml= {3}>Substituting the given, we have:</Typography>
                    <Stack direction='row'>
                        <Box minWidth='50%'>
                            <Typography textAlign='center'>V = &#8719; r<sup>2</sup> h</Typography>
                            <Typography textAlign='center'>V = &#8719; (8)<sup>2</sup> (10)</Typography>
                            <Typography textAlign='center'>V = &#8719; (64) (10)</Typography>
                            <Typography textAlign='center'>V = 640 &#8719;</Typography>
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
                    <Typography>Therefore, the volume of the other cylinder with radius of 8 cm and height of 10 cm is 640 &#8719;.</Typography> 
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
                    <Typography>F. Write an equation for the following statements:</Typography>
                    <ol start="7">
                            <ListItem sx={{ display: 'list-item' }}>The force F applied to an object varies jointly as the mass m and the acceleration a.</ListItem>
                            <ListItem sx={{ display: 'list-item' }}>The area A of a triangle varies jointly as the base b and the altitude h. </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>The heat H produced by an electric lamp varies jointly as the resistance R and the square of the current i.
                                <ol start="7" type="A">
                                    <li>A.	In each of the following, z varies jointly as x and y and z = 60 and x = 5 and y = 6. Find the constant of variation (k).</li>
                                    <li style={{listStyle: 'none'}}>Find the following:</li>
                                </ol>
                            </ListItem>
                        </ol>
                        <ol start="11">
                            <li>Find x when y = 7 and z = 6.</li>
                            <li>Find y when x = 72 and z = 4.</li>
                            <li>Find z when x = 80 and y = 4.</li>
                        </ol>
                </Box>    
            </Grid>
        </Grid> 
    </>
  )
}

export default JointVariations