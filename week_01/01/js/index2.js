


const homePage = document.querySelector(".home a")


const headerHtml = `
  <div class="home">
      <a href="index.html">
        Ana sayfa
      </a>
    </div>
    <ul class="menu">
      <li>
         <a href="about.html">
        Hakkımızda
        </a>
      </li>
      <li>
        <a href="services.html">
        Hizmetler
        </a>
      </li>
      <li>
        <a href="contact.html">
        İletişim
      </a>
      </li>
  </ul>
`


const header = document.querySelector("#header")

if (header) {
  header.innerHTML = headerHtml
}

const contactFormHtml = `
    <div id="contact_form">
      <div class="form-group">
        <label>Adınızı Giriniz</label>
        <input placeholder="Adınızı Giriniz" id="firstName"/>
      </div>
      <div class="form-group">
        <label>Soyadınızı Giriniz</label>
        <input placeholder="Soyadınızı Giriniz" id="lastName"/>
      </div>
      <div class="form-group">
        <button>Gönder</button>
      </div>
    </div>
`
const contactForm = document.querySelector(".contact")

if (contactForm)
  contactForm.innerHTML = contactFormHtml


const button = document.querySelector("#contact_form button")

// button.addEventListener("click", (e) => {
//   submitForm()
// })

if (button)
  button.addEventListener("click", submitForm)


function submitForm() {
  const firstName = document.querySelector("#firstName").value
  const lastName = document.querySelector("#lastName").value

  // api
  console.log({ firstName, lastName })
}