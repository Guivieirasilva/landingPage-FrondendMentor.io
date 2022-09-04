import { Links, Buttons, Dropdown  } from "./Navbar.styles"

import styled, { css } from "styled-components"

export const Container = styled.div`

   background-color: #fafafa;
   position: absolute;
   display: none;
   flex-direction: column;
   justify-content: flex-start;
   height: 100vh;
   z-index: 10;
   right: 0;
   bottom: 0;
   opacity: 0;
   pointer-events: none;
   transition: .5s;
   transform: translateX(50px);
   gap: 5%;


   @media screen and (max-width:900px) {
      display: flex;
   }


   ${({isVisible}) => isVisible && css`  
      opacity: 1;
      pointer-events: auto;
      transform: translateX(0px);

   `}
`
export const IconButton = styled.button`
      align-self: flex-end;
      border: none;
      background-color: transparent;
      padding: 25px 40px;
      right: 2%;
      top:1%;
      transition:.7s;

`
export const MobileLink = styled(Links)`
   a{
      text-decoration: none;
   }
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 40%;
   padding: 10px;
   gap: 15%;

`
export const MobileDropdown = styled(Dropdown)` 
   transition: 4s;
   
   ul{
      margin:auto;
   }

   &:hover, &:focus{

      ul{
         background-color: whitesmoke;
         border:none;
         box-shadow: none;
      }
   }

`
export const MobileButtons = styled(Buttons)` 
   @media screen and (max-width:900px){

      justify-content: flex-end;
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: 40px;
   

      
   }
`

