export interface Car {
  id: number
  model: string
  km: number
  year: number
  brand: string
  price: number
  createdAt: Date
  updatedAt: Date
}

export function firstCar() {

  const date = new Date()

  return {
    id: 1,
    model: "Uno",
    km: 80000,
    year: 2017,
    brand: "Fiat",
    price: 40000,
    createdAt: date,
    updatedAt: date
  }
}

export function secondCar() {

  const date = new Date()

  return {
    id: 2,
    model: "Gol",
    km: 80000,
    year: 2018,
    brand: "Volkswagen",
    price: 40000,
    createdAt: date,
    updatedAt: date,
  }
}
