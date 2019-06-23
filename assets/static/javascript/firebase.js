// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyDxW8kGqFyklIVav4jWxWGPPZ4wnmRI9bU",
    authDomain: "project1-aa2d5.firebaseapp.com",
    databaseURL: "https://project1-aa2d5.firebaseio.com",
    projectId: "project1-aa2d5",
    storageBucket: "project1-aa2d5.appspot.com",
    messagingSenderId: "368285881563",
    appId: "1:368285881563:web:303c8de4daaf0c46"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service

var database = firebase.database();

var getSnapshot = function(){

database.ref().on('value', function(snapshot){

    // Print the initial data to the console.

    console.log(snapshot.child('orders').val());

	// Change the clickCounter to match the data in the database

	orders = snapshot.val().orders;

	// Log the value of the clickCounter

	console.log(snapshot.val().orders);

	setCounter();
	setNavigation();

	// If any errors are experienced, log them to console.

	}, function(errorObject) {

      // In case of error this will print the error
      console.log("The read failed: " + errorObject.code);
	});
}


$('document').ready(function(){

    // At the initial load, get a snapshot of the current data.

    getSnapshot();

});



