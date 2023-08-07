console.log("My name is Ashish");
let para = document.getElementById('learn-more');
let btn = document.getElementsByClassName('btn');
console.log(btn);
console.log(para);
function hide() {
    if (para.style.display = 'none') {
        para.style.display = 'block';
        console.log("display is block");
    } else {
        para.style.display = 'none';
        console.log("display is none");
    }
}
let sign_in = document.getElementById('Sign-in');
var data="Sign in";
var dataleave= sign_in.innerHTML;
function sign() {
    sign_in.innerHTML=data;
}
function signleave() {
    sign_in.innerHTML=dataleave;
}
