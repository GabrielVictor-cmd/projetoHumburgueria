import * as Yup from "yup"
import User from "../models/User.js"
import jwt from "jsonwebtoken"
import authConfig from "../../config/auth.js"

class SessionControler {
  async index(request, response) {
    try {
      const user = await User.findByPk(request.userId)
      if (!user)
        return response.status(404).json({ error: "Usuário não encontrado" })

      return response.json({
        id: user.id,
        name: user.name,
        email: user.email,
        admin: user.admin,
      })
    } catch (err) {
      return response.status(500).json({ error: err.message })
  }
  }

  async store(request, response) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
      })

      const email_password_incorret = () => {
        return response
          .status(400)
          .json({ error: "Dados de email ou senha incorretos" })
      }

      if (!(await schema.isValid(request.body)))
        return email_password_incorret()

      const { email, password } = request.body

      const user = await User.findOne({
        where: { email },
      })

      if (!user) return email_password_incorret()

      if (!(await user.checkPassword(password)))
        return email_password_incorret()

      return response.json({
        id: user.id,
        name: user.name,
        email,
        admin: user.admin,
        token: jwt.sign({ id: user.id, name: user.name }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }
  }
}

export default new SessionControler()
