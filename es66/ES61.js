const information = {
    firstName: "hanen",
    lastName:"alaya",
    CIN:13223348,
    age: 32, 
    gender:"female",
    height: 210,
    weight:120,
    course: {
        className:"software bootcamp",
        students:["Hanen", "Kamel", "Yassin", "Isslem"]
    },
};
const {age, CIN, firstName, lastName, gender, course: {className, students}} = information;   //fi 3odh bsh nog3do niktbo a chaque fois firstname.information lasname.informa
// const {className, students} = course ;  ou ta3mal heka 
console.log(age)
console.log(CIN)
console.log(lastName)
// console.log(course)
const person = {
    name: 'Alice',
    age1: 30,
    address: {
      street: '123 Main St',
      city: 'Wonderland',
      zip: '12345',
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194
      }
    }
  };
  const { name, age1, address: {street, city, zip, coordinates: {latitude, longitude}}} = person;

  console.log(latitude) 
   console.log(longitude)
   const courses =["HTML CSS JS", "Cybersecurity"]; //destruction objet isem howa elli yhemne w fi array l'order how elli yhemm
   const [web, security] = courses ;
const courses2= ["react", "node"] ;


   const informationCompletes = { ...information, favoriteFood: "bread"}; // 3 points bsh tfakek wtabda favrote meme niveau mish barra
console.log(informationCompletes)
// const touteLesCourses = [courses, courses2]
// console.log(touteLesCourses)   //tjini bjnab arry [ [ 'HTML CSS JS', 'Cybersecurity' ], [ 'react', 'node' ] ]
const touteLesCourses = [...courses, ...courses2]
console.log(touteLesCourses)
const copie =[...courses]  //kif na3mloha tab9a stable kifmana3mlohzsh kif nbadel course ditbadal coupie
