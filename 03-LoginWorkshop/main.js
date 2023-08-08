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


let user = prompt('username');

        if ( user == "admin" ) {
           let pass = prompt("รหัสของคุณ")
        if (pass === "codecamp") {
            user = "codecamp"
            alert("welcome"+user);}
        else if (pass !== "codecamp#5"){
        alert("Wrong Password");
        } 
        }  
        else if ( user !== "admin" )
              user = "Guest"