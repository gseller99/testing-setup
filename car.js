//car.js

(function(exports) {
  "use strict";

  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year || 2018;
    this.mileage = 0;
    this.drive = function(milesDriven) {
      if (!milesDriven || milesDriven <= 0)
        throw new Error("some interesting error message");
       return this.mileage = this.mileage + milesDriven;
    }

    // this.lateGreets = function(target, cb) {
    //   setTimeout(function(self) {
    //     try {
    //       cb(null, self.greets(target));
    //     } catch (err) {
    //       cb(err);
    //     }
    //   }, 1900, this);
    // }
  }
  exports.Car = Car;
})(this);

// var car = new Car("Toyota", "Rav4", 2016);

// console.log(car);

// car.drive(20);
// console.log(car.mileage);
// car.drive(80);
// console.log(car.mileage);

// cow.js
// (function(exports) {
//   "use strict";

//   function Cow(name) {
//     this.name = name || "Anon cow";
//     this.greets = function(target) {
//       if (!target)
//         throw new Error("missing target");
//       return this.name + " greets " + target;
//     }

//     this.lateGreets = function(target, cb) {
//       setTimeout(function(self) {
//         try {
//           cb(null, self.greets(target));
//         } catch (err) {
//           cb(err);
//         }
//       }, 1900, this);
//     }
//   }
//   exports.Cow = Cow;
// })(this);