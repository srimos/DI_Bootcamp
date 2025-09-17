class BankAccount {
    constructor(first_name, last_name, type_of_account) {
        this.first_name = first_name
        this.last_name = last_name
        this.type_of_account = type_of_account
        this.balance = 0
    }

    deposit(amount) {
        this.balance = this.balance + amount
    }

    withdraw(amount) {
        if (amount<=this.balance){
        this.balance = this.balance - amount
        } else {
        console.log("Insufficient funds!")
        }
    }

    checkBalance(){
        console.log('Hello '+this.first_name+'. You currently have '+this.balance)
    }
}

yajnee = new BankAccount("Yajnee","Ahota", 'Savings')
yajnee.deposit(2000)
yajnee.withdraw(5000)
yajnee.checkBalance()