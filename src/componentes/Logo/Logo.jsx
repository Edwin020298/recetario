import React, { memo } from 'react';
import ReactLogo from '../../assets/images/logo.svg'
import './Logo.css'
const Logo = memo(() => {
    return <img className='logo' src={ReactLogo} alt='logo-app'/>
});

export default Logo;