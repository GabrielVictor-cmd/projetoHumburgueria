import React from "react"
import { ErroMessageStyles } from "./styles"
import PropTypes from "prop-types"

function ErroMessage({children}) {
    return <ErroMessageStyles>{children}</ErroMessageStyles>
}

export default ErroMessage

ErroMessage.propTypes = {
    children: PropTypes.string
}