class Circle {
  private _radius : number

  constructor(radius) {
    this._radius = radius
  }

  set radius(radius) {
    if (radius > 0) {
      this._radius = radius
    } else {
      throw new Error("Cannot set a negative radius")
    }
  }

  get radius(): number {
    return this._radius
  }
}

const circle = new Circle(5)

console.log(circle.radius)

circle.radius = 6

console.log(circle.radius)
