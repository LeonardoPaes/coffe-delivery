import {
  CartHeaderButton,
  HeaderContainer,
  LocationHeaderButton,
} from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'

import coffeLogo from '../../assets/coffe-logo.svg'
import { CoffesContext } from '../../contexts/CoffesContex'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  const { cart } = useContext(CoffesContext)
  const cartamount =
    cart.length > 0
      ? cart.reduce((accumulator, cartItem) => {
          return accumulator + cartItem.quantity
        }, 0)
      : 0

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={coffeLogo} alt="Logotipo" />
      </Link>
      <nav>
        <LocationHeaderButton to="/checkout">
          <MapPin size={20} weight="fill" />
          Porto Alegre, RS
        </LocationHeaderButton>
        <CartHeaderButton to="/checkout" cartamount={cartamount}>
          <ShoppingCart size={20} weight="fill" />
        </CartHeaderButton>
      </nav>
    </HeaderContainer>
  )
}
