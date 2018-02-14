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
    };
    

    this.driveForSomeTime = function (secondsToDriveFor, milesPerSecond,callback) {
     // Make sure secondToDriveFor and milesPerSeconds are valid.
     if (!secondsToDriveFor || secondsToDriveFor <= 0 || !milesPerSecond || milesPerSecond <= 0) {
      throw new Error("error message regarding increment miles per second");
      }
        // Create variable to keep track of how many seconds have elapsed.
        var totalSecondsDriven = 0;
        // Increment seconds counter by 1
        var intervalID = setInterval(function(self) {
        totalSecondsDriven += 1000;
        // call drive (remember, while you're in the interval function "self" is an alias for "this" so use it instead of "this"
        self.drive(milesPerSecond);
        console.log(totalSecondsDriven + " = total milliseconds driven");
        console.log(self.mileage);
        // If the requested number of seconds have elapsed, stop interval
        if (secondsToDriveFor === totalSecondsDriven) {
          callback();
          clearInterval(intervalID)
        };
     }, 1000, this);
   };

  }
  exports.Car = Car;
})(this);

// var car = new Car("Toyota", "Rav4", 2016);

// console.log(car);

// car.drive(20);
// console.log(car.mileage);
// car.drive(80);
// console.log(car.mileage);
// console.dir(car);

// car.driveForSomeTime(3000,500);
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