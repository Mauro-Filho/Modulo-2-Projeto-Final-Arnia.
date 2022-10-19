import { ChangeEvent, useState } from 'react'
import { ChangeEyesInput } from '../Input-Login/input.Component'
import {
  ContainerCheckAndForgot,
  DivStyled,
  ContainerImage,
  ButtonLoginStyle,
  ContainerBox,
  SubTitleStyle,
  TitleStyle,
  ContainerTitle,
} from './index.style'
import loginImage from '../../assets/images/loginImage.png'
import { CheckboxRemember } from '../Checkbox/checkbox'
import { ForgotPasswordLink } from '../ForgotPassword/forgotPassword'
import { authLogin } from '../../apiServices/Auth/Auth'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const doLogin = async () => {
    const postLogin = await authLogin(email, password)

    if (postLogin.logged) {
      window.location.href = '/dashboard'
    }
  }

  return (
    <ContainerBox>
      <ContainerBox>
        <DivStyled>
          <ContainerTitle>
            <SubTitleStyle>Seja bem vindo!</SubTitleStyle>
            <TitleStyle>Relize seu login</TitleStyle>
          </ContainerTitle>
          <div>
            <ChangeEyesInput
              htmlfor="email"
              id="email"
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event?.target.value)
              }
              placeholder="Insira seu e-mail"
              changeIsPassword={false}
              labelText="E-mail"
            />
            <ChangeEyesInput
              htmlfor="password"
              id="password"
              value={password}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPassword(event?.target.value)
              }
              placeholder="Insira sua senha"
              changeIsPassword
              labelText="Senha"
            />
          </div>

          <ContainerCheckAndForgot>
            <CheckboxRemember
              id="remember"
              htmlFor="remember"
              labelName="Lembrar-me"
            />
            <ForgotPasswordLink text="Esqueci minha senha" />
          </ContainerCheckAndForgot>
          <ButtonLoginStyle type="button" onClick={doLogin}>
            Entrar
          </ButtonLoginStyle>
        </DivStyled>
      </ContainerBox>
      <ContainerImage>
        <img
          src={loginImage}
          alt="Acompanhe sus vendas de um jeito fácil e simples."
        />
      </ContainerImage>
    </ContainerBox>
  )
}
