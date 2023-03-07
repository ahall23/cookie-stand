"use strict";
function getRandom(max, min) {
  return Math.ceil(Math.random() * (max - min) + min);
  // 0 >= random #  <= 1  * limit
}

function cookstandLocation(min, max, avg, location, hours) {
  const stand = {};
  stand.min = min;
  stand.max = max;
  stand.avg = avg;
  stand.location = location;
  stand.hoursOfOperation = [
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
  ];
  stand.customersPerHour = function () {
    console.log(this.max);
    console.log(this.min);
    return getRandom(this.max, this.min);
  };
  stand.cookiesPerHour = [];
  stand.getCookies = function () {
    for (let i = 0; i < this.hoursOfOperation.length; i++) {
      console.log("seattle avg cookies/sale", this.avg);
      console.log("seattle avg customers/hour", this.customersPerHour());
      this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
    }
    return this.cookiesPerHour;
  };
  stand.render = function () {
    let time = document.querySelectorAll(".time");
    let table = document.querySelector("#wholeTable");
    let trDemo = document.createElement("tr");
    table.append(trDemo);
    for (let i = 0; i < this.hoursOfOperation.length; i++) {
      let localeTD = document.createElement("td");
      console.log(this.cookiesPerHour);
      localeTD.innerHTML += this.cookiesPerHour[i];
      trDemo.append(localeTD);
    }

    // for (let i = 0; i < this.hoursOfOperation.length; i++) {
    //   //hoursDemo[i].innerHTML
    //   let variable = document.createElement("td");
    //   variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
    //   hoursArray4.append(variable);
    // }
  };
  return stand;
}

let Seattle = new cookstandLocation(23, 65, 6.3, "Seattle");
Seattle.getCookies();
Seattle.render();
let Tokyo = new cookstandLocation(3, 24, 1.2, "Tokyo");
Tokyo.getCookies();
Tokyo.render();
let Paris = new cookstandLocation(11, 38, 3.7, "Paris");
Paris.getCookies();
Paris.render();
let Dubai = new cookstandLocation(20, 38, 2.3, "Dubais");
Dubai.getCookies();
Dubai.render();
let Lima = new cookstandLocation(2, 16, 4.6, "Lima");
Lima.getCookies();
Lima.render();
// let hoursDemo = [
//   "6am",
//   "7am",
//   "8am",
//   "9am",
//   "10am",
//   "11am",
//   "12pm",
//   "1pm",
//   "2pm",
//   "3pm",
//   "4pm",
//   "5pm",
//   "6pm",
//   "7pm",
// ];
// let cookieDemo = [
//   152, 265, 202, 353, 227, 221, 202, 378, 171, 309, 215, 189, 189, 385,
// ];
// // let hourssArray = document.querySelector(".outputSeattle");
// // for (let i = 0; i < hoursDemo.length; i++) {
// //   // hoursDemo[i].innerHTML;
// //   let variable = document.createElement("td");
// //   variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
// //   hourssArray.append(variable);
// // }

// function getRandom(max, min) {
//   return Math.ceil(Math.random() * (max - min) + min);
//   // 0 >= random #  <= 1  * limit
// }

// const tokyo = {
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   location: "Tokyo",
//   hoursOfOperation: [
//     "6am",
//     "7am",
//     "8am",
//     "9am",
//     "10am",
//     "11am",
//     "12pm",
//     "1pm",
//     "2pm",
//     "3pm",
//     "4pm",
//     "5pm",
//     "6pm",
//     "7pm",
//   ],
//   customersPerHour: function () {
//     console.log(this.max);
//     console.log(this.min);
//     return getRandom(this.max, this.min);
//   },
//   cookiesPerHour: [],
//   getCookies: function () {
//     for (let i = 0; i < this.hoursOfOperation.length; i++) {
//       console.log("tokyo avg cookies/sale", this.avg);
//       console.log("tokyo avg customers/hour", this.customersPerHour());
//       this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
//     }
//     return this.cookiesPerHour;
//   },
// };

// tokyo.getCookies();
// // let hoursDemo = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// // let cookieDemo = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
// let hoursArray1 = document.querySelector(".outputTokyo");
// // for (let i = 0; i < hoursDemo.length; i++) {
// //   //hoursDemo[i].innerHTML
// //   let variable = document.createElement("td");
// //   variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
// //   hoursArray1.append(variable);
// // }

// function getRandom(max, min) {
//   return Math.ceil(Math.random() * (max - min) + min);
//   // 0 >= random #  <= 1  * limit
// }

// const dubai = {
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   location: "Dubai",
//   hoursOfOperation: [
//     "6am",
//     "7am",
//     "8am",
//     "9am",
//     "10am",
//     "11am",
//     "12pm",
//     "1pm",
//     "2pm",
//     "3pm",
//     "4pm",
//     "5pm",
//     "6pm",
//     "7pm",
//   ],
//   customersPerHour: function () {
//     console.log(this.max);
//     console.log(this.min);
//     return getRandom(this.max, this.min);
//   },
//   cookiesPerHour: [],
//   getCookies: function () {
//     for (let i = 0; i < this.hoursOfOperation.length; i++) {
//       console.log("dubai avg cookies/sale", this.avg);
//       console.log("dubai avg customers/hour", this.customersPerHour());
//       this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
//     }
//     return this.cookiesPerHour;
//   },
// };
// dubai.getCookies();
// // let hoursDemo = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// // let cookieDemo = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
// let hoursArray2 = document.querySelector(".outputDubai");
// for (let i = 0; i < hoursDemo.length; i++) {
//   //hoursDemo[i].innerHTML
//   let variable = document.createElement("li");
//   variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
//   hoursArray2.append(variable);
// }

// function getRandom(max, min) {
//   return Math.ceil(Math.random() * (max - min) + min);
//   // 0 >= random #  <= 1  * limit
// }

// function getRandom(max, min) {
//   return Math.ceil(Math.random() * (max - min) + min);
//   // 0 >= random #  <= 1  * limit
// }

// const paris = {
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   location: "Paris",
//   hoursOfOperation: [
//     "6am",
//     "7am",
//     "8am",
//     "9am",
//     "10am",
//     "11am",
//     "12pm",
//     "1pm",
//     "2pm",
//     "3pm",
//     "4pm",
//     "5pm",
//     "6pm",
//     "7pm",
//   ],
//   customersPerHour: function () {
//     console.log(this.max);
//     console.log(this.min);
//     return getRandom(this.max, this.min);
//   },
//   cookiesPerHour: [],
//   getCookies: function () {
//     for (let i = 0; i < this.hoursOfOperation.length; i++) {
//       console.log("paris avg cookies/sale", this.avg);
//       console.log("paris avg customers/hour", this.customersPerHour());
//       this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
//     }
//     return this.cookiesPerHour;
//   },
// };
// paris.getCookies();

// let hoursArray3 = document.querySelector(".outputParis");
// for (let i = 0; i < hoursDemo.length; i++) {
//   //hoursDemo[i].innerHTML
//   let variable = document.createElement("td");
//   variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
//   hoursArray3.append(variable);
// }

// function getRandom(max, min) {
//   return Math.ceil(Math.random() * (max - min) + min);
// }

// const lima = {
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   location: "Lima",
//   hoursOfOperation: [
//     "6am",
//     "7am",
//     "8am",
//     "9am",
//     "10am",
//     "11am",
//     "12pm",
//     "1pm",
//     "2pm",
//     "3pm",
//     "4pm",
//     "5pm",
//     "6pm",
//     "7pm",
//   ]
//   customersPerHour: function () {
//     console.log(this.max);
//     console.log(this.min);
//     return getRandom(this.max, this.min);
//   };
//   cookiesPerHour: [],
//   getCookies: function () {
//     for (let i = 0; i < this.hoursOfOperation.length; i++) {
//       console.log("lima avg cookies/sale", this.avg);
//       console.log("lima avg customers/hour", this.customersPerHour());
//       this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
//     }
//     return this.cookiesPerHour;
//   };

// lima.getCookies();
// // let hoursDemo = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// // let cookieDemo = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
// let hoursArray4 = document.querySelector(".outputLima");

// stand.render = function () {
//   let trDemo = document.createElement("tr");
//   let localeTD = document.createElement("td");

//   for (let i = 0; i < hoursDemo.length; i++) {
//     //hoursDemo[i].innerHTML
//     let variable = document.createElement("td");
//     variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
//     hoursArray4.append(variable);
//   }
// };
