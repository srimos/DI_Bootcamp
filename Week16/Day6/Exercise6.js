const details = ["+200", "-100", "+146", "+167", "-2900"]
vat=1.17

let transactions=(details)=>{
        let result=[]
        for (let detail of details){
                result.push(parseInt(detail)*vat)
        }
        return result
}

var bankAmount=5000

let expenses=(bankAmount,transactions)=>{
        for (let t of transactions){
                bankAmount=bankAmount+t
        }
        return bankAmount
}

let newbankAmount=expenses(bankAmount,transactions(details));
console.log(newbankAmount)