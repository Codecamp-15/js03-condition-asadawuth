let login = prompt("Enter username");
let message;
let a = (login === "Employee")? message = "Hello" :
(login === "Director")? message = "Greetings" :
(login === "")? message = "No login" : message = "";