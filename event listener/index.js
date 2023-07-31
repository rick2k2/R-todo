const mytxt = document.getElementById("mytxt");
const box1 = document.getElementsByClassName("box1");
const btn = document.getElementById("mybtn");

// console.log(mytxt)
// console.log(box1)
// console.log(btn)


// btn.addEventListener("click",()=>{
//     console.log("Clicked");
//     box1[0].style.background ="red";
//     box1[0].style.color ="white";
//     mytxt.style.color="white";
//     mytxt.style.background="navy";
// })


// console.log(box1[0]);
// btn.addEventListener("click",()=>{
//   box1[0].classList.add("classforDiv");
// })
// mytxt.addEventListener("mouseover",()=>{
//   mytxt.style.transform = "scale(1.2)";
//   mytxt.style.background = "crimson";
//   mytxt.style.color = "#fff";
// })

// mytxt.addEventListener("mousedown",()=>{
//   mytxt.style.transform = "scale(1.2)";
//   mytxt.style.background = "crimson";
//   mytxt.style.color = "#fff";
// })

// mytxt.addEventListener("mouseleave",()=>{
//   mytxt.style.transform = "scale(1.2)";
//   mytxt.style.background = "crimson";
//   mytxt.style.color = "#fff";
// })

// mytxt.addEventListener("mouseup",()=>{
//   mytxt.style.transform = "scale(1.2)";
//   mytxt.style.background = "crimson";
//   mytxt.style.color = "#fff";
// })

// mytxt.addEventListener("mousemove",()=>{
//   mytxt.style.transform = "scale(1.2)";
//   mytxt.style.background = "crimson";
//   mytxt.style.color = "#fff";
// })

// mytxt.addEventListener("mouseenter",()=>{
//   mytxt.style.transform = "scale(1.2)";
//   mytxt.style.background = "crimson";
//   mytxt.style.color = "#fff";
// })




// box1[0].addEventListener("click",()=>{
//   box1[0].style.color =  "#fff";
//   box1[0].style.backgroundColor =  "blue";
//   btn.style.transform = "scale(1.2)";
//   btn.style.background = "red";
// })
// box1[0].addEventListener("mouseleave",()=>{
//   box1[0].style.backgroundColor = "orange";
// })
// box1[0].addEventListener("mouseenter",()=>{
//   box1[0].style.backgroundColor = "violet";
// })


// prevent Default
// btn.addEventListener("contextmenu",(e)=>{
//   e.preventDefault();
//   box1[0].style.backgroundColor = "red";
// })



// addEventListener("contextmenu",(e)=>{
//   e.preventDefault();
//   mytxt.innerHTML = "Right click facilty disabled by system";
//   mytxt.style.color = "#fff";
//   mytxt.style.backgroundColor = "crimson";
// })



// addEventListener("click",(e)=>{
//   const x = e.clientX;
//   const y = e.clientY;
//   const h1 = document.createElement("h1");
//   h1.innerHTML = `x:${x} y:${y}`;
//   h1.style.padding = "40px";
//   h1.style.backgroundColor = "goldenrod";
//   document.body.append(h1);
// })



// btn.addEventListener("click",()=>{
//   box1[0].classList.add("singleclick");
// })
// btn.addEventListener("dblclick",()=>{
//   box1[0].classList.add("dblclick");
// });

// btn.addEventListener("mouseleave",()=>{
//   box1[0].classList.remove("singleclick");
//   box1[0].classList.remove("dblclick");
// });



// addEventListener("contextmenu",(e)=>{
//   e.preventDefault();
//   btn.style.filter = "blur(10px)";
// })

// const theme  = document.getElementById("theme_btn");
// console.log(theme);


// function nightmode(){
//   theme.innerText = "Day";
//   document.body.style.background ="#333";
// }
// function daymode(){
//   theme.innerText ="Night";
//   document.body.style.background = "cyan";
// }


// theme.addEventListener("click",nightmode);
// theme.addEventListener("dblclick",daymode);



const n = document.getElementById("name");
// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");
// const btn3 = document.getElementById("btn3");
// const container2 = document.getElementById("container2");

// btn1.addEventListener("click",()=>{
//   console.log(n.value);
// });

// function lookchange(){
//   btn1.classList.add("btn11");
//   btn2.classList.add("btn11");
//   btn3.classList.add("btn11");
//   document.body.classList.add("theme");
//   n.classList.add("name1");
//   // btn2.remove();
// }

// btn2.addEventListener("click",lookchange);


// btn3.addEventListener("click",defulttheme);

// function defulttheme(){
//   btn1.classList.add("btn111");
//   btn2.classList.add("btn111");
//   btn3.classList.add("btn111");
//   document.body.classList.add("theme2");
//   n.classList.add("name12")
// }

// console.log(n.value);
n.addEventListener("change",(e)=>{
  console.log(e.target.value);
})