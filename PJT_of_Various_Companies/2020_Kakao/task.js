let divCount = 0;
let showDeleteCheck = true;
let selectedList = 0;

const addButton = () => {
    if(divCount < 8) {
        var form_container = document.createElement('div');
        form_container.className = 'listClass';
        form_container.id = 'list_' + divCount;        
       
        const template = document.querySelector('.newDIVtemplate');
        const clone = document.importNode(template.content, true);
        
        const areaDiv = document.getElementById('listContainer');

        form_container.appendChild(clone);
        areaDiv.appendChild(form_container);

        divCount ++;
    }
}

const deleteButton = () => {
    if(showDeleteCheck) {
        document.getElementById('confirmModal').style.display = 'block';
        
        var element = document.getElementById('listContainer');
        element.classList.add('dimmedClass');
        // showDeleteCheck = false;
        
        // const parentObj = document.getElementById('listContainer');
        // const template = document.querySelector('.confirmModaltemplate');
        // const clone = document.importNode(template.content, true);
        // parentObj.appendChild(clone);

        
    }
}

const okDeleteButton = () => {
    document.getElementById('deleteOKModal').style.display = 'block';
    var element = document.getElementById('listContainer'); 
    element.classList.add('dimmedClass');

    name = "dimmedClass";
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
      element.className += " " + name;
    }

    // let areaDiv = document.getElementById('listContainer');
    
    // // const list = document.getElementById('list_' + divCount);
    // console.log('..... id', areaDiv.childNodes);

    // let parentObj = container.parentNode ;
    // parentObj.removeChild( container );

    // const container = document.getElementsByClassName('newDIVtemplate')[0];
    // // let parentObj = document.querySelector('.newDIVtemplate');
    // let parentObj = container.parentNode ;
    // parentObj.removeChild( container );

    // // let elements = document.getElementsByClassName('newDIVtemplate');
    // while ( elements[0] ) {
    //     elements[0].parentNode.removeChild(elements[0]);
    // }
    // var item = document.querySelectorAll('.newDIVtemplate > div');
    // container.removeChild(item);
}

const cancelDeleteButton = () => {
    document.getElementById('confirmModal').style.display = 'none';
    document.getElementById('deleteOKModal').style.display = 'none';
    showDeleteCheck = true;

    var element = document.getElementById("listContainer");
    element.classList.remove("dimmedClass");
    // const confirmModal = document.getElementsByClassName('confirmModalClass')[0];
    // let parentObj = confirmModal.parentNode ;
    // parentObj.removeChild( confirmModal );
}

const confirmDeleteButton = (thisElement) => {
    showDeleteCheck = true;
    document.getElementById('confirmModal').style.display = 'none';
    document.getElementById('deleteOKModal').style.display = 'none';

    
    var element = document.getElementById("listContainer");
    element.classList.remove("dimmedClass");
}



