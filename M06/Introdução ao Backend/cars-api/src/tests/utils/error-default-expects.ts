import { expect } from "vitest"

function errorDefaultExpects(data: { error: string }) {
  expect(data).toBeTypeOf("object")

  expect(data.error).toBeDefined()
  expect(data.error).toBeTypeOf("string")
}

export default errorDefaultExpects