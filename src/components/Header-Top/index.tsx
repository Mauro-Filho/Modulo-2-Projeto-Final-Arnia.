import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiService } from '../../apiServices/apiService'
import { ChevronDownIcon } from '../../assets/icons/chevron down'
import { IconMenuHeader } from '../../assets/icons/icon-menu-header'
import { IconUser } from '../../assets/icons/Icon-user'
import { LogoutI } from '../../assets/icons/logout'
import { SettingTwo } from '../../assets/icons/setting-two'
import { ModalUser } from '../ModalUser'
import { ContainerModalUser, LoginImagetriangulo } from '../ModalUser/styled'

import {
  ButtonSwitchChevron,
  ButtonSwitchShortMenu,
  ContainerButtonShortMenu,
  ContainerTopUser,
  TopStyle,
  UserIconStyle,
  UserLog,
} from './index.styled'
import { UserTopH } from './topuser'

type HeaderProps = {
  largeMenu: () => void
  mainMenu: boolean
}

export function HeaderTop1({ largeMenu, mainMenu }: HeaderProps) {
  const [isShowModal, setIsShowModal] = useState(false)
  const navigate = useNavigate()

  const sairLogOut = () => {
    localStorage.clear()
    apiService.defaults.headers.common.Authorization = ''
    navigate('/', { replace: true })
  }
  return (
    <TopStyle changeMenu={!mainMenu}>
      <ContainerButtonShortMenu>
        <ButtonSwitchShortMenu type="button" onClick={largeMenu}>
          <IconMenuHeader />
        </ButtonSwitchShortMenu>
      </ContainerButtonShortMenu>
      <UserLog>
        <UserIconStyle>
          <IconUser />
        </UserIconStyle>
        <ContainerTopUser>
          <UserTopH email="Mauro-Dev@gmail.com" name="Mauro Filho" />
        </ContainerTopUser>
        <ButtonSwitchChevron
          type="button"
          onClick={() => setIsShowModal(!isShowModal)}
        >
          <ChevronDownIcon />
        </ButtonSwitchChevron>

        {isShowModal && (
          <ContainerModalUser>
            <LoginImagetriangulo />
            <ModalUser
              iconConfig={<SettingTwo />}
              textConfig="Configurações"
              iconLogOut={<LogoutI />}
              textLogOut="Sair"
              logout={sairLogOut}
            />
          </ContainerModalUser>
        )}
      </UserLog>
    </TopStyle>
  )
}
