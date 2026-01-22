import React, { createContext, useContext, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { toast } from "react-toastify"

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async (userInfo) => {
    setUserData(userInfo)

    await localStorage.setItem("@BurgaoHot:userData", JSON.stringify(userInfo))
  }


  const logout = async () => {
    await (localStorage.removeItem("@BurgaoHot:userData"))
    toast.info("Você saiu da sua conta")
  }

  useEffect(() => {
    const loadUserData = async () => {
      const ClientInfo = await localStorage.getItem("@BurgaoHot:userData")

      if (ClientInfo) {
        setUserData(JSON.parse(ClientInfo))
      }
    }

    loadUserData()
  }, [])

  return (
    <UserContext.Provider value={{ putUserData, userData, logout }}>
      {" "}
      {children}{" "}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error("useUser must be used within a UserProvider")
  }

  return context
}

UserProvider.prototype = {
  children: PropTypes.node,
}
