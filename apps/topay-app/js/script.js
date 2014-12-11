

var TopayMain = new TopayMain();
	
// TopayMain.createApp("topayId", "topay_holder","This Is New Topay App", debtList);


//JSON.stringify (allDebts, null, 4);

//generic logStuff function that prints to console​
function logStuff (userData) {
    if ( typeof userData === "string")
    {
        console.log("this is userData = " + userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log("this is userData = " + item + ": " + userData[item]);
        }

    }

}// end function logStuff (userData) {

// function init(){
// 
// }// end init()
// 
// window.addEventListener('load', init, false);

$(document).ready(function(){
	
	var retrievedObject;
	var retrievedObjectPassed;
	
	var allDebts = [];
	var storage = false;
	
	if (typeof(Storage) != "undefined") {
	    // Store
	    // localStorage.setItem("lastname", "Smith");
	    // Retrieve
	    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");
	    if (localStorage.getItem("testObject") === null) {
		  //...
		  console.log('null');
			  //  BEGIN AJAX CALL
				$.ajax({
			    url: "js/debts.json",
			    success: function(data) {
			        $.each(data, function(key, value){
			            //handle the data   
			            console.log('key = ' + key + 'value.name = ' + value.name + 'value.value = ' + value.value + 'value.payed = ' + value.payed + 'value.domId = ' + value.domId);
			            
			
			            allDebts.push(new DebitObject(value.name, value.value, value.payed, value.domId, logStuff));
			        });
			        console.log(data);
			        console.log("allDebts = " + allDebts);
			        
			        // Put the object into storage
					localStorage.setItem('testObject', JSON.stringify(allDebts));
					
					// Retrieve the object from storage
					retrievedObject = localStorage.getItem('testObject');
					
					console.log('retrievedObject: ', JSON.parse(retrievedObject));
					
					storage = true;
			        
			        TopayMain.createApp("topayId", "topay_holder","This Is New Topay App", JSON.parse(retrievedObject),"all");
			    },
			    error: function() {
			        //handle the error
			        console.log('key = ' + key + 'value = ' + value);
			    }
			}); // end $.ajax({
			
		} else {
			console.log('not null');
			
			// Retrieve the object from storage
			retrievedObject = localStorage.getItem('testObject');
			
			console.log('retrievedObject: ', JSON.parse(retrievedObject));
			
			retrievedObjectPassed = JSON.parse(retrievedObject);
			
			storage = true;
	        
	        TopayMain.createApp("topayId", "topay_holder","This Is New Topay App", retrievedObjectPassed,"all");
		}
	    
	} else {
	    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}// end if (typeof(Storage) != "undefined") {
	
	
	
	
  $("#btn_one").click(function(){
  	// console.log('hey' + storage);
  	// console.log('retrievedObject on click btn one: ', retrievedObjectPassed);
  	retrievedObject = localStorage.getItem('testObject');
  	retrievedObjectPassed = JSON.parse(retrievedObject);
  	TopayMain.createApp("payed", "topay_holder","This Is New btn click Topay App", retrievedObjectPassed,"payed");

  });// end button click
  
  $("#btn_two").click(function(){
  	// console.log('hey two' + storage);
  	// console.log('retrievedObject on click btn two: ', retrievedObjectPassed);
  	retrievedObject = localStorage.getItem('testObject');
  	retrievedObjectPassed = JSON.parse(retrievedObject);
  	TopayMain.createApp("unpayed", "topay_holder","This Is New btn click Topay App", retrievedObjectPassed,"unpayed");
  	
  });// end button click
  
  $("#btn_three").click(function(){
  	// console.log('hey three' + storage);
  	// console.log('retrievedObject on click btn three: ', retrievedObjectPassed);
  	retrievedObject = localStorage.getItem('testObject');
  	retrievedObjectPassed = JSON.parse(retrievedObject);
  	TopayMain.createApp("all", "topay_holder","This Is New btn click Topay App", retrievedObjectPassed,"all");
  	
  });// end button click
  
  
  
});
