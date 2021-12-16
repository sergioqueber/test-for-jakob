let sonar = 0
radio.setGroup(1)
basic.forever(function () {

    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    /*radio.onReceivedNumber(function (receivedNumber: number){
        if (receivedNumber == 7) {
          cuteBot.stopcar()
        } else {*/
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar > 5 && sonar < 10) {
        cuteBot.stopcar()
        while (sonar > 5 && sonar < 10) {
            first_side()
            sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
            basic.pause(1000)

        }
        basic.pause (500)
        cuteBot.moveTime(cuteBot.Direction.forward, 25, 0.7)
        cuteBot.moveTime(cuteBot.Direction.left, 15, 0.5)
        basic.pause(500)
        sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
        while (sonar > 5 && sonar < 10) {
            basic.pause(500)
            second_side ()
            sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
        
          
        }
        stop_if_line()
        cuteBot.moveTime(cuteBot.Direction.forward, 15, 0.2)
        basic.pause(1000)
        cuteBot.moveTime(cuteBot.Direction.right, 15, 0.4)
    }
    else {
        follow_line()
    }
    //}         
    //})
})
basic.forever(function () {
    if (input.temperature() > 40) {
        for (let index = 0; index < 4; index++) {
            soundExpression.sad.playUntilDone()
            music.setVolume(500)
            basic.pause(100)
        }
    }
    input.onButtonPressed(Button.A, function () {
        music.setBuiltInSpeakerEnabled(false)
    })
    input.onButtonPressed(Button.B, function () {
        music.setBuiltInSpeakerEnabled(true)
    })
    if (input.lightLevel() < 50) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
    }
    else {
        cuteBot.closeheadlights()
    }
})

/* if (sonar > 5 && sonar < 10) {
          cuteBot.stopcar()

          for (let index = 0; index < 4; index++) {
              basic.pause(1000)
              music.playTone(880, music.beat(BeatFraction.Quarter))
          }
          cuteBot.moveTime(cuteBot.Direction.backward, 35, 0.3)
          basic.pause(2000)
          cuteBot.moveTime(cuteBot.Direction.left, 30, 0.4)
          basic.pause(2000)
          cuteBot.moveTime(cuteBot.Direction.forward, 30, 1)
          cuteBot.moveTime(cuteBot.Direction.right, 30, 0.4)
      }*/
/*basic.forever(function () {
 
 sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
 
 if (sonar < 20 && sonar > 5) {
 
   for (let index = 0; index < 4; index++) {
   basic.pause(100)
   music.playTone(880, music.beat(BeatFraction.Quarter))
   }
   basic.pause(1000)
   cuteBot.motors(-35, -65)
   basic.pause(randint(100, 200))
 } else {
 cuteBot.motors(47, 47)
 }
 })
*/

function first_side() {
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        music.playTone(880, music.beat(BeatFraction.Quarter))
    }
    basic.pause(1000)
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar > 5 && sonar < 10) {
        cuteBot.moveTime(cuteBot.Direction.backward, 15, 0.3)
        basic.pause(2000)
        cuteBot.moveTime(cuteBot.Direction.right, 15, 0.4)
        basic.pause(2000)
        cuteBot.moveTime(cuteBot.Direction.forward, 20, 0.5)
        basic.pause(2000)
        cuteBot.moveTime(cuteBot.Direction.left, 15, 0.4)
        basic.pause(2000)
        basic.showIcon(IconNames.Heart)
    }
}
function second_side() {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    basic.pause(500)
    if (sonar > 5 && sonar < 10) {
        cuteBot.moveTime(cuteBot.Direction.right, 15, 0.4)
        basic.pause(1000)
        cuteBot.moveTime(cuteBot.Direction.forward, 15, 0.4)
        basic.pause(1000)
        cuteBot.moveTime(cuteBot.Direction.left, 15, 0.4)
        basic.pause(500)
        basic.clearScreen()
    }
}
function stop_if_line() {
    while (!(cuteBot.tracking(cuteBot.TrackingState.L_R_line))) {
        cuteBot.motors(20, 20)
    }
}
function follow_line() {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(30, 15)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(15, 30)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(30, 30)
    }
}