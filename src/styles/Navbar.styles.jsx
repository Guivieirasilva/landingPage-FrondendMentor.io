import {styled } from "styled-components";
import "../index.css"

export const Nav = styled.nav`
   background-color: #fafafa;
   width: 100%;
   display: grid;
   grid-template-columns: 1fr 4fr 1fr;
   padding: 1.5rem 2rem;
   transition: .5s;
   a{
      text-decoration: none;
      transition: 1s;

      &:hover{
         color: black;
      }
   }
   @media screen and (max-width: 900px) {
      width: 100%;
      display: flex;
      justify-content: space-between;
   }
`
export const Logo = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   img{
      width: 120px;
   }
`
export const Menu = styled.div`
   display: flex;
   align-items: center;
   font-weight: 700;
   transition-duration: 1s ;
   @media screen and (max-width: 900px) {
      display: none;

      
   }
`
export const Links = styled.ul`
   width: 420px;
   list-style: none;
   display: flex;
   justify-content: space-between;
`
export const Dropdown = styled.li`

   position: relative;

   &:hover, &:focus {
      
      ul{
            opacity: 1;
            pointer-events:all;
            
         }
   }

   a{

      &:hover, &:focus {
         transition-duration: 1s;
         
         img{
            transform: rotate(180deg);
         }
      }
      img{
         margin-left: 3px;
         padding: 1px;
      }
   }
   ul{
      cursor: pointer;
      pointer-events: none;
      opacity: 0;
      background-color: #f2f2f2;
      position: absolute;
      display: flex;
      align-items: center;
      list-style:none;
      flex-direction: column;
      top: 1.4rem;
      justify-content: center;
      padding: 15px;
      width: 140px;
      right: 0;
      gap: 15px;
      box-shadow: .2rem .3rem .6rem gray;
      border-radius: 10px;
      transition: .5s;
      z-index: 40;
      
      li{
         font-size: 13px;
         transition: .4s;

         &:hover, &:focus{ color:gray; }

         img{
            margin-right: 5px;
         }
      }
   }
`
export const Buttons = styled.div`

   display: flex;
   align-items: center;
   flex-direction: row;
   gap: 2rem;


   button{
      background-color: transparent;
      font-size: 15px;
      transition-duration: 1s;

      &:hover, &:focus{
         transform: scale(1.1,1.1);
      }
   }

   button:nth-child(1){
      border: none;

   }
   button:nth-child(2){
      padding: 10px;
      border-radius: 10px;

   }
   @media screen and (max-width: 900px) {
      display: none;

      
   }

`
export const MenuMobile = styled.div`
   display: none;

   @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
      button{
         border: none;
         background-color: transparent;
      }
      
   }

`