$(document).ready(function () {
    var inf = {
        employe: '',
        role: '',
        date: '',
        Month: '',
        rate: 0
    }

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

    var database = firebase.database();

    $('#button').on('click', function () {
        event.preventDefault();
        inf.employe = $('#name').val().trim();
        inf.role = $('#role').val().trim();
        inf.date = $('#date').val().trim();
        inf.rate = $('#rate').val().trim();
        // inf.Month = -(moment(inf.date, "MM/DD/YYYY").diff(moment().format('L'), 'Months'));
        database.ref().push(inf);
        var tr = $('<tr>');
        $.each(inf, function (key, value) {
            tr.append('<td>' + value + '</td>');
            console.log(value);
        });
        // tr.append(inf.Month * inf.rate);
        $("#tableAdd").append(tr);
    });













});