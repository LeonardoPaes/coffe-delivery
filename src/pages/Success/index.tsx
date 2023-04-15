import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  CheckoutInfo,
  InfoItem,
  SuccessComponents,
  SuccessContainer,
  SuccessText,
} from './styles'

import checkoutBanner from '../../assets/checkout-banner.svg'

export function Success() {
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
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
              Farrapos - Porto Alegre, RS
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
              <strong>Cartão de Crédito</strong>
            </div>
          </InfoItem>
        </CheckoutInfo>
        <img src={checkoutBanner} alt="Delivery image" />
      </SuccessComponents>
    </SuccessContainer>
  )
}
