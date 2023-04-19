/* images imports */
import coffeExpresso from '../assets/coffe-expresso.svg'
import coffeAmericano from '../assets/coffe-americano.svg'
import coffeExpressoCremoso from '../assets/coffe-expresso-cremoso.svg'
import coffeExpressoGelado from '../assets/coffe-cafe-gelado.svg'
import coffeCafeComLeite from '../assets/coffe-cafe-com-leite.svg'
import coffeLatte from '../assets/coffe-latte.svg'
import coffeCapuccino from '../assets/coffe-capuccino.svg'
import coffeMacchiato from '../assets/coffe-macchiato.svg'
import coffeMocaccino from '../assets/coffe-mocaccino.svg'
import coffeChocolateQuente from '../assets/coffe-chocolate-quente.svg'
import coffeCubano from '../assets/coffe-cubano.svg'
import coffeHavaiano from '../assets/coffe-havaiano.svg'
import coffeArabe from '../assets/coffe-arabe.svg'
import coffeIrlandes from '../assets/coffe-irlandes.svg'

import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Coffe } from '../pages/Home/components/CoffeCards'
import { CartItem } from '../pages/Home/components/CartForm'
import { Address } from '../pages/Checkout'
import { coffesReducer } from './../reducers/coffes/reducer'
import {
  addToCartAction,
  createOrderAction,
  decreaseCoffeCartQuantityAction,
  increaseCoffeCartQuantityAction,
  removeCoffeFromCartAction,
} from '../reducers/coffes/actions'

export interface Order {
  address: Address
  orderItems: CartItem[]
  payment: string
}

interface CoffesContextProviderProps {
  children: ReactNode
}

interface CoffesContextType {
  coffes: Coffe[]
  cart: CartItem[]
  order: Order
  addToCart: (id: string, quantity: number) => void
  increaseCoffeCartQuantity: (id: string) => void
  decreaseCoffeCartQuantity: (id: string) => void
  removeCoffeFromCart: (id: string) => void
  createOrder: (address: Address, payment: string) => void
}

export const CoffesContext = createContext({} as CoffesContextType)

export function CoffesContextsProvider({
  children,
}: CoffesContextProviderProps) {
  const [coffesState, dispatch] = useReducer(
    coffesReducer,
    {
      cart: [],
      order: {} as Order,
    },
    (initalState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffe-delivery:coffes-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initalState
    },
  )

  const [coffes, setCoffes] = useState<Coffe[]>([
    {
      id: '1',
      image: coffeExpresso,
      coffeTags: [{ id: '1', tag: 'Tradicional' }],
      price: 9.9,
      title: 'Expresso Tradicional',
      subTitle: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      id: '2',
      image: coffeAmericano,
      coffeTags: [{ id: '1', tag: 'Tradicional' }],
      price: 9.9,
      title: 'Expresso Americano',
      subTitle: 'Expresso diluído, menos intenso que o tradicional',
    },
    {
      id: '3',
      image: coffeExpressoCremoso,
      coffeTags: [{ id: '1', tag: 'Tradicional' }],
      price: 9.9,
      title: 'Expresso Cremoso',
      subTitle: 'Café expresso tradicional com espuma cremosa',
    },
    {
      id: '4',
      image: coffeExpressoGelado,
      coffeTags: [
        { id: '1', tag: 'Tradicional' },
        { id: '2', tag: 'Gelado' },
      ],
      price: 9.9,
      title: 'Expresso Gelado',
      subTitle: 'Bebida preparada com café expresso e cubos de gelo',
    },
    {
      id: '5',
      image: coffeCafeComLeite,
      coffeTags: [
        { id: '1', tag: 'Tradicional' },
        { id: '2', tag: 'Com leite' },
      ],
      price: 9.9,
      title: 'Café com Leite',
      subTitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    },
    {
      id: '6',
      image: coffeLatte,
      coffeTags: [
        { id: '1', tag: 'Tradicional' },
        { id: '2', tag: 'Com leite' },
      ],
      price: 9.9,
      title: 'Latte',
      subTitle:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    },
    {
      id: '7',
      image: coffeCapuccino,
      coffeTags: [
        { id: '1', tag: 'Tradicional' },
        { id: '2', tag: 'Com leite' },
      ],
      price: 9.9,
      title: 'Capuccino',
      subTitle:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
    },
    {
      id: '8',
      image: coffeMacchiato,
      coffeTags: [
        { id: '1', tag: 'Tradicional' },
        { id: '2', tag: 'Com leite' },
      ],
      price: 9.9,
      title: 'Macchiato',
      subTitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    },
    {
      id: '9',
      image: coffeMocaccino,
      coffeTags: [
        { id: '1', tag: 'Tradicional' },
        { id: '2', tag: 'Com leite' },
      ],
      price: 9.9,
      title: 'Mocaccino',
      subTitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    },
    {
      id: '10',
      image: coffeChocolateQuente,
      coffeTags: [
        { id: '1', tag: 'Especial' },
        { id: '2', tag: 'Com leite' },
      ],
      price: 9.9,
      title: 'Chocolate Quente',
      subTitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    },
    {
      id: '11',
      image: coffeCubano,
      coffeTags: [
        { id: '1', tag: 'Especial' },
        { id: '2', tag: 'Alcoólico' },
        { id: '3', tag: 'Gelado' },
      ],
      price: 9.9,
      title: 'Cubano',
      subTitle:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
    },
    {
      id: '12',
      image: coffeHavaiano,
      coffeTags: [{ id: '1', tag: 'Especial' }],
      price: 9.9,
      title: 'Havaiano',
      subTitle: 'Bebida adocicada preparada com café e leite de coco',
    },
    {
      id: '13',
      image: coffeArabe,
      coffeTags: [{ id: '1', tag: 'Especial' }],
      price: 9.9,
      title: 'Árabe',
      subTitle: 'Bebida preparada com grãos de café árabe e especiarias',
    },
    {
      id: '14',
      image: coffeIrlandes,
      coffeTags: [
        { id: '1', tag: 'Especial' },
        { id: '2', tag: 'Alcoólico' },
      ],
      price: 9.9,
      title: 'Irlandês',
      subTitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    },
  ])

  const { cart, order } = coffesState

  useEffect(() => {
    const stateJSON = JSON.stringify(coffesState)

    localStorage.setItem('@coffe-delivery:coffes-state-1.0.0', stateJSON)
  }, [coffesState])

  // const [cart, setCart] = useState<CartItem[]>([])

  // const [order, setOrder] = useState<Order>({} as Order)

  function addToCart(id: string, quantity: number) {
    dispatch(addToCartAction(id, quantity))
  }
  // function addToCart(id: string, quantity: number) {
  //   const cartIndex = cart.findIndex((item) => item.coffeId === id)
  //   if (cartIndex !== -1) {
  //     setCart((state) =>
  //       state.map((cartItem) => {
  //         if (cartItem.coffeId === id) {
  //           return { ...cartItem, quantity: cartItem.quantity + quantity }
  //         }
  //         return cartItem
  //       }),
  //     )
  //   } else {
  //     const newCartItem: CartItem = {
  //       coffeId: id,
  //       quantity,
  //     }
  //     setCart((state) => [...state, newCartItem])
  //   }
  // }

  function increaseCoffeCartQuantity(id: string) {
    dispatch(increaseCoffeCartQuantityAction(id))
  }
  // function increaseCoffeCartQuantity(id: string) {
  //   setCart((state) =>
  //     state.map((cartItem) => {
  //       if (cartItem.coffeId === id) {
  //         return { ...cartItem, quantity: cartItem.quantity + 1 }
  //       }
  //       return cartItem
  //     }),
  //   )
  // }

  function decreaseCoffeCartQuantity(id: string) {
    dispatch(decreaseCoffeCartQuantityAction(id))
  }
  // function decreaseCoffeCartQuantity(id: string) {
  //   setCart((state) =>
  //     state.map((cartItem) => {
  //       if (cartItem.coffeId === id && cartItem.quantity > 1) {
  //         return { ...cartItem, quantity: cartItem.quantity - 1 }
  //       }
  //       return cartItem
  //     }),
  //   )
  // }

  function removeCoffeFromCart(id: string) {
    dispatch(removeCoffeFromCartAction(id))
  }

  // function removeCoffeFromCart(id: string) {
  //   setCart((state) => state.filter((cartItem) => cartItem.coffeId !== id))
  // }

  function createOrder(address: Address, payment: string) {
    dispatch(createOrderAction(address, payment))
    console.log('ORDER CREATED', order)
  }

  // function createOrder(address: Address, payment: string) {
  //   setOrder({
  //     address,
  //     orderItems: cart,
  //     payment,
  //   })
  //   setCart([])
  // }

  return (
    <CoffesContext.Provider
      value={{
        coffes,
        cart,
        order,
        addToCart,
        increaseCoffeCartQuantity,
        decreaseCoffeCartQuantity,
        removeCoffeFromCart,
        createOrder,
      }}
    >
      {children}
    </CoffesContext.Provider>
  )
}
