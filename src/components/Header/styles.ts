import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

// const colorsDeclaration = {
//   "purple": {
//     "background": "purple-100",
//     "color": "purple-500"
//   },
//   "yellow": {
//     "background": "yellow-100",
//     "color": "yellow-500"
//   }
// }

// interface HeaderButtonProps {
//   variant: "purple" | "yellow"
// }

interface CartHeaderButtonProps {
  cartamount: number
}

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;

  nav {
    display: flex;
    gap: 0.75rem;
  }

  @media (min-width: 1300px) {
    padding: 2rem 7rem;
  }
`

export const BaseHeaderButton = styled(NavLink)`
  display: flex;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  text-decoration: none;
`

export const LocationHeaderButton = styled(BaseHeaderButton)`
  background: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-500']};
`

export const CartHeaderButton = styled(BaseHeaderButton)<CartHeaderButtonProps>`
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-500']};
  position: relative;

  :before {
    content: '${(props) => props.cartamount}';
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;

    width: 1.25rem;
    height: 1.25rem;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-800']};

    border-radius: 50%;

    position: absolute;
    right: -6.35px;
    top: -8px;
  }
`
