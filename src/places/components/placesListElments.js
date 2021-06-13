import styled from "styled-components";

export const PlacesListContainer=styled.div`
width:100%;
height:100%;
display:grid;
/* padding-top:48px; */
column-gap: 10px;
row-gap: 1em;
justify-content:start;
grid-template-columns: repeat(3, 1fr);

@media screen and (max-width:900px){
    grid-template-columns: repeat(2, 1fr);
}

@media screen and (max-width:768px){
    grid-template-columns: repeat(1, 1fr);
    padding-top:24px;
}
`