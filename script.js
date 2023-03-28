
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



Accumulator.prototype.clear = function () {

    return this.startingValue

}

function CancelableAccumulator() {
    
    Accumulator.call(this,startingValue);

}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype)


let cancelableAccumulator = new CancelableAccumulator();

cancelableAccumulator.clear();
alert(cancelableAccumulator.value);




