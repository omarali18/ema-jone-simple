import { faFontAwesomeLogoFull } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../utilities/fakedb";



const useProducts = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [searchProducts, setSearchProduct] = useState([])
    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSearchProduct(data)
            })
    }, []);
    const addBtnHandler = (product) => {
        let addProduct = [...cart, product]
        setCart(addProduct);

        //Add to local Storage
        addToDb(product.key)
    }

    const searchFiealdhandle = (e) => {
        const searchText = e.target.value

        const metchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setSearchProduct(metchedProduct)
    }

    useEffect(() => {
        const getStoreItem = getStoredCart()
        if (products.length) {
            const cullectProduct = []
            for (const key in getStoreItem) {
                const addedProduct = products.find(product => product.key === key)
                if (addedProduct) {
                    const quantity = getStoreItem[key]
                    addedProduct.quantity = quantity
                    cullectProduct.push(addedProduct)
                }
            }
            setCart(cullectProduct);
        }
    }, [products])

    //================================================ card calculete

    // const { cart } = props;
    // console.log("card", cart);
    let total = 0;
    let itemOrder = 0
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1
        }
        total = total + product.price * product.quantity
        itemOrder = itemOrder + product.quantity

    }
    console.log(itemOrder);

    const Handling = total * .03
    const beforeTax = total + Handling;
    const tax = beforeTax * .05;
    const orderTotal = beforeTax + tax;

    return {
        products,
        cart,
        searchProducts,
        searchFiealdhandle,
        addBtnHandler,
        //=========================
        total,
        itemOrder,
        Handling,
        beforeTax,
        tax,
        orderTotal
    }
}

export default useProducts