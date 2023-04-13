import {
  CheckoutContainer,
  OrderInfoContainer,
  OrderItem,
  OrderResume,
  UserInfoContainer,
  UserInfoHeader,
  UserInfoForm,
} from './styles'

import { MapPinLine, CurrencyDollar } from 'phosphor-react'

export function Checkout() {
  return (
    <CheckoutContainer>
      <UserInfoContainer>
        <h3>Complete seu pedido</h3>
        <div>
          <UserInfoHeader>
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
          <UserInfoHeader>
            <CurrencyDollar size={22} />
            <div>
              <title>Endereço de entrega</title>
              <span>
                Informe o endereço de entrega onde deseja receber seu pedido
              </span>
            </div>
          </UserInfoHeader>
        </div>
      </UserInfoContainer>
      <OrderInfoContainer>
        <h3>Cafés selecionados</h3>
        <div>
          <OrderItem></OrderItem>
          <OrderResume></OrderResume>
        </div>
      </OrderInfoContainer>
    </CheckoutContainer>
  )
}
