import React, { useRef, useState } from 'react'
import './navbar.css'
import logo from '../../assets/mainlogo1.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_option from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

function navbar() {
  const [menu,setMenu] = useState("home");
  const menuRef= useRef();
  const openMenu =() => {
    menuRef.current.style.right='0';

  }
  const closeMenu =() => {
    menuRef.current.style.right='-350px';
    
  }
  return (
    <div className='navbar'>
<img src={logo} alt=""  />
<img src={menu_option}  onClick={openMenu} alt="" className='nav-mob-open' />
<ul ref={menuRef} className="nav-menu">
<img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
  <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu=='home'? <img src={underline}/>:<></>}</li>
  <li><AnchorLink className='anchor-link' offset={50} href='#about1'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu=='about'? <img src={underline}/>:<></>}</li>
  <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu=='services'? <img src={underline}/>:<></>}</li>
  <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>portfolio</p></AnchorLink>{menu=='work'? <img src={underline}/>:<></>}</li>
  <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>contact</p></AnchorLink>{menu=='contact'? <img src={underline}/>:<></>}</li>
</ul>
<div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact Me</p></AnchorLink></div>
    </div>
  )
}

export default navbar