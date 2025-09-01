const details = ["+200", "-100", "+146", "+167", "-2900"]
vat=1.17

let transactions=(details)=>{
        for (let detail in details){
                detail=parseInt(detail)*vat
}}
console.log(transactions)

let bankAmount=5000
console.log(bankAmount)

let expenses=(bankAmount,details)=>{
        for (let detail in details){
                bankAmount=bankAmount+detail
        }
}
