// Method 1
string=[];
for (i=0;i<6;i++) {
    string.push("*");
    console.log(string)
}
// Method 2: Nested for loops
// Only put stars in array cells [i,j] where j is less than or equal to i
let arr = Array.from({ length: 6 }, () => Array(6).fill(""));
console.log(arr);
for (i=0;i<6;i++) {
    for (j=0;j<6;j++) {
        if (j<=i) {
            arr[i][j]="*"
        }
    } 
}      
arr.forEach(row => {
    console.log(row.join(" "));
});