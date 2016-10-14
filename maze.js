window.onload = function()
{
	var bounds = document.getElementsByClassName("boundary");
	for (var i = 0; i < bounds.length - 1; i++)
    {
  		bounds[i].onmouseenter = function() {theseWalls()};
   	}
	 
};

function theseWalls()
{
	var bounds = document.querySelectorAll(".boundary");
	for (var i = 0; i < bounds.length - 1; i++)
    {
  		bounds[i].className= 'boundary youlose';
   	}
}