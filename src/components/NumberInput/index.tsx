import { Minus, Plus } from 'phosphor-react'
import { QuantityContainer } from './styles'
import { useFormContext } from 'react-hook-form'

interface NumberInputProps {
  useFormName?: 'cartQuantity' | ''
  cartQuantity: number
  lowerCartQuantity: () => void
  upperCartQuantity: () => void
  register?: (name: 'cartQuantity', options?: {}) => {}
}

export function NumberInput({
  useFormName = '',
  cartQuantity,
  lowerCartQuantity,
  upperCartQuantity,
  register,
}: NumberInputProps) {
  function handleLowerCartQuantity() {
    lowerCartQuantity()
  }

  function handleUpperCartQuantity() {
    upperCartQuantity()
  }

  return (
    <QuantityContainer>
      <button type="button" onClick={handleLowerCartQuantity}>
        <Minus />
      </button>
      {useFormName === '' ? (
        <input type="number" min={0} value={cartQuantity} readOnly />
      ) : (
        <input
          type="number"
          min={0}
          {...register!(useFormName, { valueAsNumber: true })}
        />
      )}

      <button type="button" onClick={handleUpperCartQuantity}>
        <Plus />
      </button>
    </QuantityContainer>
  )
}
