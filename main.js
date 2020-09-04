// ANSWER 1
let sum = 0
let count = 0

items.forEach(function (a) {
  count += +1
  sum += +a.price
})
priceAvg = sum / count
let answer1html = document.querySelector("#answer1")
answer1html.innerHTML = priceAvg

//ANSWER 2
let xy = items
  .map(function (a) {
    if (a.price > 14 && a.price < 18)
      return `<li>${a.title}  -  $${a.price}</li>`
  })
  .join("")

let answer2html = document.querySelector("#answer2")
answer2html.innerHTML = xy

//ANSWER 3
listGBP = items
  .map(function (a) {
    if (a.currency_code == "GBP") {
      return `<li>${a.title}  -  $${a.price}</li>`
    }
  })
  .join("")

let answer3html = document.querySelector("#answer3")
answer3html.innerHTML = listGBP

//ANSWER 4

listWood = items
  .map(function (a) {
    if ("wood".includes(a.materials)) return `<li>${a.title}</li>`
  })
  .join("")

let answer4html = document.querySelector("#answer4")
answer4html.innerHTML = listWood

//ANSWER 5

testx = items
  .map(function (a) {
    mtlCount = a.materials.length
    if (a.materials.length >= 8) {
      return `<h4>${a.title}</h4><ul>Number of Materials: ${mtlCount}</ul><li>${a.materials}</li>`
    }
  })
  .join("")

// xlist = items
//   .map(function (a) {
//     if (a.materials.length >= 8) {
//       return `${a.title}`
//     }
//   })
//   .join("")
let answer5html = document.querySelector("#answer5")
answer5html.innerHTML = testx

//ANSWER 6

let hcCount = 0

items.forEach(function (a) {
  if (a.who_made == "i_did") {
    hcCount += +1
  }
})

let answer6html = document.querySelector("#answer6")
answer6html.innerHTML = hcCount
