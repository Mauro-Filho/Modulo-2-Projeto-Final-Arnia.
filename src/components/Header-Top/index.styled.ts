import styled from 'styled-components'
import { colorTheme } from '../../theme'

export type TopStyleProps = {
  changeMenu: boolean
}

export const TopStyle = styled.header<TopStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;

  left: 0 auto;
  width: ${({ changeMenu }) => (changeMenu ? '84.35%' : '92.5%')};
  position: fixed;
  right: 0;
  background-color: ${colorTheme.white};
  height: 110px;
  padding: 0 30px;
`

export const UserIconStyle = styled.div`
  background-color: ${colorTheme.primary};
  width: 56px;
  height: 56px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UserLog = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`
export const ContainerButtonShortMenu = styled.div`
  margin-top: 0px;
  width: 60.33px;
  height: 60.33px;
  margin-left: 0px;
`
export const ContainerTopUser = styled.div`
  display: flex;
  padding: 20px;
`

export const ButtonSwitchShortMenu = styled.button`
  width: 50.33px;
  height: 60.33px;
  left: 4.33px;
  top: 20.33px;
  background-color: ${colorTheme.white};
  color: #757575;
  border: none;
  /* border: 1px solid black; */
  &:hover {
    cursor: pointer;
  }
`

export const ButtonSwitchChevron = styled.button`
  background-color: ${colorTheme.white};
  border: none;
  &:hover {
    cursor: pointer;
  }
`

export const ContainerTopUserName = styled.div`
  font-family: 'Sora';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  color: ${colorTheme.grey900};
`

export const ContainerTopUserEmail = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  color: ${colorTheme.grey600};
`
