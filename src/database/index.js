import { Sequelize } from "sequelize"
import User from "../app/models/User.js"
import Products from "../app/models/Products.js"
import configDatabase from "../config/database.js"
import Category from "../app/models/Category.js"
import mongoose from "mongoose"

const models = [User, Products, Category]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize(configDatabase)
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      )
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      "mongodb://localhost:27017/MBurgaoHot",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  }
}

export default new Database()
