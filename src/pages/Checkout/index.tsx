import {
  CheckoutContainer,
  OrderItemsContainer,
  UserInfoContainer,
  UserInfoHeader,
  UserInfoForm,
  PaymentOptions,
} from './styles'

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
} from 'phosphor-react'

import { OrderContent } from './components/OrderContent/index'

export function Checkout() {
  return (
    <CheckoutContainer>
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
          <UserInfoForm>
            <input
              type="text"
              name="cep"
              className="cepInput"
              placeholder="CEP"
            />
            <input
              type="text"
              name="street"
              className="streetInput"
              placeholder="Rua"
            />
            <input
              type="text"
              name="number"
              className="numberInput"
              placeholder="Número"
            />
            <input
              type="text"
              name="complement"
              className="complementInput"
              placeholder="Complemento"
            />
            <input
              type="text"
              name="neighborhood"
              className="neighborhoodInput"
              placeholder="Bairro"
            />
            <input
              type="text"
              name="city"
              className="cityInput"
              placeholder="Cidade"
            />
            <input type="text" name="uf" className="ufInput" placeholder="UF" />
          </UserInfoForm>
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
            <input type="radio" name="payment" id="credit" value={'credit'} />
            <label htmlFor="credit">
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </label>
            <input type="radio" name="payment" id="debit" value={'debit'} />
            <label htmlFor="debit">
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </label>
            <input type="radio" name="payment" id="money" value={'money'} />
            <label htmlFor="money">
              <Money size={16} />
              DINHEIRO
            </label>
          </PaymentOptions>
        </div>
      </UserInfoContainer>
      <OrderItemsContainer>
        <h3>Cafés selecionados</h3>
        <div>
          <OrderContent />
          <button>CONFIRMAR PEDIDO</button>
        </div>
      </OrderItemsContainer>
    </CheckoutContainer>
  )
}
