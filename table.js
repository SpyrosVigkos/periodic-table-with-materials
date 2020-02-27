var popup = document.getElementById("myPopup");

function myFunction() {
popup.classList.toggle("show");
}

function mgFunction(){ //Magic Gold Function
  //var x = document.getElementsById("Mg").style.transform(scale(3,3));
  clearFucntion();
  document.getElementById("gold").style.transform = "scale(1.4)";   
  document.getElementById("gold").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
  document.getElementById("gold").style.zIndex = "10";
  document.getElementById("gold").style.border = "3px 3px 3px 3px black";
  document.getElementById("gold").style.border = "5px";

 

  document.getElementById("boron").style.transform = "scale(1.4)";   
  document.getElementById("boron").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
  document.getElementById("boron").style.zIndex = "10";
  document.getElementById("boron").style.border = "5px";


  document.getElementById("carbon").style.transform = "scale(1.4)";   
  document.getElementById("carbon").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
  document.getElementById("carbon").style.zIndex = "10";
  document.getElementById("carbon").style.border = "5px";
  

  
//popup.classList.toggle("show");

  
}

function rcFunction(){ //Red Ceramic Gold Function
//var x = document.getElementsById("Mg").style.transform(scale(3,3));
clearFucntion();
document.getElementById("zr").style.transform = "scale(1.4)";   
document.getElementById("zr").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
document.getElementById("zr").style.zIndex = "10";



document.getElementById("oxygen").style.transform = "scale(1.4)";   
document.getElementById("oxygen").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
document.getElementById("oxygen").style.zIndex = "10";


document.getElementById("se").style.transform = "scale(1.4)";   
document.getElementById("se").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
document.getElementById("se").style.zIndex = "10";


document.getElementById("ti").style.transform = "scale(1.4)";   
document.getElementById("ti").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
document.getElementById("ti").style.zIndex = "10";


//popup.classList.toggle("show");


}

function elFunction(){ //Electrium Function
//var x = document.getElementsById("Mg").style.transform(scale(3,3));
clearFucntion();
document.getElementById("gold").style.transform = "scale(1.4)";   
document.getElementById("gold").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
document.getElementById("gold").style.zIndex = "10";
document.getElementById("gold").style.border = "5px";

document.getElementById("ag").style.transform = "scale(1.4)";   
document.getElementById("ag").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
document.getElementById("ag").style.zIndex = "10";
document.getElementById("ag").style.border = "5px";

document.getElementById("pd").style.transform = "scale(1.4)";   
document.getElementById("pd").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
document.getElementById("pd").style.zIndex = "10";
document.getElementById("pd").style.border = "5px";

}


function cbFunction(){ //Corinthian Bronze Function
//var x = document.getElementsById("Mg").style.transform(scale(3,3));
clearFucntion();
document.getElementById("gold").style.transform = "scale(1.4)";   
document.getElementById("gold").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
document.getElementById("gold").style.zIndex = "10";
document.getElementById("gold").style.border = "5px";

document.getElementById("cu").style.transform = "scale(1.4)";   
document.getElementById("cu").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
document.getElementById("cu").style.zIndex = "10";
document.getElementById("cu").style.border = "5px";

document.getElementById("sn").style.transform = "scale(1.4)";   
document.getElementById("sn").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
document.getElementById("sn").style.zIndex = "10";
document.getElementById("sn").style.border = "5px";

document.getElementById("pd").style.transform = "scale(1.4)";   
document.getElementById("pd").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
document.getElementById("pd").style.zIndex = "10";
document.getElementById("pd").style.border = "5px";

}

function ngFunction(){ //Corinthian Bronze Function
//var x = document.getElementsById("Mg").style.transform(scale(3,3));
clearFucntion();
document.getElementById("cu").style.transform = "scale(1.4)";   
document.getElementById("cu").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
document.getElementById("cu").style.zIndex = "10";
document.getElementById("cu").style.border = "5px";

document.getElementById("sn").style.transform = "scale(1.4)";   
document.getElementById("sn").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
document.getElementById("sn").style.zIndex = "10";
document.getElementById("sn").style.border = "5px";

document.getElementById("al").style.transform = "scale(1.4)";   
document.getElementById("al").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
document.getElementById("al").style.zIndex = "10";
document.getElementById("al").style.border = "5px";

document.getElementById("zn").style.transform = "scale(1.4)";   
document.getElementById("zn").style.backgroundColor = "rgba(222, 43, 43, 0.9)";
document.getElementById("zn").style.zIndex = "10";
document.getElementById("zn").style.border = "5px";

}


function clearFucntion(){ //Show all button -- clear all styles 
document.getElementById("gold").style = "";
document.getElementById("boron").style = "";
document.getElementById("carbon").style = "";
document.getElementById("ti").style = "";
document.getElementById("se").style = "";
document.getElementById("oxygen").style = "";
document.getElementById("zr").style = "";
document.getElementById("ag").style = "";
document.getElementById("pd").style = "";
document.getElementById("sn").style = "";
document.getElementById("cu").style = "";
document.getElementById("al").style = "";
document.getElementById("zn").style = "";





popup.classList.remove("show");
//popuptext.classList.remove("show");



}

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}

