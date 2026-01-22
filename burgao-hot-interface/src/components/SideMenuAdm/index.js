import React from "react"
import { Container, ListLink, ItemsConteiner } from "./styles"
import ListLinks from "./menu-list"
import LogoutIcon from "@mui/icons-material/Logout"
import PropTypes from "prop-types"
import {useUser} from "../../hooks/UserContext"
import Admin from "../../containers/Admin"
import { useNavigate, useLocation } from "react-router-dom"

 
function SideMenuAdm() {
  const { logout } = useUser()
  const path = useLocation().pathname

  return (
    <Container>
      <hr></hr>
      {ListLinks.map((item) => (
        <ItemsConteiner key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}> {item.label}</ListLink>
        </ItemsConteiner>
      ))}
      <hr></hr>

      <ItemsConteiner style={{position: "fixed", bottom: "30px"}}>
        <LogoutIcon style={{ color: "#ffffff"}} />
        <ListLink to="/login" onClick={logout}>Sair</ListLink>
      </ItemsConteiner>
    </Container>
  )
}

export default SideMenuAdm

SideMenuAdm.propTypes = {
  path: PropTypes.string,
}