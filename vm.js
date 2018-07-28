document.addEventListener("DOMContentLoaded", function(){
	var body   = document.querySelector("body");
		
		
	body.addEventListener("mousemove", function(event){
        var images = document.querySelectorAll("img[data-depth]"); 

		var w = window.innerWidth;
		var h = window.innerHeight;
		var x = event.clientX - (w / 2);
        var	y = event.clientY - (h / 2);

       	for (var i=0;i<images.length;i++)
     	{
            images[i].style.right=String(images[i].dataset["depth"]*Math.sign(x) * Math.sqrt(Math.abs(x)) * 5)+"px";
            images[i].style.top=String(images[i].dataset["depth"]*Math.sign(y) * Math.sqrt(Math.abs(y)) * 5)+"px";
        };
	});
});