
export class Transaction {
    constructor(private _transaction: string,
        private _fromTo: string,
        private _amount: number,
        private _status: string) { }

    get amount(): number {
        if (this._transaction == "creditor")
            return this._amount
        return -this._amount
    }
    format(): string {
        if (this._transaction == "creditor")
            return `قمت بإدانة ${this._fromTo}
         مبلغ : ${this._amount} JD ,
          الحالة: ${this._status}`

        return `قمت بالاستدانة من
          ${this._fromTo}
         مبلغ : 
         ${this._amount} JD ,
          الحالة: ${this._status}`
    }
}