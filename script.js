//script.js
//custom function which perform all the job
function calculateTip(){
    //store all the require values in variables
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;
    
    //Quick Validation
    if(billAmount == "" || serviceQuality == 0){
        window.alert("something mising");
        return;// this will prevent the function from continuing
    }
    //check to see if thi input  is empty or les or equal to 1
    if(numPeople <=1 || numPeople == ""){
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    }else{
        document.getElementById("each").style.display = "block";
    }
    
    //Do some math!
    var total = (billAmount * serviceQuality)/numPeople;
    total = total.toFixed(2);
    
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
//Hide the each section also
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function(){
    calculateTip()
}