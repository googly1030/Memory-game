const my_img = [
  {
    name: "pizza",
    img: "/all_images/pizza.png",
  },
  {
    name: "hotdog",
    img: "/all_images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "/all_images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "/all_images/milkshake.png",
  },
  {
    name: "fries",
    img: "/all_images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "/all_images/cheeseburger.png",
  },
  {
    name: "pizza",
    img: "/all_images/pizza.png",
  },
  {
    name: "hotdog",
    img: "/all_images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "/all_images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "/all_images/milkshake.png",
  },
  {
    name: "fries",
    img: "/all_images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "/all_images/cheeseburger.png",
  },
];
my_img.sort(() => 0.5 - Math.random());

let cardname = [];
let cardnum = [];
var matchfound = 0;
function checkimg() {
  var allcards = document.querySelectorAll("#grid img");

  if (cardname[0] === cardname[1]) {
    alert("match found");
    matchfound++;
    console.log(matchfound);
    allcards[cardnum[0]].setAttribute("src", "/all_images/white.png");
    allcards[cardnum[1]].setAttribute("src", "/all_images/white.png");
    allcards[cardnum[0]].removeEventListener("click", opencard);
    allcards[cardnum[1]].removeEventListener("click", opencard);
    if (matchfound === 6) {
      alert("you won");
      var addscore = document.getElementById("result");
      addscore.innerHTML = `congratualiton you have completed the task`;
    }
  } else {
    allcards[cardnum[0]].setAttribute("src", "/all_images/blank.png");
    allcards[cardnum[1]].setAttribute("src", "/all_images/blank.png");
  }
  cardname = [];
  cardnum = [];
}

var grid = document.getElementById("grid");

function createbox() {
  for (let i = 0; i < my_img.length; i++) {
    var viewimg = document.createElement("img");
    viewimg.setAttribute("src", "/all_images/blank.png");
    viewimg.setAttribute("data-id", i);
    viewimg.addEventListener("click", opencard);
    grid.appendChild(viewimg);
  }
}
createbox();

function opencard() {
  var cardId = this.getAttribute("data-id");
  if (cardnum.includes(cardId)) {
    alert("already selected ");
    return;
  }
  cardname.push(my_img[cardId].name);
  cardnum.push(cardId);
  this.setAttribute("src", my_img[cardId].img);
  if (cardname.length === 2) {
    setTimeout(checkimg, 500);
  }
}
