function getFormvalue(){
    let form = document.getElementById("form1");
    let firstName = form.firstElementChild.value;
    let secondName = form.getElementsByTagName('input')[1].value;

    console.log("His name is", firstName, secondName);
}

setTimeout(getFormvalue, 100);