if (!('webkitSpeechRecognition' in window)) {
	alert("Please try in Google Chrome.");
}
var recognition = new webkitSpeechRecognition();
//recognition.continuous = true;
//recognition.interimResults = true;
var partonCount = 0;
var myLastReply = "";

recognition.onresult = function(event) {
	var userInput = event.results[0][0].transcript;
	process(userInput);
};

function start(inp) {
	if(inp === 1){
		speak("Hello! How are you?");
	}
	recognition.start();
}

function updateOnGUI(who,input){
	if(who == "You"){
		$("#divConversation").append("<br><b>"+who+":</b>"+capitalize(input));
	}else{
		$("#divConversation").append("<br><b>"+who+":</b>"+capitalize(input)+"<br>");
	}
}

function process(input){
	input = input.toLowerCase();
	updateOnGUI("You",input);
	if(input.length > 50){
		return speak("Please speak slowly and split your sentenses. I could not understand.");
	}
	analyse(input);
}

function analyse(input){
	switch(input){
		case "hi":
		case "hi hi":
		case "hey":
		case "hey hi":
		case "hey hey":
		case "hey hello":
		case "hello":
		case "hi hello":
		case "hello hi":
		case "hello hey":
			speak("Hello. Tell me how can I help you");
			break;
		
		case "tell me":
			speak("what to tell");
			break;
			
		case "nothing":
			speak("ok");
			break;
			
		case "how are you":
		case "hi how are you":
		case "hello how are you":
		case "how do you do":
		case "hi how do you do":
		case "hello how do you do":
		case "hey how do you do":
			speak("I am fine. How about you?");
			break;

		case "what is your name":
		case "what is our name":
		case "what's your name":
		case "your name":
		case "name":
			speak("My name is Gangatharan Raja");
			break;

		case "how old are you":
		case "what is your age":
			speak("I am 32 years old");
			break;

		case "where are you from":
		case "what is your hometown":
		case "where you put up":
		case "where are you put up":
		case "where are you from":
		case "which is your hometown":
		case "which is your place":
		case "what is your place name":
		case "where are you":
		case "which city are you from":
			speak("I am from Hyderabad, India. What about you?");
			break;
			
		case "what is your gender":
		case "which is your gender":
		case "which gender are you":
		case "what is your sex":
		case "sex":
			speak("I am Male.");
			break;
			
		case "do you like me":
		case "you like me":
			speak("Yes I do.");
			break;
		
		case "what do you do":
		case "what do you":
		case "what you do":
		case "what are you doing":
		case "where do you work":
		case "where are you working":
		case "what is your job":
		case "what's your job":
		case "what is your work":
		case "what's your work":
		case "in which company you are working":
		case "which company you are working":
		case "in which company are you working":
		case "which company are you working":
		case "which company":
		case "what company":
			speak("I am working as support engineer at Kore");
			break;
			
		case "what is your designation":
		case "what's your designation":
		case "what you work as":
		case "what is your role":
		case "what's your role":
		case "your role":
		case "your designation":
			speak("I am working as support engineer at Kore");
			break;
			
		case "good":
		case "that's great":
		case "that is great":
		case "great":
			speak("thanks");
			break;

		case "thanks":
		case "thanks to you":
		case "thank you":
		case "thank you so much":
		case "thanks a lot":
			speak("welcome");
			break;
		
		case "i am fine":
		case "i'm fine":
		case "fine":
		case "i'm good":
		case "i am good":
		case "i am doing good":
		case "i'm doing good":
		case "doing good":
		case "i am well":
		case "i'm well":
		case "well": //if previous question was how are you?
		case "good": //if previous question was how are you?
			speak("ok");
			break;

		case "what is your hobby":
		case "what is your hobbies":
		case "what's your hobby":
		case "what's your hobbies":
		case "what are your hobbies":
			speak("Chatting with friends and surfing on internet");
			break;

		case "what about your family":
		case "how about your family":
		case "what about your wife":
		case "who is your wife":
		case "what is your wife name":
			speak("We are 3 people family. My wife name is Bavani. She is a home maker. I have a daughter, 3 years old and her name is Vivitha.");
		
		default:
			if(input.indexOf("I am")){
				speak("ok");
				break;
			}
			if(partonCount == 0){
				speak("Please! pardon me");
			}else if(partonCount == 1){
				speak("I could not understand. Please! pardon me.");
			}else{
				speak("Sorry I don't have answer for this. I will check with my boss and let you know.");
			}
			partonCount++;
			break;
	}
}

function speak(input){
	myLastReply = input;
	updateOnGUI("Bot",input);
	var msg = new SpeechSynthesisUtterance();
	//var voices = window.speechSynthesis.getVoices();
	msg.voice = 7; // Note: some voices don't support altering params
	//msg.voiceURI = 'native';
	//msg.volume = 1; // 0 to 1
	//msg.rate = 1; // 0.1 to 10
	//msg.pitch = 2; //0 to 2	
	msg.lang = 'en-US';
	msg.text = input;
	window.speechSynthesis.speak(msg);
	//recognition.start();
}