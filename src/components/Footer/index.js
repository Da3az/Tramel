import React from 'react'
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter,FaYoutube } from 'react-icons/fa'
import { FooterContainer,SocialIcon,SocialIcons,SocialIconLink,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights } from './FooterElements'
import { GiCamelHead } from 'react-icons/Gi'
export default function Footer() {
    return (
        
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to = "/">
                        <SocialIcon >
                          <GiCamelHead></GiCamelHead>
                        </SocialIcon>
                    </SocialLogo>
                    <WebsiteRights> Tramel © {new Date().getFullYear}</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook" ><FaFacebook/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram" ><FaInstagram/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube" ><FaYoutube/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter" ><FaTwitter/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn" ><FaLinkedin/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
         
        
    )
}
