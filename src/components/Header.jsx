import { HeaderNav, Navbar, Dropdown, HeaderButtons } from "../styles/Header.style"
import Logo from "../assets/images/logo.svg"
import ArrowUp from "../assets/images/icon-arrow-up.svg"
import ArrowDown from "../assets/images/icon-arrow-down.svg"
import List from "../assets/images/icon-todo.svg"
import Calender from "../assets/images/icon-calendar.svg"
import Reminders from "../assets/images/icon-reminders.svg"
import Planning from "../assets/images/icon-planning.svg"



export function Header(){
   return (
      <HeaderNav>
         <Navbar>
            <img src={Logo} alt="Logo - Palavra Snap"/>
            <Dropdown>
               <a>Features <img src={ArrowDown}/></a>
               <ul>
                  <li><a href="#"><img src={List} alt="" /> Todo List</a></li>
                  <li><a href="#"><img src={Calender} alt="" /> Calender</a></li>
                  <li><a href="#"><img src={Reminders} alt="" /> Reminders</a></li>
                  <li><a href="#"><img src={Planning} alt="" /> Planning</a></li>

               </ul>
            </Dropdown>
            <Dropdown>
               <a>Company <img src={ArrowDown}/></a>
               <ul> 
                  <li><a href="#">History</a></li>
                  <li><a href="#">Our Team</a></li>
                  <li><a href="#">Blog</a></li>
               </ul>
            </Dropdown>
            <a href="#">Carrers</a>
            <a href="#">About</a>
         </Navbar>
         <HeaderButtons>
            <a href="#">Login</a>
            <button>Register</button>
         </HeaderButtons>
      </HeaderNav>
   )
}