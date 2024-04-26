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



// let person = {
//     firstName: 'Ilyos',
//     lastName: 'Suyunov',
//     greet: function () {
//         console.log(person.firstName);
//         console.log(person.lastName);
//     }

// };
// console.log(person.greet())











//////////////////////////////////////////////////////////////////////
///////////// HOMEWORK //////////////////////////////////////////////



// Object.keys(), Object.values(), va Object.entries() JavaScriptda obyektni tarkibiy ma'lumotlarini olish uchun ishlatiladi.

// Object.keys() obyektning barcha kalitlari (property) ro'yxatini qaytaradi.
// Object.values() obyektning barcha qiymatlari (values) ro'yxatini qaytaradi.
// Object.entries() esa obyektning kalitlar va ularning mos qiymatlari yig'indisini qaytaradi.



// Masalan:


                        // let obj = { 
                        //   name: 'John', 
                        //   age: 30, 
                        //   city: 'New York' 
                        // };



// Object.keys(obj) '["name", "age", "city"]' ni qaytaradi. Object.values(obj) ["John", 30, "New York"] ni qaytaradi. Object.entries(obj) [["name", "John"], ["age", 30], ["city", "New York"]] ni qaytaradi.








// 1. Ob'ekt argumentlarining o'lchamlarini (width(kenglik), (length)uzunlik, (height)balandlik prooperty'larni o'z ichiga oladi) oladigan va qutining umumiy hajmini qaytaradigan funksiya yarating:
//   Formula: width * length * height

//   volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

//   volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

//   volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30



                    // function volumeOfBox(box) {
                    //     let { width, length, height } = box;
                        
                    //     let volume = width * length * height;
                        
                    //     return volume;
                    // }
                    
                    // console.log(volumeOfBox({ width: 2, length: 5, height: 1 })); 
                    // console.log(volumeOfBox({ width: 4, length: 2, height: 2 })); 
                    // console.log(volumeOfBox({ width: 2, length: 3, height: 5 })); 
  


// 2. Destructuring  

//   arr = [1, 2, 3, 4, 5, 6, 7, 8]
//   first = arr[0]
//   second = arr[1]
//   third = arr[2]
//   other = arr.slice(3)

//   console.log(first) ➞ outputs 1
//   console.log(second) ➞ outputs 2
//   console.log(third) ➞ outputs 3
//   console.log(other) ➞ outputs [4, 5, 6, 7, 8]

//   Yuqoridagu yechim uzun va zerikarlik. Uni orniga qiymatlarni ozgaruvchilarga bir qatorni ozida ozlashtiradigan code yozing.


                    // let arr = [1, 2, 3, 4, 5, 6, 7, 8];
                    // let [first, second, third, ...other] = arr;

                    // console.log(first); 
                    // console.log(second); 
                    // console.log(third);
                    // console.log(other); 



// 3. Raqamlar yoki harflar arrayini oladigan va hamma elementlarni 1ta string'ga toplaydigan function yarating:

//   arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

//   arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

//   arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"


                    // function arrayToString(arr) {
                    //     return arr.join('');
                    // }
                    
                    // console.log(arrayToString([1, 2, 3, 4, 5, 6]));
                    // console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); 
                    // console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])); 
                    


// 4. Array va string qabul qiladigan, va string arrayda joylashgan index'ni qaytaradigan function yarating:

//   findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

//   findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

//   findIndex(["a", "g", "y", "d"], "d") ➞ 3

//   findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0



                    // function findIndex(arr, str) {
                    //     return arr.indexOf(str);
                    // }
                    
                    // console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
                    // console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")); 
                    // console.log(findIndex(["a", "g", "y", "d"], "d")); 
                    // console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); 
                    

// 5. Agar string'da boʻsh joy boʻlsa, true, bolmasa false qaytaradigan funksiya yarating:

//   hasSpaces("hello") ➞ false

//   hasSpaces("hello, world") ➞ true

//   hasSpaces(" ") ➞ true

//   hasSpaces("") ➞ false

//   hasSpaces(",./!@#") ➞ false



                    // function hasSpaces(str) {
                    //     return str.includes(' ');
                    // }
                    
                    // console.log(hasSpaces("hello")); 
                    // console.log(hasSpaces("hello, world"));
                    // console.log(hasSpaces(" ")); 
                    // console.log(hasSpaces("")); 
                    // console.log(hasSpaces(",./!@#")); 
                    


// 6. Agar berilgan argumentni oxirgi xarfi "n" bolsa, true, bolmasa false qaytaradigan function yarating:

//   isLastCharacterN("Aiden") ➞ true

//   isLastCharacterN("Piet") ➞ false

//   isLastCharacterN("Bert") ➞ false

//   isLastCharacterN("Dean") ➞ true



                    // function isLastCharacterN(str) {
                    //     let length = str.length;
                        
                    //     let lastChar = str[length - 1];
                    
                    //     return lastChar === 'n';
                    // }
                    
                    // console.log(isLastCharacterN("Aiden")); 
                    // console.log(isLastCharacterN("Piet")); 
                    // console.log(isLastCharacterN("Bert")); 
                    // console.log(isLastCharacterN("Dean")); 
                    


// 7. String'ni qabul qiladigan va uning ko‘plik yoki birlik ekanligini aniqlaydigan funksiya yarating. Ko‘plik so‘zi “s” harfi bilan tugaydigan so‘zdir:

//   isPlural("changes") ➞ true

//   isPlural("change") ➞ false

//   isPlural("dudes") ➞ true

//   isPlural("magic") ➞ false


                    // function isPlural(str) {
                    //     let lastChar = str.charAt(str.length - 1);
                    
                    //     return lastChar === 's';
                    // }
                    // console.log(isPlural("changes")); 
                    // console.log(isPlural("change")); 
                    // console.log(isPlural("dudes")); 
                    // console.log(isPlural("magic")); 
                    


// 8. String'ni qabul qiladigan va birinchi va oxirgi harf(character) larni qoshib qaytaradigan function yarating:

//   firstLast("ganesh") ➞ "gh"

//   firstLast("kali") ➞ "ki"

//   firstLast("shiva") ➞ "sa"

//   firstLast("vishnu") ➞ "vu"

//   firstLast("durga") ➞ "da"



                    // function firstLast(str) {
                    //     let firstChar = str.charAt(0);
                    //     let lastChar = str.charAt(str.length - 1);
                    
                    //     return firstChar + lastChar;
                    // }
                    
                    // console.log(firstLast("ganesh")); 
                    // console.log(firstLast("kali"));
                    // console.log(firstLast("shiva")); 
                    // console.log(firstLast("vishnu")); 
                    // console.log(firstLast("durga")); 
                    


// 9. String'lashgan sonlardan iborat array'ni qabul qiladigan, va ularni oddiy songa ozgartiradigan function yarating: 

//   toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

//   toNumberArray(["91", "44"]) ➞ [91, 44]

//   toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]



                    // function toNumberArray(arr) {
                    //     return arr.map(parseFloat);
                    // }
                    
                    // console.log(toNumberArray(["9.4", "4.2"])); 
                    //     console.log(toNumberArray(["91", "44"])); 
                    // console.log(toNumberArray(["9.5", "8.8"])); 



// 10. String va son qabul qiladigan va string son nechchi bolsa, shunga martda takrorlaydigan function yarating. P.S: agar 1-argument string bolmasa, "String emas!" degan javob qaytarsin:

//   repeatString("Mubashir", 2) ➞ "MubashirMubashir"

//   repeatString("Matt", 3) ➞ "MattMattMatt"

//   repeatString(1990, 7) ➞ "String emas!"



                    // function repeatString(str, num) {
                    //     if (typeof str !== 'string') {
                    //     return "String emas!";
                    //     }
                    
                    //     let repeatedString = '';
                    
                    //     for (let i = 0; i < num; i++) {
                    //     repeatedString += str;
                    //     }
                    
                    //     return repeatedString;
                    // }
                    
                    // console.log(repeatString("Mubashir", 2)); 
                    // console.log(repeatString("Matt", 3)); 
                    // console.log(repeatString(1990, 7)); 













