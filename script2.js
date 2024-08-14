var array = [1, 2, 3, "Hello", "myname", "is", false]
for (var i = 0; i < array.length; i++)
    console.log(array[i])
// ajout des elements a un array
array.push("new", "1")
console.log(array)
//  delete le dernier element
var dernier = array.pop()
console.log(array)
console.log(dernier)




// suppresion de premier elemnt
var premier = array.shift()
console.log(array)
console.log(premier)
// ajout des element en prmier
array.unshift(0, 9)
console.log(array)



// bsh ne7o les chaine na3mlolhom push fi newArry
var array = [1, 2, 3, "Hello", "myname", "is", false]
var newArray = []
for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (typeof element === "string") {
        newArry.push(element)
    }
}
console.log(newArry)

while (array.length !== 0) {
    var element = array.pop()
    newArray.push(element)
}
console.log(newArray)

// includes bsh nchof beha mawjouda ou non
var arr = [1, 2, 3, "Hello", "myname", "is", false]
// ta3tina false 5ater mish mawjouda

console.log(arr.includes("hanen"))
// ta3tina true 5ater mawjouda

console.log(arr.includes("Hello"))
if (arr.includes("Hello") && arr.includes("hanen"))
    console.log("yes")
else console.log("no")


// var numbers = [-3, -2, 0, 1, 3, 6, 9, -15, 9, 8]
// for (i = 0; i < numbers.length; i++) {
//     const item = numbers[i]
//     if (item >= 0 && item % 3 === 0) {
//         console.log(item)
//     }
// }
if (arr.includes("Hello") || arr.includes("hanen"))
    console.log("yes")
else console.log("no")


var string = ["hello", "myname", "10", "sdgsfdsd", "kfjkkkkk", "h"]
function test(arr) {
    for (i = 0; i < arr.length; i++) {
        const element = arr[i]
        if (3 <= element.length && element.length <= 8) {
            console.log(element)
        }
    }
}

test(string)


// t5arej les elements min A lil Z
var lolw = ["hello", "myname", "sdgsfdsd", "kfjkkkkk", "h", "hjkhhkk", "jkiuy"]
console.log(lolw.sort())
// t5arej les elements min Z lil A

console.log(lolw.reverse())

// bsh nhez min array min 3 lil 6
var stings = ["hello", "myname", "sdgsfdsd", "kfjkkkkk", "h", "hjkhhkk", "jkiuy", "hhjk", "hhjk"]

console.log(stings.slice(3, 7))
// virgule lezma fil obj hya feha DATA 
var obj = {
    CIN: 13223348,
    name: "hanen",
    date: "27/02/1992",
    students: ["islem", "fatma", "yassin", "hanen", "kamel"]
}
console.log(obj)
console.log(obj.name)
console.log(obj.name, obj.CIN, obj.students[0])
// bsh nbadlo numero de CIN
obj.CIN = 123456
// bsh nzido obj jdid
obj.age = 32

console.log(obj.CIN)
console.log(obj.age)
// hedh bsh tzid studen jdid fil obj
obj.students.push("dhia")
console.log(obj)
// hedhi bsh tkoun methode msh proprieté kif fil obj
var obj = {
    CIN: 13223348,
    name: "hanen",
    date: "27/02/1992",
    students: ["islem", "fatma", "yassin", "hanen", "kamel"],
    sayHello: function () {
        console.log("hello")
    }
}
obj.sayHello()

// bsh nzido l helllo isem( parametre) wna3mlo  espace fi hello guimet  bsh tjina fam espace

var obj = {
    CIN: 13223348,
    name: "hanen",
    date: "27/02/1992",
    students: ["islem", "fatma", "yassin", "hanen", "kamel"],
    sayHello: function (flen) { console.log("hello " + flen)}
}
obj.sayHello("amin")

// na3mlo this.name njmo obj.name ama msh dima te5dem 
var obj = {
    CIN: 13223348,
    name: "hanen",
    date: "27/02/1992",
    students: ["islem", "fatma", "yassin", "hanen", "kamel"],
    sayHello: function (flen) { console.log("hello " + flen)},
    sayMyname: function () { console.log(this.name)}

}
obj.sayHello("amin")
obj.sayMyname()



// bsh nzio students na3mlo bil push
var obj = {
    CIN: 13223348,
    name: "hanen",
    date: "27/02/1992",
    students: ["islem", "fatma", "yassin", "hanen", "kamel"],
    sayHello: function (flen) { console.log("hello " + flen) },
    sayMyname: function () { console.log(this.name) },
    addStudents: function(newStudent) { this.students.push(newStudent) }
}
obj.sayHello("amin")
obj.sayMyname()
obj.addStudents("mouhsen")
console.log(obj)


// na3mlo methode fi wast objet kan akthar  5 nktbo brsh w kan student a9al niktbo chway 

var obj = {
    CIN: 13223348,
    name: "hanen",
    date: "27/02/1992",
    students: ["islem", "fatma", "yassin", "hanen", "kamel"],
    sayHello: function (flen) { console.log("hello " + flen) },
    sayMyname: function () { console.log(this.name) },
    addStudents: function(newStudent) { this.students.push(newStudent) },
    barchaWallachwya: function(){
        if(this.students.length >= 5)
            console.log("kbirabrsha")
        else
        console.log("kbirachwaya")

    }
}
obj.sayHello("amin")
obj.sayMyname()
obj.addStudents("mouhsen")
console.log(obj)
obj.barchaWallachwya()


const cube = {
    kobr:0,
    setkobr: function(k) {this.kobr=k},
    e7sebvolume: function() {console.log(this.kobr**3)}
}
cube.setkobr(3)
cube.e7sebvolume() //  3**3=27

// bsh nchof array d'un nombremax 
// const numbers =[-9, 10, 4, 0, 15, 2, 6, 5]



// bsh nchof array d'un obj 10
const teams = [
    {
        name: "Eagle FC",
        points: 52,
        dateFounded: new Date("2001-04-12"),
        coach: "John Smith"
    },
    {
        name: "Falcon United",
        points: 47,
        dateFounded: new Date("1998-09-25"),
        coach: "Emma Johnson"
    },
    {
        name: "Tigers FC",
        points: 55,
        dateFounded: new Date("2003-07-08"),
        coach: "Michael Brown"
    },
    {
        name: "Panther Club",
        points: 62,
        dateFounded: new Date("2000-11-30"),
        coach: "Sophia Lee"
    },
    {
        name: "Lions Den",
        points: 45,
        dateFounded: new Date("2005-03-17"),
        coach: "David White"
    },
    {
        name: "Wolves SC",
        points: 50,
        dateFounded: new Date("2010-01-22"),
        coach: "Olivia Taylor"
    },
    {
        name: "Sharks FC",
        points: 58,
        dateFounded: new Date("2007-06-18"),
        coach: "James Harris"
    },
    {
        name: "Dragons FC",
        points: 41,
        dateFounded: new Date("2012-02-14"),
        coach: "Ava Martin"
    },
    {
        name: "Hawks Rovers",
        points: 49,
        dateFounded: new Date("1999-10-05"),
        coach: "Benjamin Lewis"
    },
    {
        name: "Bears Athletic",
        points: 53,
        dateFounded: new Date("2004-08-27"),
        coach: "Mia Clark"
    }
]; 
// bsh n5arjo akthar points et name erra7a
function max (arr){
    let akbernumber = -Infinity
    let equiperab7a = ""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].points > akbernumber){
            akbernumber = arr[i].points 
            equiperab7a = arr[i].name
        }
    }
    return  [akbernumber, equiperab7a]
     
}
console.log(max(teams))

// bsh n5arjo agdam date 

function oldestTeam (arr){  
      let date = new Date()

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].dateFounded < date){
            date = arr[i].dateFounded 

}
}
return date
}
console.log(oldestTeam(teams))





var numbers = [-9, 10, 4, 0, 15, 2, 6, 5]
for (let number of numbers) {
    console.log(number)
}


    //nafs echay lel objets

var tableauloula = [-9, 10, 4, 0, 15, 2, 6, 5]
var tableauthania = tableauloula     //coppie marbouta
var tableaucopie = structuredClone (tableauloula)     //coppie mosh marbouta

tableauloula.push(5, 9, 10)
console.log(tableaucopie) //matitbadalshi
console.log(tableauthania) //titbadal





