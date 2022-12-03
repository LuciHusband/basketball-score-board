let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeScore = 0
let guestScore = 0

//functions
function hadd(osb){
    
    homeScore += osb
    console.log(homeScore)
    homeEl.innerText = homeScore
}
function gadd(osb){
    
    guestScore += osb
    console.log(guestScore)
    guestEl.innerText = guestScore
}
