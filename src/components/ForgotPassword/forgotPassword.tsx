import { ForgotPassword } from './forgotPassword.style'

type Props = {
  text: string
}

export function ForgotPasswordLink({ text }: Props) {
  return <ForgotPassword>{text}</ForgotPassword>
}
