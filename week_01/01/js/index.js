// Javascript Nedir?
// https://www.w3schools.com/whatis/whatis_js.asp
// Değişken Tanımları


var name = "React Bootcamp"
let age = 30
const info = "React bootcamp variables"



const h2 = document.querySelector(".h2")

// Dom Nedir
// text content
// stillendirmesini değiştirebiliriz
// element'e yeni bir element ekleyebiliriz.
// elementi gizleyip-gösterebiliriz.

h2.textContent = "React Bootcamp"

h2.style.color = "red"

h2.setAttribute("id", "myid")


// setTimeout(() => {
//   h2.style.display = "none";
// }, 2000);


// Karar yapıları
// if else switch case

let h4 = document.querySelector(".h4")

if (h4) {
  h4.textContent = "Element Var"
} else {
  h4 = document.createElement("div")

  h4.classList.add("h4")
  h4.textContent = "Element Eklendi"
  document.body.appendChild(h4)
}

// switch (age) {
//   case 30:
//     h4.textContent = "Ahmetin Yaşı 30"
//     break;

//   default:
//     h4.textContent = "Ahmetin Yaşı 30 değil"
//     break;
// }

// standart function tanımlaması
function myFunction() {
  console.log("myFunction")
}

const myFunction2 = function () {
  console.log("myFunction2")
}
myFunction2()

const myFunction3 = function myFunction3() {
  console.log("myFunction3")
}
myFunction3()

// arrow function
const myFunction4 = name => console.log(name)

myFunction4("Ali")

const myFunction5 = (firstName, lastName = "Öz") => {
  const txt = `Merhaba: ${firstName} ${lastName} sitemize hoş geldiniz!`
  console.log(txt)
}
myFunction5("Ahmet", "Mehmet")










