import type { Car } from "../tests/mocks/cars"

export const carsDB: Car[] = []

let id = 0

export function generateId(): number {
  id++
  return id
}

function resetCarsDB() {
  carsDB.length = 0
}

export default resetCarsDB