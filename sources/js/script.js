/*---------------------------------------------
Template name:  Clean
Version:        1.0

[Table of Content]

01: Preloader
02: ...
----------------------------------------------*/

// Preloader

(function ($) {
    "use strict";

    var win = $(window);
    /* ======= Preloader ======= */
    win.on('load', function () {
        $('#loading-area').delay('500').fadeOut(2000);
    });


})(jQuery);


// UI Define
let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");
let ui = new UI();

searchBtn.addEventListener("click", (e) => {
    let userText = searchUser.value;
    if (userText != '') {
        // Fetch API
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(data => {
            if(data.message == "Not Found") {
                // Show Alert
                ui.showAlert("User Not Found", "alert alert-danger");
            } else {
                // Show Profile
                // console.log(data);
                ui.showProfile(data);
            }
        })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
})