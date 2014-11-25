
window.addEventListener('load', init, false);


function init(){

	// A User ​
	firstUser = new User("Richard", "Richard@examnple.com"); 
	firstUser.changeEmail("RichardB@examnple.com");
	firstUser.saveScore(15);
	firstUser.saveScore(10); 
	
	firstUser.showNameAndScores(); //Richard Scores: 15,10​

	// Another User​
	secondUser = new User("Peter", "Peter@examnple.com");
	secondUser.saveScore(18);
	secondUser.showNameAndScores(); //Peter Scores: 18
	
}// end init()

