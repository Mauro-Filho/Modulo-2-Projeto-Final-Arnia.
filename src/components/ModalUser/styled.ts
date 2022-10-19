import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { colorTheme } from '../../theme/index'

const transitionModal = keyframes`
from {
  opacity: 0
}
to{
  opacity: 1;
}
`

export const WarperModalUser = styled.div`
  width: 200px;
  height: 100px;
  padding: 14px 10px 0px 10px;
  background: ${colorTheme.white};
  box-shadow: 0px 7px 20px rgba(187, 192, 205, 0.4);
  border-radius: 24px;
  animation: ${transitionModal} 300ms linear 1;
`
export const ContentModalUser = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContainerConfig = styled.div`
  display: flex;
`
export const ContainerLogout = styled.div`
  display: flex;
  margin-top: 10px;
`
export const LinkLogOut = styled(Link)`
  text-decoration: none;
  &:active {
    color: ${colorTheme.grey600};
  }
`
export const LineModalUser = styled.hr`
  background: ${colorTheme.grey200};
`

export const SpanTextConfig = styled.span`
  margin: 0px 20px 0px 10px;
`
export const LoginImagetriangulo = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 34.6px solid white;
  margin-left: 152px;
  margin-top: 20px;
  top: 10px;
  position: relative;
`
export const ContainerModalUser = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
`
