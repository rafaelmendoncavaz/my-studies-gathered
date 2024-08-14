import { beforeAll, describe, expect, it } from "vitest";
import { carsDB } from "../data/cars";
import { firstCar, secondCar } from "./mocks/cars";
import request from "./setup-files";
import carDefaultExpects from "./utils/car-default-expects";
import errorDefaultExpects from "./utils/error-default-expects";

describe("get cars", () => {
  beforeAll(() => {
    carsDB.push(firstCar())
    carsDB.push(secondCar())
  })

  it("should be able to get cars correctly", async () => {
    const data = await request
      .get("/cars")
      .expect(200)
      .then((response) => response.body)

    expect(data).toHaveLength(2)

    carDefaultExpects(data[0])

    expect(data[0].km).toBeDefined()
    expect(data[1].km).toBeTypeOf("number")
  })

  it("should be able to search a car by model successfully", async () => {
    const data = await request
      .get("/cars?search=uno")
      .expect(200)
      .then((response) => response.body)

    expect(data).toHaveLength(1)

    carDefaultExpects(data[0])

    expect(data[0].km).toBeDefined()
    expect(data[0].km).toBeTypeOf("number")
  })

  it("should be able to search a car by year successfully", async () => {
    const data = await request
      .get("/cars?year=2018")
      .expect(200)
      .then((response) => response.body)

    expect(data).toHaveLength(1)

    carDefaultExpects(data[0])

    expect(data[0].km).toBeDefined()
    expect(data[0].km).toBeTypeOf("number")
  })

  it("should be able to get a single car successfully", async () => {
    const data = await request
      .get("/cars/1")
      .expect(200)
      .then((response) => response.body)

    carDefaultExpects(data)

    expect(data.km).toBeDefined()
    expect(data.km).toBeTypeOf("number")
  })

  it("should throw error when the id is incorrect", async () => {
    const data = await request
      .get("/cars/3")
      .expect(404)
      .then((response) => response.body)

    errorDefaultExpects(data)
  })
})