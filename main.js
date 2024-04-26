// let info = {
//     name : "Ilyos",
//     age : 22
// }
// delete info.age
// info.age = 23
// info.surname = "Suyunov"
// info["likes palov"] = true
// // alert(info.name)
// // alert(info.age)
// console.log(info)


// let fruit = +prompt("meva nomini kiritng")

// let bag = {
//     [fruit]:5
// }
// console.log(bag)


// function createcat(name,age) {
//     return{
//         name,
//         age
//     }
    
// }



let person = {
    firstName: 'Ilyos',
    lastName: 'Suyunov',
    greet: function () {
        console.log(person.firstName);
        console.log(person.lastName);
    }

};
console.log(person.greet())