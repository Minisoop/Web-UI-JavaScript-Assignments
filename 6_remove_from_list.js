function removecolor(){
    let select = document.getElementById("colorSelect");
    console.log(select.value + " removed.");
    select.remove(select.value);
}