import Styled from 'styled-components'
import {
  Drawer as useDrawer,
  Breadcrumb as useBreadCrumb,
  AppBar
} from '@lib/Wrapper'

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
     
    grid-template-rows: 75px calc(100vh - 75px) auto; /* Height */
    grid-template-columns: ${(props: any) =>
      !props.sidebar ? '80px auto auto' : '250px auto auto'};
    transition:  grid-template-columns 600ms ease-in-out;
     nav{
         margin-top: 73px !important;
         z-index: 1 !important;
     }
`
export const NavBar = Styled(AppBar)`
  grid-area: NB;
  display: flex;
`

export const SideBar = Styled(useDrawer)`
  grid-area: SB;
  display: flex;
 
`

export const Content = Styled.div`
  grid-area: CB;
  display: flex;
  padding: 0px 15px;
  margin-top: 26px;
  padding: 8px 0px;
  

`
export const Breadcrumb = Styled(useBreadCrumb)`

`
