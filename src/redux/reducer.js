import { ADD_TO_CART, DELETE_FROM_CART } from "./actionType";

const initState = {
    carts: []
};

export const cartReducer = (state=initState, action) => {
    switch(action.type) {
        case ADD_TO_CART : return {
            ...state,
            carts : [...state.carts, action.payload]
        }

        case DELETE_FROM_CART :    
        
            return {
                ...state,
                carts: state.carts.filter((el) => el.id!==action.payload),
            }

        default : return state
    }
}