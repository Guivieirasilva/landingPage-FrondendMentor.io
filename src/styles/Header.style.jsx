import styled from "styled-components";
import listIcon from "../assets/images/icon-calendar.svg"  
import "../index.css"

export const HeaderNav = styled.header`
   width: 100vw;
   background-color: var(--background);
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 1.5rem 3rem;
   color: var(--fontColor);

`

export const Navbar = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 2rem;
      
   a{
      text-decoration: none;
      color: var(--fontColor);

      &:hover, &:focus{
         color:var(--titleColor);
      }
   }

`
export const Dropdown = styled.div`

   position: relative;

&:hover{
      ul{
         opacity: 1;
         pointer-events: all;
      }
   }
   p{
      cursor: pointer;
   }
   ul{
      /* width: 100px; */
      white-space: nowrap;
      list-style: none;
      margin-top: .8rem;
      padding: 1rem;
      flex-direction: column;
      position: absolute;
      background-color: white;
      box-shadow: .1rem .1rem .7rem gray;
      border-radius: 10px;
      display: flex;
      opacity: 0;
      pointer-events: none;
      right: -1px;
      transition-duration: .8s;

      li{
         padding: 8px;
         pointer-events: all;
         
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
`
