import { Order } from '../../contexts/CoffesContex'
import { CartItem } from '../../pages/Home/components/CartForm'
import { ActionTypes } from './actions'
import { produce } from 'immer'

interface CoffesState {
  cart: CartItem[]
  order: Order
}

export function coffesReducer(state: CoffesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const cartIndex = state.cart.findIndex((item) => {
        return item.coffeId === action.payload.id
      })
      return produce(state, (draft) => {
        if (cartIndex === -1) {
          draft.cart.push({
            coffeId: action.payload.id,
            quantity: action.payload.quantity,
          })
        } else {
          draft.cart[cartIndex].quantity += action.payload.quantity
        }
      })
    }

    case ActionTypes.INCREASE_COFFE_QUANTITY: {
      const cartIndex = state.cart.findIndex((item) => {
        return item.coffeId === action.payload.id
      })
      return produce(state, (draft) => {
        if (cartIndex !== -1) {
          draft.cart[cartIndex].quantity += 1
        }
      })
    }

    case ActionTypes.DECREASE_COFFE_QUANTITY: {
      const cartIndex = state.cart.findIndex((item) => {
        return item.coffeId === action.payload.id
      })
      return produce(state, (draft) => {
        if (cartIndex !== -1 && draft.cart[cartIndex].quantity > 1) {
          draft.cart[cartIndex].quantity -= 1
        }
      })
    }

    case ActionTypes.REMOVE_COFFE_FROM_CART: {
      const cartIndex = state.cart.findIndex((item) => {
        return item.coffeId === action.payload.id
      })
      console.log('CART ON TRASH', cartIndex)
      return produce(state, (draft) => {
        draft.cart.splice(cartIndex, 1)
      })
    }

    case ActionTypes.CREATE_ORDER: {
      console.log('criando order', action)
      return produce(state, (draft) => {
        draft.order = {
          address: action.payload.address,
          orderItems: draft.cart,
          payment: action.payload.payment,
        }
        console.log('oia o order no produce', draft.order)
        draft.cart = []
      })
    }

    default:
      break
  }

  return state
}
