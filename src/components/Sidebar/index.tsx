// import { type } from '@testing-library/user-event/dist/type'
import { Chartline } from '../../assets/icons/chart-line'
import { FacialCleanser } from '../../assets/icons/facial-cleanser'
import { PieTwo } from '../../assets/icons/pie-two'
import { Logo } from '../../assets/icons/logo'
import {
  LogoContainer,
  // MenuContainer,
  SidebarStyle,
  Help,
  HandsImg,
  Paragram,
  ButtonHelp,
  MenuContainer,
  // Paragram2,
} from './index.styled'
import Hands from '../../assets/images/hands.png'
// import { MenuItemStyle } from '../Sidebar-Menu/index.styled'
import { MenuItem } from '../Sidebar-Menu'
// import { MenuItem, MenuItem1 } from '../Sidebar-Menu/index';
// import { MenuItemStyle } from '../Sidebar-Menu/index.styled'
// import { LogoContainer, SidebarStyle, MenuContainer } from '../index' /////
// import// { Button } from '../Button/Input.styles'

const menuOptions = [
  {
    icon: <PieTwo />,
    text: 'Dashboard',
    url: '/dashboard',
  },
  {
    icon: <Chartline />,
    text: 'Predições',
    url: '/predicoes',
  },
  {
    icon: <FacialCleanser />,
    text: 'Produtos',
    url: '/produtos',
  },
]
// type ItemAProps = {
//   icon: JSX.Element
//   text: string
//   url: string
//   mainMenu: boolean
// }
type MenuProps = {
  suportText: string
  mainMenu: boolean
}

export function SidebarComplete({ suportText, mainMenu }: MenuProps) {
  return (
    <SidebarStyle changeMenu={!mainMenu}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MenuContainer changeMenu={!mainMenu}>
        {menuOptions.map(item => (
          <MenuItem
            icon={item.icon}
            text={item.text}
            url={item.url}
            key={item.url}
            mainMenu={mainMenu}
          />
        ))}
      </MenuContainer>

      <Help changeMenu={!mainMenu}>
        <HandsImg changeMenu={!mainMenu}>
          <img src={Hands} alt="Mãos Unidas" />
        </HandsImg>
        <Paragram>
          Precisando de <strong>ajuda ou suporte</strong> em algo?
        </Paragram>
      </Help>
      <ButtonHelp
        changeMenu={!mainMenu}
        type="button"
        // eslint-disable-next-line no-alert
        onClick={() => alert('Botão não implementado')}
      >
        {suportText}
      </ButtonHelp>
    </SidebarStyle>
  )
}

// export function MenuItem2({ icon, text, url, mainMenu }: ItemAProps) {
//   return (
//     <MenuItemStyle changeMenu={!mainMenu} to={url}>
//       <span>{icon}</span>
//       <span>{text}</span>
//     </MenuItemStyle>
//   )
// }
