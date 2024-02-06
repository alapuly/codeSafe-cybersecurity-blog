//BOUTONS LIRE LA SUITE

const buttonRecent = document.querySelector(".readmore-recent"),
  moreTextRecent = document.querySelector(".hidden-recent"),
  buttonTendances = document.querySelector(".readmore-tendances"),
  moreTextTendances = document.querySelector(".hidden-tendances"),
  button3 = document.querySelector(".article3"),
  text3 = document.querySelector(".hidden-article3"),
  button4 = document.querySelector(".article4"),
  text4 = document.querySelector(".hidden-article4"),
  button5 = document.querySelector(".article5"),
  text5 = document.querySelector(".hidden-article5"),
  button6 = document.querySelector(".article6"),
  text6 = document.querySelector(".hidden-article6"),
  button7 = document.querySelector(".article7"),
  text7 = document.querySelector(".hidden-article7"),
  button8 = document.querySelector(".article8"),
  text8 = document.querySelector(".hidden-article8")

function showMoreText(button, text) {
  button.addEventListener("click", () => {
    text.style.display = "block";
    button.style.display = "none";
  })
}

showMoreText(buttonRecent, moreTextRecent)

showMoreText(buttonTendances, moreTextTendances)

showMoreText(button3, text3)

showMoreText(button4, text4)

showMoreText(button5, text5)

showMoreText(button6, text6)

showMoreText(button7, text7)

showMoreText(button8, text8)

//////////////////////////////////////////

//SEE LESS

seeLessButton = document.querySelector(".see_less"),
  seeLessButton2 = document.querySelector(".see_less2"),
  seeLessButton3 = document.querySelector(".see_less3"),
  seeLessButton4 = document.querySelector(".see_less4"),
  seeLessButton5 = document.querySelector(".see_less5"),
  seeLessButton6 = document.querySelector(".see_less6"),
  seeLessButton7 = document.querySelector(".see_less7"),
  seeLessButton8 = document.querySelector(".see_less8")

function seeLess(seeLessButton, seeMoreButton, text) {
  seeLessButton.addEventListener("click", () => {
    seeMoreButton.style.display = "inline";
    text.style.display = "none";
  })
}

seeLess(seeLessButton, buttonRecent, moreTextRecent)
seeLess(seeLessButton2, buttonTendances, moreTextTendances)
seeLess(seeLessButton3, button3, text3)
seeLess(seeLessButton4, button4, text4)
seeLess(seeLessButton5, button5, text5)
seeLess(seeLessButton6, button6, text6)
seeLess(seeLessButton7, button7, text7)
seeLess(seeLessButton8, button8, text8)

//SEARCH FORM

const input = document.querySelector('input');

input.addEventListener('input', () => {
  let inputText = document.querySelector('input').value;
  inputText = inputText.toLowerCase()


  let x = document.querySelectorAll('article');
  for (i = 0; i < x.length; i++) {
    if (!x[i].textContent.toLowerCase().includes(inputText)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "flex";
    }
  }
})

// /////////////////////////////////////////////////////////////

// MENU BURGER

const btn = document.querySelector(".btn"),
  list = document.getElementById("1"),
  list2 = document.getElementById("2"),
  list3 = document.getElementById("3")

btn.addEventListener('click', () => {
  // j'utilise une méthode native en JS => méthode toggle
  list.classList.toggle("show")
  list2.classList.toggle("show")
  list3.classList.toggle("show")
})

// pour fermer le menu responsive quand il est ouvert

window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    list.classList.remove('show')
  }
})

// ////////////////////////////////////////////////

// VIEWCOUNTER

const viewUsers1 = document.querySelector(".views1"), art1 = document.querySelector("#article1")
let count1 = 0

const viewUsers2 = document.querySelector(".views2"), art2 = document.querySelector("#article2")
let count2 = 0

const viewUsers3 = document.querySelector(".views3"), art3 = document.querySelector("#article3")
let count3 = 0

const viewUsers4 = document.querySelector(".views4"), art4 = document.querySelector("#article4")
let count4 = 0

const viewUsers5 = document.querySelector(".views5"), art5 = document.querySelector("#article5")
let count5 = 0

const viewUsers6 = document.querySelector(".views6"), art6 = document.querySelector("#article6")
let count6 = 0

const viewUsers7 = document.querySelector(".views7"), art7 = document.querySelector("#article7")
let count7 = 0

const viewUsers8 = document.querySelector(".views8"), art8 = document.querySelector("#article8")
let count8 = 0


function count(article, count, view) {
  article.addEventListener('mouseenter', () => {
    count++
    view.textContent = count + " vues"
  })
}

count(art1, count1, viewUsers1)
count(art2, count2, viewUsers2)
count(art3, count3, viewUsers3)
count(art4, count4, viewUsers4)
count(art5, count5, viewUsers5)
count(art6, count6, viewUsers6)
count(art7, count7, viewUsers7)
count(art8, count8, viewUsers8)
