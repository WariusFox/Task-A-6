"use strict";

const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  const gender = document.querySelector("#gender:checked")
    ? document.querySelector("#gender:checked").value
    : null;
  const agree = document.querySelector("#agree").checked;

  if (name === "" || email === "" || message === "" || !agree) {
    alert("Xanalari doldurun!");
  } else {
    console.log("Forma gonderildi");
    console.log("Ad:", name);
    console.log("Email:", email);
    console.log("Mesaj:", message);
    console.log("Cins:", gender);
    console.log("Raziliq:", agree);
  }
});
