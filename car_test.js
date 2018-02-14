var expect = chai.expect;

describe("Car", function() {
  
  describe("constructor", function() {
    
    it("should have make stored in make", function() {
      var car = new Car("Toyota", "Rav4", 2016);
      expect(car.make).to.equal("Toyota");
    });

     it("should have model stored in model", function() {
      var car = new Car("Toyota", "Rav4", 2016);
      expect(car.model).to.equal("Rav4");
    });

     it("should have year stored in year/", function() {
      var car = new Car("Toyota", "Rav4", 2016);
      expect(car.year).to.equal(2016);
    }); 

	it("should have a default year", function() {
      var car = new Car();
      expect(car.year).to.equal(2018);
    });

	it("mileage should start at 0", function() {
      var car = new Car();
      expect(car.mileage).to.equal(0);
    });

  });

describe("drive", function() {
    
    it("positive miles driven should increment total miles driven", function() {
      var car = new Car();
      car.drive(20);
      car.drive(80);
      expect(car.mileage).to.equal(100);
    });

     it("should throw an error if a negative number is passed in", function() {
      expect(function() {
        (new Car()).drive(-1);
      }).to.throw(Error);

    });

     it("should throw an error if zero is passed in", function() {
      expect(function() {
        (new Car()).drive(0);
      }).to.throw(Error);
    });

    it("should throw an error if blank miles are passed in", function() {
      expect(function() {
        (new Car()).drive();
      }).to.throw(Error);
    }); 
    
  });

describe("driveForSomeTime", function() {
    
    it("Verify that positive miles/second then the car drives the appropriate amount of miles", function() {
      var car = new Car();
      car.driveForSomeTime(3000,600,function() {
        expect(car.mileage).to.equal(1500);
      });
      });

     it("should throw an error if a negative number is passed in for seconds to drive for", function() {
      expect(function() {
        (new Car()).driveForSomeTime(-1,1);
      }).to.throw(Error);

    });

     it("should throw an error if a negative number is passed in for miles per second", function() {
      expect(function() {
        (new Car()).driveForSomeTime(1,-1);
      }).to.throw(Error);

    });

     it("should throw an error if zero is passed in for seconds to drive for", function() {
      expect(function() {
        (new Car()).driveForSomeTime(0,1);
      }).to.throw(Error);
    });

    it("should throw an error if zero is passed in for miles per second", function() {
      expect(function() {
        (new Car()).driveForSomeTime(1,0);
      }).to.throw(Error);
    }); 

    it("should throw an error if blank is passed in for seconds to drive for", function() {
      expect(function() {
        (new Car()).driveForSomeTime("",1);
      }).to.throw(Error);
    }); 

    it("should throw an error if blank is passed in for miles per second", function() {
      expect(function() {
        (new Car()).driveForSomeTime(1,"");
      }).to.throw(Error);
    }); 

    
  });
  });


  // describe("#greets", function() {
  //   it("should throw if no target is passed in", function() {
  //     expect(function() {
  //       (new Cow()).greets();
  //     }).to.throw(Error);
  //   });

  //   it("should greet passed target", function() {
  //     var greetings = (new Cow("Kate")).greets("Baby");
  //     expect(greetings).to.equal("Kate greets Baby");
  //   });
  // });

  // describe("#lateGreets", function() {
  //   it("should pass an error if no target is passed", function(done) {
  //     (new Cow()).lateGreets(null, function(err, greetings) {
  //       expect(err).to.be.an.instanceof(Error);
  //       done();
  //     });
  //   });

  //   it("should greet passed target after one second", function(done) {
  //     (new Cow("Kate")).lateGreets("Baby", function(err, greetings) {
  //       expect(greetings).to.equal("Kate greets Baby");
  //       done();
  //     });
  //   });
  // });



// var expect = chai.expect;

// describe("Cow", function() {
//   describe("constructor", function() {
//     it("should have a default name", function() {
//       var cow = new Cow();
//       expect(cow.name).to.equal("Anon cow");
//     });

//     it("should set cow's name if provided", function() {
//       var cow = new Cow("Kate");
//       expect(cow.name).to.equal("Kate");
//     });
//   });

//   describe("#greets", function() {
//     it("should throw if no target is passed in", function() {
//       expect(function() {
//         (new Cow()).greets();
//       }).to.throw(Error);
//     });

//     it("should greet passed target", function() {
//       var greetings = (new Cow("Kate")).greets("Baby");
//       expect(greetings).to.equal("Kate greets Baby");
//     });
//   });

//   describe("#lateGreets", function() {
//     it("should pass an error if no target is passed", function(done) {
//       (new Cow()).lateGreets(null, function(err, greetings) {
//         expect(err).to.be.an.instanceof(Error);
//         done();
//       });
//     });

//     it("should greet passed target after one second", function(done) {
//       (new Cow("Kate")).lateGreets("Baby", function(err, greetings) {
//         expect(greetings).to.equal("Kate greets Baby");
//         done();
//       });
//     });
//   });
// });