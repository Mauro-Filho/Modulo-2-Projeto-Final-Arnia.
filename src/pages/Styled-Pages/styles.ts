import styled from 'styled-components'
import { ReactNode } from 'react'
import { colorTheme } from '../../theme'

type TitlePagesProps = {
  children: ReactNode
}

export const TitlePages = styled.div<TitlePagesProps>`
  display: flex;
  width: 166px;
  height: 48px;
  margin-left: 36px;
  top: 162px;
  font-family: 'Sora';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 150%;
  align-items: center;
  color: ${colorTheme.grey900};
`
