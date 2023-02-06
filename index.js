// javascript for HOME section
//let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){ 
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function two(){ 
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function three(){ 
    homeScore += 3
    homeStoreEl.textContent = homeScore
}
// javascript for HOME section
let guestStoreEl = document.getElementById("guest-score")
let guestScore=0

function oone(){ 
    guestScore += 1
    guestStoreEl.textContent = guestScore
}
function ttwo(){ 
    guestScore += 2
    guestStoreEl.textContent = guestScore
}
function tthree(){ 
    guestScore += 3
    guestStoreEl.textContent = guestScore
}


function clearr(){ 
    guestScore *= 0
    guestStoreEl.textContent = guestScore
    homeScore *= 0
    homeStoreEl.textContent = homeScore
}


