
function Accumulator(value) {
    this.value = value;

    this.increment = function () {
        this.value = +prompt('Adder', 0) + 1;
    };
    this.decrement = function () {
        this.value = +prompt('Reducer', 0) - 1;
    };

}

let acc = new Accumulator();

acc.increment();
alert(acc.value);
acc.increment();
alert(acc.value);

acc.decrement();
alert(acc.value);
acc.decrement();
alert(acc.value);


  
