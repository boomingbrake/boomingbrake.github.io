function calcValues() {
  var d = new Date();
  var oneDay = 24 * 60 * 60 * 1000; 
  var firstDate = new Date(2016, 09,1);
  var diffDays = Math.round(Math.abs((firstDate.getTime() - d.getTime()) / (oneDay)));
  return diffDays < 10 ? '0' + diffDays : diffDays;
}

addElement();

function addElement () { 
    var countSection = document.createElement("section");
    var header = document.createElement("h2");
    var headerContent = document.createTextNode("Countdown till Colorado:"); 
  		header.appendChild(headerContent);
  		countSection.appendChild(header);

    countSection.className = "counter"
    var left = calcValues();
  if(left > 0) { // at least one day left
    for (var i = left; i > 0; i--) {
      countSection.appendChild(addImageContent("../images/struggle/peak.svg"));
    }
  }
  else{
  		var newContent = document.createTextNode("The struggle has started."); 
  		countSection.appendChild(newContent);
  }
  var currentDiv = document.getElementById("main");
  var peakInfo = document.getElementById("peakInfo"); 
  currentDiv.insertBefore(countSection, peakInfo); 
}

function addImageContent(img){
    var myImage = new Image();
    myImage.src = img;
    myImage.className="peak"
    return myImage;
}