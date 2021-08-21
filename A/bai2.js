let s = prompt("Nhập vào mảng các số nguyên");
let arr = s.split(" ");
let nhom1 = 0;
let nhom2 = 0;
for(let i = 0; i < arr.length;i++){
    if(i%2==0){
        nhom1 += Number(arr[i]);
    }
    else nhom2 += Number(arr[i]);
}
let result = [];
result.push(nhom1);
result.push(nhom2);
console.log(result);