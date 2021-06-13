import styled from "styled-components";
import {Link} from "react-router-dom"

export const PlaceContainer=styled.div`
height:450px;
max-width:360px;
display:flex;
flex-direction:column;
margin:auto;
padding-top:0;
padding-right:0;
padding-left:0;
border-radius:10px 10px 0 0;
border-width:0.1px;
border-color:#b0b0b0;
border-style:solid;
z-index:2;
margin-top:48px;
justify-content:center;
overflow:hidden;
align-items:center;
background:white;
`

export const ImgWrapper=styled.div`
width:100%;
height:60%;
justify-content:center;
display:flex;
overflow:hidden;
object-fit:cover;
`

export const BodyWrapper=styled.div`
display:grid;
grid-template-columns:(1,1fr);
justify-content:start;
width:100%;
height:40%;
padding-top:5px;
padding-right:5px;
padding-left:5px;
`

export const Heading=styled.h3`
top:0;
font-size:24px;
text-align:left;
color:black;
`

export const Adress=styled.h5`
margin-top:5px;
font-size:18px;
text-align:left;
color:black;
`

export const Button = styled(Link)`
  background: white;
  justify-content:center;
  color: #000;
  font-size: 15px;
  align-items:center;
  text-align:center;
  padding: auto 0;
  border: 1px solid #b0b0b0;
  text-decoration:none;
  transition:0.2s ease-in-out;

  &:hover{
      background:#256ce1;
      color:white;
      text-decoration:none;
      transition:0.2s ease-in-out;

      
  }
  
`

export const ButtonWrapper=styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
width:100%;
height:10%;
bottom:0;
justify-content:start;
`

export const Des=styled.p`
margin-top:3px;
font-size:16px;
text-align:left;
color:black;
`