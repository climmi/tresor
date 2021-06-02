input.onButtonPressed(Button.A, function () {
    if (progress == 0) {
        progress = 1
        knopf_A = 1
    } else if (progress == 2) {
        knopf_A = 1
        knopf_B = 0
    } else if (false) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (progress == 0) {
        progress = 0
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
    } else if (progress == 2 && knopf_A == 1) {
        knopf_B = 1
    } else if (progress == 2 && knopf_A == 2) {
        progress = 0
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
    } else {
    	
    }
})
let knopf_B = 0
let knopf_A = 0
let progress = 0
progress = 0
knopf_A = 0
knopf_B = 0
basic.forever(function () {
    let A2K2 = 0
    let A2K1 = 0
    if (progress == 1 && knopf_A == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        progress = 2
        knopf_A = 0
    } else if (progress == 2 && (knopf_A == 1 && knopf_B == 0)) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    } else if (progress == 2 && (knopf_A && knopf_B) == 1) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        progress = 3
    } else if (progress == 2 && (knopf_A && knopf_B) == 1) {
    	
    } else if (progress == 3 && (A2K1 && A2K2) == 1) {
    	
    } else if (progress < knopf_A + knopf_B) {
        basic.showIcon(IconNames.No)
        progress = 0
    } else {
    	
    }
})
