import {
  BannerContainer,
  AdvantagesContainer,
  Advantage,
  HomeContainer,
  ProductsContainer,
} from './styles'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import coffeBanner from '../../assets/coffe-banner.svg'
import { CoffeCards } from './components/CoffeCards'

export function Home() {
  return (
    <HomeContainer>
      <BannerContainer>
        <div>
          <strong>Encontre o café perfeito para qualquer hora do dia</strong>
          <span>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <AdvantagesContainer>
            <Advantage variant="dark-yellow">
              <ShoppingCart size={16} weight="fill" />
              Compra simples e segura
            </Advantage>
            <Advantage variant="gray">
              <Package size={16} weight="fill" />
              Embalagem matém o café intacto
            </Advantage>
            <Advantage variant="yellow">
              <Timer size={16} weight="fill" />
              Entrega rápida e segura
            </Advantage>
            <Advantage variant="purple">
              <Coffee size={16} weight="fill" />O café chega fresquinho até você
            </Advantage>
          </AdvantagesContainer>
        </div>
        <img src={coffeBanner} alt="Banner com café" />
      </BannerContainer>
      <ProductsContainer>
        <h1>Nossos cafés</h1>
        <div>
          <CoffeCards />
        </div>
      </ProductsContainer>
    </HomeContainer>
  )
}
