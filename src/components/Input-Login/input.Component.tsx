import { ChangeEvent, useState } from 'react'
import { EyeClose } from '../../assets/icons/eye-off-line'
import { EyeLook } from '../../assets/icons/eyes'
import { ButtonEyes, EyesOnOF } from '../Login/index.style'
import { StyleInputLabel } from './inputLogin.style'

type InputProps = {
  htmlfor: string
  id: string
  value: string | number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  changeIsPassword: boolean
  labelText: string
  placeholder: string
}

export function ChangeEyesInput({
  htmlfor,
  id,
  value,
  onChange,
  changeIsPassword,
  labelText,
  placeholder,
}: InputProps) {
  const [isShowingPassword, setIsShowingPassword] = useState(!changeIsPassword)
  const isPassword = () => setIsShowingPassword(!isShowingPassword)
  return (
    <>
      <StyleInputLabel>
        <label htmlFor={htmlfor}>{labelText}</label>
        <input
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={isShowingPassword ? 'text' : 'password'}
        />
      </StyleInputLabel>

      {changeIsPassword && (
        <EyesOnOF>
          <ButtonEyes type="button" onClick={isPassword}>
            {isShowingPassword ? <EyeLook /> : <EyeClose />}
          </ButtonEyes>
        </EyesOnOF>
      )}
    </>
  )
}
