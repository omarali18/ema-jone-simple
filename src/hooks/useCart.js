import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";


const useCart = (products) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storageCard = getStoredCart()
        const findStorageProduct = []
        if (storageCard) {
            for (const key in storageCard) {
                const findProducts = products.find(product => product.key === key)
                if (findProducts) {
                    const quantity = storageCard[key]
                    findProducts.quantity = quantity;
                    findStorageProduct.push(findProducts)
                }
            }
            setCart(findStorageProduct)
        }
    }, [products])

    //======================================



    return {
        cart,
        setCart
    }
}

export default useCart;