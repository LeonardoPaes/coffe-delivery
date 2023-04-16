import { ShoppingCart } from 'phosphor-react'
import { NumberInput } from '../../../../components/NumberInput'
import { CoffeCardContainer, CoffeTags } from './styles'

import coffeExpresso from '../../../../assets/coffe-expresso.svg'
import { FormEvent, useContext } from 'react'
import { CoffesContext } from '../../../../contexts/CoffesContex'
import { CartForm } from './../CartForm/index'

interface Tag {
  id: string
  tag: 'Tradicional' | 'Com leite' | 'Alcoólico' | 'Gelado' | 'Especial'
}

export interface Coffe {
  id: string
  image: string
  coffeTags: Tag[]
  title: string
  subTitle: string
  price: number
}

export function CoffeCards() {
  const { coffes } = useContext(CoffesContext)

  return (
    <>
      {coffes.map((coffe) => {
        return (
          <CoffeCardContainer key={coffe.id}>
            <img src={coffe.image} alt="" />
            <CoffeTags>
              {coffe.coffeTags.map((tag) => {
                return <span key={tag.id}>{tag.tag}</span>
              })}
            </CoffeTags>
            <strong>{coffe.title}</strong>
            <span>{coffe.subTitle}</span>
            <CartForm coffe={coffe} />
          </CoffeCardContainer>
        )
      })}
    </>
  )
}
