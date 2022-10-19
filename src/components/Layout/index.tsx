import { ReactNode, useState } from 'react'
import { Container } from '../Login/styles.login'
import { HeaderTop1 } from '../Header-Top'
import { SidebarComplete } from '../Sidebar'
import { Wrapper } from './index.styled'

type PropsLayout = {
  children: ReactNode
}

export function LayoutPage({ children }: PropsLayout) {
  const [mainMenu, setmainMenu] = useState(true)
  const guardMenuChange = () => setmainMenu(!mainMenu)

  return (
    <div>
      <Container>
        <HeaderTop1 largeMenu={guardMenuChange} mainMenu={!mainMenu} />
        <SidebarComplete mainMenu={mainMenu} suportText="Fale conosco" />
        <Wrapper>{children}</Wrapper>
      </Container>
    </div>
  )
}
