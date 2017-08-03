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

});

function totalBilled(startDate, monthlyRate) {
    var payment = monthsWorked(startDate) * parseInt(monthlyRate);
    console.log("payment - " + payment);
    return (payment);
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

database.ref().on("child_added", function(snapshot) {
    console.log(snapshot);
    // monthsWorked still has to me calculated from start date.
    var monthsWorked = 1;
    var monthlyRate = snapshot.val().rateFB;
    var totalBilled = monthsWorked * monthlyRate;
    appendRowToTable(snapshot.val().nameFB, snapshot.val().roleFB, snapshot.val().startFB, monthsWorked, monthlyRate, totalBilled);
    // Log everything that's coming out of snapshot
    console.log(snapshot.val());

    // Handle the errors
}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

function appendRowToTable(name, role, startDate, monthsWorked, monthlyRate, totalBilled) {
    var $row = $("<tr>").append($("<td>").text(name)).append($("<td>").text(role)).append($("<td>").text(startDate))
        .append($("<td>").text(monthsWorked)).append($("<td>").text(monthlyRate)).append($("<td>").text(totalBilled));
    $("table.table tbody").append($row);
}