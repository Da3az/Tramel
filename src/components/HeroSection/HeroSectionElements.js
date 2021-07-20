import styled from 'styled-components'

import ImgSrc from '../../images/background3.jpg';
import ImgSrc2 from '../../images/background4.jpg';

export const Hero = styled.div`
background:url(${({home}) =>  (home ? ImgSrc : ImgSrc2) })center center/cover no-repeat;
height: 100vh;
width: 100%;
display:flex;
flex-direction: column;
justify-content:${({home}) =>  (home ? 'center' : 'start') };
padding-top:${({home}) =>  (home ? '0px' : '100px') };
align-items:center;
box-shadow:  inset 0 0 0 1000px rgba(0,0,0,0.2);
object-fit: contain;
margin-top: -80px;
`

// export const HeroWrapper = styled.div`
//  margin:auto
// `

export const HeroTitle = styled.h1`
 margin:40px 40px;
 font-size:40px
`

export const HeroDescription = styled.p`
 margin:40px 40px;
 font-size:20px
`

// export const HeroButton = styled.button`
//  backgound-color:
// `