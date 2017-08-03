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

		// Store inputs into firebase database
		database.ref().push({
			nameFB: userName,
			roleFB: userRole,
			startFB: userStart,
			rateFB: userRate,
			dateAdded: firebase.database.ServerValue.TIMESTAMP
		})

	});

});
