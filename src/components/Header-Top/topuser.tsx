import { ContainerTopUserEmail, ContainerTopUserName } from './index.styled'

type Props = {
  name: string
  email: string
}
export function UserTopH({ name, email }: Props) {
  return (
    <section>
      <ContainerTopUserName>{name}</ContainerTopUserName>
      <ContainerTopUserEmail>{email}</ContainerTopUserEmail>
    </section>
  )
}
