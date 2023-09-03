console.log("Hello");
alert("Click on the Portfolio text for simple transformation. ThankYou!")
var heading = document.getElementById("head");
console.log(heading);


//Portfolio click event 
heading.addEventListener("click", function () {
    heading.textContent = " Welcome ! "
    const home = document.getElementById("name");
    console.log(home);

    //Changing myName 
    home.textContent = "public static void main (String [] args ){";
    home.style.fontSize = "1rem";


    //Changing caption 
    const caption = document.getElementById("caption");
    console.log(caption);
    caption.textContent = 'String  name = " Liladhar Varma " ; ';

    caption.style.fontSize = " 2rem";


    //Adding last Bracket 
    const bracket = document.getElementById("bracket");
    bracket.textContent = "   }";
    bracket.style.color = " #ff0252";
    bracket.style.fontSize = "1rem";
    bracket.style.fontWeight = "bold";

    //i 'am 
    const forClass = document.getElementById("myName");
    console.log(forClass);

    forClass.textContent = "Class Portfolio { "

const arrayList = document.getElementById("forList");
arrayList.style.visibility= "visible";
arrayList.textContent = "String [ ] array = { "
arrayList.style.color = "white";
// arrayList.style.textDecoration = "none";    
})
