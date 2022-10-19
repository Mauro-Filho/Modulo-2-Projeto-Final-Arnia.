import { MenuItemStyle } from './index.styled'

type Props = {
  icon: JSX.Element
  text: string
  url: string
  mainMenu: boolean
}

export function MenuItem({ icon, text, url, mainMenu }: Props) {
  return (
    <MenuItemStyle changeMenu={!mainMenu} to={url}>
      <span>{icon}</span>
      <span>{text}</span>
    </MenuItemStyle>
  )
}
