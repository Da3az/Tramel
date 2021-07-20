import styled from 'styled-components'
import { GiCamelHead } from "react-icons/Gi"
import { Link } from 'gatsby'

export const Nav = styled.nav`
 background: ${({active}) => active ? "#fff0":"linear-gradient(to bottom , rgba(255,255,255,0.9) 0% , #8aa9b7 100% )"};
 height: 80px;
 display: flex;
 justify-content:center;
 align-items:center;
 font-size:1rem;
 position:sticky;
 top:0;
 z-index:999;

 @media screen and (max-width:960px) {
     background:${({click}) => (click ? "#fff" : "transparent")};
     transition:0.8s all ease;
 }

`

export const NavbarContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items:  center;
 height: 80px;
 z-index: 1;
 width: 100%;
 max-width: 1200px;
`

export const NavLogo = styled(Link)`
 color:#141414;
 justify-self:flex-start;
 cursor:pointer;
 text-decoration:none;
 font-size:1.5rem;
 display:flex;
 aligh-items:center;
 color:#ff4040;
`
export const NavIcon = styled(GiCamelHead)`
 margin:0 0.5rem 0 2rem;
 color:#ff4040 !important;
`

export const MobileIcon = styled.div`
  display : none;
  @media screen and (max-width:960px) {
      display:block;
      position:absolute;
      top:0;
      right:0;
      transform: translate(-100%,60%);
      font-size:1.8rem;
      cursor:pointer ;
      
  }
`

export const NavItem = styled.li`
 height : 80px;
 align-items:center;
 display:flex;


 @media screen and (max-width: 960px) {
   width:100%
 }

`

export const NavMenu = styled.ul`
 display : flex;
 align-items: center;
 list-style: none;
 text-aligh: center;
 flex-direction: row;
 opacity:${({active}) => (active ? 0.5 : 1)};
 font-weight:900;
 &:hover {
  opacity:1 !important;
  
 }
 @media screen and (max-width:960px){
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 90vh;
   position: absolute;
   top: ${({click}) => (click ? '100%' : "-1000px")};
   opacity:1;
   transition: all 0.2s ease;
   background: #fff;
 }
 `
 export const NavLinks = styled(Link)`
 color: #141414;
 display:flex;
 align-items:cemter;
 text-decoration: none;
 padding: 0.5rem 1rem;
 &:hover {
  color : #ff4040;
  transition: all 0.3s ease;

 }

 @media screen and (max-width: 960px) {
   text-align: center;
   padding: 2rem;
   width: 100%;
   display: table;
 }
 `


