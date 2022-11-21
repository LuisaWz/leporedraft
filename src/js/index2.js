// //Let start with generating the header message
// const messages = ['from nobel origin', 'with organic background', 'that twists the Spritz'];
// // Returns a Promise that resolves after "ms" Milliseconds
// const timer = ms => new Promise(res => setTimeout(res, ms))

// // async function load() {
// //   for (const element of messages) {
// //     await timer(3000);
// //     document.getElementById("dynamictext").innerHTML = element;
// //   }
// // }

// load();

// Links in nav bar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    let checkID = event.target.id
    if (checkID == "customerService") {
      document.getElementById("dropDownButton").innerHTML = "customer service"
    } else if (checkID == "coLabs") {
      document.getElementById("dropDownButton").innerHTML = "colabs"
    } else if (checkID == "pressMedia") {
      document.getElementById("dropDownButton").innerHTML = "press & media"
    } else if (checkID == "other") {
      document.getElementById("dropDownButton").innerHTML = "other"
    }
  }
}

function retrieveContactData() {
  var userDetails = [];
  userDetails.push(
    document.getElementById("cName").value,
    document.getElementById("cEmail").value,
    document.getElementById("dropDownButton").innerHTML,
    document.getElementById("cMessage").value);
  alert(userDetails)
}


