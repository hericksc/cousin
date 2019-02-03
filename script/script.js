var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = "Good Evening!";
} else if (hourNow > 11) {
    greeting = "Good Afternoon!";
} else if (hourNow > 0) {
    greeting = "Good Morning!";
} else {
    greeting = "Welcome!";
}
$("#greeting").html(greeting);

// var konium = prompt ('Is Konium your favorite DJ?');

// if (konium === "yes") {
//   alert ('my man!');
// } else if (konium === 'no') {
//   alert ('Leave this site immediatly!!!!')
// }