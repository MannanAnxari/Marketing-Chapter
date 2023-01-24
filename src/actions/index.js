export const addUserData = (data) => {
    console.log(data);
    return {
        type: "ADD_USER",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }

    }
}
export const updateUserData = () => {
    return {
        type: "UPDATE_USER"
    }
}
export const removeUserData = () => {
    return {
        type: "REMOVE_USER"
    }
}

export const setCartItems = (data) => {

    return {
        type: "CART",
        payload: {
            id: new Date().getTime().toString(),
            items: data,
        }
    }
}
export const removeCartItems = (data) => {

    return {
        type: "REMOVE_ITEM",
        payload: {
            id: new Date().getTime().toString(),
            items: data,
        }
    }
} 
