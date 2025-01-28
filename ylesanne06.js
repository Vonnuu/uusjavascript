// Karl Robert Masing
// yl 3
// 25.01.25
//print = console.log

// pos voi neg
let number = 0
switch (true) {
    case (number > 0):
        print("number on postivne")
        break
    case (number < 0):
        print ("number on negativne")
        break
    case (number === 0):
        print ("null")
        break
}
// restoran
let laud
let broneering = 7
switch (true) {
    case (broneering <= 2):
        laud = "kahelelaud"
        break
    case (broneering <= 4 && broneering >= 3):
        laud = "neljale laud"
        break
    case (broneering <= 6 && broneering >= 5):
        laud = "kuuele lau"
        break
    case (broneering > 6):
        laud = "suur laud"
}
print ("valige laud " + laud)