console.log("javascript is running");

function displetime(){

let a = new Date();
let d = a.getDate();
let y = a.getDay();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();


document.getElementById("date").innerHTML = d;
document.getElementById("day").innerHTML = y;
document.getElementById("hour").innerHTML = h;
document.getElementById("minutes").innerHTML = m;
document.getElementById("second").innerHTML = s;

}

setInterval(displetime, 10)
