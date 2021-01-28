function printIt(){
    var message = document.getElementById("email").value;
    if(isEmail(message))
    {
        document.getElementById("content").innerHTML = "Email Successfully Recorded (" + message + ")";
    }
    else{
        document.getElementById("content").innerHTML = "Invalid Email Address"
    }
    document.getElementById("email").value = ""
    event.preventDefault();
}



function isEmail(email){
    const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(valid.test(email.toLowerCase()))
        return true;
    return false;
}