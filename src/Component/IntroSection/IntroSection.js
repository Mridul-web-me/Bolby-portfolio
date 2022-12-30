import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Typewriter } from 'react-simple-typewriter'
import avatar from '../../Asset/avatar.jpg'
import './IntroSection.css'

const IntroSection = () => {
          
  return (
    <div className='introSection' id='section_1'>
        <div className='introContent'>
        <div className='avatar'>
        <img src={avatar} alt='avatar'/>
    </div>

            <h1>Md. Mridul Islam</h1>
            <div className='typewriter'>
            <p style={{ margin: 'auto 0', fontWeight: 'normal' }}>
            I'm a{' '}
            <span style={{ color: '#ffd15c', fontWeight: 'bold' }}>
              <Typewriter
                words={['Web Developer','Programmer', "Traveller", 'Gamer']}
                loop={0 | false}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            </p>
            </div>
            <div className='social-icon'>
            <a href="https://www.facebook.com/mridul.islam01" target="_blank"><i className="fa-brands fa-facebook"></i></a> 
            <a href="https://github.com/Mridul-web-me" target="_blank"><i className="fa-brands fa-github"></i></a> 
            <a href="https://www.linkedin.com/in/mridul-islam-1990a9155" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://twitter.com/23Mridul" target="_blank"><i className="fa-brands fa-square-twitter"></i></a> 
            </div>
            <Button>Hire Me</Button>
        </div>
    </div>
  )
}

export default IntroSection