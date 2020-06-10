const inactive = () => {
    var obj = document.getElementById("searchContents");
}

const mouseover_topContainer_item_app = () => {
    var tmp = document.getElementById("topContainer_item_img");
    tmp.src = "./img/headMenu_app_over.png";
}

const mouseout_topContainer_item_app = () => {
    var tmp = document.getElementById("topContainer_item_img");
    tmp.src = "./img/headMenu_app.png";
}

const showModalTapApp = () => {

}

const showModalTapProfile = () => {

}

const onFocusSearchInputBox = () => {
    
}


const mouseover_mostVisitedContainer_item_app = () => {
    document.getElementsByClassName("mostVisitedItem").style.backgroundColor = "rgba(238,238,238,1)";
}

const mouseout_mostVisitedContainer_item_app = () => {
    document.getElementsByClassName("mostVisitedItem").style.backgroundColor = "rgba(255,255,255)";

}

const showModalAddMostVisited = () => {

}

const addButton = () => {
    let areaDiv = document.getElementById("mostVisitedItemContainer");
    
    const template = document.querySelector('.newDIVtemplate');
    const clone = document.importNode(template.content, true);
    areaDiv.appendChild(clone);
}