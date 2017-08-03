<<<<<<< HEAD
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

// $(document).ready(function(){
//   console.log(totalBilled("05/04/16", 450));
// })


$(document).on("ready", function() {
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

	var database = firebase.database();

	$('.btn').on('click', function() {
		event.preventDefault();

		// Capture user input values
		var userName = $('#employee-name').val().trim();
		var userRole = $('#role').val().trim();
		var userStart = $('#start-date').val().trim();
		var userRate = $('#month-rate').val().trim();

		// Store inputs into firebase database
		database.ref().push({
			nameFB: userName,
			roleFB: userRole,
			startFB: userStart,
			rateFB: userRate,
			dateAdded: firebase.database.ServerValue.TIMESTAMP
		})

	});
=======

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

var database = firebase.database();

var userName = '';
var userRole = '';
var userStart = 0;
var userRate = 0;

$('.btn').on('click', function() {
	event.preventDefault();

	// Capture user input values
	userName = $('#employee-name').val().trim();
	userRole = $('#role').val().trim();
	userStart = $('#start-date').val().trim();
	userRate = $('#month-rate').val().trim();
	console.log(userName);
	// Store inputs into firebase database
	database.ref().push({
		nameFB: userName,
		roleFB: userRole,
		startFB: userStart,
		rateFB: userRate,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	})

	$('#employee-name, #role, #start-date, #month-rate').val('');
>>>>>>> 1ba8e639087f370e6e1d812a8d0f31128b1e61df

});


