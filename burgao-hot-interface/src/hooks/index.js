import React from "react"
import { UserProvider } from "./UserContext"
import { CartProvider } from "./CartContext"
import PropTypes from "prop-types"

const AppProvider = ({ children }) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
)

AppProvider.prototype = {
  children: PropTypes.node,
}

export default AppProvider
