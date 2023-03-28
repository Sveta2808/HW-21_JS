const element = document.getElementById('item');

let arr = [12, 16, 2, "tea", 7, 16, 23, "coffee", 3, 56];



function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i]) == true) { continue; }
        else {
            sum += arr[i];
        }
    
    }
    const li = document.createElement('li');
    li.textContent = sum;
    element.appendChild(li);

    alert(sum);
}

arraySum(arr);



function arrayMax_Min(arr) {
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
    const li_2 = document.createElement('li_2');
    const li_3 = document.createElement('li_3');
    li_2.textContent = min;
    li_3.textContent = max;
    element.appendChild(li_2);
    element.appendChild(li_3);

    alert("min = " + min + ", max = " + max);
}

arrayMax_Min(arr);


//element.innerHTML= '<li> item 1 </li>';