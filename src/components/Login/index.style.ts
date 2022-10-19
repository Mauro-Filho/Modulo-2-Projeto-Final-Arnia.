import styled from 'styled-components'
import { colorTheme } from '../../theme'

export const ContainerBox = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 60%;
  align-content: center;
  justify-content: center;
`

export const ContainerTitle = styled.div`
  justify-content: flex-start;
  margin-right: 70px;
`

export const ContainerImage = styled.div`
  display: flex;
  height: 100%;
  width: 40%;
  align-content: center;
  justify-content: center;
  background-color: #001c98;
`

export const SubTitleStyle = styled.p`
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 10px;
  font-family: 'Sora';
`
export const TitleStyle = styled.h3`
  font-family: 'Sora';
  font-weight: 700;
  font-size: 36px;
  color: ${colorTheme.grey900};
  margin-bottom: 40px;
`

export const ContainerCheckAndForgot = styled.div`
  width: 360px;
  display: flex;
  margin: 16px;
  margin-left: 16px;
  justify-content: space-between;
  margin-top: 5px;
`
export const ForgotPassword = styled.a`
  color: ${colorTheme.grey700};
  font-size: 16px;
  font-weight: 400;
`
export const ButtonLoginStyle = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 55px;
  margin-left: 6px;
  padding: 12px 70px;
  background-color: ${colorTheme.primary};
  border-radius: 18px;
  color: ${colorTheme.white};
  font-size: 16px;
  font-weight: 400;
  border: none;
  cursor: pointer;
  margin-top: 25px;
`

export const EyesOnOF = styled.div`
  position: relative;
  left: 348px;
  top: -62px;
  width: 31px;
  height: 36px;
`
export const ButtonEyes = styled.button`
  background: none;
  border: none;
`
