// word array
let cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// any random number between 0 to 6
let num_of_letter = Math.floor(Math.random() * 7);

// take a blank string
let new_sentence = [];
let new_para = "";

// generate a random word
function random_word(num_of_letter) {
    let new_word = ""; // Initialize new_word inside the function
    // iterate a loop from 0 to num_of_letter
    for (let i = 0; i < num_of_letter; i++) {
        // add the random letter value into the blank string in every iteration
        new_word += cap[i];
    }
    return new_word;
}

// generate a random sentence
function random_sentence(num_of_word) {
    // call the random_word function
    const word = random_word(num_of_letter);
    for (let i = 0; i < num_of_word; i++) {
        new_sentence.push(word);
    }
    // generate string
    for (let i = 0; i < num_of_word; i++) {
        new_para += new_sentence[i] + " ";
    }
    return new_para;
}


// Added Design logic
const generate_btn  = document.getElementById("generate");

function getvalue(){
    const wl = document.getElementsByName("wordlimit");
    const word_limit  = wl[0].value;
    return Number(word_limit);
}

// This function do handel all design task and generate para
generate_btn.onclick = function(){
    const word_limit = getvalue();
    const div = document.getElementById("paragraph");
    const p = document.createElement("p");
    const btn = document.createElement("button");
    btn.setAttribute("id","delete_btn");
    btn.innerText = "X";
    // Clear the previous paragraph content
    new_sentence = [];
    new_para = "";
    // call the random_sentence function
    const para = random_sentence(word_limit);
    p.innerText = para;
    p.append(btn);
    div.append(p); 
    // delete funtion work 
    btn.onclick = function(){
        p.remove();
    }
}

