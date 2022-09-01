import { Nav, Menu, MenuMobile, Logo, Buttons,Links, Dropdown } from "../styles/Navbar.styles";
import iconLogo from "../assets/images/logo.svg"
import IconMenu from "../assets/images/icon-menu.svg"
import IconArrowdown from "../assets/images/icon-arrow-down.svg"
import IconTodoList from "../assets/images/icon-todo.svg"
import Iconcalendar from "../assets/images/icon-calendar.svg"
import IconReminders from "../assets/images/icon-reminders.svg"
import IconPlanning from "../assets/images/icon-planning.svg"
import { NavMobile } from "./NavMobile";


export default function Navbar(){
   return(<>
            <Nav>
               <Logo>
                  <img src={iconLogo} alt=""/>
               </Logo>
               <Menu>
                  <Links>
                     <Dropdown>
                        <a href="#">Features
                           <img src={IconArrowdown} alt="Icon Arrow"/>
                        </a>
                        <ul>
                           <li><img src={IconTodoList} alt=""/> Todo List</li>
                           <li><img src={Iconcalendar} alt=""/> Calendar</li>
                           <li><img src={IconReminders} alt=""/> Reminders</li>
                           <li><img src={IconPlanning} alt=""/> Planning</li>
                        </ul>
                     </Dropdown>
                     <Dropdown>
                        <a href="#">Company
                           <img src={IconArrowdown} alt="Icon Arrow"/>
                        </a>
                        <ul>
                           <li>History</li>
                           <li>Our Team</li>
                           <li>Blog</li>
                        </ul>
                     </Dropdown>
                     <li><a href="#">Carrees</a></li>
                     <li><a href="#">About</a></li>
                  </Links>
               </Menu>
               <Buttons>
                  <button>Login</button>
                  <button>Register</button>
               </Buttons>
               <MenuMobile>
                  <button><img src={IconMenu} alt=""/></button>
               </MenuMobile>
            </Nav>
            <NavMobile></NavMobile>
         </>
      )
}