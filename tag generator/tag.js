const name1 = document.getElementById("name_input");
const tag = document.getElementById("tag_get");

function tag_generate(){
    const n = name1.value;
    const tc = document.querySelector(".tag_container");
    const s = document.createElement("span");
    const b = document.createElement("button");
    b.setAttribute("class","delete_btn");
    const p = document.createElement("p");
    const tag_text = `Hi i am "${n}"`;
    const tag_sign = `~~By ${n}`;
    s.innerText = tag_text;
    b.innerText = "X";
    p.innerText = tag_sign;
    s.append(b);
    s.append(p);
    tc.append(s);
    b.onclick = function(){
        s.remove();
    }
}

tag.onclick = tag_generate;