/* images imports */
import coffeExpresso from '../assets/coffe-expresso.svg'
import coffeAmericano from '../assets/coffe-americano.svg'

import { createContext, ReactNode, useState } from 'react'
import { Coffe } from '../pages/Home/components/CoffeCard'

interface CoffesContextType {
  coffes: Coffe[]
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

  return (
    <CoffesContext.Provider value={{ coffes }}>
      {children}
    </CoffesContext.Provider>
  )
}
