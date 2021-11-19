let tabHeader = document.getElementsByClassName("schedule-tab-head")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("schedule-tab-content")[0];

let tabsPane = tabHeader.getElementsByTagName("div");

for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function() {
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");

        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByClassName("tabbing")[i].classList.add("active");

        tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
    });
}


/* == Drop Down == */
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
var dropone = document.getElementsByClassName("drop-one")[0];
function dropOne() {
    if (dropone.style.display = "none") {
        dropone.style.display = "block";
    }else{
        dropone.style.display = "none";
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.style.display = "block") {
        openDropdown.style.display = "none";
    }
    }
}
}