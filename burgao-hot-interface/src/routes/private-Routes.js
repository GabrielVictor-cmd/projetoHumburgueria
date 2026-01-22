import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import PropTypes from "prop-types"
import Header from "../components/Header"

const PrivateRoutesWrapper = ({ children, isAdmin, ...rest}) => {
  const user = localStorage.getItem("@BurgaoHot:userData")

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (isAdmin && !JSON.parse(user).admin){
    return <Navigate to="/home" replace />
  }

  return(
     <>
     {!isAdmin && <Header />}
       {children ? children : <Outlet />}
     </>
   ) 
}

export default PrivateRoutesWrapper

PrivateRoutesWrapper.propTypes = {
  children: PropTypes.node,
  isAdmin: PropTypes.bool
}
