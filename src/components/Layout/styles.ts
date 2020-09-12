import Styled from 'styled-components'
import { Drawer as useDrawer, AppBar } from '@lib/Wrapper'

type Props = {
  sidebar: boolean
}
export const Container = Styled.div<Props>`
    display: grid;
    grid-template-areas: 
    'NB NB NB'
    'SB CB CB'; 
    width: 100vw;
    height:100vh;
    background: green;
     
    grid-template-rows: 75px calc(100vh - 75px) auto; /* Height */
    grid-template-columns: ${(props: any) =>
      !props.sidebar ? '80px auto auto' : '250px auto auto'};
    transition:  grid-template-columns 600ms ease-in-out;
`
export const NavBar = Styled(AppBar)`
  grid-area: NB;
  display: flex;
  background: yellow;
`

export const SideBar = Styled(useDrawer)`
  grid-area: SB;
  display: flex;
  background: red;

`

export const Content = Styled.div`
  grid-area: CB;
  display: flex;
  background: purple;
  padding: 0px 15px;

`
