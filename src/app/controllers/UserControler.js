import { v4 } from "uuid"
import * as Yup from "yup"
import User from "../models/User.js"

class UserControler {
async store(request, response) {
try {
const schema = Yup.object().shape({
name: Yup.string().required(),
email: Yup.string().email().required(),
password: Yup.string().required().min(6),
admin: Yup.boolean(),
})

  await schema.validateSync(request.body, { abortEarly: false })

  const { name, email, password, admin } = request.body

  const userExists = await User.findOne({ where: { email } })

  if (userExists) {
    return response
      .status(409)
      .json({ error: "Email já cadastrado! Tente novamente" })
  }

  const user = await User.create({
    id: v4(),
    name,
    email,
    password,
    admin,
  })

  return response.json({
    id: user.id,
    name: user.name,
    email: user.email,
    admin: user.admin,
  })
} catch (err) {
  return response.status(400).json({ error: err.errors })
}

}
}

export default new UserControler()
