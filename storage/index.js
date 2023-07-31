const n = document.getElementById("myinput");
const btn = document.getElementById("mybtn");
const delete_btn = document.getElementById("delete_btn");


const obj = {
    name:"rick",
    roll:"22",
    age:"21"
}



function btnClick(){
    localStorage.setItem("key1",JSON.stringify(obj));
    localStorage.setItem("key2",n.value);
 
}

const name =  localStorage.getItem("key1");
const h3 = document.createElement("h3");
h3.innerText = name;
h3.style.color = "red";
document.body.append(h3);

if(name){
    alert(name);
}

btn.addEventListener("click", btnClick);


delete_btn.addEventListener("click",()=>{
    // console.log(sessionStorage.length);
    // console.log(sessionStorage.key(1));
    // console.log(sessionStorage.key(2));
    // console.log(sessionStorage.key(0));
    // Session storage is a array of object 
    // like this:
    // [{key1:"value1"},{key2:"value2"},{key3:"value3"}]
    // sessionStorage.removeItem("key1");
    // sessionStorage.clear();
    // console.log(sessionStorage.length)  




    //console.log(localStorage.length);
    //const data = (JSON.parse(localStorage.getItem("key1")));
    //console.log(`Name: ${data.name}`);
    //console.log(`Age: ${data.age}`);
    //console.log(`Roll: ${data.roll}`);
    // localStorage.removeItem("key1");
    // localStorage.removeItem("key2");
    // localStorage.removeItem("key3"); //nothing happen cause no key exist
    // console.log(localStorage.key(0));
    // console.log(localStorage.key(1));
    // console.log(localStorage.key(2)); //null
    localStorage.clear();
})

