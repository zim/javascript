
// these help with deletion of nodes and nodelists
Element.prototype.remove = function() {
	console.log('remove called');
	alert('remove called');
    this.parentElement.removeChild(this);
    console.log('remove called after');
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

var TopayMain = TopayMain || (function(topayId,domId,topayTitle,debtList,show){
	
	// create array to hold all new DebitObject's and make them accesible to other methods
	var topayDebtObj = []; 
	
	// CREATE MAIN WRAPPER
	var topayElement = document.createElement('div');
	var viewTotal = 0;
	var editing = false;
	
	var viewTotalDiv = document.getElementById("total_div");
	
	// CREATE APP FUNCTION
	function createApp(topayId,domId,topayTitle,debtList,show){
		
		for (var i in debtList) {
			  console.log("debtLis34retwertwertt[i] = " + debtList[i]);
			  // console.log("debtList[i].getDate() = " + debtList[i].getDate());
			  
			  console.log("debtLiwerwrtst[i].payed = " + debtList[i].payed);
			 
			  
			  topayDebtObj[i] = new DebitObject(debtList[i].name,debtList[i].value,debtList[i].payed,domElement);
			  
			  console.log("topayDewertwtrwertbtObj[i] = " + topayDebtObj[i].getDate());
		}
		
		viewTotal = 0;
		
		// CREATE topay DOM ELEMENT
		var domElement = document.getElementById(domId);
		domElement.setAttribute('class','row topay_wrapper');
		
		//domElement.onmouseover = onMouseOver;
		// CREATE topay ELEMENT
		// var topayElement = document.createElement('topay');
		topayElement.id = topayId + "_topay";
		topayElement.setAttribute('class','topay_wrapper_inner');

		
		// ATTACH topay TO DOM ELEMENT
		//console.log('topayElema' + topayElement);
		console.log('domElement.id createApp = ' + domElement.id);
		console.log('domElement.innerHTML createApp = ' + domElement.innerHTML);
		
		domElement.appendChild(topayElement);
		
		// document.getElementsByClassName("topay_wrapper_inner")[0].innerHTML;
		// console.log("('topay_wrapper_inner')[0].innerHTML = " + document.getElementsByClassName("topay_wrapper_inner")[1].innerHTML);
		
		// DEAL WITH DEBTLIST ARRAY
		var myJsonString = JSON.stringify(debtList);

		// createtopayControls(topayId,domElement);
		createDebitList(topayElement,debtList,show);

	}// end function createPlayer
	
	
	// CREATE CREATE DEBIT LIST FUNCTION
	
	//// PRIVATE FUNCTIONS ///////////////
	function createDebitList(domElement,topayDebtObj,show){
		// var topayDebtObj = [];
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
		
		domElement.innerHTML = "";
		
		//console.log("domElement.innerHTML new = " + domElement.innerHTML);
		
		// CREATE CONTROLS
		for (var i in topayDebtObj) {
		  console.log("debtList[i] = " + topayDebtObj[i]);
		  // console.log("debtList[i].getDate() = " + debtList[i].getDate());
		  
		  //console.log("debtList[i].payed = " + debtList[i].payed);
		 
		  
		  // topayDebtObj[i] = new DebitObject(debtList[i].name,debtList[i].value,debtList[i].payed,domElement);
// 		  
		  // console.log("topayDebtObj[i] = " + topayDebtObj[i].getDate());
		  
		  //console.log(show);
		  
		  switch (show) {
		    case "payed":
		        if(topayDebtObj[i].payed){
		        	
		        	viewTotal = viewTotal + topayDebtObj[i].value;
			  		console.log("viewTotal = " + viewTotal);
			  		viewTotalDiv.innerHTML = viewTotal;
		        	
				  	topayDebt[i] = document.createElement('div');
		  			topayDebt[i].id = "debt_wrap" + i;
		  			
		  			topayDebt[i].setAttribute('class','layout debt_wrap debt_green');
		  			
		  			domElement.appendChild(topayDebt[i]);
		  
					  // DEBIT NAME ELEMENT
					  debitNameElement[i] = document.createElement('div');
					  debitNameElement[i].setAttribute('class','col-md-4 span-name');
					  debitNameElement[i].innerHTML = topayDebtObj[i].name;
					  topayDebt[i].appendChild(debitNameElement[i]);
					  
					  // DATE
					  // debitDateElement[i] = document.createElement('span');
					  // debitDateElement[i].innerHTML = debtList[i].startDate;
					  // topayDebt[i].appendChild(debitDateElement[i]);
					  
					  // VALUE
					  debitValueElement[i] = document.createElement('div');
					  debitValueElement[i].setAttribute('class','col-md-4');
					  debitValueElement[i].innerHTML = topayDebtObj[i].value;
					  topayDebt[i].appendChild(debitValueElement[i]);
					  
					  // PAYED
					  debitPayedElement[i] = document.createElement('div');
					  debitPayedElement[i].setAttribute('class','col-md-4-end');
					  debitPayedElement[i].innerHTML = topayDebtObj[i].payed;
					  topayDebt[i].appendChild(debitPayedElement[i]);
					  
					 
					  
					greenTick[i] = document.createElement('div');
					greenTick[i].setAttribute('class','green_tick');
					greenTick[i].setAttribute('data-index',i);
					
					
					if (greenTick[i].addEventListener) {
			            greenTick[i].addEventListener("click", function(){ editPay(this,"payed",false); }, false);
			        } else {
			            greenTick[i].attachEvent('onclick', function(){ editPay(this,"payed",false); });
			        }
					
					debitPayedElement[i].appendChild(greenTick[i]);
				  }
		        break; 
		    case "unpayed":
		        if(topayDebtObj[i].payed==false){
		        	
		        	viewTotal = viewTotal + topayDebtObj[i].value;
			  		console.log("viewTotal = " + viewTotal);
			  		viewTotalDiv.innerHTML = viewTotal;
		        	
		        	topayDebt[i] = document.createElement('div');
				  	topayDebt[i].id = "debt_wrap" + i;
				  	
				  	topayDebt[i].setAttribute('class','layout debt_wrap debt_red');
				  	
				  	domElement.appendChild(topayDebt[i]);
		  
					  // DEBIT NAME ELEMENT
					  debitNameElement[i] = document.createElement('div');
					  debitNameElement[i].setAttribute('class','col-md-4 span-name');
					  debitNameElement[i].innerHTML = topayDebtObj[i].name;
					  topayDebt[i].appendChild(debitNameElement[i]);
					  
					  // DATE
					  // debitDateElement[i] = document.createElement('span');
					  // debitDateElement[i].innerHTML = debtList[i].startDate;
					  // topayDebt[i].appendChild(debitDateElement[i]);
					  
					  // VALUE
					  debitValueElement[i] = document.createElement('div');
					  debitValueElement[i].setAttribute('class','col-md-4');
					  debitValueElement[i].innerHTML = topayDebtObj[i].value;
					  topayDebt[i].appendChild(debitValueElement[i]);
					  
					  // PAYED
					  debitPayedElement[i] = document.createElement('div');
					  debitPayedElement[i].setAttribute('class','col-md-4-end');
					  debitPayedElement[i].innerHTML = topayDebtObj[i].payed;
					  topayDebt[i].appendChild(debitPayedElement[i]);
					  
					    btnEditPay[i] = document.createElement('button');
						btnEditPay[i].id = i + "_btnEditValue";
						btnEditPay[i].innerHTML = "[PAY ALL" + i + "]";
						btnEditPay[i].setAttribute('data-index',i);
						
						if (btnEditPay[i].addEventListener) {
				            btnEditPay[i].addEventListener("click", function(){ editPay(this,"unpayed",true); }, false);
				        } else {
				            btnEditPay[i].attachEvent('onclick', function(){ editPay(this,"unpayed",true); });
				        }
						debitPayedElement[i].appendChild(btnEditPay[i]);
				  }
		        break; 
		    case "all":
		        
	        	topayDebt[i] = document.createElement('div');
			  	topayDebt[i].id = "debt_wrap" + i;
			  	
			  	viewTotal = viewTotal + topayDebtObj[i].value;
			  	console.log("viewTotal = " + viewTotal);
			  	viewTotalDiv.innerHTML = viewTotal;
			  	
			  	if(topayDebtObj[i].payed){
				  	topayDebt[i].setAttribute('class','layout debt_wrap debt_green');
				  	
				  	
				  }else{
				  	topayDebt[i].setAttribute('class','layout debt_wrap debt_red');
				  }
				  
				  domElement.appendChild(topayDebt[i]);
		  
				  // DEBIT NAME ELEMENT
				  debitNameElement[i] = document.createElement('div');
				  debitNameElement[i].setAttribute('class','col-md-4 span-name');
				  debitNameElement[i].innerHTML = topayDebtObj[i].name;
				  topayDebt[i].appendChild(debitNameElement[i]);
				  
				  // DATE
				  // debitDateElement[i] = document.createElement('span');
				  // debitDateElement[i].innerHTML = debtList[i].startDate;
				  // topayDebt[i].appendChild(debitDateElement[i]);
				  
				  // VALUE
				  debitValueElement[i] = document.createElement('div');
				  debitValueElement[i].setAttribute('class','col-md-4');
				  debitValueElement[i].innerHTML = topayDebtObj[i].value;
				  topayDebt[i].appendChild(debitValueElement[i]);
				  
				  // PAYED
				  debitPayedElement[i] = document.createElement('div');
				  debitPayedElement[i].setAttribute('class','col-md-4-end');
				  debitPayedElement[i].innerHTML = topayDebtObj[i].payed;
				  topayDebt[i].appendChild(debitPayedElement[i]);
				  
				  if(topayDebtObj[i].payed){
				  	topayDebt[i].setAttribute('class','layout debt_wrap debt_green');
				  	
				  	greenTick[i] = document.createElement('div');
					greenTick[i].setAttribute('class','green_tick');
					
					greenTick[i].setAttribute('data-index',i);
					
					if (greenTick[i].addEventListener) {
			            greenTick[i].addEventListener("click", function(){ editPay(this,"all",false); }, false);
			        } else {
			            greenTick[i].attachEvent('onclick', function(){ editPay(this,"all",false); });
			        }
					
					debitPayedElement[i].appendChild(greenTick[i]);
				  	
				  }else{
				  	btnEditPay[i] = document.createElement('button');
					btnEditPay[i].id = i + "_btnEditPay";
					btnEditPay[i].innerHTML = "[ALL" + i + "]";
					btnEditPay[i].setAttribute('data-index',i);
					
					if (btnEditPay[i].addEventListener) {
			            btnEditPay[i].addEventListener("click", function(){ editPay(this,"all",true); }, false);
			        } else {
			            btnEditPay[i].attachEvent('onclick', function(){ editPay(this,"all",true); });
			        }
					debitPayedElement[i].appendChild(btnEditPay[i]);
					
				  	btnEditValue[i] = document.createElement('button');
					btnEditValue[i].id = i + "_btnEditValue";
					btnEditValue[i].innerHTML = "[PAY" + i + "]";
					btnEditValue[i].setAttribute('data-index',i);
					
					if (btnEditValue[i].addEventListener) {
			            //btnEditValue[i].addEventListener("click", function(){ editValue(this,"all"); }, false);
			            btnEditValue[i].addEventListener("click", function(){ editValueForm(this,"all"); }, false);
			        } else {
			            btnEditValue[i].attachEvent('onclick', function(){ editValue(this,"all"); });
			        }
					debitPayedElement[i].appendChild(btnEditValue[i]);
				  }// end if(topayDebtObj[i].payed){
				  
				    
				  
		        break; 
		    default: 
		        text = "default swith case";
		  }// end switch (show) {
		  
		}// end for
			
	}// END function createtopayControls(topayId,domElement){
	
	
	function editPay(btnDomEl,show,bool) {
			// console.log("objDebt= " + topayDebtObj[btnDomEl.dataset.index].name);
			// console.log("this.dataset.index = " + btnDomEl.dataset.index);
			// console.log("tJSON.stringify(objDebt[btnDomEl.dataset.index]) = " +  JSON.stringify(topayDebtObj[btnDomEl.dataset.index]));
			// console.log("objDebt[btnDomEl.dataset.index].name = " + topayDebtObj[btnDomEl.dataset.index].name);
			// console.log("objDebt[btnDomEl.dataset.index].name = " + objDebt[btnDomEl.dataset.index].getOwnPropertyNames());
			
			// SET PAYED PROPERTY
			topayDebtObj[btnDomEl.dataset.index].setPayed(bool);
			//topayDebtObj[btnDomEl.dataset.index].setPayed(bool);

			//console.log("tJSON.stringify(objDebt[btnDomEl.dataset.index]) = " +  JSON.stringify(topayDebtObj[btnDomEl.dataset.index]));
			
			// RESET LOCAL STORAGE
			localStorage.setItem('testObject', JSON.stringify(topayDebtObj));
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
		
		console.log("tJSON.stringify(objDebt[btnDomEl.dataset.form]) = " +  JSON.stringify(topayDebtObj[btnDomEl.dataset.form]));
		
		topayDebtObj[btnDomEl.dataset.form].setValue(tmpValue);
		
		console.log("tJSON.stringify(objDebt[btnDomEl.dataset.form]) = " +  JSON.stringify(topayDebtObj[btnDomEl.dataset.form]));
		
		localStorage.setItem('testObject', JSON.stringify(topayDebtObj));
		// REGET LOCAL STORAGE
		retrievedObject = localStorage.getItem('testObject');
		
		retrievedObjectPassed = JSON.parse(retrievedObject);
        
        // RE INITIALISE MAIN APP
        TopayMain.createApp("topayId", "topay_holder","This Is New Topay App", retrievedObjectPassed, show);
        
        //document.getElementById("form_edit_value").remove();
        
        editing=false;
		
	}// end function editValueForm(btnDomEl) {
	
	
	
	//function editValue(btnDomEl,show) {
			// console.log("objDebt= " + topayDebtObj[btnDomEl.dataset.index].name);
			// console.log("this.dataset.index = " + btnDomEl.dataset.index);
			// console.log("tJSON.stringify(objDebt[btnDomEl.dataset.index]) = " +  JSON.stringify(topayDebtObj[btnDomEl.dataset.index]));
			// console.log("objDebt[btnDomEl.dataset.index].name = " + objDebt[btnDomEl.dataset.index].getOwnPropertyNames());
			
			//topayDebtObj[btnDomEl.dataset.index].setValue(true);

			//console.log("tJSON.stringify(objDebt[btnDomEl.dataset.index]) = " +  JSON.stringify(topayDebtObj[btnDomEl.dataset.index]));
			
    //}
	
	////////////// Public methods ///////////////////////////////////////////	
	return{
		
		createApp:function(topayId,domId,topayTitle,debtList,show){
			createApp(topayId,domId,topayTitle,debtList,show);
		}
		
	};// end return object
	
});// end var TopayMain = TopayMain || (function(topayId,domId,topayTitle,debtList,show){


