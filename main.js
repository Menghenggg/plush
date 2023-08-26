// 2.variable
// 3.oprater
// 4.funcation
// 5.object
// 6.array
// 7.loop
// 8.basic awit asyn
// 9.onclick event
// 10. basic DOM (DOM change HTML CSS style)
// var name = "Heng";
// console.log(name);

// let a = 20;
// let b = 20;
// let c = a + b;
// let d = a - b;
// let e = a * b;
// let f = a / b;
// console.log(c, d, f);

// function dog() {
//   let a = 10;
//   let b = 10;
//   let c = a + b;
//   console.log(c);
// }

// dog();

// function prop(a, b) {
//   return a + b;
// }
// console.log(prop(10, 10));
// let b = { a: "meng", b: "lue", c: 9 };
// console.log(b.a);

// let ar1 = ["Meng"];
// let ar2 = ["heng"];
// const fullname = ar1.concat(ar2);
// console.log(fullname);

// let arr = [100, 20, 30, 40, 60, -100];
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr);
// const arr = [10, 20, 30, 40];
// for (let i = 0; i < arr.length; i++) {
//   const data = arr[i];
//   if (data == 40) {
//     break;
//   }
//   console.log(data);
// }
// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i += 2;
// }
// let i = 0;
// do {
//   console.log("Hello");
//   i += 2;
// } while (i < 10);

// let password = 12345;
// if (password == 123) {
//   console.log("wrong");
// } else if (password == 1234) {
//   console.log("not much");
// } else if (password == 12345) {
//   console.log("login sucess");
// } else {
//   console.log("someting wrong");
// }

function plush() {
  let val1 = document.getElementById("value1").value;
  let val2 = document.getElementById("value2").value;
  let res = Number(val1) + Number(val2);
  document.getElementById("result").innerHTML = res.toString();
}
function mines() {
  let val1 = document.getElementById("value1").value;
  let val2 = document.getElementById("value2").value;
  let res = Number(val1) - Number(val2);
  document.getElementById("result").innerHTML = res.toString();
}
function mul() {
  let val1 = document.getElementById("value1").value;
  let val2 = document.getElementById("value2").value;
  let res = Number(val1) / Number(val2);
  document.getElementById("result").innerHTML = res.toString();
}
function cleaer() {
  let val1 = (document.getElementById("value1").value = "");
  let val2 = (document.getElementById("value2").value = "");
  let res = (document.getElementById("result").innerHTML = 0);
  alert("this is clear ");
}
let i = 0;
function color() {
  let back = document.getElementById("sun");
  let boss = document.getElementById("result");
  if (i == 0) {
    back.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    boss.style.backgroundColor = "#F8F8FF";
    boss.style.color = "black";
    i = 1;
  } else {
    back.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    i = 0;
    boss.style.backgroundColor = "black";
    boss.style.color = "white";
  }
}
function border() {
  let back = document.getElementById("result");
  if (i == 0) {
    back.style.borderRadius = "10px";
    i = 1;
  } else {
    back.style.borderRadius = "1px";
    i = 0;
  }
}
