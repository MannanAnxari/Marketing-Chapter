const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CART":
            state.cartItems.push(action.payload);

        case "REMOVE_ITEM":

            state.items = state.items.filter((item) => item.id !== action.payload.items.id);
            console.log(state.items);



        default:
            return state;
    }
}

export default cartReducer

