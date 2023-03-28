
function Accumulator(startingValue) {
    this.startingValue = startingValue;

    this.increment = function () {
        this.startingValue = this.startingValue + 1;
    };
    this.decrement = function () {
        this.startingValue = this.startingValue - 1;
    };

}

let acc = new Accumulator(5);

acc.increment();
alert(acc.startingValue);
acc.increment();
alert(acc.startingValue);

acc.decrement();
alert(acc.startingValue);
acc.decrement();
alert(acc.startingValue);


let cancelableAccumulator = new CancelableAccumulator();

CancelableAccumulator.prototype = Object.create(Accumulator.prototype) 

function CancelableAccumulator () {
    this.clear = this.startingValue;
    return this.clear;

}

cancelableAccumulator.clear();
alert(cancelableAccumulator.clear);



  
