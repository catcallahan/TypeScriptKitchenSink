var myName: string = 'Cat';
const statesUSA: number = 50;
var addedNum: number = 5 + 4;
/* created  variables for my name, the sum of 5 +4 and the number of states in the USA */

function sayHello(greeting : string) {
    alert(greeting)
};
sayHello("Hello World!");


function checkAge(name : string, age : number) {
    if (age < 21) {
        alert('Sorry ' + name + ", you are not old enough to view this page!");
    }
};

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);



var favVeg = ['Carrots', 'Asparagus', 'Corn'];

for (var i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i]);
};

interface friends {
    name: string,
    age : number
}

var friends : Array<friends> = [
{
    name: "Cat",
    age: 30
}, 
{
    name: "John",
    age: 29
},
{
    name: "Mollie",
    age: 19
},
{
    name: 'David',
    age: 14
},
{
    name: 'Brad',
    age: 30
}]

for (var i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age)
}

function getLength(word : string) {
    if (word.length % 2 == 0) {
        console.log('The World is nice and even!')
    } else {
        console.log('The world is an odd place!')
    }

}
getLength('Hello World!')