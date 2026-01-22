import * as Yup from "yup"
import Products from "../models/Products.js"
import Category from "../models/Category.js"
import Order from "../schemas/Order.js"
import User from "../models/User.js"

class OrderControler {
  async store(request, response) {
    try {
      const schema = Yup.object().shape({
        products: Yup.array().of(
          Yup.object().shape({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
          })
        ),
      })

      await schema.validate(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const products_id = request.body.products.map((product) => product.id)

    const updated_products = await Products.findAll({
      where: {
        id: products_id,
      },
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["name"],
        },
      ],
    })

    const edited_products = updated_products.map((product) => {
      const product_index = request.body.products.findIndex(
        (request_product) => request_product.id == product.id
      )

      const new_product = {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category.name,
        url: product.url,
        quantity: request.body.products[product_index].quantity,
      }

      return new_product
    })

    const order = {
      user: {
        id: request.userId,
        name: request.userName,
      },
      products: edited_products,
      status: "Pedido realizado",
    }

    const Order_response = await Order.create(order)

    return response.status(200).json(Order_response)
  }

  async index(request, response) {
    try {
      const orders = await Order.find()
      return response.json(orders)
    } catch (err) {
      return response.status(500).json({ error: err.message })
    }
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      status: Yup.string().required(),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { admin: isAdmin } = await User.findByPk(request.userId)

    if (!isAdmin) {
      return response.status(401).json({ error: "Lamento, acesso negado" })

    }

    const { id } = request.params
    const { status } = request.body

    try {
      const result = await Order.updateOne({ _id: id }, { status })
      return response.json({ message: "Status atualizado com sucesso" })

    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }
}

export default new OrderControler()
