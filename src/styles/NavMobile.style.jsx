import { Links, Buttons  } from "./Navbar.styles"

import styled, { css } from "styled-components"

export const Container = styled.div`
   background-color: #f2f2f2;
   position: absolute;
   display: none;
   flex-direction: column;

   height: 100vh;
   z-index: 10;
   right: 0;
   bottom: 0;
   align-items: center;
   opacity: 0;
   pointer-events: none;
   transition: .5s;
   transform: translateX(50px);
   text-align: center;

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

   justify-content: space-between;
   height: 60%;
   padding: 50px;
`
export const MobileButtons = styled(Buttons)` 
   @media screen and (max-width:900px){

      display: flex;
      flex-direction: column;
      padding: 40px;
   

      
   }
`

