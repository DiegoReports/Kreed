import * as S from './styles'

import Logo from '../../molecules/Logo'
import Menu from '../../organisms/Header/Menu'
import Button from '../../atoms/Button'

const Header = () => {
  return <S.Box>
    <Logo />
    <Menu />
    <Button />
  </S.Box>
}

export default Header