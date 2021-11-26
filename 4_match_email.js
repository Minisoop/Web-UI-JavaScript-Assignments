function matchEmail(emailIn){
    let mailPattern = /^[a-zA-Z0-9!#\$%&'\*+\-\/=\?\^_`{\|}~]+(\.[a-zA-Z0-9!#\$%&'\*+\-\/=\?\^_`{\|}~]+)*@([a-zA-Z0-9]+([a-zA-Z0-9])\.)+[a-zA-Z0-9]+$/;
    return mailPattern.test(emailIn);
}

//                                                                         expected | actual
console.log("my.email@email.ac.uk - " + matchEmail("my.email@email.ac.uk")); //true | true
console.log("my.email@email.ac.uk - " + matchEmail("my.email@email.acuk.")); //false | false
console.log("my.email@email.com - " + matchEmail("my.email@email.com")); //true | true
console.log(".myemail@email.com - " + matchEmail(".myemail@email.com")); //false | true
console.log("myemail.@email.com - " + matchEmail("myemail.@email.com")); //false | false
console.log("myemail@email - " + matchEmail("my.email@email")); //false | false
console.log("myemail.com - " + matchEmail("my.email.com")); //false | false
