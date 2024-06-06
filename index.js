let first = document.getElementById("first-el")
let second = document.getElementById("second-el")
const calBtn = document.getElementById("cal-btn")
const resultEl = document.getElementById("result-el")
let textImport = document.getElementById("text-import")



function del() {
    if (first.value || second.value === false) {
        return textImport.remove()
    }
}

function message() {
    let firstExam = first.value
    let secondExam = second.value
    let plus = parseFloat(firstExam) + parseFloat(secondExam)
    let avarage = plus / 2


    if (avarage < 40) {
        let message1 = ` <p id="text-import"> Result: </br>
        Your avarage is : "${avarage}" Sorry! you have to attend a new exam . 
        </p>`
        resultEl.innerHTML = message1
    } else if (avarage >= 40 && avarage <= 60.99) {
        let message2 = `<p id="text-import">Result: </br> 
        Your avarage is : "${avarage}" You pass the exam with normal point . 
        </p>`
        resultEl.innerHTML = message2
    } else if (avarage >= 61 && avarage < 80.99) {
        let message3 = `<p id="text-import">Result: </br> 
        Your avarage is : "${avarage}" You pass the exam with good point .
        </p>`
        resultEl.innerHTML = message3
    } else if (avarage >= 81 && avarage <= 100) {
        let message4 = `<p id="text-import">Result: </br> 
        Your avarage is : "${avarage}" You passed exam get and honour certificate.  
        </p>`
        resultEl.innerHTML = message4
    }
}

calBtn.addEventListener("click", function () {
    message()
})










