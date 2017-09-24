$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAegLIbPJiVYalA9NgY-9U5KybWX4m6Ajk",
        authDomain: "train-schedule-c1ea4.firebaseapp.com",
        databaseURL: "https://train-schedule-c1ea4.firebaseio.com",
        projectId: "train-schedule-c1ea4",
        storageBucket: "",
        messagingSenderId: "473301401962"
    };
    firebase.initializeApp(config);

    // Create a variable to reference the database
    var database = firebase.database();

    $('#button').on('click', function () {
        event.preventDefault();

        // Grabs user input
        var tName = $("#name").val().trim();
        var tDestination = $("#destination").val().trim();
        var tTime = $("#time").val().trim();
        var tFrequency = $("#frequency").val().trim();

        // Creates local "temporary" object for holding employee data
        var trainValues = {

            name: tName,
            destination: tDestination,
            time: tTime,
            frequency: tFrequency,

        };

        // Push new values to the database
        database.ref().push(trainValues);

    });

    database.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val());

        var getData = childSnapshot.val();

        var tName = getData.name;
        var tDestination = getData.destination;
        var tTime = getData.time;
        var tFrequency = getData.frequency;

        console.log(tName);
        console.log(tDestination);
        console.log(tTime);
        console.log(tFrequency);

        $("#tableAdd").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tTime + "</td><td>" + tFrequency + "</td></tr>");


    });










});