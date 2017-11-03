      var cursor = {"x":0,"y":0},
			delta = {"x":0,"y":0};

	var strokeWidth = 10;

	var SVG = document.getElementById("SVG");
	var figure;
	var loop;
	var stop;
    var width = 5;
	
    var type = "rect";
    var rrecttype = "rect5"

	
	var draw = function(){
		clearTimeout(loop);
		
		
	if(!stop){
		loop = setTimeout(draw);
		}
  }
  

    function ChangeType (e) {
        if (e == "rrect") {
            type = "rect";
        }
        else {
            type = e;
        }
        rrecttype = e;
    }
    function ChangeColor(e) {
        color = e;
    }
    function ChangeWidth(e) {
        width = parseInt(e);
    }

	document.onmousemove = function(e){
    var rect = SVG.getBoundingClientRect();
    delta.x = (e.pageX - rect.left) - cursor.x;
    delta.y = (e.pageY - rect.top) - cursor.y;
  
    cursor.x += delta.x;
    cursor.y += delta.y; 
}

		var startX = 0;
		var startY = 0;
		
		var endX = 0;
		var endY = 0;
		
		var selectedElement = 0;
		var currentX = 0;
		var currentY = 0;
		var currentMatrix = 0;
	
	SVG.addEventListener("mousedown", function(){
	stop = false;
	

    figure = document.createElementNS('http://www.w3.org/2000/svg', type);

	startX = cursor.x;
	startY = cursor.y;
    figure.setAttribute("class","draggable")
	
    if (rrecttype == "rrect") {
        figure.setAttribute("x", startX);
        figure.setAttribute("y", startY);
        figure.setAttribute("rx", "10");
        figure.setAttribute("rx", "10");
    }
    else if (type == "rect") {
        figure.setAttribute("x", startX);
        figure.setAttribute("y", startY);
    }
    else if (type == "ellipse") {
    }
    else if (type == "line") {
        figure.setAttribute("x1", startX);
        figure.setAttribute("y1", startY);
    }

    var color = document.getElementById("colorp");
    figure.setAttribute("fill","transparent");
    figure.setAttribute("stroke",color.value);
    figure.setAttribute("stroke-width",width);
    SVG.appendChild(figure);
	loop = setTimeout(draw);
});


function selectElement(evt) {
      selectedElement = evt.target;
      currentX = evt.clientX;
      currentY = evt.clientY;
      currentMatrix = selectedElement.getAttributeNS(null, "transform").slice(7,-1).split(' ');
    
      for(var i=0; i<currentMatrix.length; i++) {
        currentMatrix[i] = parseFloat(currentMatrix[i]);
      }
      
      selectedElement.setAttributeNS(null, "onmousemove", "moveElement(evt)");
      selectedElement.setAttributeNS(null, "onmouseout", "deselectElement(evt)");
      selectedElement.setAttributeNS(null, "onmouseup", "deselectElement(evt)");
    }
        
    function moveElement(evt) {
      var dx = evt.clientX - currentX;
      var dy = evt.clientY - currentY;
      currentMatrix[4] += dx;
      currentMatrix[5] += dy;
      
      selectedElement.setAttributeNS(null, "transform", "matrix(" + currentMatrix.join(' ') + ")");
      currentX = evt.clientX;
      currentY = evt.clientY;
    }
        
    function deselectElement(evt) {
      if(selectedElement != 0){
          selectedElement.removeAttributeNS(null, "onmousemove");
          selectedElement.removeAttributeNS(null, "onmouseout");
          selectedElement.removeAttributeNS(null, "onmouseup");
          selectedElement = 0;
          }
        }




SVG.addEventListener("mouseup", function(){

		var width11 = cursor.x - startX;
        var height11 = cursor.y - startY;

        if (rrecttype == "rrect") {
        figure.setAttribute("width", width11);
        figure.setAttribute("height", height11);
        }
        else if (type == "rect") {
            figure.setAttribute("width", width11);
            figure.setAttribute("height", height11);
        }
        else if (type == "ellipse") {
            figure.setAttribute("cx", cursor.x - (cursor.x - startX)/2);
            figure.setAttribute("cy", cursor.y - (cursor.y - startY)/2);
            figure.setAttribute("rx", (cursor.x - startX)/2);
            figure.setAttribute("ry", (cursor.y - startY)/2);
        }
        else if (type == "line") {
            figure.setAttribute("x2", cursor.x);
            figure.setAttribute("y2", cursor.y);
        }


        figure.setAttribute("transform","matrix(1 0 0 1 0 0)");
        figure.setAttribute("onmousedown", "selectElement(evt)")
        stop = true;

}
);