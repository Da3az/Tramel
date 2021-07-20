import React , { useState,useEffect } from 'react'
import { FaBars , FaTimes } from "react-icons/fa"
import { GiCamelHead } from "react-icons/Gi"
import { IconContext } from "react-icons/lib"
import { 
    Nav,
    NavIcon,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavLinks,
    NavMenu,
    NavItem
} from './NavbarElements'


export default function Navbar() {

    const [click, setClick] = useState(false)
    const [scroll,setScroll] = useState(false)

    const handleClick = () => setClick(!click)
    
    const changeNav = () =>{

        if(window.scrollY >= 150){
            setScroll(true)
            console.log('scrolled')
        }else{
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll",changeNav)
    },[])

    return (
        <>
         <IconContext.Provider value={{color:"#141414"}}>      
          <Nav active = {scroll} click = {click}>
            <NavbarContainer>
             <NavLogo to = "/">
                <NavIcon>
                    <GiCamelHead></GiCamelHead>
                </NavIcon>
             </NavLogo>
             <MobileIcon onClick = {handleClick}>
                 {click ? <FaTimes/> : <FaBars />}
             </MobileIcon>
             <NavMenu onClick = {handleClick} click = {click} active = {scroll}>
                <NavItem >
                    <NavLinks to="/">Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/contact">Contact</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/album">Images</NavLinks>
                </NavItem>                
             </NavMenu>
            </NavbarContainer> 
          </Nav>
         </IconContext.Provider>
        </>
    )
}
