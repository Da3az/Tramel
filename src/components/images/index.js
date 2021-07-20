import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import {
  ImagesContainer,
  ImagesTitle,
  ImagesGrid,
  ImageItem
} from './imageElements'


export default function Images({album}) {
    const data = useStaticQuery(graphql`
    query  {
        allFile(filter: {
                      extension : {regex: "/(jpg)|(png)|(jpeg)/"},
                      name: {nin:["background", "background2" , "background3" , "background4","gatsby-icon"]}        
                  }) {
          edges {
            node {
              base
              childImageSharp {
                fluid(quality: 90,maxHeight: 600,maxWidth: 600){
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    
    `)
    // return (
    //       <div className = "image-container">
    //           <h1>View our Destination</h1>
    //           <div className="image-grid">
    //               {data.allFile.edges.map((image, key) => (
    //                   <Img key = {key} 
    //                        className = 'image-item' 
    //                        fluid = {image.node.childImageSharp.fluid} 
    //                        alt = {image.node.base.split('.')[0]}
    //                   />
    //               ))}
    //           </div>
    //       </div>                 
    // ) 
    return (
      <ImagesContainer>
          <ImagesTitle>
            { !album ? 'Explore the world'
                    : 'Check our gallery'
            }
          </ImagesTitle>
          <ImagesGrid >
              {data.allFile.edges.map((image, key) => (
                <ImageItem album = {album}>
                  <Img key = {key} 
                       className = 'image-item' 
                       fluid = {image.node.childImageSharp.fluid} 
                       alt = {image.node.base.split('.')[0]}
                  />
                </ImageItem>  
              ))}
          </ImagesGrid>
      </ImagesContainer>                 
) 
}
