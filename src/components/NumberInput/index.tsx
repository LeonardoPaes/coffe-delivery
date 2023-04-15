import { Minus, Plus } from 'phosphor-react'
import { QuantityContainer } from './styles'

export function NumberInput() {
  return (
    <QuantityContainer>
      <label htmlFor="cartQuantity">
        <Minus />
      </label>
      <input type="number" name="cartQuantity" min={1} value={0} />
      <label htmlFor="cartQuantity">
        <Plus />
      </label>
    </QuantityContainer>
  )
}
