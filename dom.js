const div = document.querySelector("div")   //("div")ou (#id) (.hello)(".peer")
console.log(div)

div.innerText = "GoMyCode" //bsh nbadel textmte3i
div.style.color = "green"  // bsh nbadel color mte3text
div.style.fontSize = "24px"
div.style.background = "white"
const barchaLI = document.querySelectorAll("li")
for (const element of barchaLI) {    //kif array
    element.style.color = "red"
    element.style.fontSize = "24px"
}


const classList = document.getElementsByClassName("list")
for (const element of classList) {
    console.log(element)
}
const elemntList = document.getElementsByTagName("li")     //ti5tar bil balise
for (const element of elemntList) {
    console.log(element)
}
const lawel = document.querySelector("li")
lawel.style.fontWeight = "bold"

const paragaph = document.querySelector("p")
paragaph.style.fontWeight = "bold"
paragaph.style.fontSize = "28px"
paragaph.style.fontStyle = "italic"
paragaph.style.color = "blue"
const newElement = document.createElement("div")  //creation d'eelment jdid ama myit7tash fil body yab9a m3ala9
newElement.innerText = "alaya"
newElement.style.fontSize = "24px"
newElement.style.fontWeight = "bold"
document.body.appendChild(newElement) //t3mal appel heja jdida fil body  appenchild t7ott element f wast ay elemnt

paragaph.appendChild(newElement)
paragaph.setAttribute("class", "bg-blue-500")

console.log(paragaph.parentElement) //ta3tina inoo pargraph parent fi wast body
// console.log(paragaph.parentElement.parentElement) //ta3tina html
for (const element of paragaph.children) {//ta3tina inno childrnr fi wast div
    console.log(element)
}
console.log(paragaph.previousElementSibling)   //5ou ellijey gbalhom hnee  ta3tin UL
paragaph.nextElementSibling           //5ou ellijey b3alhom


lawel.style.fontWeight = "bold"
lawel.style.textDecoration = "underline"

const liste = lawel.parentElement
const sibling = liste.nextElementSibling //elemnet parent
const alaya = sibling.children.item(0)   //elemtn
console.log(alaya)
 sibling.removeChild(alaya)


const button = document.querySelector("button")

// var numberofclick = 0
// function hello () { 
// var click =numberofclick + 1
// paragaph.innerText = numberofclick++
// body = document.querySelector ("body") //bsh ta2mal selevction 3al body
// body.style.background =getRandomRGBColor()



// alert ("Hello!")

// }
function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
button.addEventListener('mouseenter', function () {   //mouseentetr ydetecti curseur kif yod5ol
    button.style.backgroundColor = getRandomRGBColor()
})

button.addEventListener('mouseleave', function () {   //mouseleave yraje3 curseur kif yo5roj
    button.style.backgroundColor = "white"
})

var textInput = document.querySelector("#text")
var passwordInput = document.querySelector("#password")
var form = document.querySelector("form")

textInput.addEventListener('input', function (e) {  //bzhar input 3endha event ismha input
    const value = e.target.value             //n5arej valeur elli ktabto f console
    // console.log(value)
    // if (value.length > 16) alert("barsha")       hedhi tosel 16 t5arejli message barsha
    //  if (value.length > 16) e.preventDefault()

})

// form.addEventListener('submit', function(e){

//     const textValue = textInput.value
//     const passwordValue = passwordInput.value

//     if (textValue.length > 16) 
//     {e.preventDefault()
//         alert ("Name is too long!")
//     }
//     if (passwordValue === passwordValue.toUpperCase()){
//         e.preventDefault()
//     alert("majucule")}


// })
form.addEventListener('submit', function (e) {

    const numberText = Number(textInput.value) //Number(textInput.value) tbadel min chaine lil number
    const numberpassword = Number(passwordInput.value)      //Number(passwordInput.value) tbadlelna min chaine de caracterlil number
    som = numberText + numberpassword
    alert(som)
})

const buttons = document.querySelectorAll(".calcul")  //class mte3 buttons calcul 5ater 3endna brs model de button f html

for (const element of buttons) { // pour chaque button bsh najouti addeventlisner

    element.addEventListener('click', function () {
        paragaph.innerText += element.innerText  // kan nazido += tabda tikteb bjnab b3adhhom
    })

}


const buttonn = document.querySelector("#egal")
buttonn.addEventListener('click', function () { //try catch t5arjelna l'errur
    try{ 
    paragaph.innerText = eval(paragaph.innerText)
    if (paragaph.innerText==="Infinity") throw new Error ("salam3alaykom")
        // alert("error")
}
catch (error){   //na3mlilha fonction nsameha error w fil alert na3mlo ism fonction.message
    paragaph.innerHTML ="&nbsp;"
    alert(error.message)

}}
)








// button.addEventListener( 'click', hello)


// document.addEventListener('keypress', hello)   //kif ninzel bil clavier f ay blasa ya3tina hello haka 3lesh 7atteta f document

//nafs echay ama syntax yitbadal
// document.addEventListener('keypress', function(e){ //7arf elli neenzel 3lih yo5rojli
//     console.log(e.key)
// paragaph.innerText += e.key; //bsh nbadell l paragraph billi bsh ninzel 3alih fil clavier
// if(e.code === "space") paragraph.innerHTML += "&nbsp;" ; //bsh yabda espace mawjoud kan yfase5
// if(e.code === "enter") paragraph.innerText += "\n" ;

//     //alert("hello!")
// }
// )










// const table = document.createElement('table')
// table.setAttribute("borde","1")
// table.getAttribute()

// document.body.appendChild(table)

// for(let i=1; i<=3;i++)
// {
//     const cellule=document.createElement(tr)
// ligne.appendChild
// }
