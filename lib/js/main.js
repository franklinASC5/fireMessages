const database= firebase.database().ref();
const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);
const messageBoard = document.querySelector(".allMessages");

//Set database object here


/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username = usernameElement.value;
    const message = messageElement.value;
    
    usernameElement.value = "";
    messageElement.value  = "";
    const userData={
        Name: username,
        messages: message
    }
    
    //Update database here
        database.push(userData);
        
    }

    // Set database "child_added" event listener here
    database.on("child_added", displayMessage);
    function displayMessage(rowData){
        const row = rowData.val();
    
        const myMessage= document.createElement("div");
        myMessage.innerHTML=`${row.Name}: ${row.messages}`;
        messageBoard.appendChild(myMessage);
    }
    