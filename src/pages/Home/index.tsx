import {
  BannerContainer,
  AdvantagesContainer,
  Advantage,
  HomeContainer,
  CoffeCard,
  ProductsContainer,
  CoffeTags,
  CartContainer,
  QuantityContainer,
} from './styles'
import {
  ShoppingCart,
  Timer,
  Package,
  Coffee,
  Plus,
  Minus,
} from 'phosphor-react'

import coffeBanner from '../../assets/coffe-banner.svg'

import coffeExpresso from '../../assets/coffe-expresso.svg'

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
          <CoffeCard>
            <img src={coffeExpresso} alt="" />
            <CoffeTags>
              <span>Tradicional</span>
              {/* <span>Com leite</span>
              <span>Alcoólico</span>
              <span>Gelado</span>
              <span>Especial</span> */}
            </CoffeTags>
            <strong>Expresso Tradicional</strong>
            <span>O tradicional café feito com água quente e grãos moídos</span>
            <CartContainer>
              <div>
                <span>R$</span>
                <data value="9.9">9,90</data>
              </div>
              <div>
                <QuantityContainer>
                  <label htmlFor="cartQuantity">
                    <Minus />
                  </label>
                  <input type="number" name="cartQuantity" min={1} />
                  <label htmlFor="cartQuantity">
                    <Plus />
                  </label>
                </QuantityContainer>
                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </CartContainer>
          </CoffeCard>
        </div>
      </ProductsContainer>
    </HomeContainer>
  )
}
