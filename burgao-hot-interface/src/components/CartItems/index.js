import React from "react"
import lixeira2 from "../../assets/lixeira2.svg"
import { useCart } from "../../hooks/CartContext"
import { Container, Header, Body, EmptyCart, Lixeira } from "./styles"
import formatCurrency from "../../utils/formatCurrency"

function CartItems() {
  const {
    CartProducts,
    IncraseProductCart,
    DencraseProductCart,
    deleteProcucts,
  } = useCart()
  console.log(CartProducts)

  return (
    <Container>
      <Header>
        <p></p>
        <p>Items</p>
        <p>Preço</p>
        <p style={{ paddingRight: "20px" }}>Quantidade</p>
        <p>Total</p>
        <p>DELETAR</p>
      </Header>

      {CartProducts && CartProducts.length > 0 ? (
        CartProducts.map((product) => (
          <Body key={product.id}>
            <img src={product.url} alt={product.name} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => DencraseProductCart(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => IncraseProductCart(product.id)}>+</button>
            </div>
            <p>{formatCurrency(product.price * product.quantity)}</p>

            <button
              className="delete-btn"
              onClick={() => deleteProcucts(product.id)}
              aria-label={`Apagar ${product.name}`}
            >
              <Lixeira src={lixeira2} alt="apagar" />
            </button>
          </Body>
        ))
      ) : (
        <EmptyCart>Seu carrinho está vazio</EmptyCart>
      )}
    </Container>
  )
}

export default CartItems
