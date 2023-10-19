import { ADD_TO_CART, DELETE_FROM_CART } from "./actionType";

export const addToCart = (item) => {
    return {
        type : ADD_TO_CART,
        payload : item,
    }
}

export const deleteFromCart = (id) => {
    return {
        type : DELETE_FROM_CART,
        payload : id,
    }
}