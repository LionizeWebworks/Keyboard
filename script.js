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

        if (letter.id === "a") {
            text.innerHTML = "<u>Apple</u> and <u>Airplane</u> start with A";
            pictures.innerHTML = '<img src="images/apple.png" alt="an apple">' +
                                 '<img src="images/airplane.png" alt="an airplane">';
        } else if (letter.id === "b") {
            text.innerHTML = "<u>Ball</u> and <u>Book</u> start with B";
            pictures.innerHTML = '<img src="images/ball.png" alt="a ball">' +
            '<img src="images/book.png" alt="a book">'
        } else if (letter.id === "c") {
            text.innerHTML = "<u>Cat</u> and <u>Crown</u> start with C";
            pictures.innerHTML = '<img src="images/cat.png" alt="a black cat">' +
            '<img src="images/crown.png" alt="a crown">'
        } else if (letter.id === "d") {
            text.innerHTML = "<u>Dinosaur</u> and <u>Dog</u> start with D";
            pictures.innerHTML = '<img src="images/dinosaur.png" alt="a dinosaur">' +
            '<img src="images/dog.png" alt="a dog">'
        } else if (letter.id === "e") {
            text.innerHTML = "<u>Egg</u> and <u>Elephant</u> start with E";
            pictures.innerHTML = '<img src="images/egg.png" alt="an egg">' +
            '<img src="images/elephant.png" alt="an elephant">'
        } else if (letter.id === "f") {
            text.innerHTML = "<u>Frog</u> and <u>Flower</u> start with F";
            pictures.innerHTML = '<img src="images/frog.png" alt="a frog">' +
            '<img src="images/flower.png" alt="a flower">'
        } else if (letter.id === "g") {
            text.innerHTML = "<u>Goat</u> and <u>Grass</u> start with G";
            pictures.innerHTML = '<img src="images/goat.png" alt="a goat">' +
            '<img src="images/grass.png" alt="a patch of grass">'
        } else if (letter.id === "h") {
            text.innerHTML = "<u>Hat</u> and <u>Horse</u> start with H";
            pictures.innerHTML = '<img src="images/hat.png" alt="a hat">' +
            '<img src="images/horse.png" alt="a horse">'
        } else if (letter.id === "i") {
            text.innerHTML = "<u>Ice Cream</u> and <u>Igloo</u> start with I";
            pictures.innerHTML = '<img src="images/ice-cream.png" alt="an ice cream cone">' +
            '<img src="images/igloo.png" alt="an igloo">'
        } else if (letter.id === "j") {
            text.innerHTML = "<u>Juice</u> and <u>Jelly</u> start with J";
            pictures.innerHTML = '<img src="images/juice.png" alt="a glass of juice">' +
            '<img src="images/jelly.png" alt="a jar of jelly">'
        } else if (letter.id === "k") {
            text.innerHTML = "<u>Kangaroo</u> and <u>Kite</u> start with K";
            pictures.innerHTML = '<img src="images/kangaroo.png" alt="a kangaroo">' +
            '<img src="images/kite.png" alt="a kite">'
        } else if (letter.id === "l") {
            text.innerHTML = "<u>Lion</u> and <u>Lollipop</u> start with L";
            pictures.innerHTML = '<img src="images/lion.png" alt="a lion">' +
            '<img src="images/lollipop.png" alt="a lollipop">'
        } else if (letter.id === "m") {
            text.innerHTML = "<u>Moose</u> and <u>Mountain</u> start with M";
            pictures.innerHTML = '<img src="images/moose.png" alt="a bull moose">' +
            '<img src="images/mountain.png" alt="a mountain">'
        } else if (letter.id === "n") {
            text.innerHTML = "<u>Nest</u> and <u>Nose</u> start with N";
            pictures.innerHTML = '<img src="images/nest.png" alt="a bird nest">' +
            '<img src="images/nose.png" alt="a nose">'
        } else if (letter.id === "o") {
            text.innerHTML = "<u>Octopus</u> and <u>Orange</u> start with O";
            pictures.innerHTML = '<img src="images/octopus.png" alt="an octopus">' +
            '<img src="images/orange.png" alt="an orange">'
        } else if (letter.id === "p") {
            text.innerHTML = "<u>Peach</u> and <u>Pool</u> start with P";
            pictures.innerHTML = '<img src="images/peach.png" alt="a peach">' +
            '<img src="images/pool.png" alt="a pool">'
        } else if (letter.id === "q") {
            text.innerHTML = "<u>Quail</u> and <u>Question</u> start with Q";
            pictures.innerHTML = '<img src="images/quail.png" alt="a quail">' +
            '<img src="images/question.png" alt="a question mark">'
        } else if (letter.id === "r") {
            text.innerHTML = "<u>Ring</u> and <u>Ruler</u> start with R";
            pictures.innerHTML = '<img src="images/ring.png" alt="a diamond ring">' +
            '<img src="images/ruler.png" alt="a ruler">'
        } else if (letter.id === "s") {
            text.innerHTML = "<u>Snake</u> and <u>Star</u> start with S";
            pictures.innerHTML = '<img src="images/snake.png" alt="a snake">' +
            '<img src="images/star.png" alt="a star">'
        } else if (letter.id === "t") {
            text.innerHTML = "<u>Truck</u> and <u>Tree</u> start with T";
            pictures.innerHTML = '<img src="images/truck.png" alt="a dump truck">' +
            '<img src="images/tree.png" alt="a tree">'
        } else if (letter.id === "u") {
            text.innerHTML = "<u>Umbrella</u> and <u>Unicorn</u> start with U";
            pictures.innerHTML = '<img src="images/umbrella.png" alt="an umbrella">' +
            '<img src="images/unicorn.png" alt="a unicorn">'
        } else if (letter.id === "v") {
            text.innerHTML = "<u>Violin</u> and <u>Vegetables</u> start with V";
            pictures.innerHTML = '<img src="images/violin.png" alt="a violin">' +
            '<img src="images/vegetables.png" alt="THE VEGGIETALES!!!">'
        } else if (letter.id === "w") {
            text.innerHTML = "<u>Whale</u> and <u>Wheel</u> start with W";
            pictures.innerHTML = '<img src="images/whale.png" alt="a whale">' +
            '<img src="images/wheel.png" alt="a wheel">'
        } else if (letter.id === "x") {
            text.innerHTML = "<u>Xylophone</u> and <u>X-Ray</u> start with X";
            pictures.innerHTML = '<img src="images/xylophone.png" alt="a xylophone">' +
            '<img src="images/x-ray.png" alt="an X-Ray image">'
        } else if (letter.id === "y") {
            text.innerHTML = "<u>Yarn</u> and <u>Yo-Yo</u> start with Y";
            pictures.innerHTML = '<img src="images/yarn.png" alt="a ball of yarn">' +
            '<img src="images/yo-yo.png" alt="a yo-yo">'
        } else if (letter.id === "z") {
            text.innerHTML = "<u>Zebra</u> and <u>Zipper</u> start with Z";
            pictures.innerHTML = '<img src="images/zebra.png" alt="a zebra">' +
            '<img src="images/zipper.png" alt="a zipper">'
        };
    });
});

backspace.addEventListener("click", () => {
    input.pop();
    output.innerHTML = input.join("");
});

clear.addEventListener("click", () => {
    output.innerHTML = "";
});
