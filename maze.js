window.onload = function()
{
	var bounds = document.getElementsByClassName("boundary");
	for (var i = 0; i < bounds.length - 1; i++)
    {
  		bounds[i].onmouseenter = function() {theseWalls()};
   	}

   	//document.getElementById("maze").onmousemove =function(){mouseLoc(event)};
   	document.getElementById('end').onmouseenter = function(){win()};
   	document.getElementById('start').onclick = function()
   	{	
   	 if (document.getElementById('boundary1').className=="boundary") {
        mouseLoc();
      }else {
        restart();
      } 
  };
};

function theseWalls()
{
	var bounds = document.querySelectorAll(".boundary");
	for (var i = 0; i < bounds.length - 1; i++)
    {
  		bounds[i].className= 'boundary youlose';
   	}
   	document.getElementById('status').innerHTML = 'YOU LOSE';
}

 function win()
 {
 	if(document.getElementById('boundary1').className!="boundary youlose")
 	{
 		document.getElementById('status').innerHTML = 'YOU WIN';
 	}
 }

function restart()
{
	if(document.getElementById('boundary1').className=="boundary youlose")
 	{
 		var bounds = document.querySelectorAll(".boundary");
		for (var i = 0; i < bounds.length - 1; i++)
	    {
	  		bounds[i].className= 'boundary';
	   	}
	    document.getElementById('status').innerHTML = 'Move your mouse over the "S" to begin.';
	    mouseLoc();
 	}
}
function mouseLoc()
{
	var x = event.clientX;
    window.onmousemove = function(){
    	var y = event.clientX;
    	if(y<x)
    	{
    		theseWalls();
    	}
    }
}

