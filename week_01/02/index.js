// arrayler

// const array = [0, 1, 2, 3, 4, 5]
// const array2 = ["0", "1", "2", "3", "4", "5"]
// const array3 = [0, "1", true, false]
// const array4 = [{ name: "Ahmet", age: 15 }, { name: "Mehmet", age: 18 }]

// Array destructuring
// const [ahmet, mehmet] = [{ name: "Ahmet", age: 15 }, { name: "Mehmet", age: 18 }]

// Array properties
// length
// const array = [0, 1, 2, 3, 4, 5]
// console.log(array)

// Array Methods

// findIndex
// const array = [1, 2, 3, 4, 5]
// const index = array.findIndex(x => x == 6)
// if (index > -1) {
//   console.log(`6 değeri ${index} numaralı index'te bulunuyor`)
// } else {
//   console.log(`6 değeri dizide bulunamadı`)
// }

// Find
// const array = [{ name: "Ahmet", age: 15 }, { name: "Mehmet", age: 18 }]
// const person = array.find(x => x.name === "Veli")
// if (person) {
//   console.log("Arama kriterlerimize uygun bir değer bulundu")
// } else {
//   console.log("Arama kriterlerimize uygun bir değer bulunamadı")
// }

// Filter
// const array = [{ name: "Ahmet", age: 15 }, { name: "Mehmet", age: 18 }, { name: "Mehmet", age: 20 }]
// yaşı 18 ve 18 den büyük elemanları bulalım
// const items = array.filter(x => x.age >= 18)
// console.log(items)


// yaşı 18 den küçük elemanları bulalım
// const items = array.filter(x => x.age < 18)
// console.log(items)

// yaşı 18' eşit olan elemanları bulalım
// const items = array.filter(x => x.age === 18)
// console.log(items)

// Fill
// const array = new Array(3).fill(1)
// console.log(array)

// Map

// const array = [{ name: "Ahmet", age: 15 }, { name: "Mehmet", age: 18 }]

// const items = array.map(x => {
//   x.active = true
//   return x
// })
// console.log(items)

// Some
// const array = [{ name: "Ahmet", age: 15 }, { name: "Mehmet", age: 18 }]
// const item = array.some(x => x.age == 12)
// console.log(item)

// Slice
// bu method başlangıç ve bitiş değerleri arasındaki elemanları döner
// const array = [1, 2, 3, 4, 5]
// const items = array.slice(0,2)
// console.log(items)

// Splice
// bu method arraydan silme işlemleri için kullanılır
// const array = [1, 2, 3, 4, 5]
// const item = array.splice(1, 1)
// console.log(array)

// Push
// Bu method array sonuna ekleme yapar.
// const array = [1, 2, 3, 4, 5]

// array.push(6)
// console.log(array)

// Pop
// Bu method array sonundan bir eleman siler
// const array = [1, 2, 3, 4, 5]
// array.pop();
// console.log(array)

// Unshift
// const array = [1, 2, 3, 4, 5]
// array.unshift(0)
// console.log(array)


// Loops
// - For
// - Foreach
// - Map
// const array = [1, 2, 3, 4, 5]

// for (var i = 0; i < array.length; i++) {
//   const item = array[i]
//   console.log(item)
//   if (i == 2) {
//     break
//   }  
// }

// for (var i in array) {
//   const item = array[i]
//   console.log(item)
// }


// array.forEach(item => {
//   console.log(item)
// })

// Map
// const newArray = array.map(x => {
//   return x
// })
// console.log(newArray)

// const array = [{ name: "Ahmet", age: 15 }, { name: "Mehmet", age: 18 }]

// for

// for (let index = 0; index < array.length; index++) {
//   const item = array[index];
//   const li = document.createElement("li")
//   li.innerText = `Ad: ${item.name}, Yaş:${item.age} `
//   document.querySelector("#ul-1").appendChild(li)
// }

// array.forEach((item, index, currArray) => {
//   const li = document.createElement("li")
//   li.innerText = `Ad: ${item.name}, Yaş:${item.age} `
//   document.querySelector("#ul-1").appendChild(li)
// })

// for (var i in array) {
//   const item = array[i]
//   const li = document.createElement("li")
//   li.innerText = `Ad: ${item.name}, Yaş:${item.age} `
//   document.querySelector("#ul-1").appendChild(li)
// }


// fetch

// posts api
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json()).then(response => {
//     console.log(response)
//   })


document.querySelector("#loadPost").addEventListener("click", () => {
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json()).then(response => {
    const posts = response.slice(0, 20)
    renderPost(posts)
  })
})

const renderPost = (data = []) => {
  data.forEach((item) => {
    const li = document.createElement("li")
    li.innerHTML = `<div class="card">
  <div class="card-body">
    ${item.title}
  </div>
</div>`
    document.querySelector("#ul-1").appendChild(li)
  })
}

const loadUserButton = document.querySelector("#loadUsers")

const template = `
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
`



let users = []
const loadUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users").then(response => {
    return response.json()
  }).then(response => {
    users = response.map((x, index) => {
      x.orderNo = index + 1
      return x
    })
    renderUsers(users)
  }).catch(err => {
    console.error(err)
  })
}

loadUserButton.addEventListener("click", loadUsers)

const userDom = document.querySelector("#user")


let user = {}
const renderUsers = (users = []) => {
  userDom.innerHTML = ""
  const table = document.createElement("table")

  table.classList.add("table")

  const thead = document.createElement("thead")
  thead.innerHTML = `
  <tr>
  <th scope="col">Id</th>
    <th scope="col">Sıra No</th>
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col">Phone</th>
    <th scope="col">Website</th>
    <th scope="col">Actions</th>
  </tr>`
  table.appendChild(thead)

  const tbody = document.createElement("tbody")

  tbody.innerHTML = users.map((user, index) => {
    return `<tr>
      <th scope="row">${user.id}</th>
      <th scope="row">${index + 1}</th>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.website}</td>
      <td>
      <button type="button" class="btn btn-danger btn-sm remove" data-id="${user.id}">Sil</button>
      <button type="button" class="btn btn-warning btn-sm update" data-id="${user.id}">Düzenle</button>
      </td>
    </tr>`
  }).join(" ")
  table.appendChild(tbody)

  userDom.appendChild(table)


  document.querySelectorAll(".remove").forEach(button => {
    button.addEventListener("click", function () {
      const status = confirm("Kaydı silmek üzeresiniz emin misiniz?")
      if (status) {
        const id = this.getAttribute("data-id")
        renderUsers(users.filter(x => x.id != id))
      }
    })
  })

  document.querySelectorAll(".update").forEach(button => {
    button.addEventListener("click", function () {
      const id = this.getAttribute("data-id")
      const _user = users.find(user => user.id == id)
      fillUser(_user)
      toggleUser()
      toggleTable("none")
    })
  })
}

const toggleTable = (display = "none") => {
  document.querySelector("#user").style.display = display
}

const toggleUser = (display = "block") => {
  document.querySelector("#user-form").style.display = display
}

const fillUser = (user) => {
  document.querySelector("#labelName").value = user.name
  document.querySelector("#labelPhone").value = user.phone
  document.querySelector("#labelWebSite").value = user.website
  document.querySelector("#labelEmail").value = user.email
  document.querySelector("#userId").value = user.id
}

const updateUser = () => {
  try {
     // olmayan bir dom elemanını seçmeye çalışıp hataya düşürdük
    // const age = document.querySelector("#labelAge").value
    const name = document.querySelector("#labelName").value
    const phone = document.querySelector("#labelPhone").value
    const webSite = document.querySelector("#labelWebSite").value
    const email = document.querySelector("#labelEmail").value
    const userId = document.querySelector("#userId").value

    const index = users.findIndex(user => user.id == userId)
    fetch("http://localhost:3000/update", {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Token": window.localStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .then(response => {
        const { status } = response
        if (status == true) {
          users[index] = { name, phone, website: webSite, email, id: userId }
          renderUsers(users)
          toggleTable("block");
          toggleUser("none");
          alert("Güncelleme işlemi başarıyla gerçekleşti")
        } else {
          alert("Güncelleme işlemi sırasında bir hata oluştu")
        }
    })
   
  } catch (error) {
    console.error(error)
    alert("Bizden kaynaklı bir hata oluştu özür dileriz")
    toggleTable("block");
    toggleUser("none");
  }
  
}
document.querySelector("#cancel").addEventListener("click", () => {
  toggleTable("block");
  toggleUser("none");
})


document.querySelector("#save").addEventListener("click", updateUser)


