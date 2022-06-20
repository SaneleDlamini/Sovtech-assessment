import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <a href='https://www.linkedin.com/in/sanele-dlamini-982197157' target="_blank"><FaLinkedin className='footer-icon' /></a>
            <a href='https://github.com/saneledlamini' target="_blank"><FaGithub className='footer-icon' /></a>
        </div>
    )
}

export default Footer
