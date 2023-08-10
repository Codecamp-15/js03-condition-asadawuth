let user = prompt("username" );

if (user === "codecamp" ) {
let pass = prompt("password");     
if (pass === "123456" ) {
    user = "codecamp";
    alert("Welcome"+user)
}
else if (pass !== "123456" ) {
    alert("Wrong Password");}  
}
else if (user !== "codecamp" ) {
   user = "guest"
}
