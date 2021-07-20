import styled from 'styled-components'

export const FormContainer = styled.div`
  display:flex;
  width:400px;
  height:60vh;
  jusyify-content:center;
  align-items:center;
  flex-direction:column;
  background:white;
  padding:40px;
  margin-left:auto;
  margin-right:10vw;
  margin-top:30px;
  border: 2px solid #4b787630; 
  border-radius: 10px;
  
  @media screen and (max-width:900px){
    width:90%;
    max-width:400px;
    margin:auto;
  }

  button {
      margin-top:auto
  }
  h2{
    font-family:'Bowlby One', sans-serif
  }
`
export const FormEl = styled.form`
 display:flex;
 width:100%;
 flex-direction:column;
 margin-top:40px;
`


export const Input = styled.input`
 display:flex;
 width:300px;
 padding:5px;
 margin:10px auto;
 outline-style: none;
 border:1px solid ;
 @media screen and (max-width:960px){
    width:90%;
    
  }
`

export const TextArea = styled.textarea`
 display:flex;
 width:300px;
 padding:5px;
 margin:10px auto;
 outline-style: none;
 border:1px solid ;
 @media screen and (max-width:960px){
    width:90%;
    
  }
`