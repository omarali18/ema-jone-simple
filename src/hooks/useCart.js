import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";


const useCart = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storageCard = getStoredCart()
        const keys = Object.keys(storageCard)

        fetch("http://localhost:5000/products/bykey", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                console.log(products);
                if (storageCard) {
                    const findStorageProduct = []
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
            })
    }, [])

    //======================================



    return {
        cart,
        setCart
    }
}

export default useCart;