let adviceBank, advice_text, next_btn, random_index
advice_text = document.querySelector(".advice_text")
next_btn = document.querySelector(".next_btn")

adviceBank = ["There is nothing noble in being superior to your fellow man, true nobility is being superior to your former self.",
     "The secret of getting ahead is getting started.", 
     "If we wait until we are ready, we will be waiting all our lives.", "We are all in a gutter, but some of us are looking at the stars.",
      "The pain of parting is nothing compared to the joy of meeting again.", "It is never too late to be what you might have been.",
    "Experience is the name everyone gives to their mistakes.",
"Life is too short to be spent nursing animosity or registering wrongs.",
"Prejudice, jealousy and envy blinds the eye of even the most zealous men."]

advice_text = document.querySelector(".advice_text")

advisors = ["Jerry Gana", "Addison Male", "Bella Rose", "Harrison Welders", "Schnieder Mark"]

next_btn.addEventListener("click", next)
function next () {
    random_index = Math.trunc (Math.random()* adviceBank.length)
    advice_text.textContent = adviceBank[random_index]
}

