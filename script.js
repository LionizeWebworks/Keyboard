// Buttons
const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const d = document.getElementById("d")
const e = document.getElementById("e")
const f = document.getElementById("f")
const g = document.getElementById("g")
const h = document.getElementById("h")
const i = document.getElementById("i")
const j = document.getElementById("j")
const k = document.getElementById("k")
const l = document.getElementById("l")
const m = document.getElementById("m")
const n = document.getElementById("n")
const o = document.getElementById("o")
const p = document.getElementById("p")
const q = document.getElementById("q")
const r = document.getElementById("r")
const s = document.getElementById("s")
const t = document.getElementById("t")
const u = document.getElementById("u")
const v = document.getElementById("v")
const w = document.getElementById("w")
const x = document.getElementById("x")
const y = document.getElementById("y")
const z = document.getElementById("z")
const letters = document.querySelectorAll(".letter");
const caps = document.getElementById("caps")
const backspace = document.getElementById("backspace")
const clear = document.getElementById("clear")


// Other Elements
const output = document.getElementById("output");

// Functional Variables
let lowercase = true;
let input = [];

caps.addEventListener("click", () => {
    if (lowercase) {
        lowercase = false;
        letters.forEach(letter => {
            letter.textContent = letter.textContent.toUpperCase();
        });
    } else {
        lowercase = true;
        letters.forEach(letter => {
            letter.textContent = letter.textContent.toLowerCase();
        });
    }
});

letters.forEach(letter => {
    letter.addEventListener("click", (e) => {
        input.push(e.target.innerHTML);
        output.innerHTML = input.join("");
    });
});

backspace.addEventListener("click", () => {
    input.pop();
    output.innerHTML = input.join("");
});

clear.addEventListener("click", () => {
    output.innerHTML = "";
});
