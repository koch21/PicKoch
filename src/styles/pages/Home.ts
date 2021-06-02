import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: ${props => props.theme.colors.text};
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.background};
`

export const NavBarBar = styled.nav`
  height: 3rem;
  background-color: ${props => props.theme.colors.background};
  border-bottom: 0.8rem;
`

export const NavBarNav = styled.ul`
  display: flex;
  justify-content: flex-end;
  max-width: 100%;
  height: 100%;
`

export const NavItemLI = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(6rem * 0.8);
`

export const NavItemIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222;
  --button-size: calc(5rem * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  border-radius: 50%;
  padding: 0.5rem;
  margin: 0.2rem;
  transition: filter 300ms;

  &:hover {
    filter: brightness(1.6);
  }
`

export const DropDown = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.background};
  top: 4.3rem;
  width: 24rem;
  padding: 0.5rem;
  border-radius: 0.8rem;
  transform: translateX(-45%);
  border: 0.1rem solid;
  overflow: hidden;
`

export const MenuItem = styled.a`
  display: flex;
  height: 5rem;
  align-items: center;
  border-radius: 0.8rem;
  padding: 0.5rem;
  transition: background 300ms;

  &:hover {
    background-color: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.background};
  }
`

export const IconLeft = styled.span``

export const IconRight = styled.span`
  margin-left: auto;
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: row;

  input {
    background-color: ${props => props.theme.colors.text};
    width: 16rem;
    height: 2rem;
    margin-right: 2rem;
    padding-left: 0.5rem;
    border-radius: 0.4rem;
    border: none;
  }

  h1 {
    color: ${props => props.theme.colors.text};
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-left: 2rem;
    padding-right: 1rem;
    margin-bottom: 2px;
    font-size: 1.4rem;
    font-weight: bolder;
    letter-spacing: -0.092rem;
  }
`

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: row;
  margin-right: 14.6rem;
  padding-right: 4rem;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding-left: 2rem;
    text-decoration: none;
  }

  a {
    color: ${props => props.theme.colors.text};
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 2rem;

  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
  }
`

export const Main = styled.div`
  margin: 1rem 1rem;
  column-gap: 1rem;
  column-count: 5;
`

export const Pictures = styled.div`
  figure {
    display: flex;
    margin: 0;
    margin-bottom: 1rem;
    break-inside: avoid;
  }

  img {
    width: 100%;
    border-radius: 0.4rem;
  }
`
