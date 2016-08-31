function calcValues() {
  var d = new Date();
  var oneDay = 24 * 60 * 60 * 1000; 
  var firstDate = new Date(2016, 09,1);
  var diffDays = Math.round(Math.abs((firstDate.getTime() - d.getTime()) / (oneDay)));
  return diffDays < 10 ? '0' + diffDays : diffDays;
}

addElement();

function addElement () { 
    var peakDiv = document.createElement("div");
    peakDiv.className ="peaklife";
    var header = document.createElement("h1");
    var headerContent = document.createTextNode("Countdown till Colorado:"); 
  		header.appendChild(headerContent);
  		peakDiv.appendChild(header);

   
    var left = calcValues();
  if(left > 0) { // at least one day left
    for (var i = 1; i <= left; i++) {
    	var peakImg = addImageContent("images/struggle/peak.svg");
    	peakImg.title = i;
      peakDiv.appendChild(peakImg);
    }
  }
  else{
  		var newContent = document.createTextNode("The struggle has started."); 
  		peakDiv.appendChild(newContent);
  }
  var currentDiv = document.getElementById("counter");
  var peakInfo = document.getElementById("peakInfo"); 
  currentDiv.appendChild(peakDiv); 
}

function addImageContent(img){
    var myImage = new Image();
    myImage.src = img;
    myImage.className="peak"
    return myImage;
}