let arr = [12, 16, 2, "tea", 7, 16, 23, "coffee", 3, 56];



function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i]) == true) { continue; }
        else {
            sum += arr[i];
        }
    }
    alert(sum);
}

arraySum(arr);

let min = null;
let max = null;
for (let i = 0, len = arr.length; i < len; ++i) {
    if (isNaN(arr[i]) == true) { continue; }
    else {
        let elem = arr[i];
        if (min === null || min > elem) min = elem;
        if (max === null || max < elem) max = elem;
    }
}
alert("min = " + min + ", max = " + max);


function makeLine(length) {
    let line = '#';
    for (let i = 1; i < length; i++) {
        line += '#';
    }
    return line;
}

for (let i = 1; i <= 5; i++) {
    console.log(makeLine(i));
}
