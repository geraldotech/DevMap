<div align="center">
    <h1>JavaScript Classes</h1>
</div>

```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const car1 = new Car("Ford", 2010);
car1.name = "Gol";
console.log(car1);

const car2 = new Car("Hond Civic", 2009);
car2.year = 2015;
console.log(car2);
```
