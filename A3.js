var x = document.querySelector("#Click");
var	y = document.querySelector("#Close");
var modal = document.querySelector(".modal");
x.addEventListener("click", function(){
	modal.style.display = "block";
});

y.addEventListener("click", function(){
	modal.style.display = "none";
})