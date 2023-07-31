// const s = document.getElementsByTagName("span");
// s[0].style.color ="red";
// s[0].style.fontWeight ="bold";
// s[0].style.fontSize ="40px";


// const cname = document.getElementsByClassName("okay");
// console.log(cname[0]);
// console.log(cname[1]);
// console.log(cname[2]);
// console.log(cname[3]);


// cname[0].style.color = "blue";
// cname[0].style.fontSize ="40px";


// const na = document.getElementsByName("email");
// console.log(na);
// console.log(na[0])
// na[0].style.border = "4px solid red";


// const btn = document.getElementById("mybtn");
// console.log(btn)
// btn.style.color = "blue";
// btn.style.padding = "12px 70px";
// btn.style.fontSize = "20px";
// btn.style.background = "navy";
// btn.style.color = "#fff";
// btn.style.fontWeight="bold";
// btn.style.cursor="pointer";
// btn.style.borderRadius="50px";
// btn.style.border="5px solid red";


// const  ra = document.querySelector(".ra");
// console.log(ra);
// ra.innerHTML = "Anu";


// console.log(btn.getAttribute("id"));
// btn.setAttribute("class","rick_btn");
// console.log(btn.getAttribute("class"));


// // Create a new aelement in js
// const h2  = document.createElement("h2");
// h2.innerText = "Raj shaker Basu";
// document.body.append(h2);
// h2.setAttribute("class","rsb");
// const rsb = document.getElementsByClassName("rsb");
// rsb[0].style.color = "red";
// // document.body.prepend(h2);

// const newElem = document.createElement("h2");
// newElem.innerText="Manika saha";
// document.body.append(newElem);
// newElem.setAttribute("class","manika");
// const res = newElem.getAttribute("class");
// console.log(res);
// const cname2 = document.getElementsByClassName("manika");
// cname2[0].innerHTML="Bipad";
// cname2[0].style.color="Green";


// const myText = document.createTextNode("sample");

// const h2 = document.createElement("h2");
// h2.textContent = " Rick saha";
// document.body.append(h2);
// h2.prepend(myText);

// const mytext2 = document.createTextNode(" Ranu mandal");
// h2.prepend(mytext2);




// const btn  = document.getElementsByTagName("button");
// btn[0].style.padding = "12px 50px";
// btn[0].style.color ="#fff";
// btn[0].style.backgroundColor ="navy";
// btn[0].style.fontSize ="20px";
// btn[0].style.fontFamily ="arial";
// btn[0].style.cursor ="pointer";


// btn[0].onClick = name_show
// console.log(btn);
// btn[0].setAttribute("id","mybtn");
// btn[1].setAttribute("id","mybtn2");
// const mybtn = document.getElementById("mybtn");
// const mybtn2 = document.getElementById("mybtn2");


// function name_show(){
//     const h2 = document.createElement("h2");
//     h2.textContent="Priyanka Saha";
//     document.body.prepend(h2);    
// }
// function name_delete(){
//     const h2 = document.querySelector("h2");
//     h2.remove();
// }


// mybtn.onclick = name_show;
// mybtn2.onclick = name_delete;

// btn[1].style.padding = "12px 50px";
// btn[1].style.color ="#fff";
// btn[1].style.backgroundColor ="red";
// btn[1].style.fontSize ="20px";
// btn[1].style.fontFamily ="arial";
// btn[1].style.cursor ="pointer";




const btn  = document.querySelectorAll("button");
console.log(btn)
console.log((btn[0]));
console.log((btn[1]));
btn[0].style.backgroundColor ="red";
btn[1].style.backgroundColor ="blue";