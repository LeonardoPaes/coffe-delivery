import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  CheckoutInfo,
  InfoItem,
  SuccessComponents,
  SuccessContainer,
  SuccessText,
} from './styles'

import checkoutBanner from '../../assets/checkout-banner.svg'
import { useContext } from 'react'
import { CoffesContext } from './../../contexts/CoffesContex'

export function Success() {
  const { order } = useContext(CoffesContext)

  function handlePaymentMethod() {
    switch (order.payment) {
      case 'credit':
        return 'Cartão de Crédito'

      case 'debit':
        return 'Cartão de Débito'

      case 'money':
        return 'Em dinheiro'
    }
  }

  return (
    <SuccessContainer>
      <SuccessText>
        <h2>Uhu! Pedido confirmado</h2>
        Agora é só aguardar que logo o café chegará até você!
      </SuccessText>
      <SuccessComponents>
        <CheckoutInfo>
          <InfoItem variant="purple">
            <MapPin size={32} weight="fill" />
            <div>
              Entrega em{' '}
              <strong>
                {order.address.street}, {order.address.number}
              </strong>{' '}
              {order.address.neighborhood} - {order.address.city},{' '}
              {order.address.uf}
            </div>
          </InfoItem>
          <InfoItem variant="yellow">
            <Timer size={16} weight="fill" />
            <div>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </div>
          </InfoItem>
          <InfoItem variant="dark-yellow">
            <CurrencyDollar size={16} />
            <div>
              Pagamento na entrega <br />
              <strong>{handlePaymentMethod()}</strong>
            </div>
          </InfoItem>
        </CheckoutInfo>
        <img src={checkoutBanner} alt="Delivery image" />
      </SuccessComponents>
    </SuccessContainer>
  )
}
