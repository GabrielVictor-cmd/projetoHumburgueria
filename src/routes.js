import { Router } from "express"
import multer from "multer"
import multerConfig from "./config/multer.js"

import UserControler from "./app/controllers/UserControler.js"
import SessionControler from "./app/controllers/SessionControler.js"
import ProductsControler from "./app/controllers/ProductsControler.js"
import authMiddleware from "./app/middlewares/auth.js"
import CategoryControler from "./app/controllers/CategoryControler.js"
import OrderControler from "./app/controllers/OrderControler.js"
import User from "./app/models/User.js"

const upload = multer(multerConfig)
const routes = new Router()

routes.post("/users", UserControler.store)

routes.post("/sessions", SessionControler.store)
routes.get("/sessions", authMiddleware, SessionControler.index)


routes.use(authMiddleware) // Cuidado, Tudo abaixo será pedido o token nas rotas

routes.post("/products", upload.single("file"), ProductsControler.store)
routes.get("/products", authMiddleware, ProductsControler.index)
routes.put("/products/:id", upload.single("file"), ProductsControler.update)

routes.post("/categories", authMiddleware, upload.single("file"), CategoryControler.store) 
routes.get("/categories", CategoryControler.index)
routes.put("/categories/:id", upload.single("file"), CategoryControler.update)

routes.post("/orders", OrderControler.store)
routes.get("/orders", OrderControler.index)
routes.put("/orders/:id", OrderControler.update)



export default routes
