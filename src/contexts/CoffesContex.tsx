/* images imports */
import coffeExpresso from '../assets/coffe-expresso.svg'
import coffeAmericano from '../assets/coffe-americano.svg'

import { createContext, ReactNode, useState } from 'react'
import { Coffe } from '../pages/Home/components/CoffeCards'
import { CartItem } from '../pages/Home/components/CartForm'

interface CoffesContextType {
  coffes: Coffe[]
  cart: CartItem[]
  addToCart: (id: string, quantity: number) => void
  increaseCoffeCartQuantity: (id: string) => void
  decreaseCoffeCartQuantity: (id: string) => void
  removeCoffeFromCart: (id: string) => void
}

interface CoffesContextProviderProps {
  children: ReactNode
}

export const CoffesContext = createContext({} as CoffesContextType)

export function CoffesContextsProvider({
  children,
}: CoffesContextProviderProps) {
  const [coffes, setCoffes] = useState<Coffe[]>([
    {
      id: '1',
      image: coffeExpresso,
      coffeTags: [{ id: '1', tag: 'Tradicional' }],
      price: 9.9,
      title: 'Expresso Tradicional',
      subTitle: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      id: '2',
      image: coffeAmericano,
      coffeTags: [{ id: '1', tag: 'Tradicional' }],
      price: 9.9,
      title: 'Expresso Americano',
      subTitle: 'Expresso diluído, menos intenso que o tradicional',
    },
  ])

  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(id: string, quantity: number) {
    const cartIndex = cart.findIndex((item) => item.coffeId === id)
    if (cartIndex !== -1) {
      setCart((state) =>
        state.map((cartItem) => {
          if (cartItem.coffeId === id) {
            return { ...cartItem, quantity: cartItem.quantity + quantity }
          }
          return cartItem
        }),
      )
    } else {
      const newCartItem: CartItem = {
        coffeId: id,
        quantity,
      }
      setCart((state) => [...state, newCartItem])
    }
  }

  function increaseCoffeCartQuantity(id: string) {
    setCart((state) =>
      state.map((cartItem) => {
        if (cartItem.coffeId === id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 }
        }
        return cartItem
      }),
    )
  }

  function decreaseCoffeCartQuantity(id: string) {
    setCart((state) =>
      state.map((cartItem) => {
        if (cartItem.coffeId === id && cartItem.quantity > 1) {
          return { ...cartItem, quantity: cartItem.quantity - 1 }
        }
        return cartItem
      }),
    )
  }

  function removeCoffeFromCart(id: string) {
    setCart((state) => state.filter((cartItem) => cartItem.coffeId !== id))
  }

  return (
    <CoffesContext.Provider
      value={{
        coffes,
        cart,
        addToCart,
        increaseCoffeCartQuantity,
        decreaseCoffeCartQuantity,
        removeCoffeFromCart,
      }}
    >
      {children}
    </CoffesContext.Provider>
  )
}
