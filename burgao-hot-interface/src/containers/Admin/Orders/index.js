import React, { useEffect, useState } from "react"
import formatDate from "../../../utils/formatDate"
import { Conteiner, Menu, LinkMenu } from "./styles"
import api from "../../../services/api"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Row from "./row"
import status from "./order-status"

function Orders() {
  const [orders, setOrders] = useState([])
  const [rows, setRows] = useState([])
  const [filtredOrders, setFiltredOrders] = useState([])
  const [activeStatus, setActiveStatus] = useState(1)

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("orders")

      setOrders(data)
      setFiltredOrders(data)
    }

    loadOrders()
  }, [])

  function createData(order) {
    return {
      id: order._id,
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products,
    }
  }

  useEffect(() => {
    const newRows = filtredOrders.map(ord => createData(ord))
    setRows(newRows)
  }, [filtredOrders])


  useEffect(() => {
    if (activeStatus === 1 || activeStatus === 0 || activeStatus === null) {
      setFiltredOrders(orders)
      return
    }

    const selectedStatus = status.find(sts => sts.id === activeStatus)
    if (!selectedStatus) {
      setFiltredOrders(orders)
      return
    }

    const newFiltredOrders = orders.filter(
      order => order.status === selectedStatus.value
    )
    setFiltredOrders(newFiltredOrders)
  }, [activeStatus, orders])

  function handleStatus(status) {
    if (status.id === 1) {
      setFiltredOrders(orders)
    } else {
      const newOrders = orders.filter(order => order.status === status.value)
      setFiltredOrders(newOrders)
    }

    setActiveStatus(status.id)
  }

  return (
    <Conteiner>
      <Menu>
        {status &&
          status.map((status) => (
            <LinkMenu key={status.id} onClick={() => handleStatus(status)} isActiveStatus={activeStatus === status.id}>
              {" "}
              {status.label}
            </LinkMenu>
          ))}
      </Menu>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell> Pedido </TableCell>
              <TableCell> Cliente </TableCell>
              <TableCell> Data do pedido </TableCell>
              <TableCell> Status </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.id} row={row} setOrders={setOrders} orders={orders}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Conteiner>
  )
}

export default Orders
