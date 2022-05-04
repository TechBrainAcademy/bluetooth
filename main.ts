bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("A")
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    bluetooth.uartWriteString("B")
    basic.showIcon(IconNames.Sad)
})
bluetooth.startUartService()
basic.showIcon(IconNames.Heart)
