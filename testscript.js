
   myitem = document.getElementById("firsttest");

    myitem.addEventListener("click", onClick);


    function onClick() {  
        myitem.style.color = "green";
        myitem.style.Food = "25px"  
    }

    thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");


thebutton.addEventListener("click", onButtonClick);

function onButtonClick() {  
    otheritem.style.color = "red";  
}

myitem.addEventListener("click", onmouseout);

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);

function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}