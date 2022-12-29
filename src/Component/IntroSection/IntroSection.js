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
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-square-twitter"></i>
            </div>
            <Button>Hire Me</Button>
        </div>
    </div>
  )
}

export default IntroSection