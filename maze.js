window.onload = function()
{
	var bounds = document.getElementsByClassName("boundary");
	for (var i = 0; i < bounds.length - 1; i++)
    {
  		bounds[i].onmouseenter = function() {theseWalls()};
   	}
   	document.getElementById('end').onmouseenter = function(){win()};
   	//document.getElementById('start').onmouseenter = function(){restart()};
   	
	 
};

function theseWalls()
{
	var bounds = document.querySelectorAll(".boundary");
	for (var i = 0; i < bounds.length - 1; i++)
    {
  		bounds[i].className= 'boundary youlose';
   	}
}
 function win()
 {
 	if(document.getElementById('boundary1').className!="boundary youlose")
 	{
 		window.alert('You win!');
 	}
 }

