import { database, generateId } from "../database/db"
import type { Product } from "../interfaces/interfaces"

export class Services {
  static createProduct(name: string, price: number): Product {
    const newProduct: Product = {
      id: generateId(),
      name,
      price
    }
    database.push(newProduct)

    return newProduct
  }

  static getProducts() {
    return database
  }

  static getOneProduct(id: string) {
    const product = database.find(product => product.id === Number(id))

    return product
  }

  static deleteProduct(id: string) {
    const idx = database.findIndex(product => product.id === Number(id))

    database.splice(idx, 1)
  }
}