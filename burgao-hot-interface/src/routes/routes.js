import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "../containers/Login"
import Register from "../containers/Register"
import Home from "../containers/Home"
import PrivateRoutesWrapper  from "./private-Routes"
import Products from "../containers/Products"
import Cart from "../containers/Cart"
import Admin from "../containers/Admin"
import paths from "../constantes/path"


function routes(){
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro" element={<Register/>} />
                <Route path="/" element={<PrivateRoutesWrapper><Home/></PrivateRoutesWrapper>} />
                <Route path="/home" element={<PrivateRoutesWrapper><Home/></PrivateRoutesWrapper>} />
                <Route path="/produtos" element={<PrivateRoutesWrapper><Products/></PrivateRoutesWrapper>} />
                <Route path="/carrinho" element={<PrivateRoutesWrapper><Cart/></PrivateRoutesWrapper>} />

                <Route path={paths.Orders} element={<PrivateRoutesWrapper isAdmin={true}><Admin/></PrivateRoutesWrapper>} />
                <Route path={paths.Products} element={<PrivateRoutesWrapper isAdmin={true}><Admin/></PrivateRoutesWrapper>} />
                <Route path={paths.NewProduct} element={<PrivateRoutesWrapper isAdmin={true}><Admin/></PrivateRoutesWrapper>} />
                <Route path={paths.EditProduct} element={<PrivateRoutesWrapper isAdmin={true}><Admin/></PrivateRoutesWrapper>} />

            </Routes>
        </Router>
    )
}

export default routes