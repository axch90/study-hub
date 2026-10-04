/* =================================
   SEARCH NOTES
   ================================= */

function searchNotes() {

    var input = document.getElementById("searchBox");

    var searchText = input.value.toLowerCase();

    var materials =
        document.getElementsByClassName("material-card");


    for (var i = 0; i < materials.length; i++) {

        var text =
            materials[i].innerText.toLowerCase();


        if (text.includes(searchText)) {

            materials[i].style.display = "block";

        } else {

            materials[i].style.display = "none";

        }

    }

}


/* =================================
   LOGIN
   ================================= */

function loginUser(event) {

    event.preventDefault();


    var username =
        document.getElementById("username").value;


    var password =
        document.getElementById("password").value;


    if (
        username === "student@gmail.com" &&
        password === "1234"
    ) {

        window.location.href = "index.html";

    } else {

        alert("Invalid username or password");

    }

}