
var TopayMain = new TopayMain();
	
// TopayMain.createApp("topayId", "topay_holder","This Is New Topay App", debtList);


// Initialize some questions and add them to an array
var allDebts = [
new DebitObject("Debit Object One", 100, "topayId_topay", logStuff),
new DebitObject("Debit Object Two", 200, "topayId_topay", logStuff),
new DebitObject("Debit Object Three", 300, "topayId_topay", logStuff),
new DebitObject("Debit Object Four", 400, "topayId_topay", logStuff),
new DebitObject("Debit Object Five", 500, "topayId_topay", logStuff),
new DebitObject("Debit Object Six", 600, "topayId_topay", logStuff)
];

TopayMain.createApp("topayId", "topay_holder","This Is New Topay App", allDebts);

// Display all the questions​
// allDebts.forEach(function (eachDebt)  {
    // eachDebt.displayDebit();
// });

//Use of the for/in loop to access the properties in the an object
// for (var eachItem in allQuestions) {
	// console.log("eachItem = " + eachItem);
// }

//JSON.stringify (allDebts, null, 4);

// generic logStuff function that prints to console​
function logStuff (userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }

    }

}

window.addEventListener('load', init, false);

function init(){

}// end init()

