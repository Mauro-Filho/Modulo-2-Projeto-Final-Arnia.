import styled from 'styled-components'
import loginImage from '../../assets/images/loginImage.png'

export const Container = styled.div`
  display: flex;
`
export const ContainerMain = styled.div`
  display: flex;
  border: 1px solid pink;
  margin-top: 120px;
  /* min-height: 100vh; */
`
export const LoginImageStyles = styled.div`
  display: flex;
  background: green url(${loginImage}) no-repeat top right;
`
