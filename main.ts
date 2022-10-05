input.onButtonPressed(Button.A, function () {
    count = 10
    for (let index = 0; index < 11; index++) {
        basic.showNumber(count)
        basic.pause(200)
        count += -1
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    music.playTone(880, music.beat(BeatFraction.Breve))
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        `)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    music.playTone(659, music.beat(BeatFraction.Whole))
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.StickFigure)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . #
        . # . # .
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        # . # . .
        . # . # .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        # # . # #
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        # . # # .
        . # # . #
        . . # . .
        . # . # .
        `)
})
let count = 0
basic.showString("2D30 Wong Yat Chun")
