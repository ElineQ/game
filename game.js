let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = [math.floor(math.random() * 25)]

but.addEventListener("Click", function () {
    let input = document.getElementById("writename").value;
    output.innerHTML = Hello document.write("username")
};



btn.addEventListener("click", function () {
    let input = document.getElementById("userinput").value;
    if (input == number) {
        output.innerHTML = 'You guessed correct'
    }
    else if (input < number) {
        output.innerHTML = "You guessed too low"
    };
    if input( > number){
        output.innerHTML = "You guessed too high"
    }
));