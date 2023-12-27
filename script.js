function maskPassword(pass){
    let str = ""
    for (let index = 0; index < pass.length; index++) {
        str  += "*"
    }
    return str
}

function copyText(txt) {
    navigator.clipboard.writeText(txt).then(
        () => {
          /* clipboard successfully set */
          document.getElementById("alert").style.display = "inline"
          setTimeout(() => {
            document.getElementById("alert").style.display = "none"
          }, 2000);

        },
        () => {
          /* clipboard write failed */
          alert("Clipboard copying failed")
        },
      );
  }

const deletePassword = (website)=>{
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e)=>{
        return e.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))
    alert(`Successfully deleted ${website}'s password`)
    showPasswords()

}

// Logic to fill the table
const showPasswords = () => {
    let tb = document.querySelector("table")
    let data = localStorage.getItem("passwords")
    if (data == null || JSON.parse(data).length == 0) {
        tb.innerHTML = "No Data To Show"
    }
    else {
        tb.innerHTML =  `<tr>
        <th>Website</th>
        <th>Username</th>
        <th>Password</th>
        <th>Delete</th>
    </tr> `
        let arr = JSON.parse(data);
        let str = ""
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];

            str += `<tr>
    <td>${element.website} <img onclick="copyText('${element.website}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10">
    </td>
    <td>${element.username} <img onclick="copyText('${element.username}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10">
    </td>
    <td>${maskPassword(element.password)} <img onclick="copyText('${element.password}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10">
    </td>
    <td><button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
        </tr>`
        }
        tb.innerHTML = tb.innerHTML + str

    }
    website.value = ""
    username.value = ""
    password.value = ""
}

console.log("Working");
showPasswords()
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Clicked....")
    console.log(username.value, password.value)
    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
    if (passwords == null) {
        let json = []
        json.push({website: website.value, username: username.value, password: password.value })
        alert("Password Saved");
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({ website: website.value, username: username.value, password: password.value })
        alert("Password Saved");
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    showPasswords()
})

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 
//function to validate form 
function validateForm() {
    console.log("Inside validateForm");

    var websiteInput = document.getElementById("website");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    if (websiteInput.value.trim() === "" || usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert("Please fill in all fields");
        return false; // Prevent form submission
    }

    
    // Reset form inputs
    websiteInput.value = "";
    usernameInput.value = "";
    passwordInput.value = "";

    
     return false;
}
// button to go at the top of website.
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



