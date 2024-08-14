// var age
// const a = "18"
//  age = prompt("sup ou inf ?")
// var result = age !== a

// function gardien (age, name)
//  {if (age >= 65)
//     console.log("kbira brsha ya", name)
// else if ( age<=18)
//     console.log("s8ira brsha ya", name)
// else 
// console.log("tfadhel od5ol ya", name)}
// gardien (14, "Louay")
// gardien (69, "almouhsen")
// gardien (19, "Dali")


// function math (num1, num2) {

//    var some = num1+num2
//    var subs = num1-num2
//    console.log(some)
//     console.log(subs)
// }
// math(12, 33)
// math(16,12)


// function mult(num1, num2) {
//     console.log("helloworld")

//    return num1*num2}
//     var age = mult(12,3)
//     console.log("age", age)


// function multi (age, name)
//   {if (age >= 65) return "kbira brsha ya " + name
//   if ( age<=18) return "s8ira brsha ya " + name
//   return "tfadhel od5ol ya " + name
//  }
//  console.log(multi(19, "Dali"))
//  console.log(multi(14, "louay"))
//  console.log(multi(67, "almouhsen"))


// function maxmin (a1, a2) 
// { if(a1 > a2 ) return "valeur max est " + a1 +"valeur min est " + a2
//     if(a1 < a2) return  "valeur max est " + a2 +"valeur min est " + a1
// if (a1===a2) return "a1 egal a2"
// }
// console.log(maxmin(17, 12))
// console.log(maxmin(19,6))
// console.log(maxmin(20,20))

// function coulour(c){
//     if(c===1) console.log("a7mar")
//         if(c===2) console.log("asfar")


// }
// coulour(1)
// coulour(2)
// function color(code){
//     switch(code){
//     case 1: {console.log("a7mar")}
//     break
//     case 2:{ console.log("asfar")}
//     break
//     case 3:{ console.log("a5dhar")}
//     break
//     case 4:{ console.log("rose")}
//     break
//     default: console.log("mahouch mawjoud")

//     }
// }
// color (1)
// color(2)
// color(3)
// color(4)
// color(5)
// color(6)
// color(7)
// color(8)
// color(9)
// color(10)
// color(234234)

// for (var i=1; i<=10; i++) {

//     // if(i===7) break
//     if (i===7) continue
//     color(i)
//     console.log(i)
// }

// for (var i=1; i<=10;i++){
// console.log( i % 2)
// }
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 1) console.log("impair")
    else console.log("pair")
}
// var n = -5
// while(n<8) {
//     console.log(n)
//     n++
// }
// var n = -5
// while(true) {
//     n++
//     console.log(n)
//     if(n>10) break 
// }

//    var text = prompt()

//     while(text !=="hello") { text = prompt() }

/* var chaine="abcdef"
console.log(chaine[0])
console.log(chaine[1])
console.log(chaine[2])
console.log(chaine[3])
console.log(chaine[4])
console.log(chaine[5])
chaine=chaine+"gHijkL"
console.log(chaine)
for( var i=0; i < chaine.length; i++)
{console.log(chaine[i])}
console.log(chaine.toUpperCase())
console.log(chaine.toLowerCase())
 var souschaine = chaine.substring(3, 7) 
console.log(souschaine) */


//    var chaine = prompt()
//    var i = prompt()
//    var j= prompt()
//    var souschaine=chaine.substring(i ,j)
//    console.log(souschaine)


// var sentence ="the quick brown fox jumps over the lazy dog."
// sentence = sentence.replaceAll("o", "u")
// console.log(sentence)


// var char="a"
// if(char===char.toUpperCase()) console.log("majuscule")
//     else console.log("minuscule")

var string = "abceDfghIJkl"
for (let i = 0; i < string.length; i++) {
    let charactere = string[i]
    if (charactere === charactere.toUpperCase()) { string = string.replace(charactere, charactere.toLowerCase()) }
    else { string = string.replace(charactere, charactere.toUpperCase()) }
}

console.log(string)




var chaine = "abcedfghijkl a e i"
for (let i = 0; i < chaine.length; i++) {
    let charactere = chaine[i]
    if (charactere === "a" || charactere === "e")
        chaine = chaine.replaceAll(charactere , "")

} console.log(chaine)