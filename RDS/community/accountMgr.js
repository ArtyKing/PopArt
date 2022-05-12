//Create a map of usernames and hashed passwords
let mp = new Map();

//Hashing function that takes each character of a string, converts it to an integer, and adds it to the existing hash
String.prototype.hashCode = function() {
    var hash = 0;
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

//A function to validate the username and password the user enters into the system
function validate(){
        //Get name and password from HTML
        var name = document.getElementById("name").value;
        document.getElementById("name").value = "";
        var pass = document.getElementById("pass").value;
        document.getElementById("pass").value = "";
        pass = pass.hashCode();
        //Return user prompts
        if(mp.has(name) == false){
                alert("There is no account under this username. Did you mean to create an account instead?");
        }
        else if(mp.get(name) != pass){
                alert("The password you entered is incorrect. Please try again.");
        }
        else{
                alert("User "+name+" is successfully logged in.");
        }
}
//A function to create a new account and store it into the system
function create(){
        //Get name and password from HTML
        var name = document.getElementById("name").value;
        document.getElementById("name").value = "";
        var pass = document.getElementById("pass").value;
        document.getElementById("pass").value = "";
        //Return user prompts
        if(mp.has(name)){
                alert("This name has been taken already!");
        }
        else if(name.length > 15){
                alert("This name is too long!");
        }
        else if(name.length < 3){
                alert("This name is too short!");
        }
        else{
                alert("Account successfully created.")
                mp.set(name, pass.hashCode());
        }
}