import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Head from 'next/head'

// Styles
import HomeIcon from '@material-ui/icons/Home'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import PersonIcon from '@material-ui/icons/Person'
import SettingIcon from '@material-ui/icons/Settings'
import FaceIcon from '@material-ui/icons/Face'
import ArrowLeftIcon from '@material-ui/icons/ArrowBack'
import DropDownIcon from '@material-ui/icons/ArrowDropDown'
import {
  Container,
  Wrapper,
  Main,
  Pictures,
  LeftSide,
  Nav,
  NavMenu,
  NavBarBar,
  NavBarNav,
  NavItemLI,
  NavItemIcon,
  DropDown,
  Menu,
  MenuItem,
  IconLeft,
  IconRight
} from '../styles/pages/Home'

// Imports
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'
import img9 from '../assets/9.jpg'
import img10 from '../assets/10.jpg'

// DropDown Menu
function NavBar(props) {
  return (
    <NavBarBar>
      <NavBarNav>{props.children}</NavBarNav>
    </NavBarBar>
  )
}
function NavItem(props) {
  const [toggle, setToggle] = useState(false)

  return (
    <NavItemLI>
      <NavItemIcon href="#" onClick={() => setToggle(!toggle)}>
        {props.icon}
      </NavItemIcon>

      {toggle && props.children}
    </NavItemLI>
  )
}
function DropDownMenu() {
  const [activeMenu, setActiveMenu] = useState('main') // settings
  const [menuSize, setMenuSize] = useState(null)

  function calcSize(event) {
    const height = event.offsetHeight
    setMenuSize(height + 6)
  }
  function DropDownItem(props) {
    return (
      <MenuItem
        href="#"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <IconLeft>{props.leftIcon} </IconLeft>
        {props.children}
        <IconRight>{props.rightIcon} </IconRight>
      </MenuItem>
    )
  }
  return (
    <DropDown style={{ height: menuSize, paddingBottom: 4 }}>
      {/* Main Menu */}
      <CSSTransition
        in={activeMenu === 'main'}
        classNames="fade"
        timeout={200}
        unmountOnExit
        onEnter={calcSize}
      >
        <Menu>
          <DropDownItem>
            <PersonIcon /> &nbsp; My Profile
          </DropDownItem>
          <DropDownItem>
            <SettingIcon /> &nbsp; Settings
          </DropDownItem>
          <DropDownItem
            leftIcon={<FaceIcon />}
            goToMenu="settings"
          ></DropDownItem>
        </Menu>
      </CSSTransition>

      {/* Left Menu */}
      <CSSTransition
        in={activeMenu === 'settings'}
        classNames="fade-secondary"
        timeout={200}
        unmountOnExit
        onEnter={calcSize}
      >
        <Menu>
          <DropDownItem goToMenu="main">
            <ArrowLeftIcon /> &nbsp; Back
          </DropDownItem>
          <DropDownItem leftIcon={<FaceIcon />}></DropDownItem>
          <DropDownItem leftIcon={<FaceIcon />}></DropDownItem>
          <DropDownItem leftIcon={<FaceIcon />}></DropDownItem>
          <DropDownItem leftIcon={<FaceIcon />}></DropDownItem>
          <DropDownItem leftIcon={<FaceIcon />}></DropDownItem>
          <DropDownItem leftIcon={<FaceIcon />}></DropDownItem>
          {/* <DropDownItem rightIcon={<GroupIcon />}></DropDownItem> */}
        </Menu>
      </CSSTransition>
    </DropDown>
  )
}

// Main Function
const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>PicKoch</title>
      </Head>

      <Wrapper>
        <LeftSide>
          <h1>PicKoch</h1>
          <input type="text" placeholder="Search Pictures" />
        </LeftSide>
        <Nav>
          <ul>
            <li>
              <a href="#">
                <HomeIcon style={{ fontSize: 28 }} />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <BookmarkIcon style={{ fontSize: 28 }} />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <AddCircleIcon style={{ fontSize: 28 }} />
              </a>
            </li>
          </ul>
        </Nav>
        <NavMenu>
          <NavBar>
            <NavItem icon={<DropDownIcon />}>
              <DropDownMenu />
            </NavItem>
          </NavBar>
        </NavMenu>
      </Wrapper>

      <Main>
        <Pictures>
          <figure>
            <img src={img1} />
          </figure>
          <figure>
            <img src={img2} />
          </figure>
          <figure>
            <img src={img3} />
          </figure>
          <figure>
            <img src={img4} />
          </figure>
          <figure>
            <img src={img5} />
          </figure>
          <figure>
            <img src={img6} />
          </figure>
          <figure>
            <img src={img7} />
          </figure>
          <figure>
            <img src={img8} />
          </figure>
          <figure>
            <img src={img9} />
          </figure>
          <figure>
            <img src={img10} />
          </figure>
          <figure>
            <img src={img1} />
          </figure>
          <figure>
            <img src={img2} />
          </figure>
          <figure>
            <img src={img3} />
          </figure>
          <figure>
            <img src={img4} />
          </figure>
          <figure>
            <img src={img5} />
          </figure>
          <figure>
            <img src={img6} />
          </figure>
          <figure>
            <img src={img7} />
          </figure>
          <figure>
            <img src={img8} />
          </figure>
          <figure>
            <img src={img9} />
          </figure>
          <figure>
            <img src={img10} />
          </figure>
          <figure>
            <img src={img1} />
          </figure>
          <figure>
            <img src={img2} />
          </figure>
          <figure>
            <img src={img3} />
          </figure>
          <figure>
            <img src={img4} />
          </figure>
          <figure>
            <img src={img5} />
          </figure>
          <figure>
            <img src={img6} />
          </figure>
          <figure>
            <img src={img7} />
          </figure>
          <figure>
            <img src={img8} />
          </figure>
          <figure>
            <img src={img9} />
          </figure>
          <figure>
            <img src={img10} />
          </figure>
        </Pictures>
      </Main>
    </Container>
  )
}

export default Home
