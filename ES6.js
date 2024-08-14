import { sum } from "./es66/import";

var number1 = 5   //var est global
for (let i = 0; i < 10; i++) {  // let var local
  let number1 = 10
  console.log(number1)
}

let number = 5;
let string = "";
// if  (number>5) string ="too big";
// else if (number<0) string="too little"; hedha y3awdha 
//else string ="c'est bon";

string = number > 5 ? "too big"
  : number < 0 ? "too little"
    : "c'est bon";
console.log(string);


let a = 15;
let b = 12;
console.log(`votre moyen est ${(a + b) / 2} points. Avec mention ${(a + b) / 2 > 17.5 ? "Tres bien" : (a + b) / 2 > 15 ? "bien" : "assez bien"} `)     //altgr et 7

function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
console.log(getRandomRGBColor())
const now = new Date()
const currentHour = now.getHours() // Entre 0 et 23 
string = 8 < currentHour && currentHour < 12 ? "good morning"
  : 12 <= currentHour && currentHour < 16 ? "good afternoon"
    : 16 <= currentHour && currentHour < 20 ? "good night"
      : "good evening";
console.log(string);


// function sum(x, y) {
//   return x + y
// }
const sumES6 = (x, y) => {
  return x + y;
};

const sumES6short = (x, y) => x + y; //hedhi kif tabda 3endi starr barka najem nekteb heka

// const input= document.querySelector("input")
// input.addEventListener('input',  (e) => console.log(input.value));


// form.addEventListener('submit', (e) => {
//     const numberText = Number(textInput.value) 
//     const numberpassword = Number(passwordInput.value)    
//     som = numberText + numberpassword
//     alert(som)
// })

// const buttons = document.querySelectorAll(".calcul")  
// for (const element of buttons) { 

//     element.addEventListener('click', () => paragaph.innerText += element.innerText)}




// const buttonn = document.querySelector("#egal")
// buttonn.addEventListener('click',  () => { 
//     try{ 
//     paragaph.innerText = eval(paragaph.innerText)
//     if (paragaph.innerText==="Infinity") throw new Error ("salam3alaykom")
// }
// catch (error){ 
//     paragaph.innerHTML ="&nbsp;"
//     alert(error.message)

// }}
// )

let numbers = [1, 2, 3, 4, -3, 5, 6, 7, 8, 9, 10]
// for (let i=0; i<numbers.length; i++){
//     numbers[i] = numbers[i] * 2
// }
// numbers.forEach(element=> console.log(element))          //foreach ta9bal argument dse elemnt



numbers.forEach(element => element % 2 === 0 ? console.log("pair")
  : console.log("impair"))          //foreach ta9bal argument dse elemnt amamatretourni chay juste traitement



//  map treturni tableau jdid kif innertext foreach matretourni chay juste tbadel array 
// numbers = numbers.map(element=>element * 2)
console.log(numbers)


//splice nchofoha tzid w tna9ess ti5tar win t7ot tabda tzid t3awedh





// numbers = numbers.filter(element=>element % 2 === 0)  // filter ya3di kan les conditions mawjoudin 

console.log(numbers)

const negative = numbers.find(element => element < 0)  //ta3tik elemnt lawel elli t7awem 3lih
console.log(negative)

const dateLimite = new Date("2004-01-01");

let teams = [
  {
    name: "Eagle FC",
    points: 52,
    dateFounded: new Date("2001-04-12"),
    coach: "John Smith",
  },
  {
    name: "Falcon United",
    points: 47,
    dateFounded: new Date("1998-09-25"),
    coach: "Emma Johnson",
  },
  {
    name: "Tigers FC",
    points: 55,
    dateFounded: new Date("2003-07-08"),
    coach: "Michael Brown",
  },
  {
    name: "Panther Club",
    points: 62,
    dateFounded: new Date("2000-11-30"),
    coach: "Sophia Lee",
  },
  {
    name: "Lions Den",
    points: 45,
    dateFounded: new Date("2005-03-17"),
    coach: "David White",
  },
  {
    name: "Wolves SC",
    points: 50,
    dateFounded: new Date("2010-01-22"),
    coach: "Olivia Taylor",
  },
  {
    name: "Sharks FC",
    points: 58,
    dateFounded: new Date("2007-06-18"),
    coach: "James Harris",
  },
  {
    name: "Dragons FC",
    points: 41,
    dateFounded: new Date("2012-02-14"),
    coach: "Ava Martin",
  },
  {
    name: "Hawks Rovers",
    points: 49,
    dateFounded: new Date("1999-10-05"),
    coach: "Benjamin Lewis",
  },
  {
    name: "Bears Athletic",
    points: 53,
    dateFounded: new Date("2004-08-27"),
    coach: "Mia Clark",
  },
];



const dates = teams.filter(team => team.dateFounded < dateLimite)
console.log(dates)


// team[0].stade="kantaoui"
// console.log
// numbers = numbers.map(element=>element * 2) equipe === teams[i]
teams = teams.map(equipe => {
  if (equipe.points > 60) equipe.postions = "championis"
  if (equipe.points < 50) equipe.postions = "relagation"
  return equipe  //lezemna na3mlo return fi map sh ta9relna 
})
console.log(teams)

teams = teams.filter(equipe=>equipe.points>=50)







