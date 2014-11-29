
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
	
	
	
	
	//var myPlayer1_holder = document.getElementById('myplayer1_holder');
	var myQuiz1 = new QuizMain();
	
	myQuiz1.createQuiz("quiz1", "quiz1_holder","This Is New Quiz One");
	
	//myPlayer1.pause();
	
	//var myPlayer2 = new videoPlayer();
	
	//myPlayer2.createPlayer("vid_player2", "myplayer2_holder","navigation");
	
	//myPlayer2.pause();
	
	//myPlayer1.vidplay();
	
}// end init()

