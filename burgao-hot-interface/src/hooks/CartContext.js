import React, { createContext, useContext, useState, useEffect } from "react"
import PropTypes from "prop-types"

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [CartProducts, setCartProducts] = useState([])

  const updateLocalStorage = async (products) => {
    await localStorage.setItem("@BurgaoHot:cartInfo", JSON.stringify(products))
  }

  const putProductsInCart = async (product) => {
    const cartIndex = CartProducts.findIndex((prd) => prd.id === product.id)
    let newCartProducts = []

    if (cartIndex >= 0) {
      newCartProducts = CartProducts
      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1

      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...CartProducts, product]
      setCartProducts(newCartProducts)
    }

    await updateLocalStorage(newCartProducts)
  }

  const deleteProcucts = async (productId) => {
    const newCart = CartProducts.filter(product => product.id !== productId)
    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const IncraseProductCart = async (productId) => {
    const newCart = CartProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })
    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const DencraseProductCart = async (productId) => {
    const cartIndex = CartProducts.findIndex((pd) => pd.id === productId)

    if (CartProducts[cartIndex].quantity > 1) {
      const newCart = CartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProducts(newCart)
  
      await localStorage.setItem("@BurgaoHot:cartInfo", JSON.stringify(newCart))
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const ClientCartData = await localStorage.getItem("@BurgaoHot:cartInfo")

      if (ClientCartData) {
        setCartProducts(JSON.parse(ClientCartData))
      }
    }

    loadUserData()
  }, [])

  return (
    <CartContext.Provider
      value={{ putProductsInCart, CartProducts, IncraseProductCart, DencraseProductCart, deleteProcucts }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used within a UserProvider")
  }

  return context
}

CartProvider.prototype = {
  children: PropTypes.node,
}
