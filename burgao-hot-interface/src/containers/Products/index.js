import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import home from "../../assets/home.png"
import {
  ProductsConteiner,
  Container,
  ProductsImg,
  CategoryButton,
  CategoriesMenu,
} from "./styles"
import api from "../../services/api"
import CardProducts from "../../components/CardProducts"
import formatCurrency from "../../utils/formatCurrency"
import PropTypes from "prop-types"

function Products() {
  const location = useLocation()
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  const [ActiveCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories")
      const newAll = [{ id: 0, name: "Todas" }, ...data]

      setCategories(newAll)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get("/products")

      const newProducts = allProducts.map((product) => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadCategories()
    loadProducts()
  }, [])


  useEffect(() => {
    if (location.state?.categoryId) {
      setActiveCategory(location.state.categoryId)
    }
  }, [location])

  
  useEffect(() => {
    if (ActiveCategory === 0) {
      setfilteredProducts(products)
    } else {
      const NewfilteredProducts = products.filter(
        (product) => product.category_id === ActiveCategory
      )
      setfilteredProducts(NewfilteredProducts)
    }
  }, [ActiveCategory, products])

  return (
    <Container>
      <ProductsImg src={home} alt="Logo" />
      <CategoriesMenu>
        {categories &&
          categories.map((category) => (
            <CategoryButton
              key={category.id}
              isActiveCategory={ActiveCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {" "}
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
      <ProductsConteiner>
        {filteredProducts &&
          filteredProducts.map((product) => (
            <CardProducts key={product.id} product={product} />
          ))}
      </ProductsConteiner>
    </Container>
  )
}

export default Products

Products.propTypes = {
  location: PropTypes.string,
}
