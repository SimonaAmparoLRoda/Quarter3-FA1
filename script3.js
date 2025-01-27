document.write("<br> heh");

var nickname = "Mona";
var height = 62.4;
var weight = 60;

var inch = Math.round(height % 12);
var feet = Math.round(Math.round(height) / 12);
var weight = weight * 2.205;

function script3() {
    let yes = "Would you like to share personal info with our site?";
    if (confirm(yes) == true) {
      yes = console.log("Name: " + nickname + "\n" + "Height: " + feet + "'" + inch + '"' + "\n" + "Weight: " + weight);
    } else {
      yes = console.log("User does not wish to share his/her information.");
    }
}
