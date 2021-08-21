let s = prompt("Nhập vào mảng các số nguyên");
let arr = s.split(" ");
let Max = 0;
for(let i = 0 ; i < arr.length - 1; i++){
    if(arr[i] * arr[i+1] > Max){
        Max = arr[i] *arr[i+1];
    }
}
console.log(Max);