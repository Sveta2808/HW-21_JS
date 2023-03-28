const myElement = document.getElementById('item');

let arr = [-12, -16, 2, "tea", 7, 16, 63, "coffee", 3, -43];


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
    myElement.appendChild(li);

    if (sum >= 0) {
        li.style.color = 'green';
    }
    else {
        li.style.color = 'red';
    }

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
    const li_2 = document.createElement('li');
    li_2.textContent = min;
    myElement.appendChild(li_2);


    const li_3 = document.createElement('li');
    li_3.textContent = max;
    myElement.appendChild(li_3);

    if (min < 0) {
        li_2.style.opacity = '0.2';

    } else if (min < 50) {
        li_2.style.opacity = '0.5';

    }
    else if (min < 100) {
        li_2.style.opacity = '0.7';
    
    } else li_2.style.opacity = '1';

    if (max < 0) {
        li_3.style.opacity = '0.2';

    } else if (max < 50) {
        li_3.style.opacity = '0.5';

    }
    else if (max < 100) {
        li_3.style.opacity = '0.7';
    
    } else li_3.style.opacity = '1';
}

arrayMax_Min(arr);

