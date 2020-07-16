let pos_y = 2
let direction_y = 1
led.plot(0, pos_y)
basic.forever(function () {
    led.unplot(0, pos_y)
    pos_y = direction_y
    if (pos_y >= 4) {
        direction_y += 1
    } else if (pos_y <= 0) {
        direction_y += -1
    }
})
