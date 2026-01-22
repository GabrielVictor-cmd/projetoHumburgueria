import React from "react"
import home from "../../assets/home.png"
import { Container, CartImg, Wrapper } from "./styles"
import CartItems from "../../components/CartItems"
import CartResume from "../../components/CartResume"

function Cart() {
  return (
    <Container>
      <CartImg src={home} alt="Logo" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}

export default Cart
