import { carsDB, generateId } from "../data/cars";
import type { Car } from "../tests/mocks/cars";

export class Services {
  create(body: Omit<Car, "id" | "createdAt" | "updatedAt">): Car {
    const newCar: Car = {
      brand: body.brand,
      createdAt: new Date(),
      id: generateId(),
      km: body.km,
      model: body.model,
      price: body.price,
      updatedAt: new Date(),
      year: body.year
    }

    carsDB.push(newCar)

    return newCar
  }

  getMany(search?: string, year?: string): Car[] {
    const findCar: Car[] = carsDB.filter(car => {
      const filterByYear = year ? car.year === Number(year) : true
      const filterBySearch = search ? car.model.toLowerCase().includes(search.toLowerCase()) : true
      return filterByYear && filterBySearch
    })

    return findCar
  }

  getOne(id: string): Car {
    const findCar = carsDB.find(car => car.id === Number(id))

    if (!findCar) {
      throw new Error("Car not found")
    }

    return findCar
  }

  update(id: string, body: Partial<Car>): Car {
    const findCar = carsDB.find(car => car.id === Number(id)) as Car

    const updateCar = {
      ...findCar,
      ...body,
      updatedAt: new Date()
    }
    const idx = carsDB.findIndex(car => car.id === Number(id))
    carsDB.splice(idx, 1, updateCar)

    return updateCar
  }

  delete(id: string): void {
    const idx = carsDB.findIndex(car => car.id === Number(id))

    carsDB.splice(idx, 1)
  }
}