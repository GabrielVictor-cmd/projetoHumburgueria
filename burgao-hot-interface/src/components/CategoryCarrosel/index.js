import React, { useEffect, useState } from "react"
import { CategoryContainer, ConteinerItems, Image, Button } from "./styles"
import api from "../../services/api"
import Carousel from "react-elastic-carousel"

function CategoryCarrosel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories")

      setCategories(data)
    }

    loadCategories()
  }, [])
  
  const BreakPoint = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]

  return (
    <CategoryContainer>
      <h1>CATEGORIAS</h1>

      <Carousel itemsToShow={4} style={{ width: "90%" }} breakPoints={BreakPoint}>
        {categories &&
          categories.map((category) => (
            <ConteinerItems key={category.id}>
              <Image src={category.url} alt={"Foto da categoria"} />
              <Button to="/produtos" state={{categoryId: category.id}}
              >{category.name}</Button>
            </ConteinerItems>
          ))}
      </Carousel>
    </CategoryContainer>
  )
}

export default CategoryCarrosel
