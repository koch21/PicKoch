import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Head from 'next/head'
import superagent from 'superagent'

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
    setMenuSize(height + 10.5)
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

// GetPictures
const simpleGet = options => {
  superagent.get(options.url).then(function (res) {
    if (options.onSuccess) options.onSuccess(res)
  })
}

// Main Function
const Home: React.FC = () => {
  // Function to save or remove image
  const clientID = ''
  const [photos, setPhotos] = useState([])
  const [query, setQuery] = useState('')
  const queryInput = useRef(null)

  const numberOfPhotos = 360
  const url =
    'https://api.unsplash.com/photos/random/?count=' +
    numberOfPhotos +
    '&client_id=' +
    clientID

  useEffect(() => {
    const photosUrl = query ? `${url}&query=${query}` : url

    simpleGet({
      url: photosUrl,
      onSuccess: res => {
        setPhotos(res.body)
      }
    })
  }, [query, url])

  const searchPhotos = e => {
    e.preventDefault()
    setQuery(queryInput.current.value)
  }

  return (
    <Container>
      <Head>
        <title>PicKoch</title>
      </Head>

      <Wrapper>
        <LeftSide>
          <h1>PicKoch</h1>
          <form
            id="unsplash-search"
            className="unsplash-search form"
            onSubmit={searchPhotos}
          >
            <input
              ref={queryInput}
              placeholder="Search Pictures"
              type="search"
              defaultValue=""
            />
          </form>
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
            {photos.map(photo => {
              return (
                <li key={photo.id}>
                  <img src={photo.urls.regular} />
                </li>
              )
            })}
          </figure>
        </Pictures>
      </Main>
    </Container>
  )
}

export default Home
