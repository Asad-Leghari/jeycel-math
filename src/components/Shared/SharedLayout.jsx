import { Box, Stack } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './SharedLayout.css'

const SharedLayout = ({darkMode, setdarkMode, theme}) => {
  return (
    <Box>
        <Stack>
            <Navbar theme={theme} darkMode={darkMode} setdarkMode={setdarkMode} />
            <Outlet />
            <Footer theme={theme} />
        </Stack>
    </Box>
  )
}

export default SharedLayout