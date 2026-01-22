import React, { useState, useEffect } from "react"

import api from "../../services/api"
import { useCart } from "../../hooks/CartContext"
import { Container } from "./styles"
import Buttom from "../Button"
import FormatCurrency from "../../utils/formatCurrency"
import formatCurrency from "../../utils/formatCurrency"
import { toast } from "react-toastify"

function CartResume() {

  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryPrice, ] = useState(5)
  const { CartProducts } = useCart()

  useEffect(() => {
    const SumAllItems = CartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(SumAllItems)
  }, [CartProducts, deliveryPrice])

  const SumbmitOrder = async () => {
    const order = CartProducts.map(product => {
      return {
        id: product.id,
        quantity: product.quantity
      }
    })
    
    await toast.promise(api.post("orders", { products: order }), {
      pedding: "Enviando pedido...",
      success: "Pedido finalizado!",
      error: "Erro ao enviar pedido"
    })

  }
  
  return (
    <>
      <Container>
        <div className="Conteiner-Top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Items</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery">Taxa de entrega</p>
          <p className="delivery-price">{formatCurrency(deliveryPrice)}</p>
        </div>
        <div className="Conteiner-Bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryPrice)}</p>
        </div>

        <Buttom style={{ width: "100%", marginTop: "20px" }} onClick={SumbmitOrder}>Finalizar pedido</Buttom>
      </Container>
    </>
  )
}

export default CartResume
