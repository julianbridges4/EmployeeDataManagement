  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyADmvtoeIRMfZ0DYvMrk8Fz_MQ2-4gX_aI",
    authDomain: "employeedatamanagement-be900.firebaseapp.com",
    databaseURL: "https://employeedatamanagement-be900.firebaseio.com",
    projectId: "employeedatamanagement-be900",
    storageBucket: "employeedatamanagement-be900.appspot.com",
    messagingSenderId: "256758979445"
  };
  firebase.initializeApp(config);

  function totalBilled(startDate, monthlyRate) {    
    var payment = monthsWorked(startDate) * parseInt(monthlyRate);
    console.log("payment - " + payment);
    return(payment);
  }

  function monthsWorked(startDate) {  

    var startMon = moment(startDate, "MM/DD/YY");    

    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("MM"));

    // Difference 
    var diffMon = moment().diff(moment(startMon), "months");
    console.log("DIFFERENCE IN MONTHS: " + diffMon);      
    
    return diffMon;
  }

$(document).ready(function(){
  console.log(totalBilled("05/04/16", 450));
})