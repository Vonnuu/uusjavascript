// Karl Robert Masing
// yl 3
// 25.01.25
// let print = console.log

// temperatuur
let temp = 10
if (temp >= 25) {
    print("vaaga kuum ilm")
}
else if (temp <= 15) {
    print("suht jahe ilm")
}
else {
    print("monus temperaatuur")
}

// kasutaja kontrol
let kasutaja = "karl"
print((kasutaja == "admin") ? "tere admin" : "tere kylaline")
// pileti hind
let pilet = "taispilet"
let vanus = 19

if (vanus <= 18) {
    if (pilet == "taispilet") {
        print("hhind on 10")
    }
    if (pilet == "soodus") {
        print("hind on 8")
    }
}
else if (vanus >= 18) {
    if (vanus < 64) {
        if (pilet == "taispilet"){
            print("hindd 20")
        }
        if (pilet == "soodus") {
            print("hind on 15")
        }
    }
    if (vanus >= 64) {
        if (pilet == "taispilet") {
            print("hind 15")
        }
        if (pilet == "soodus") {
            print("hind 8")
        }
    }
}