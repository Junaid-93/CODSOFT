var inputScreen = document.getElementById("screen")
var tabs = document.getElementsByClassName('body')
var string = ""
var arr = Array.from(tabs)
console.log(arr);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=" && string == "") {
            inputScreen.value = 0
        }
        else if (e.target.innerHTML === "=" && string != "") {
            
            string = eval(string)
            inputScreen.value = string
        }
        else if (e.target.innerHTML === "AC") {
            string = ""
            inputScreen.value = string
        }
        else if (e.target.innerHTML === "DEL") {
            string = string.substring(0, string.length - 1)
            inputScreen.value = string
        }
        else {
                string += e.target.innerHTML
         inputScreen.value = string
           
        }
    })
})