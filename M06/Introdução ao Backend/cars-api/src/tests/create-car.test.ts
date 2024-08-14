import { beforeAll, describe, it, expect } from "vitest"
import resetCarsDB from "../data/cars"
import request from "./setup-files"
import carDefaultExpects from "./utils/car-default-expects"

describe("create car", () => {
  beforeAll(() => {
    resetCarsDB()
  })

  it("should be able to create a car correctly", async () => {
    const data = await request
      .post("/cars")
      .send({
        model: "Uno",
        km: 80000,
        year: 2017,
        brand: "Fiat",
        price: 40000,
      })
      .expect(201)
      .then((response) => response.body)

    carDefaultExpects(data)

    expect(data.km).toBeDefined()
    expect(data.km).toBeTypeOf("number")
  })

  it("should be able to create card without a km", async () => {
    const data = await request
      .post("/cars")
      .send({
        model: "Gol",
        year: 2018,
        brand: "Volkswagen",
        price: 40000,
      })
      .expect(201)
      .then((response) => response.body)

    carDefaultExpects(data)

    expect(data.km).toBeUndefined()
  })
})