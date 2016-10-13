window.onload = function(){
document.getElementById("boundary1").onmouseenter = function() {mouseEnter()};

function mouseEnter() {
   document.getElementById("boundary1").className+=' youlose';
}
};