import styled from 'styled-components'


export const ImagesContainer = styled.div`
text-align: center;
margin: 150px 0px;

`

export const ImagesTitle = styled.h1`
margin-bottom: 64px;
`

export const ImagesGrid = styled.div`
display:grid;
grid-gap: 10px;
grid-template-columns:  repeat(auto-fill,minmax(250px,1fr));
grid-auto-rows:minxmax(50px, auto);
max-width: 1000px;
margin: 0 auto;
padding: 0 32px;
img:hover{
    transform:scale(1.1);
    transition: 0.6s all ease !important;
    cursor: pointer;
}
`

export const ImageItem = styled.div`
${({album}) => {
    console.log('album is ===>',album)
    return (!album && 
    `&:nth-child(5){
        grid-column-end: span 2;
    }
    &:nth-child(9){
    
        grid-column-end: span 2;
        grid-row-start: 4;
    }
    div{
        height:100%;
    }`

)}

}
`