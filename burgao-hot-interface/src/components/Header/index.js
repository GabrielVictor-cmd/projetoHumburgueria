import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import Cart from "../../assets/cart.svg"
import pessoa from "../../assets/pessoa.svg"
import { Container, ContainerLeft, ContainerRight, PageLink, ContainerText, Line, PageLinkExit } from "./styles"
import { useUser, } from "../../hooks/UserContext"

function Header() {
  const { logout } = useUser()
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === "/home"
  const isProducts = location.pathname === "/produtos"
  let userName = JSON.parse(localStorage.getItem("@BurgaoHot:userData"))

  
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => navigate("/home")} isActive={isHome}>HOME</PageLink>
        <PageLink onClick={() => navigate("/produtos")} isActive={isProducts}>PRODUTOS</PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => navigate("/carrinho")}> <img src={Cart} alt="Cart" /> </PageLink>

        <Line></Line>

        <PageLink> <img src={pessoa} alt="User" /> </PageLink>

        <ContainerText>
            <p>
              Olá, {userName.name}!
            </p>
            <PageLinkExit to="/login" onClick={logout}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}

export default Header
