import { beforeAll, describe, expect, it } from "vitest"
import { carsDB } from "../data/cars"
import { firstCar } from "./mocks/cars"
import request from "./setup-files"
import carDefaultExpects from "./utils/car-default-expects"
import errorDefaultExpects from "./utils/error-default-expects"

const updateData = {
  km: 120000,
  price: 32000
}

describe("update car", () => {
  beforeAll(() => {
    carsDB.push(firstCar())
  })

  it("should be able to update a car successfully", async () => {
    const data = await request
      .patch("/cars/1")
      .send(updateData)
      .expect(206)
      .then((response) => response.body)

    carDefaultExpects(data)

    expect(data.km).toBe(updateData.km)
    expect(data.price).toBe(updateData.price)
  })

  it("should throw error when the id is incorrect", async () => {
    const data = await request
      .patch("/cars/2")
      .send(updateData)
      .expect(404)
      .then((response) => response.body)

    errorDefaultExpects(data)
  })
})