import { getShoppingCart } from "../utilities/fakedb";

const cardProductLoader = async() =>{
    const loadedProduct = await fetch('products.json')
    const product = await loadedProduct.json();

    const storeCard = getShoppingCart()
    const saveCart = []
    for (const id in storeCard){
        const addedProduct = product.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storeCard[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct)
        }
    }
    return saveCart;
}

export default cardProductLoader;