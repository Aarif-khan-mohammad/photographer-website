const counter = document.getElementById("count")
const counterTwo = document.getElementById("count-top")


function onIncrement() {
    let prevValue = counter.textContent;
    let currentVal = parseInt(prevValue) + 1
    if (currentVal === 4) {
        currentVal = 1
    }
    counter.textContent = currentVal
}

function onDecrement() {
    let prevValue = counter.textContent;
    let currentVal = parseInt(prevValue) - 1
    if (currentVal === 0) {
        currentVal = 3
    }
    counter.textContent = currentVal
}


