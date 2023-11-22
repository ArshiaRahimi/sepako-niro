import React from 'react'
import './navbar.css'
import Logo from'../logo.png'

const navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <img className="logo" src={Logo} alt="Logo" />
            <li><a class="active" href="default.asp">خانه</a></li>
            <li><a href="news.asp">پروژه‌ها</a></li>
            <li><a href="contact.asp">گالری</a></li>
            <li><a href="about.asp">تماس با ما</a></li>
        </ul>
    </div>
  )
}

export default navbar