const color_chooser = document.getElementById('color_chooser');
const body = document.body;
const btn = document.querySelector("button");

function colorgenerate(){
    const color = color_chooser.value;
    switch(color){
        case "white":
            body.style.backgroundColor="white";
            break;
    case "red":
            body.style.backgroundColor="red";
            break;
    case "blue":
            body.style.backgroundColor="blue";
            break;
    case "green":
            body.style.backgroundColor="green";
            break;
    case "black":
            body.style.backgroundColor="black";
            break;
    default:
            body.style.backgroundColor="lightcyan";
            break;
       
   }
}
    btn.onclick = colorgenerate;