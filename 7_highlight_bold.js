var bold;
setTimeout(() => bold = document.getElementsByTagName("strong"), 100);

function highlight(){
    for(let each of bold){
        each.style = "background-color: yellow;";
    }
}

function unHighlight(){
    for(let each of bold){
        each.style = "";
    }
}