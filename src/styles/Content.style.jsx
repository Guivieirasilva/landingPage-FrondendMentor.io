import styled from "styled-components";
import "../index.css"

export const Container = styled.main`
   margin: auto;
   text-align: center;
   padding: 40px 0; 


`
export const GridContent = styled.div`
   display: grid;
   grid-template-columns: 40% 40%;  
   grid-template-areas: "article  section"  ;
   align-items: center;
   grid-gap: 10%;
   @media screen and (max-width:900px) {
      grid-template-columns: 90%;  
      grid-template-areas: "section"
                           "article"  ;
      margin-left: 5%;

   }

`

export const WrittenContent = styled.article`
      grid-area: article;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      min-height: 330px;
      margin-left: 10%;

      h1{
         color: var(--AlmostBlack);
         display: block;
         font-size: 3.1rem;
         text-align: start;
         padding-bottom: 50px;
      }
      p{
         font-size:18px ;
         text-align: start;
         padding-bottom: 50px;
      }
      button{
         font-size: 0.8rem;
         background-color: var(--AlmostBlack);
         color: var(--AlmostWhite);
         padding: 1em 1.2em;
         text-align: center;
         border-radius: 14px;
         border: 2px solid var(--MediumGray);
         transition: .5s;
         &:hover, &:focus{
            transform: scale(1.1, 1.1);
            border-color: var(--AlmostBlack);
            color: var(--AlmostBlack);
            background-color: transparent;
         }
      }
      @media screen and (max-width:980px) {
         margin-left: 10px;

         h1{
            font-size: 2.4rem;
         }
         p{
            font-size:15px ;
         }
         button{
            font-size: 0.6rem;
         }
      }

`
export const Companies = styled.footer`
   padding-top: 50px;
   margin-bottom: 20px;
   width: 100%;
   display: flex;
   -webkit-box-pack: justify;
   justify-content: space-between;
   -webkit-box-align: center;
   align-items: center;
   img {
      width: 80px;
   }
`

export const ImgContent = styled.section`
   grid-area: section;
   display: flex;
   width: 100%;
   margin-bottom: 40px;
   /* padding: 0px; */
   margin-right: 10%;
   
   img{
   width: 100%;
   }
   img:nth-child(2){
      display: none;
   }
   @media screen and (max-width:900px){

      margin: auto;

      img:nth-child(2){
         display: block;
      }
      img:nth-child(1){
      display: none;
   }
   }
`
