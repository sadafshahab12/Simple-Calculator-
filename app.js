let div = document.querySelectorAll(".btn");
let display_value = document.querySelector(".display input");
let clear_on = document.querySelector(".on");
let del = document.querySelector(".del");
let equal = document.querySelector(".equal");

div.forEach((e) => {
  let display = () => {
    display_value.value += e.value;
  };
  e.addEventListener("click", display);
});

clear_on.addEventListener("click", () => {
  display_value.value = " ";
});
del.addEventListener("click", () => {
  display_value.value = display_value.value.toString().slice(0, -1);
});

equal.addEventListener("click", () => {
  display_value.value = eval(display_value.value);
});

// first_line.forEach((e) => {
//   let display = () => {
//     display_value.value += e.value;
//   };
//   e.addEventListener("click", display);
// });
// // ---------------------------------------------------
// // empty display value
// first_line_on.forEach((e) => {
//   let display = () => {
//     display_value.value = " ";
//   };
//   e.addEventListener("click", display);
// });
// // ---------------------------------------------------
// // delete display value
// first_line_del.forEach((e) => {
//   let display = () => {
//     display_value.value = e.value.toString().slice(1, -1);
//   };
//   e.addEventListener("click", display);
// });
// // ---------------------------------------------------
// sec_line.forEach((e) => {
//   let display = () => {
//     display_value.value += e.value;
//   };
//   e.addEventListener("click", display);
// });
// // ---------------------------------------------------
// third_line.forEach((e) => {
//   let display = () => {
//     display_value.value += e.value;
//   };
//   e.addEventListener("click", display);
// });
// // ---------------------------------------------------
// forth_line.forEach((e) => {
//   let display = () => {
//     display_value.value += e.value;
//   };
//   e.addEventListener("click", display);
// });
// // ---------------------------------------------------
// // equal.addEventListener("click", ()=>{
// //     display_value.value= eval(display_value.value);
// //     equal.display_value = display_value

// // });

// fifth_line.forEach((e) => {
//   let display = () => {
//     display_value.value += e.value;
//   };
//   e.addEventListener("click", display);
// });
