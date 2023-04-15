import { ShoppingCart } from 'phosphor-react'
import { NumberInput } from '../../../../components/NumberInput'
import { CartContainer, CoffeCardContainer, CoffeTags } from './styles'

import coffeExpresso from '../../../../assets/coffe-expresso.svg'
import { useContext } from 'react'
import { CoffesContext } from './../../../../contexts/CoffesContex'

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
            <CartContainer>
              <div>
                <span>R$</span>
                <data value={coffe.price}>{coffe.price}</data>
              </div>
              <div>
                <NumberInput />
                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </CartContainer>
          </CoffeCardContainer>
        )
      })}
    </>
  )
}
