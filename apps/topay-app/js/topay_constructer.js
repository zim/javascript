
// HERE WE DEFINE OUR MAIN TOPAY FUNCTION.
// WE ARE PASSING IT 5 ARGUMENTS: AN ID, A DOM ELEMENT, A TITLE STRING, THE DEBT LIST WHICH IS AN ARRAY OF DebitObject OBJECTS, AND A SHOW VARIABLE
var TopayMain = TopayMain || (function(topayId,domId,topayTitle,debtList,show){
	
	// create array to hold all new DebitObject's and make them accesible to other methods
	var topayDebtObjArray = [];
	
	// HERE WE DECLARE ARRAYS TO HOLD OUR ITEM LAYOUT HTML ELEMENTS
		var topayDebt = [];
		var debitNameElement = [];
		var debitDateElement = [];
		var debitValueElement = [];
		var debitPayedElement = [];
		var debitPayedCheckElement = [];
		var debitPayedCheckLabel = [];
		var btnEditValue = [];
		var btnEditPay = [];
		var greenTick = [];
	
	// HERE WE SET SOME VARIABLES AND BOOLEANS THAT WE NEED TO SEE FROM OTHER METHODS IN OUR MAIN TOPAY APP FUNCTION OBJECT
	var viewTotal = 0;
	var editing = false;
	
	var viewTotalDiv = document.getElementById("total_div");
	
	// CREATE APP FUNCTION
	function createApp(topayId,domId,topayTitle,debtList,show){
		
		// HERE WE FILL OUR topayDebtObjArray WITH OUR DEBTLIST PASSED FROM LOCAL STORAGE
		for (var i in debtList) {
			  //console.log("debtLis34retwertwertt[i] = " + debtList[i]);
			  // console.log("debtList[i].getDate() = " + debtList[i].getDate());
			  // console.log("debtLiwerwrtst[i].payed = " + debtList[i].payed);
			  
			  topayDebtObjArray[i] = new DebitObject(debtList[i].name,debtList[i].value,debtList[i].payed,domElement);
			  //console.log("topayDewertwtrwertbtObj[i] = " + topayDebtObjArray[i].getDate());
		}// END for (var i in debtList) {
		
		viewTotal = 0;
		
		// CREATE topay DOM ELEMENT
		var domElement = document.getElementById(domId);
		domElement.setAttribute('class','row topay_wrapper');
		
		//domElement.onmouseover = onMouseOver;
		
		console.log('domElement.id createApp = ' + domElement.id);
		console.log('domElement.innerHTML = ' + domElement.innerHTML);
		
		// document.getElementsByClassName("topay_wrapper_inner")[0].innerHTML;
		// console.log("('topay_wrapper_inner')[0].innerHTML = " + document.getElementsByClassName("topay_wrapper_inner")[1].innerHTML);
		
		// DEAL WITH DEBTLIST ARRAY
		var myJsonString = JSON.stringify(debtList);

		// HERE WE CREATE AND RENDER OUR PAGE BY CALLING OUR createDebitList(domElement,debtList,show) FUNCTION
		createDebitList(domElement,debtList,show);

	}// end function createPlayer
	
	
	// CREATE CREATE DEBIT LIST FUNCTION
	
	//// PRIVATE FUNCTIONS ///////////////
	
	// HERE WE DEFINE OUR createDebitList FUNCTION WHICH RENDERS OUR LIST OF DEBT OBJECTS FROM LOCAL STORAGE
	// WE ARE PASSING IT 3 ARGUMENTS: A DOM ELEMENT TO ATTACH THEM TO, OUR topayDebtObjArray THAT WE CREATED ABOVE IN OUR createApp FUNCTION, AND A SHOW VARIABLE
	function createDebitList(domElement,topayDebtObjArray,show){
		console.log("createDebitList CALLED");
		// // HERE WE DECLARE ARRAYS TO HOLD OUR ITEM LAYOUT HTML ELEMENTS
		// var topayDebt = [];
		// var debitNameElement = [];
		// var debitDateElement = [];
		// var debitValueElement = [];
		// var debitPayedElement = [];
		// var debitPayedCheckElement = [];
		// var debitPayedCheckLabel = [];
		// var btnEditValue = [];
		// var btnEditPay = [];
		// var greenTick = [];
		
		// HERE WE CLEAR THE MAIN DOM ELEMENT BEFORE RE INITIALISING OUR DEBT LIST
		domElement.innerHTML = "";
		
		//console.log("domElement.innerHTML new = " + domElement.innerHTML);
		
		// HERE WE LOOP THROUGH ALL THE OBJECT ELEMENTS STORED IN OUR topayDebtObjArray AND FILL OUR LAYOUT ARRAYS DECLARED ABOVE AND APPEND THEM TO THE PAGE; DEPENDING ON THE SHOW VARIABLE
		for (var i in topayDebtObjArray) {
		  console.log("debtList[i] = " + topayDebtObjArray[i]);
		  
		  switch (show) {
		    case "payed":
		        if(topayDebtObjArray[i].payed){

		        	
		        	// render function here must pass 
		        	
				  	topayDebt[i] = document.createElement('div');
		  			topayDebt[i].id = "debt_wrap" + i;
		  			
		  			renderDebitListItem(topayDebt[i],domElement,i,"payed");
		  			
		  			
				  }
		        break; 
		    case "unpayed":
		        if(topayDebtObjArray[i].payed==false){
		        	
		        	console.log('unpayed');
		        	
		        	topayDebt[i] = document.createElement('div');
			  		topayDebt[i].id = "debt_wrap" + i;
			  		
			  		renderDebitListItem(topayDebt[i],domElement,i,"unpayed");
		        	
		        	
				  }
		        break; 
		    case "all":
		    
		    console.log('all hit');
		        
	        	topayDebt[i] = document.createElement('div');
			  	topayDebt[i].id = "debt_wrap" + i;
			  	
			  	renderDebitListItem(topayDebt[i],domElement,i,"all");
			  	
			  	
				  
		        break; 
		    default: 
		        text = "default swith case";
		  }// end switch (show) {
		  
		}// end for
			
	}// END function createDebitList(domElement,topayDebtObjArray,show){
		
	function renderDebitListItem(obj,domElement,i,show){
		console.log('no way');
		
		// HERE WE SET AND DISPLAY OUR TOTAL
    	viewTotal = viewTotal + topayDebtObjArray[i].value;
  		//console.log("viewTotal = " + viewTotal);
  		viewTotalDiv.innerHTML = viewTotal;
		
		if(topayDebtObjArray[i].payed){
			  	topayDebt[i].setAttribute('class','layout debt_wrap debt_green');
			  	
			  	
			  }else{
			  	obj.setAttribute('class','layout debt_wrap debt_red');
			  }
			  
			  domElement.appendChild(obj);
	  
			  // DEBIT NAME ELEMENT
			  debitNameElement[i] = document.createElement('div');
			  debitNameElement[i].setAttribute('class','col-md-4 span-name');
			  debitNameElement[i].innerHTML = topayDebtObjArray[i].name;
			  topayDebt[i].appendChild(debitNameElement[i]);
			  
			  // DATE
			  // debitDateElement[i] = document.createElement('span');
			  // debitDateElement[i].innerHTML = debtList[i].startDate;
			  // topayDebt[i].appendChild(debitDateElement[i]);
			  
			  // VALUE
			  debitValueElement[i] = document.createElement('div');
			  debitValueElement[i].setAttribute('class','col-md-4');
			  debitValueElement[i].innerHTML = topayDebtObjArray[i].value;
			  topayDebt[i].appendChild(debitValueElement[i]);
			  
			  // PAYED
			  debitPayedElement[i] = document.createElement('div');
			  debitPayedElement[i].setAttribute('class','col-md-4-end');
			  debitPayedElement[i].innerHTML = topayDebtObjArray[i].payed;
			  topayDebt[i].appendChild(debitPayedElement[i]);
			  
			  if(topayDebtObjArray[i].payed){
			  	topayDebt[i].setAttribute('class','layout debt_wrap debt_green');
			  	
			  	greenTick[i] = document.createElement('div');
				greenTick[i].setAttribute('class','green_tick');
				
				greenTick[i].setAttribute('data-index',i);
				
				if (greenTick[i].addEventListener) {
		            greenTick[i].addEventListener("click", function(){ editPay(this,show,false); }, false);
		        } else {
		            greenTick[i].attachEvent('onclick', function(){ editPay(this,show,false); });
		        }
				
				debitPayedElement[i].appendChild(greenTick[i]);
			  	
			  }else{
			  	btnEditPay[i] = document.createElement('button');
				btnEditPay[i].id = i + "_btnEditPay";
				btnEditPay[i].innerHTML = "[ALL" + i + "]";
				btnEditPay[i].setAttribute('data-index',i);
				
				if (btnEditPay[i].addEventListener) {
		            btnEditPay[i].addEventListener("click", function(){ editPay(this,show,true); }, false);
		        } else {
		            btnEditPay[i].attachEvent('onclick', function(){ editPay(this,show,true); });
		        }
				debitPayedElement[i].appendChild(btnEditPay[i]);
				
			  	btnEditValue[i] = document.createElement('button');
				btnEditValue[i].id = i + "_btnEditValue";
				btnEditValue[i].innerHTML = "[PAY" + i + "]";
				btnEditValue[i].setAttribute('data-index',i);
				
				if (btnEditValue[i].addEventListener) {
		            //btnEditValue[i].addEventListener("click", function(){ editValue(this,"all"); }, false);
		            btnEditValue[i].addEventListener("click", function(){ editValueForm(this,show); }, false);
		        } else {
		            btnEditValue[i].attachEvent('onclick', function(){ editValue(this,show); });
		        }
				debitPayedElement[i].appendChild(btnEditValue[i]);
			  }// end if(topayDebtObjArray[i].payed){
		
	}
	
	
	function editPay(btnDomEl,show,bool) {
			// console.log("objDebt= " + topayDebtObjArray[btnDomEl.dataset.index].name);
			// console.log("this.dataset.index = " + btnDomEl.dataset.index);
			// console.log("tJSON.stringify(objDebt[btnDomEl.dataset.index]) = " +  JSON.stringify(topayDebtObjArray[btnDomEl.dataset.index]));
			// console.log("objDebt[btnDomEl.dataset.index].name = " + topayDebtObjArray[btnDomEl.dataset.index].name);
			// console.log("objDebt[btnDomEl.dataset.index].name = " + objDebt[btnDomEl.dataset.index].getOwnPropertyNames());
			
			// SET PAYED PROPERTY
			topayDebtObjArray[btnDomEl.dataset.index].setPayed(bool);
			//topayDebtObjArray[btnDomEl.dataset.index].setPayed(bool);

			//console.log("tJSON.stringify(objDebt[btnDomEl.dataset.index]) = " +  JSON.stringify(topayDebtObjArray[btnDomEl.dataset.index]));
			
			// RESET LOCAL STORAGE
			localStorage.setItem('testObject', JSON.stringify(topayDebtObjArray));
			// REGET LOCAL STORAGE
			retrievedObject = localStorage.getItem('testObject');
			
			retrievedObjectPassed = JSON.parse(retrievedObject);
	        
	        // RE INITIALISE MAIN APP
	        TopayMain.createApp("topayId", "topay_holder","This Is New Topay App", retrievedObjectPassed, show);
			
    }// end function editPay(btnDomEl,show,bool) {
	
	function editValueForm(btnDomEl,show) {
		
		console.log("this.dataset.index = " + btnDomEl.dataset.index);
		
		if(editing){
			
		}else{
			
			var tempDomEl = document.getElementById("debt_wrap"+btnDomEl.dataset.index);
			console.log("formDomEl = " + tempDomEl.id);
	
			// var tempForm = document.createElement('form');
			// tempForm.name='myForm';
			// tempForm.method='POST';
			// tempForm.action='/Submit';
			
			var tempForm = document.createElement('div');
			
			tempForm.name='myForm';
			
			tempForm.id = "form_edit_value";
			
			var my_tb=document.createElement('INPUT');
			my_tb.type='TEXT';
			my_tb.name='myInput';
			my_tb.value='Values of my Input';
			my_tb.setAttribute('id',"textbox" + btnDomEl.dataset.index);
			tempForm.appendChild(my_tb);
			
			var my_tbh=document.createElement('INPUT');
			my_tbh.type='HIDDEN';
			my_tbh.name='hidden1';
			my_tbh.value='Values of my hidden1';
			tempForm.appendChild(my_tbh);
			
			var my_submit = document.createElement('button');
			my_submit.id = "submit";
			my_submit.innerHTML = "[SUBMIT" + btnDomEl.dataset.index + "]";
			my_submit.setAttribute('data-form',btnDomEl.dataset.index);
			tempForm.appendChild(my_submit);
			
			if (my_submit.addEventListener) {
	            //btnEditValue[i].addEventListener("click", function(){ editValue(this,"all"); }, false);
	            my_submit.addEventListener("click", function(){ editValueFormSubmit(this,show); }, false);
	        } else {
	            my_submit.attachEvent('onclick', function(){ editValueFormSubmit(this,show); });
	        }
			
			tempDomEl.appendChild(tempForm);
			
			editing=true;
			
		}
			
	}// end function editValueForm(btnDomEl) {
	
	function editValueFormSubmit(btnDomEl,show) {
		
		console.log('this is submit bitton for form ' + btnDomEl.dataset.form);
		
		var tmpValueForm = document.getElementById("textbox" + btnDomEl.dataset.form);
		var tmpValue = parseInt(tmpValueForm.value);

		console.log("textbox value = " + tmpValue);
		
		console.log("tJSON.stringify(objDebt[btnDomEl.dataset.form]) = " +  JSON.stringify(topayDebtObjArray[btnDomEl.dataset.form]));
		
		topayDebtObjArray[btnDomEl.dataset.form].setValue(tmpValue);
		
		console.log("tJSON.stringify(objDebt[btnDomEl.dataset.form]) = " +  JSON.stringify(topayDebtObjArray[btnDomEl.dataset.form]));
		
		localStorage.setItem('testObject', JSON.stringify(topayDebtObjArray));
		// REGET LOCAL STORAGE
		retrievedObject = localStorage.getItem('testObject');
		
		retrievedObjectPassed = JSON.parse(retrievedObject);
        
        // RE INITIALISE MAIN APP
        TopayMain.createApp("topayId", "topay_holder","This Is New Topay App", retrievedObjectPassed, show);
        
        editing=false;
		
	}// end function editValueForm(btnDomEl) {
	
	
	
	//function editValue(btnDomEl,show) {
			// console.log("objDebt= " + topayDebtObjArray[btnDomEl.dataset.index].name);
			// console.log("this.dataset.index = " + btnDomEl.dataset.index);
			// console.log("tJSON.stringify(objDebt[btnDomEl.dataset.index]) = " +  JSON.stringify(topayDebtObjArray[btnDomEl.dataset.index]));
			// console.log("objDebt[btnDomEl.dataset.index].name = " + objDebt[btnDomEl.dataset.index].getOwnPropertyNames());
			
			//topayDebtObjArray[btnDomEl.dataset.index].setValue(true);

			//console.log("tJSON.stringify(objDebt[btnDomEl.dataset.index]) = " +  JSON.stringify(topayDebtObjArray[btnDomEl.dataset.index]));
			
    //}
	
	////////////// Public methods ///////////////////////////////////////////	
	return{
		
		createApp:function(topayId,domId,topayTitle,debtList,show){
			createApp(topayId,domId,topayTitle,debtList,show);
		}
		
	};// end return object
	
});// end var TopayMain = TopayMain || (function(topayId,domId,topayTitle,debtList,show){


