import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

function Navbar() {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext)
  const { state } = useContext(ThemeContext)
  const { isLightTheme, light, dark  } = state
  const theme = isLightTheme ? light : dark
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={()=> toggleAuth()}>
        Logged { isAuthenticated ? 'In' : 'Out' }
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
