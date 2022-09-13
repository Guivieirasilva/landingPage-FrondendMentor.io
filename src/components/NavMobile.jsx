import IconArrowdown from "../assets/images/icon-arrow-down.svg"
import IconTodoList from "../assets/images/icon-todo.svg"
import Iconcalendar from "../assets/images/icon-calendar.svg"
import IconReminders from "../assets/images/icon-reminders.svg"
import IconPlanning from "../assets/images/icon-planning.svg"


import IconClose from "../assets/images/icon-close-menu.svg"
import { Container, IconButton, MobileButtons, MobileDropdown, MobileLink } from "../styles/NavMobile.style"
import { Dropdown } from "../styles/Navbar.styles";


export function NavMobile({menuIsVisible, setMenuIsVisible}){
   return(
         <Container isVisible={menuIsVisible}>
            
               <IconButton onClick={() => setMenuIsVisible(false)}><img src={IconClose} alt="Icone de fechar menu (X)" /></IconButton>
                     <MobileLink>
                        <MobileDropdown>
                           <a href="#">Features
                              <img src={IconArrowdown} alt="Icon Arrow"/>
                           </a>
                           <ul>
                              <li><img src={IconTodoList} alt=""/> Todo List</li>
                              <li><img src={Iconcalendar} alt=""/> Calendar</li>
                              <li><img src={IconReminders} alt=""/> Reminders</li>
                              <li><img src={IconPlanning} alt=""/> Planning</li>
                           </ul>
                        </MobileDropdown>
                        <MobileDropdown>
                           <a href="#">Company
                              <img src={IconArrowdown} alt="Icon Arrow"/>
                           </a>
                           <ul>
                              <li>History</li>
                              <li>Our Team</li>
                              <li>Blog</li>
                           </ul>
                        </MobileDropdown>
                        <li><a href="#">Carrees</a></li>
                        <li><a href="#">About</a></li>
                     </MobileLink>
                  <MobileButtons>
                     <button>Login</button>
                     <button>Register</button>
                  </MobileButtons>
            

         </Container>
      
   )
}