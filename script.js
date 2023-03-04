let arr = [12,16,2,5,7,16,23,78,3,56]

function arraySum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        }
    console.log(sum);
    }
    arraySum(arr);