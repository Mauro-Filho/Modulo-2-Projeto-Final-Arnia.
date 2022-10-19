import { LabelRemember, RememberBlock } from './checkbox.style'

type Props = {
  id: string
  htmlFor: string
  labelName: string
}

export function CheckboxRemember({ id, htmlFor, labelName }: Props) {
  return (
    <RememberBlock>
      <input id={id} type="checkbox" />
      <LabelRemember htmlFor={htmlFor}>{labelName}</LabelRemember>
    </RememberBlock>
  )
}
