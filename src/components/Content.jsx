import ImgDesktop from "../assets/images/image-hero-desktop.png"
import ImgMobile from "../assets/images/image-hero-mobile.png"

import ClientData from "../assets/images/client-databiz.svg"
import ClientMaker from "../assets/images/client-maker.svg"
import ClientMeet from "../assets/images/client-meet.svg"
import ClientAudio from "../assets/images/client-audiophile.svg"


import { Companies, Container, GridContent, ImgContent, WrittenContent } from "../styles/Content.style"

export default function Content(){
   return(  
      <>
         <Container>
            <GridContent>
               <ImgContent>
                  <img src={ImgDesktop} alt="image of a person with a laptop " />
                  <img src={ImgMobile} alt="image of a person with a laptop " />

               </ImgContent>
               <WrittenContent>
                  <h1>Make Remote Work</h1>
                  <p>Get your team in sync, no metter your location. Streamline proccesses, crete team rituals, and watch productivity soar.</p>
                  <button>Learn More</button>
                  <Companies>
                     <img src={ClientData} alt="Logo Company DataBiz"/>
                     <img src={ClientAudio} alt="Logo Company AudioPhile"/>
                     <img src={ClientMeet} alt="Logo Company Meet"/>
                     <img src={ClientMaker} alt="Logo Company Maker"/>
                  </Companies>
               </WrittenContent>
               
            </GridContent>
         </Container>
      </>
   )
}