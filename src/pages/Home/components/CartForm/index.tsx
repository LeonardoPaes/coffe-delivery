import { ShoppingCart } from 'phosphor-react'
import { NumberInput } from '../../../../components/NumberInput'
import { Coffe } from '../CoffeCards'
import { CartContainer } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { CoffesContext } from '../../../../contexts/CoffesContex'
import { useContext } from 'react'

interface CartFormProps {
  coffe: Coffe
}

interface NewCartFormData {
  cartQuantity: number
}

export interface CartItem {
  coffeId: string
  quantity: number
}

export function CartForm({ coffe }: CartFormProps) {
  const { addToCart } = useContext(CoffesContext)

  const newCartForm = useForm<NewCartFormData>({
    defaultValues: {
      cartQuantity: 0,
    },
  })

  const { handleSubmit, reset, watch, setValue, register } = newCartForm

  const cartQuantity = watch('cartQuantity')

  function handleAddToCart(data: NewCartFormData) {
    addToCart(coffe.id, data.cartQuantity)
    reset()
  }

  function lowerCartQuantity() {
    if (cartQuantity > 0) {
      const newCartQuantity = cartQuantity - 1
      setValue('cartQuantity', newCartQuantity)
    }
  }

  function upperCartQuantity() {
    const newCartQuantity = cartQuantity + 1
    setValue('cartQuantity', newCartQuantity)
  }

  return (
    <CartContainer>
      <div>
        <span>R$</span>
        <data value={coffe.price}>
          {new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(coffe.price)}
        </data>
      </div>
      <form onSubmit={handleSubmit(handleAddToCart)}>
        <FormProvider {...newCartForm}>
          <NumberInput
            useFormName="cartQuantity"
            lowerCartQuantity={lowerCartQuantity}
            upperCartQuantity={upperCartQuantity}
            cartQuantity={cartQuantity}
            register={register}
          />
        </FormProvider>
        <button type="submit">
          <ShoppingCart size={22} weight="fill" />
        </button>
      </form>
    </CartContainer>
  )
}
