let Escritura_digital_pin_P8 = 0
let Escritura_digital_pin_P5 = 0
let Escritura_digital_pin_P2 = 0
let Escritura_digital_pin_P1 = 0
let Escritura_digital_pin_P11 = 0
let Escritura_digital_pin_P0 = 0
led.enable(false)
basic.forever(function () {
    Escritura_digital_pin_P0 = 1
    Escritura_digital_pin_P11 = 1
    basic.pause(1000)
    Escritura_digital_pin_P0 = 0
    Escritura_digital_pin_P1 = 1
    basic.pause(1000)
    Escritura_digital_pin_P1 = 0
    Escritura_digital_pin_P2 = 1
    Escritura_digital_pin_P11 = 0
    Escritura_digital_pin_P5 = 1
    basic.pause(1000)
    Escritura_digital_pin_P5 = 0
    Escritura_digital_pin_P8 = 1
    basic.pause(1000)
    Escritura_digital_pin_P8 = 0
    Escritura_digital_pin_P2 = 0
})
