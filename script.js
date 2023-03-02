let first_num = prompt("Enter the first number");
let second_num = prompt("Enter the second number");
let sum = Number(first_num) + Number(second_num)
let difference = first_num - second_num
let division = second_num / first_num
let multiplication = first_num * second_num
let warn_message = ("Are you sure you want to continue?")

if (first_num === '' || second_num === '')
    alert("Cannot enter");
else {
    alert(sum)
    if (Number(first_num) < Number(second_num)) {
        let confirmation = confirm(warn_message)
        if (confirmation) {
            alert(difference)
            alert(multiplication)
            if (Number(first_num) === 0) alert("error")
            else {
                alert(division)
            }
        }
        else {
            alert(sum)
            alert(division)
            alert(difference)
            alert(multiplication)
        }
    }
}
