import React, { useEffect, useState } from "react"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { useNavigate } from "react-router-dom"

import { Container, Img, EditIconStyle } from "./styles"
import api from "../../../services/api"
import formatCurrency from "../../../utils/formatCurrency"
import paths from "../../../constantes/path"

function ListProducts() {
  const navigate = useNavigate()
  const [products, setProducts] = useState()

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("products")

      setProducts(data)
    }

    loadOrders()
  }, [])

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckIcon style={{ color: "#32CD32" }} />
    }
    return <CloseIcon style={{ color: "#FF6347" }} />
  }

  function editProduct(product) {
    navigate(paths.EditProduct, { state: product })
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell> Preço</TableCell>
              <TableCell align="center"> Produto em oferta</TableCell>
              <TableCell align="center"> Imagem</TableCell>
              <TableCell> Editar produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell>
                    <Img src={product.url} alt={product.name} />
                  </TableCell>
                  <TableCell>
                    <EditIconStyle onClick={() => editProduct(product)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts
