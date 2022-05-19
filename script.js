let name_action = document.querySelector("#name_action")
let time_section = document.querySelector(".time_section")

let som = document.querySelector("#som")

let started = true
let breaked = false
let paused = false

let interval_var = null

let start_button = document.querySelector("#start")
let pause_button = document.querySelector("#pause")


let minutes_one_inner = document.querySelector("#minute_one")
let minutes_two_inner = document.querySelector("#minute_two")

let seconds_one_inner = document.querySelector("#second_one")
let seconds_two_inner = document.querySelector("#second_two")


let minutes_one = 0
let minutes_two = 0

let seconds_one = 0
let seconds_two = 0

minutes_one_inner.innerHTML = minutes_one.toString()
minutes_two_inner.innerHTML = minutes_two.toString()

seconds_one_inner.innerHTML = seconds_one.toString()
seconds_two_inner.innerHTML = seconds_two.toString()

function start_time() {
    name_action.innerHTML = "Work!"
    som.src = "som/src_sounds_bell-start.mp3"
    som.play()

    time_section.style.borderColor = "#e63434"
    clearInterval(interval_var)

    breaked = true
    started = false

    start_button.innerHTML = "Break !"
    start_button.style.backgroundColor = "#2faf64"

    minutes_one_inner.innerHTML = minutes_one.toString()
    minutes_two_inner.innerHTML = minutes_two.toString()

    seconds_one_inner.innerHTML = seconds_one.toString()
    seconds_two_inner.innerHTML = seconds_two.toString()

    interval_var = setInterval(() => {

        if (seconds_two == 9) {
            seconds_two = 0
            seconds_one++

            seconds_one_inner.innerHTML = seconds_one.toString()
            seconds_two_inner.innerHTML = seconds_two.toString()
        }
        else {
            seconds_two++

            seconds_one_inner.innerHTML = seconds_one.toString()
            seconds_two_inner.innerHTML = seconds_two.toString()
        }

        if (seconds_one == 6 && minutes_two !== 10) {
            seconds_one = 0
            seconds_two = 0

            minutes_two++

            seconds_two++

            minutes_two_inner.innerHTML = minutes_two.toString()

            seconds_one_inner.innerHTML = seconds_one.toString()
            seconds_two_inner.innerHTML = seconds_two.toString()
        }

        if (minutes_two > 9) {
            minutes_two = 0
            minutes_one++

            minutes_one_inner.innerHTML = minutes_one.toString()
            minutes_two_inner.innerHTML = minutes_two.toString()
        }

        if (minutes_one == 2 && minutes_two == 5) {
            minutes_one = 0
            minutes_two = 0

            seconds_one = 0
            seconds_two = 0
            started = false
            breaked = true

            break_func()

        }

    }, 1000);
}

function break_func() {
    clearInterval(interval_var)
    som.src = "som/src_sounds_bell-finish.mp3"
    som.play()
    name_action.innerHTML = "Break!"
    time_section.style.borderColor = "#2faf64"

    breaked = false
    started = true

    start_button.innerHTML = "Work"
    start_button.style.backgroundColor = "#e63434"

    minutes_one_inner.innerHTML = minutes_one.toString()
    minutes_two_inner.innerHTML = minutes_two.toString()

    seconds_one_inner.innerHTML = seconds_one.toString()
    seconds_two_inner.innerHTML = seconds_two.toString()

    interval_var = setInterval(() => {

        if (seconds_two == 9) {
            seconds_two = 0
            seconds_one++

            seconds_one_inner.innerHTML = seconds_one.toString()
            seconds_two_inner.innerHTML = seconds_two.toString()
        }
        else {
            seconds_two++

            seconds_one_inner.innerHTML = seconds_one.toString()
            seconds_two_inner.innerHTML = seconds_two.toString()
        }

        if (seconds_one == 6 && minutes_two !== 10) {
            seconds_one = 0
            seconds_two = 0

            minutes_two++

            seconds_two++

            minutes_two_inner.innerHTML = minutes_two.toString()

            seconds_one_inner.innerHTML = seconds_one.toString()
            seconds_two_inner.innerHTML = seconds_two.toString()
        }

        if (minutes_two > 9) {
            minutes_two = 0
            minutes_one++

            minutes_one_inner.innerHTML = minutes_one.toString()
            minutes_two_inner.innerHTML = minutes_two.toString()
        }

        else if (minutes_two == 5) {
            minutes_one = 0
            minutes_two = 0

            seconds_one = 0
            seconds_two = 0

            started = true
            breaked = false

            start_time()

        }

    }, 1000);
}

function pause_time() {
    time_section.style.borderColor = "#4f99fa"
    start_button.innerHTML = "Continue"
    name_action.innerHTML = "Paused"

    clearInterval(interval_var)
    paused = true
}

start_button.addEventListener("click", () => {
pause_button.addEventListener("click", pause_time)

    if (started == true && paused == false) {

        minutes_one = 0
        minutes_two = 0

        seconds_one = 0
        seconds_two = 0
        start_time()
    }

    else if (started !== true && paused == false) {

        minutes_one = 0
        minutes_two = 0

        seconds_one = 0
        seconds_two = 0
        break_func()
    }

    else if (started == true && paused == true) {
        break_func()
        paused = false
    }

    else if (started !== true && paused == true) {
        start_time()
        paused = false
    }

})

