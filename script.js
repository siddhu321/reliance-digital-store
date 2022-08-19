function SHOP(){
    alert("add some product to cart")
}
function ADD(){
    alert("added to cart")
}
var header =document.querySelector("a")
header.style.color='blue'
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color='#';
    for (var i=0;i<6;i++){
        color +=letters[Math.floor(math.random()*16)];
    }
    return color
}
function changeHeadercolor()
{
    colorInput =getRandomColor()
    header.style.color = colorInput;
}
setInterval("changeHeaderColor()",100);
