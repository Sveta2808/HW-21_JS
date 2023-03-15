
const obj_1 = {};
function isEmptyObj(object) {
    for (let key in object) {
        return false;
    }
    return true;
}

console.log(isEmptyObj(obj_1));


const user = {
    name: 'Софія',
    age: 20,
    sayHello: function () {
        console.log('Привіт, я ' + this.name + ' мені ' + this.age + ' років');
    }
};
user.sayHello();

let calculator = {
    ask() {
        this.number1 = +prompt('number1?');
        this.number2 = +prompt('number2?');
    },
    sum() {
        return this.number1 + this.number2;
    },

    mul() {
        return this.number1 * this.number2;
    }
};
calculator.ask();
alert(calculator.sum());
alert(calculator.mul());
