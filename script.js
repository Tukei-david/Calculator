
/** 
 * SIMPLE WAY OF DOING CALCULATOR BASIC *****
 * 
const arthBtnValue = document.querySelectorAll('.btn')

// for (var i = 0; i < arthBtnValue.length; i++) {
//     arthBtnValue[i].addEventListener('click', function() {
//         console.log(this.value)
//     })
// }

const inputSection = document.getElementById('input-section')
// let inputId = 1

arthBtnValue.forEach( button => {
    button.addEventListener('click', function(e) {

        switch (e.target.innerText) {
            case 'C':
                inputSection.innerText = ''
                break;
            case '←':
                if (inputSection.innerText) {
                    inputSection.innerText = inputSection.innerText.slice(0, -1)
                }
                break;
            case '=':
                inputSection.innerText = eval(inputSection.innerText)
                break;
            default:
                inputSection.innerText += e.target.innerText
        }
    })
})
*/

function getHistory() {
    return document.getElementById('history').innerText
}

function printHistory(num) {
    document.getElementById('history').innerText = num
}

function getOutPut() {
    return document.getElementById('output').innerText
}

function printOutPut(num) {
    document.getElementById('output').innerText = formattedNumber(num)
}

function formattedNumber(num) {
    if (num == '-') {
        return ''
    }
    var n = Number(num)
    var value = n.toLocaleString('en')
    return value
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''))
}


var operator = document.getElementsByClassName('operator')
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if (this.id == 'clear') {
            printHistory('')
            printOutPut('')
        }else if(this.id == 'backspace') {

            // Convert the number into a sting and remove the last character and print it back
            var output = reverseNumberFormat(getOutPut()).toString()
            if (output) { // Check if output has a value
                output = output.substr(0, output.length-1)
                printOutPut(output)
            }
        } else {
            var output = getOutPut()
            var history = getHistory()

            if (output == '' && history != '') {
                if(isNaN(history[history.length-1])) {
                    history = history.substr(0, history.length-1)
                }
            }

            if (output != ''|| history != '') {
                output = output == '' ? output : reverseNumberFormat(output)
                history = history+output
                if(this.id == 'equals') {
                    var result = eval(history)
                    printOutPut(result)
                    printHistory('')
                } else {
                    history = history+this.id
                    printHistory(history)
                    printOutPut('')
                }
            }
            // output = reverseNumberFormat(getOutPut())
            // console.log(output)
            // output = output+this.id
            // printOutPut(output)
        }
    })
}

var number = document.getElementsByClassName('number')
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        var outPut = reverseNumberFormat(getOutPut())
        if (outPut != NaN) { // Check if output is a number
            outPut = outPut+this.id
            printOutPut(outPut)
        }
    })
}