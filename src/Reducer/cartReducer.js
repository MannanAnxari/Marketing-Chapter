const initialData = {
    items: []
}
const cartReducer = (state = initialData, action) => {
    switch (action.type) {
        case "CART":
            const { items } = action.payload;
            const itemInCart = state.items.filter((item) => {
                return item.id === items.id
            });

            console.log(itemInCart);

            if (itemInCart) {
                console.log("if");
                state.items.push({ ...items });
                return {
                    items: [...state.items, { items }]
                }
            }
            else {
                console.log("else");
                return {
                    items: [items]
                }
                // state.items(items)
            }
        // return {
        //     items: items
        // }

        case "REMOVE_ITEM":

            state.items = state.items.filter((item) => item.id !== action.payload.items.id);
            console.log(state.items);



        default:
            return state;
    }
}

export default cartReducer

