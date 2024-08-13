import type { Product } from "../interfaces/interfaces"

export const database: Product[] = []

let id = 0

export function generateId(): number {
  id++
  return id
}