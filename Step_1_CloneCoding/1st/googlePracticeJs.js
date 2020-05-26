function inactive() {
    var obj = document.getElementById("searchContents");
}

function over_topContainer_item_app() {
    var tmp = document.getElementById("topContainer_item_img");
    tmp.src = "./img/headMenu_app_over.png";
}
function out_topContainer_item_app() {
    var tmp = document.getElementById("topContainer_item_img");
    tmp.src = "./img/headMenu_app.png";
}

function over_topContainer_item_searchButton() {
    var tmp = document.getElementById("googleButton_search");
    tmp.style.border = " 1px solid #a0a0a0";
    document.getElementById("googleButton_search").style.color = "#3e3e3e";
}
function out_topContainer_item_searchButton() {
    var tmp = document.getElementById("googleButton_search");
    tmp.style.border = "none";
    document.getElementById("googleButton_search").style.color = "#757575";
}

function onclicksearchButton() {
    var tmp = document.getElementById("googleButton_search");
    tmp.style.border = " 1px solid #007FFF";
}


function over_topContainer_item_luckyButton() {
    var tmp = document.getElementById("googleButton_lucky");
    tmp.style.border = " 1px solid #a0a0a0";
    document.getElementById("googleButton_lucky").style.color = "#3e3e3e";
}
function out_topContainer_item_luckyButton() {
    var tmp = document.getElementById("googleButton_lucky");
    tmp.style.border = "none";
    document.getElementById("googleButton_lucky").style.color = "#757575";
}
function showTapApp() {
    var tmp = document.getElementById("topContainer_tap_App");
    tmp.style.display = "show";
}
function showTapAlarm() {
    var tmp = document.getElementById("topContainer_tap_Alarm");
    tmp.style.display = "show";
}
function showTapProfile() {
    var tmp = document.getElementById("topContainer_tap_Profile");
    tmp.style.display = "show";
}	