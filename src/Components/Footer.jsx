import React from 'react'
import { useTheme  } from './utils/global.context';



const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={`${theme}`}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
