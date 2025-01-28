// Karl Robert Masing
// yl 3
// 25.01.25

let myndid=[200,0.2,10,0.01,2,1, 0.1, 0.02,0.05,100, 5, 0.5,50, 20]
let count=0
let mynt=[1,2,5,10,20,50]
let myndid2=[]

while (count != myndid.length) {
    if (mynt.includes(myndid[count])){
        myndid2.push(myndid[count])
    }
    count++
}
let myndidkokku = 0
for (let i = 0; i < myndid2.length; i++) {
    myndidkokku = myndidkokku + myndid2[i]
}

print(myndid2)
print(myndid2.length)
print(myndidkokku)