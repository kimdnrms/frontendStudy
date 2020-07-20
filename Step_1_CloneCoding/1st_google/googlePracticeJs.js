let divCount = 0;

const inactive = () => {
    var obj = document.getElementById('searchContents');
}

const mouseover_topContainer_item_app = () => {
    var tmp = document.getElementById('topContainer_item_img');
    tmp.src = './img/headMenu_app_over.png';
}

const mouseout_topContainer_item_app = () => {
    var tmp = document.getElementById('topContainer_item_img');
    tmp.src = './img/headMenu_app.png';
}

const showModalTapApp = () => {

}

const showModalTapProfile = () => {

}

const onFocusSearchInputBox = () => {
    
}


const mouseover_mostVisitedContainer_item_app = () => {
    document.querySelector('.mostVisitedItem').style.backgroundColor = 'rgba(238,238,238,1)';    
    document.getElementById('addMostVistedButtonIcon').style.backgroundColor = 'rgba(220,220,220,1)';
}

const mouseout_mostVisitedContainer_item_app = () => {
    document.querySelector('.mostVisitedItem').style.backgroundColor = 'rgba(255,255,255)';
    document.getElementById('addMostVistedButtonIcon').style.backgroundColor = 'rgba(238,238,238,1)';

}

const showModalAddMostVisited = () => {

}

const addOKButton = () => {
    if(divCount < 8) {
        var form_container = document.createElement('div');
        form_container.className = 'mostVisitedItem';
        form_container.id = 'mostVisitedItem_' + divCount;        
       
        const template = document.querySelector('.newAddedMostVistedTemplate');
        const clone = document.importNode(template.content, true);
        
        const areaDiv = document.getElementById('addedMostVisited');

        form_container.appendChild(clone);
        areaDiv.appendChild(form_container);

        divCount ++;
    }
    // console.log('....')
    // let areaDiv = document.getElementById('mostVisitedItemContainer');
    
    // const template = document.querySelector('.newDIVtemplate');
    // const clone = document.importNode(template.content, true);
    // areaDiv.appendChild(clone);
}