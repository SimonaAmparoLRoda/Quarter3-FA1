document.write("hi ->");
function script2(){
    let name = prompt("What is your first name?");
    let lastname = prompt("What is your last name?");
    let birthyear = prompt("What is your birthyear?");
    var age = 2025 - birthyear;

    if (name != null && lastname != null && birthyear != null)
    {
        document.getElementById("yay").innerHTML = "Hello " + name + " " + lastname + "! How does it feel to be " + age + " years old?";
    }
}