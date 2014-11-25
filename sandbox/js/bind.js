// This data variable is a global variable​
            var data = [
                {name:"Samantha", age:12},
                {name:"Alexis", age:14}
            ];

            var user = {
                // local data variable​
                data    :[
                    {name:"T. Woods", age:37},
                    {name:"P. Mickelson", age:43}
                ],
                showData:function (event) {
                    var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​

                    console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
                }

            };

            // Assign the showData method of the user object to a variable
            var showDataVar = user.showData;

			// When we execute the showDataVar () function, the values printed to the console are from the global data array, not the data array in the user object. This happens because showDataVar () is executed as a global function and use of this inside showDataVar () is bound to the global scope, which is the window object in browsers.
            showDataVar (); // Samantha 12 (from the global data array, not from the local data array)​
            
			// We can fix this problem by specifically setting the “this” value with the bind method
			// Bind the showData method to the user object​
            var showDataVar = user.showData.bind (user);

            // Now the we get the value from the user object because the this keyword is bound to the user object​
            showDataVar (); // P. Mickelson 43​
            
			// Bind () Allows us to Borrow Methods
			
			// In JavaScript, we can pass functions around, return them, borrow them, and the like. And the bind () method makes it super easy to borrow methods.
			
			// Here is an example using bind () to borrow a method:
			 // Here we have a cars object that does not have a method to print its data to the console​
            var cars = {
                data:[
                    {name:"Honda Accord", age:14},
                    {name:"Tesla Model S", age:2}
                ]

            };
            
            // We can borrow the showData () method from the user object we defined in the last example.​
            // We bind the user.showData method to the cars object we just created.
            cars.showData = user.showData.bind (cars);
            cars.showData (); // Honda Accord 14​
            
			//One problem with this example is that we are adding a new method (showData) on the cars object and we might not want to do that just to borrow a method because the cars object might already have a property or method name showData, and we don’t want to overwrite it accidentally. As we will see with Apply and Call (discussed next), it is best to borrow methods with either the Apply or Call methods.
			
			// The first argument of the bind () method sets the this value, as we discussed earlier
			
			// JavaScript’s Bind Allows Us to Curry a Function 			// Function Currying, also known as partial function application, is the use of a function (that accept one or more arguments) that returns a new function with some of the arguments already set. The function that is returned has access to the stored arguments and variables of the outer function. This sounds way more complex than it actually is, so let’s code.
			
			// Let’s use the bind () method for currying. First we have a simple greet () function that accepts 3 parameters:
			function greet (gender, age, name) {
                // if a male, use Mr., else use Ms.​
                var salutation = gender === "male" ? "Mr. " : "Ms. ";

                if (age > 25) {
                    //return "Hello, " + salutation + name + ".";
                    console.log("Hello, " + salutation + name + ".");
                }
                else {
                    //return "Hey, " + name + ".";
                    console.log("Hey, " + name + ".");
                }
            }

			// we can use the bind () method to curry (preset one or more of the parameters) our greet () function. The first argument of the bind () method sets the this value

			// // So we are passing null because we are not using the "this" keyword in our greet function.​
	        var greetAnAdultMale = greet.bind (null, "male", 45);
	
	        greetAnAdultMale ("John Hartlove"); // "Hello, Mr. John Hartlove."​
	
	        var greetAYoungster = greet.bind (null, "", 16);
	        greetAYoungster ("Alex"); // "Hey, Alex."​
	        greetAYoungster ("Emma Waterloo"); // "Hey, Emma Waterloo."​










