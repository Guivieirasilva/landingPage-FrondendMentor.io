import styled from "styled-components";

import "../index.css"

export const HeaderNav = styled.header`

   width: 100vw;
   background-color: var(--background);
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 1.5rem 3rem;
   color: var(--fontColor);

   .menu{
      position: absolute;
      right: 8%;
      display: none;

      @media screen and (max-width:900px){
         display: block;
      }
   }
`
export const Navbar = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 2rem;
      
   a{
      text-decoration: none;
      color: var(--fontColor);
      @media screen and (max-width:900px) {
      display: none;
      
 }

      &:hover, &:focus{
         color:var(--titleColor);
      }
   }
  

`
export const Dropdown = styled.div`

   position: relative;
   @media screen and (max-width:900px) {
      display: none;
      
 }

&:hover, &:focus{
      ul{
         opacity: 1;
         pointer-events: all; 
          
         li{
            pointer-events: all;
         }
      }

      img.arrow{
         transform: rotate(180deg);
      }
   }
   a{
      cursor: pointer;
    
   }
   ul{
      
      white-space: nowrap;
      list-style: none;
      margin-top: .5rem;
      padding: .7rem 1rem;
      flex-direction: column;
      position: absolute;
      background-color: white;
      box-shadow: .1rem .1rem .7rem gray;
      border-radius: 10px;
      opacity: 0;
      right: -1px;
      transition-duration: 1s;
      display: flex;
      pointer-events: none;
      

      li{
         
         padding: 10px;
         pointer-events: none;
         

         
         img{
            margin-right: .5rem;
         }
      }
   }
`
export const HeaderButtons = styled.div`
   display: flex;
   gap:3rem;
   align-items: center;
   justify-content: center;

   a{
      color: var(--fontColor);
      text-decoration: none;
      transition: .4s;
      &:hover, &:focus{
         color: var(--titleColor);
         transform: scale(1.1,1.1);
      }
   }
   button{
      cursor: pointer;
      padding: .5rem 1.3rem;
      border-radius: 12px;
      background-color: transparent;
      color: var(--fontColor);
      border-color: var(--titleColor);
      transition: .4s;

      &:hover, &:focus{
         color: var(--titleColor);
         transform: scale(1.1,1.1);
      }
 }
 @media screen and (max-width:900px) {
   display: none;
 }
`

