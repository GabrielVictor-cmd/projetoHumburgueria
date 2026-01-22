import React, { useEffect, useState } from "react"
import {
  OffersContainer,
  OffersItems,
  Image,
  Button,
} from "./styles"
import api from "../../services/api"
import Carousel from "react-elastic-carousel"
import formatCurrency from "../../utils/formatCurrency"
import { useCart } from "../../hooks/CartContext"
import { useNavigate } from "react-router-dom"

function OffersCarrosel() {
  const navigate = useNavigate()
  const [offers, setOffers] = useState([])
  const { putProductsInCart } = useCart()


  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get("/products")
      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })

      setOffers(onlyOffers)
    }

    loadOffers()
  }, [])

  const BreakPoint = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]

  return (
    <OffersContainer>
      <h1>OFERTAS</h1>

      <Carousel
        itemsToShow={4}
        style={{ width: "90%" }}
        breakPoints={BreakPoint}
      >
        {offers &&
          offers.map((product) => (
            <OffersItems key={product.id}>
              <Image src={product.url} alt={"Foto da oferta"} />
              <p>{product.name}</p>
              <p>{product.formatedPrice}</p>
              <Button onClick={() => {
                putProductsInCart(product)
                navigate("/carrinho")
                }}>Peça Agora</Button>
            </OffersItems>
          ))}
      </Carousel>
    </OffersContainer>
  )
}

export default OffersCarrosel
