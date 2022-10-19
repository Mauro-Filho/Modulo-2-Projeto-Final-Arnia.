import styled from 'styled-components'
import { colorTheme } from '../../theme'

export const StyleInputLabel = styled.div`
  position: relative;
  margin: 25px;

  label {
    position: absolute;
    top: -9px;
    left: 1px;
    font-weight: 400;
    font-size: 14px;
    color: ${colorTheme.inputBorder};
    background-color: ${colorTheme.white};
    &:hover {
      top: -9px;
      left: 1px;
      font-weight: 400;
      font-size: 14px;
      background-color: ${colorTheme.white};
      cursor: pointer;
    }
  }

  input {
    width: 360px;
    border: 1px solid ${colorTheme.inputBorder};
    border-radius: 12px;
    padding: 15px 30px 12px 20px;
    font-size: 16px;
  }
  input:hover {
    border: 1px solid ${colorTheme.inputBorderHover};
    border-radius: 12px;
    padding: 15px 30px 12px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }
`
