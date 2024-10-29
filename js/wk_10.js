
console.log("hello world");

let my_var= 100 ;
var my_other_var= "hello world";
const this_is_a_constant= "constant";
//alert(my_other_var);


//how to intereact with the DOM
document.getElementById("my_head").addEventListener("click", function (e){
    alert("clicked the h1");
    document.getElementById("paragraph").innerHTML= "This is a paragraph";
    document.getElementById("paragraph").style.color= "blue";
    document.getElementById("image").src= "../img/"

})