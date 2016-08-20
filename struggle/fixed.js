function calcValues() {
  var d = new Date();
  var oneDay = 24 * 60 * 60 * 1000; 
  var firstDate = new Date(2016, 09,1);
  var diffDays = Math.round(Math.abs((firstDate.getTime() - d.getTime()) / (oneDay)));
  return diffDays < 10 ? '0' + diffDays : diffDays;
}

addElement();

function addElement () { 
    var newDiv = document.createElement("section");
    var left = calcValues();
  if(isDivisible(left,1) > 1) { // at least one day left
    // moreThan10 = isDivisible(left, 10);
    // if(moreThan10 >= 1){
    //   for (var i = moreThan10; i > 0; i--) {
    //    newDiv.appendChild(addImageContent("../images/struggle/10peaks.svg"));
    //   }
    //   left = (left - (10 * moreThan10))
    // }
    // moreThan5 = isDivisible(left, 5);
    // if(moreThan5 >= 1){
    //   for (var i = moreThan5; i > 0; i--) {
    //    newDiv.appendChild(addImageContent("../images/struggle/5peaks.svg"));
    //   }
    //   left = (left - (5 * moreThan5))
    // }
    for (var i = left; i > 0; i--) {
      newDiv.appendChild(addImageContent("../images/struggle/peak.svg"));
    }
  }
  else{
     var newContent = document.createTextNode("The struggle has started."); 
    newDiv.appendChild(newContent);
  }
  var currentDiv = document.getElementById("count"); 
  currentDiv.appendChild(newDiv); 
}
function isDivisible(a, b){
    var result = a / b;
    return Math.floor(result);
}
function addImageContent(img){
    var myImage = new Image();
    myImage.src = img;
    myImage.className="peak"
    return myImage;
}