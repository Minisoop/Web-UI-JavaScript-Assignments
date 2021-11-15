function matchEmail(emailIn){
    let mailPattern = /[a-zA-Z0-9]/;
    return mailPattern.test(emailIn);
}

console.log(matchEmail("ALIAS"));