import React from "react"
import PropTypes from "prop-types"
import { Conteiner, Image, ProductName, ProductPrice } from "./styles"
import Button from "../Button"
import { useCart } from "../../hooks/CartContext"
import { useNavigate } from "react-router-dom"


function CardProducts({ product }) {
  const navigate = useNavigate()

  const { putProductsInCart } = useCart()
  return (
    <Conteiner>
      <Image src={product.url} alt="Imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={() => {
          putProductsInCart(product)
          navigate("/carrinho")
        }}>Adicionar</Button>
      </div>
    </Conteiner>
  )
}

export default CardProducts

CardProducts.propTypes = {
  product: PropTypes.object,
}
