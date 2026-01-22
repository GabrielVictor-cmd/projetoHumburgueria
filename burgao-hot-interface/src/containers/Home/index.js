import React from "react"
import home from "../../assets/home.png"
import { HomeContainer, HomeImg } from "./styles"
import CategoryCarrosel from "../../components/CategoryCarrosel"
import OffersCarrosel from "../../components/OffersCarrosel"

function Home() {

    return(
        <HomeContainer>
            <HomeImg src={home} alt="Logo" />
            <CategoryCarrosel />
            <OffersCarrosel />
        </HomeContainer>
    )
}

export default Home