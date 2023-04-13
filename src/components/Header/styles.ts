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

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;

  nav {
    display: flex;
    gap: 0.75rem;
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

export const CartHeaderButton = styled(BaseHeaderButton)`
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-500']};
`
