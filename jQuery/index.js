// // var x = Math.floor(Math.random() * 256) + 1;
// // var y = Math.floor(Math.random() * 256) + 1;
// // var z = Math.floor(Math.random() * 256) + 1;

// // var color = "rgb(" + x + ", " + y + ", " + z + ")";
// // console.log(color);
// // $(document).ready(function () {
// //   $("button").css("height", "50px");
// //   $("button").css("font-size", "20px");
// // });

// // $("button").click(function () {
// //   $("h1").css("color", color);
// //   console.log($("h1").css("color"));
// //   typeof $("h1").css("color");
// // });

// // const title = document.querySelector("#title");
// // const base_color = "white";
// // const other_color = "#16a085";

// // function handleClick() {
// //   const current_color = title.style.color;
// //   if (current_color === base_color) {
// //     title.style.color = other_color;
// //   } else {
// //     title.style.color = base_color;
// //   }
// // }

// // function init() {
// //   title.style.color = base_color;
// //   title.addEventListener("click", handleClick);
// // }

// // init();

// const title = document.querySelector("#title");
// const CLICKED_CLASS = "clicked";

// function handleClick() {
//   title.classList.toggle(CLICKED_CLASS);
// }

// function init() {
//   title.addEventListener("click", handleClick);
// }

// init();

// // $("button").click(function (event) {
// //   console.log($(".input_result").value);
// //   console.log(event);
// //   $("h2").innerText = "Bye~";
// // });

// $("button").click(function () {
//   var name = document.getElementById("name").value;
//   console.log(name);
//   if (name.length == 0) {
//     name = "아무것도 입력되지 않았습니다.";
//   } else {
//     name = "😎 : " + name;
//   }
//   document.getElementById("result").innerText = name;
//   document.querySelector("h1").innerText = name;
// });

// $("button").click(function () {
//   $("body").css("background-color", "pink");
// });

// $("h1").on("mouseover", function () {
//   $("h1").css("color", "beige");
// });

// $("h1").on("mouseout", function () {
//   $("h1").css("color", "#16a085");
// });
