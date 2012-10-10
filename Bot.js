//nora

//Welcome a user upon joining/entering.
function join(user) { 

     var welcomeArray = [
        "Welcome to INDIE+"];

	//Print the message to chat.
    API.sendChat(welcomeArray + " @" + user.username) 

}

//Function called on upon a new chat message.
function readChat(data) { 

	//Checks if a user tags your account in their message.
    if (data.message.indexOf("bot") > -1) {
  
            API.sendChat("Hi"); 
        } 
    }

//Calls the methods above when the listener is activated.
API.addEventListener(API.USER_JOIN, join);
API.addEventListener(API.USER_LEAVE, leave);
API.addEventListener(API.CHAT, readChat);