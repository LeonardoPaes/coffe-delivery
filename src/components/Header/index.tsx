import {
  CartHeaderButton,
  HeaderContainer,
  LocationHeaderButton,
} from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'

import coffeLogo from '../../assets/coffe-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeLogo} alt="Logotipo" />
      <nav>
        <LocationHeaderButton to="/checkout">
          <MapPin size={20} weight="fill" />
          Porto Alegre, RS
        </LocationHeaderButton>
        <CartHeaderButton to="/checkout">
          <ShoppingCart size={20} weight="fill" />
        </CartHeaderButton>
      </nav>
    </HeaderContainer>
  )
}
