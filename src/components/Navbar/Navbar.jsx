import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './n.css'
import { Grid, Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = ({darkMode, setdarkMode, theme}) => {
  const [toggleNav, settoggleNav] = useState(false)
  const [navbtns, setnavbtns] = useState(true)
  const handleNav = () => {
    settoggleNav(!toggleNav);
    setnavbtns(!navbtns);
  }

  return (
    <>
      <Grid container justifyContent='center' alignItems='center' sx={{ position: { sm: 'fixed'}, zIndex: '999999' }} xs={12}>
          <Box className='navy' sx={{ display: 'flex', justifyContent: 'space-around',alignItems: 'center', background: theme.palette.jey.a0Clr, color: darkMode ? 'white': 'black', maxWidth: '800px', width: '100%'}}>
            <Link className='navy' style={{textDecoration: 'none', color: theme.palette.jey.a0}} to="/"><Typography textAlign='center' className='nav-button'>HOME</Typography></Link>
            <Link className='navy' style={{textDecoration: 'none', color: theme.palette.jey.a0}} to="/Direct-Variations"><Typography textAlign='center' className='nav-button'>DIRECT VARIATIONS</Typography></Link>
            <Link className='navy' style={{textDecoration: 'none', color: theme.palette.jey.a0}} to="/Indirect-Variations"><Typography textAlign='center' className='nav-button'>INDIRECT VARIATIONS</Typography></Link>
            <Link className='navy' style={{textDecoration: 'none', color: theme.palette.jey.a0}} to="/Joint-Variations"><Typography textAlign='center' className='nav-button'>JOINT VARIATIONS</Typography></Link>
            <Link className='navy' style={{textDecoration: 'none', color: theme.palette.jey.a0}} to="/Combined-Variations"><Typography textAlign='center' className='nav-button'>Combined VARIATIONS</Typography></Link>
          </Box>
      </Grid>
      <div className='dark-btn'>
        <Switch checked={darkMode} onChange={() => setdarkMode(!darkMode) }/>
      </div>
      <div style={{color: theme.palette.jey.a0}} className={toggleNav ? 'nav-btn-dark' : 'nav-btn'} >{toggleNav ? <CloseIcon onClick={handleNav}/> : <MenuIcon onClick={handleNav} />}</div>
      <Box onClick={handleNav} className={toggleNav ? 'menu-nav' : 'close-nav'} sx={{ background: theme.palette.jey.a0Clr, color: darkMode ? 'white': 'black'}}>
        <Link style={{textDecoration: 'none', color: theme.palette.jey.a0, Width: '100%', border: '1px solid crimson'}} to="/"><Typography textAlign='center' className='nav-button'>HOME</Typography></Link>
        <Link style={{textDecoration: 'none', color: theme.palette.jey.a0, Width: '100%', border: '1px solid crimson'}} to="/Direct-Variations"><Typography textAlign='center' className='nav-button'>DIRECT VARIATIONS</Typography></Link>
        <Link style={{textDecoration: 'none', color: theme.palette.jey.a0, Width: '100%', border: '1px solid crimson'}} to="/Indirect-Variations"><Typography textAlign='center' className='nav-button'>INDIRECT VARIATIONS</Typography></Link>
        <Link style={{textDecoration: 'none', color: theme.palette.jey.a0, Width: '100%', border: '1px solid crimson'}} to="/Joint-Variations"><Typography textAlign='center' className='nav-button'>JOINT VARIATIONS</Typography></Link>
        <Link style={{textDecoration: 'none', color: theme.palette.jey.a0, Width: '100%', border: '1px solid crimson'}} to="/Combined-Variations"><Typography textAlign='center' className='nav-button'>Combined VARIATIONS</Typography></Link>
      </Box>
    </>
  )
}

export default Navbar
