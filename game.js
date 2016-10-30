// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('dblclick', hide)
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

function makeBlue (evt) {
  evt.target.classList.toggle('blue')
  updateCounts()
}// CREATE FUNCTION makeBlue HERE

function hide (evt) {
  evt.target.classList.toggle('invisible')
  updateCounts()
}
// CREATE FUNCTION hide HERE

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
  var dots = document.getElementsByClassName('board')[0].children
  for (var i = 0; i < dots.length; i++) {
    //class invisible is highest order of precedence
    // - if dot is blue and invisible, invisible wins
    // - therefore, count invisible first
    // then count green
    // then count blue
    if (dots[i].classList.contains('invisible')){
      totals.invisible += 1
    }
    else if (dots[i].classList.contains('green')){
      totals.green += 1
    }
    else if (dots[i].classList.contains('blue')){
      totals.blue += 1
    }
  }
  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
