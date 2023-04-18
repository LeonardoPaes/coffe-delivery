import {
  CheckoutContainer,
  OrderItemsContainer,
  UserInfoContainer,
  UserInfoHeader,
  UserInfoFormContainer,
  PaymentOptions,
  ErrorMessage,
  NoItems,
} from './styles'

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Coffee,
} from 'phosphor-react'

import { OrderContent } from './components/OrderContent/index'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ChangeEvent, useContext } from 'react'
import * as zod from 'zod'
import { CoffesContext } from '../../contexts/CoffesContex'
import { useNavigate } from 'react-router-dom'

export interface Address {
  cep: string
  street: string
  number: number
  complement?: string
  neighborhood: string
  city: string
  uf: string
}

const PaymentTypeSchema = zod.union([
  zod.literal('credit', {
    errorMap: () => ({ message: 'Selecione um meio de pagamento' }),
  }),
  zod.literal('debit'),
  zod.literal('money'),
])

const newCheckoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.number({
    required_error: 'Informe o Número',
    invalid_type_error: 'Preencha o campo de Número',
  }),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  payment: PaymentTypeSchema,
})

type NewCheckoutFormData = zod.infer<typeof newCheckoutFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()
  const { cart, createOrder } = useContext(CoffesContext)

  const newCheckoutForm = useForm<NewCheckoutFormData>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
  })

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = newCheckoutForm

  function handleCreateNewCheckout(data: NewCheckoutFormData) {
    if (cart.length > 0) {
      const {
        cep,
        street,
        city,
        neighborhood,
        complement,
        uf,
        number,
        payment,
      } = data
      const address: Address = {
        cep,
        street,
        city,
        number,
        neighborhood,
        complement,
        uf,
      }
      createOrder(address, payment)
      navigate('/success')
    } else {
      console.log('ADICIONE ITENS AO CARRINHO PARA CONTINUAR')
    }
  }

  function handleCepInputChange(event: ChangeEvent<HTMLInputElement>) {
    const cep = event.target.value
    // const pat = /[A-Za-z\s]/g
    event.target.value = cep!.replace(/[^0-9]/g, '').substring(0, 9) || ''
    if (cep.length > 5) {
      event.target.value = cep!
        .replace(/[^0-9]/g, '')
        .replace(/(?<=^.{5})/, '-')
        .substring(0, 9)
    }
  }

  function handleUfInputChange(event: ChangeEvent<HTMLInputElement>) {
    const uf = event.target.value
    const pat = /[^A-Za-z\s]/g
    event.target.value =
      uf!.replace(pat, '').substring(0, 2).toUpperCase() || ''
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateNewCheckout)}>
      <UserInfoContainer>
        <h3>Complete seu pedido</h3>
        <div>
          <UserInfoHeader variant="yellow">
            <MapPinLine size={22} />
            <div>
              <title>Endereço de entrega</title>
              <span>
                Informe o endereço de entrega onde deseja receber seu pedido
              </span>
            </div>
          </UserInfoHeader>
          <UserInfoFormContainer>
            <input
              type="text"
              className="cepInput"
              placeholder="CEP"
              {...register('cep', {
                onChange: handleCepInputChange,
              })}
            />
            <input
              type="text"
              className="streetInput"
              placeholder="Rua"
              {...register('street')}
            />
            <input
              type="number"
              className="numberInput"
              placeholder="Número"
              {...register('number', {
                valueAsNumber: true,
              })}
            />
            <input
              type="text"
              className="complementInput"
              placeholder="Complemento"
              {...register('complement')}
            />
            <input
              type="text"
              className="neighborhoodInput"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <input
              type="text"
              className="cityInput"
              placeholder="Cidade"
              {...register('city')}
            />
            <input
              type="text"
              className="ufInput"
              placeholder="UF"
              {...register('uf', {
                onChange: handleUfInputChange,
              })}
            />
          </UserInfoFormContainer>
          {Object.keys(errors).length > 0 &&
            (Object.keys(errors).length > 1 ||
              Object.keys(errors)[0] !== 'payment') && (
              <ErrorMessage>{Object.values(errors)[0].message}</ErrorMessage>
            )}
        </div>
        <div>
          <UserInfoHeader variant="purple">
            <CurrencyDollar size={22} />
            <div>
              <title>Endereço de entrega</title>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </UserInfoHeader>
          <PaymentOptions>
            <input
              type="radio"
              id="credit"
              value={'credit'}
              {...register('payment')}
            />
            <label htmlFor="credit">
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </label>
            <input
              type="radio"
              id="debit"
              value={'debit'}
              {...register('payment')}
            />
            <label htmlFor="debit">
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </label>
            <input
              type="radio"
              id="money"
              value={'money'}
              {...register('payment')}
            />
            <label htmlFor="money">
              <Money size={16} />
              DINHEIRO
            </label>
          </PaymentOptions>
          {Object.keys(errors).length > 0 &&
            Object.keys(errors)[0] === 'payment' && (
              <ErrorMessage>{Object.values(errors)[0].message}</ErrorMessage>
            )}
        </div>
      </UserInfoContainer>
      <OrderItemsContainer>
        <h3>Cafés selecionados</h3>
        <div>
          {cart.length > 0 ? (
            <>
              <OrderContent />
              <button type="submit" disabled={isSubmitting}>
                CONFIRMAR PEDIDO
              </button>
            </>
          ) : (
            <NoItems>
              <Coffee size={50} weight="fill" />
              <span>Adicione itens ao seu carrinho para continuar</span>
            </NoItems>
          )}
        </div>
      </OrderItemsContainer>
    </CheckoutContainer>
  )
}
