import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Conteiner, ConteinerItems } from "./styles"
import SideMenuAdm from "../../components/SideMenuAdm"
import PropTypes from "prop-types"
import paths from "../../constantes/path"
import Orders from "./Orders"
import ListProducts from "./ListProducts"
import NewProducts from "./NewProducts"
import EditProduct from "./EditProduct"

function Admin() {
  // Ajuda de I.A da linha 11 até a linha 24
  const navigate = useNavigate()
  const location = useLocation()

  const props = {
    history: { push: (path) => navigate(path), goBack: () => navigate(-1) },
    match: { path: location.pathname, url: location.pathname },
    path: location.pathname,
    url: location.pathname,
    location: location,
    navigate: navigate
  }
  //console.log(props)

  return (
    <Conteiner>
      <SideMenuAdm /> 
      <ConteinerItems path={props.path}>
        {props.path === paths.Orders && <Orders />}
        {props.path === paths.Products && <ListProducts />}
        {props.path === paths.NewProduct && <NewProducts />}
        {props.path === paths.EditProduct && <EditProduct />}

      </ConteinerItems>
    </Conteiner>

  )
}

Admin.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object,
  navigate: PropTypes.func
}

export default Admin

// https://mui.com/material-ui/react-table/