let Fullname = prompt("Merhaba adınız nedir:");
let title = document.querySelector("#myName");
title.innerHTML +=  `${Fullname}`;
let date = new Date();
let clock = document.querySelector(".clock");
clock.innerHTML += `${date}.toDateString`;