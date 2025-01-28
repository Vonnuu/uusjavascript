// Karl Robert Masing
// yl 3
// 25.01.25

// kellaaeg
let tunnid = "2"
let minutit = "38"
let sekundit = "59"
let kellaaeg = `${tunnid}:${minutit}:${sekundit}PM`
console.log(kellaaeg)

// tsitaat lause sees
let tsitaat = "Oodatav tulemus näiteks 'Jüri Jurakas nimetähed on J.J.'"

// mailide kasutamine
let en = "Jüri"
let pn = "Jurakas"
let meil = `${en} ${pn} nimetaht on ` + en.charAt(0) + "." + pn.charAt(0) + "."
console.log(meil)

// perenime pikkus
let nimi = "Jüri, Jurakas"
let koma = nimi.indexOf(",")
let pen = nimi.slice(0, koma)
console.log(pen.toUpperCase)
console.log(pen.length)

// epost addressi muutmine
let epost = "karrolk@netlog.com"
let split = epost.split("@")
console.log(split[0] + "@gmail.com")

// andmerida analuus
let rida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175"
let ridaasi = rida.split(",")
console.log(ridaasi[5] + " " + ridaasi[3].split("@")[0])