calcValues();

function calcValues() {
  var d = new Date();
  var oneDay = 24 * 60 * 60 * 1000; 
  var firstDate = new Date(2016, 09,1);
  var diffDays = Math.round(Math.abs((firstDate.getTime() - d.getTime()) / (oneDay)));
  var daysLeft = diffDays < 10 ? '0' + diffDays : diffDays;
  $("#count").innerHTML(daysLeft);
}