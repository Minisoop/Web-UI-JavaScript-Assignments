function matchEmail(emailIn){
    let mailPattern = /[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+(\.[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+)*@+[a-zA-Z0-9]+\.+[a-zA-Z0-9]/;
    return mailPattern.test(emailIn);
}

console.log(matchEmail("memail.com"));
console.log(matchEmail("my.mail727@gmail.com"));
console.log(matchEmail(".memail@gmail.com"));
console.log(matchEmail(".memail@uni.ac.uk"));