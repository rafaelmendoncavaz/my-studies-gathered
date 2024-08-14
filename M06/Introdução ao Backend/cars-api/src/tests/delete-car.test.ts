import { beforeAll, describe, it } from "vitest";
import { carsDB } from "../data/cars";
import { firstCar } from "./mocks/cars";
import request from "./setup-files";
import errorDefaultExpects from "./utils/error-default-expects";

describe("delete car", async () => {
  beforeAll(() => {
    carsDB.push(firstCar())
  })

  it("should be able to delete a car successfully", () => {
    request.delete("/cars/1")
  })

  it("should throw error when the id is incorrect", async () => {
    const data = await request
      .delete("/cars/2")
      .expect(404)
      .then((response) => response.body)

    errorDefaultExpects(data)
  })
})