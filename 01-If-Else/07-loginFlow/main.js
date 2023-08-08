let user = prompt("user");
let pass = prompt("pass");
if (user === "admin" || user === "john" || pass === "   " || pass === "qwerty" ) {
    console.log("Hello"+user);
}
else {
    console.log("invalid username or password");
}