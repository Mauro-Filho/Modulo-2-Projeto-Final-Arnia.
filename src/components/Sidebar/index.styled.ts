import styled from 'styled-components'
import { colorTheme } from '../../theme'

export type TopStyleProps = {
  changeMenu: boolean
}

export const SidebarStyle = styled.div<TopStyleProps>`
  display: flex;
  flex-direction: column;
  max-width: 18.5%;
  min-width: 7.5%;
  width: ${({ changeMenu }) => (changeMenu ? '7.5%' : '18.5%')};
  background: ${colorTheme.primary};
  min-height: 100vh;
`
export const LogoContainer = styled.div`
  width: 80%;
  padding: 8px;
  display: flex;
  margin-left: 22px;
  height: 68.4px;
  margin-top: 25px;
  color: ${colorTheme.white};
  /* border: 1px solid black; */
`
export type SidebarStyleProps = {
  changeMenu: boolean
}

export const MenuContainer = styled.div<SidebarStyleProps>`
  padding: 6px;
  margin-top: 15px;
`

export const HandsImg = styled.div<SidebarStyleProps>`
  position: relative;
  bottom: 100px;
  left: 15px;
  max-width: 100px;
  width: 100%;
  display: ${({ changeMenu }) => (changeMenu ? 'none' : 'flex')};
`

export const Help = styled.div<SidebarStyleProps>`
  display: ${({ changeMenu }) => (changeMenu ? 'none' : 'flex')};
  flex-direction: column;
  background: ${colorTheme.secondary};
  border-radius: 25px;
  margin: 21px;
  height: 192px;
  max-width: 223px;
  width: 100%;
  margin-top: 110px;
`
export const Paragram = styled.span`
  display: block;
  flex-direction: row;
  justify-content: center;
  margin-left: 20px;
  height: 68px;
  width: 187px;
  padding: 3px;
  margin-top: -133px;
  color: ${colorTheme.white};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
`
export const ButtonHelp = styled.button<SidebarStyleProps>`
  display: ${({ changeMenu }) => (changeMenu ? 'none' : 'flex')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 34px;
  gap: 10px;
  color: ${colorTheme.white};
  width: 100%;
  max-width: 171px;
  height: 38px;
  left: 46px;
  position: sticky;
  bottom: 180px;
  background: ${colorTheme.primary};
  border-radius: 100px;
  border: none;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
  }
`
