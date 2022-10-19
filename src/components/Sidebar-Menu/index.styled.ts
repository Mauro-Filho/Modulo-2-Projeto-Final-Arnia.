import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colorTheme } from '../../theme'

type ItemStyleProps = {
  changeMenu: boolean
}

export const MenuItemStyle = styled(Link)<ItemStyleProps>`
  text-decoration: none;
  color: ${colorTheme.white};
  display: flex;
  gap: ${({ changeMenu }) => (changeMenu ? '70px' : '20px')};
  padding: 1rem;
  border-radius: 8px;
  width: 255px;
  height: 56px;
  display: ${({ changeMenu }) => (changeMenu ? '133px' : '271px')};
  margin-bottom: 10px;
  margin-left: ${({ changeMenu }) => (changeMenu ? '30px' : '0px')};

  &:hover {
    background-color: ${colorTheme.blueHighlight};
    width: ${({ changeMenu }) => (changeMenu ? '60px' : '255px')};
  }
`
