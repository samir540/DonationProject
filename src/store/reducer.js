const initalState = {
    products: [],
    basket: []
}
function reducer(state=initalState,action) {
    switch(action.type){
        case  "ADD" :
            return {...state,products:[...action.payload]}
            case "AddBasket" : 
            return {...state,basket:[...action.payload]}
            default: 
            return state;
    }
}

export default reducer

