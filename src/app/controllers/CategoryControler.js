import * as Yup from "yup"
import Category from "../models/Category.js"
import User from "../models/User.js"

class CategoryControler {
  async store(request, response) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
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

      const { name } = request.body

      const { filename: path } = request.file

      const categoryExists = await Category.findOne({
        where: {
          name,
        },
      })

      if (categoryExists) {
        return response.status(400).json({ error: "Categoria já exise!" })
      }

      const { id } = await Category.create({ name, path })

      return response.json({ id, name, path, message: "Categoria criada com sucesso" })
    } catch (err) {
      console.log(err)
    }
  }

  async index(request, response) {
    const category = await Category.findAll()

    return response.json(category)
  }

  async update(request, response) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string(),
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

      const { name } = request.body

      const { id } = request.params

      const category = await Category.findByPk(id)
      if (!category) {
        return response.status(404).json({ error: "Categoria não encontrada" })
      }

      let path
      if (request.file) {
        path = request.file.filename
      }

      await Category.update(
        { name, 
          path 
        }, 
        { where: { id } }
      )

      return response.status(200).json({ id, name, path, message: "Categoria atualizada com sucesso" })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }
  }
}

export default new CategoryControler()
