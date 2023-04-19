import { Address } from '../../pages/Checkout'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  INCREASE_COFFE_QUANTITY = 'INCREASE_COFFE_QUANTITY',
  DECREASE_COFFE_QUANTITY = 'DECREASE_COFFE_QUANTITY',
  REMOVE_COFFE_FROM_CART = 'REMOVE_COFFE_FROM_CART',
  CREATE_ORDER = 'CREATE_ORDER',
}

export function addToCartAction(id: string, quantity: number) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      id,
      quantity,
    },
  }
}

export function increaseCoffeCartQuantityAction(id: string) {
  return {
    type: ActionTypes.INCREASE_COFFE_QUANTITY,
    payload: {
      id,
    },
  }
}

export function decreaseCoffeCartQuantityAction(id: string) {
  return {
    type: ActionTypes.DECREASE_COFFE_QUANTITY,
    payload: {
      id,
    },
  }
}

export function removeCoffeFromCartAction(id: string) {
  return {
    type: ActionTypes.REMOVE_COFFE_FROM_CART,
    payload: {
      id,
    },
  }
}

export function createOrderAction(address: Address, payment: string) {
  return {
    type: ActionTypes.CREATE_ORDER,
    payload: {
      address,
      payment,
    },
  }
}
