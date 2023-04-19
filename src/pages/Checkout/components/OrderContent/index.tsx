import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { NumberInput } from '../../../../components/NumberInput'
import { OrderInfo, OrderItem, OrderResume } from './styles'
import { CoffesContext } from './../../../../contexts/CoffesContex'

export function OrderContent() {
  const {
    cart,
    coffes,
    increaseCoffeCartQuantity,
    decreaseCoffeCartQuantity,
    removeCoffeFromCart,
  } = useContext(CoffesContext)

  const totalAmount = cart.reduce((accumulator, cartItem) => {
    return (
      accumulator +
      cartItem.quantity *
        coffes.find((coffe) => coffe.id === cartItem.coffeId)!.price
    )
  }, 0)

  return (
    <>
      {cart.map((cartItem) => {
        const coffe = coffes.find((coffe) => coffe.id === cartItem.coffeId)
        return (
          <OrderItem key={cartItem.coffeId}>
            <img src={coffe!.image} alt="Café Expresso" />
            <OrderInfo>
              <h4>{coffe!.title}</h4>
              <div>
                <NumberInput
                  cartQuantity={cartItem.quantity}
                  upperCartQuantity={() => {
                    increaseCoffeCartQuantity(cartItem.coffeId)
                  }}
                  lowerCartQuantity={() => {
                    decreaseCoffeCartQuantity(cartItem.coffeId)
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    removeCoffeFromCart(cartItem.coffeId)
                  }}
                >
                  <Trash />
                  REMOVER
                </button>
              </div>
            </OrderInfo>
            <span>
              R${' '}
              {new Intl.NumberFormat('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(coffe!.price)}
            </span>
          </OrderItem>
        )
      })}
      <OrderResume>
        <span>Total de itens</span>
        <span>
          R${' '}
          {new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(totalAmount)}
        </span>
        <span>Entrega</span>
        <span>R$ 3,50</span>
        <strong>Total</strong>
        <strong>
          R${' '}
          {new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(totalAmount + 3.5)}
        </strong>
      </OrderResume>
    </>
  )
}
