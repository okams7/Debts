export class Transaction {
    _transaction;
    _fromTo;
    _amount;
    _status;
    constructor(_transaction, _fromTo, _amount, _status) {
        this._transaction = _transaction;
        this._fromTo = _fromTo;
        this._amount = _amount;
        this._status = _status;
    }
    get transaction() {
        if (this._transaction == "creditor")
            return "دائن";
        return "مدين";
    }
    get amount() {
        if (this._transaction == "creditor")
            return this._amount;
        return -this._amount;
    }
    format() {
        if (this._transaction == "creditor")
            return `قمت بإدانة ${this._fromTo} مبلغ : ${this._amount} JD , الحالة: ${this._status}`;
        return `قمت بالاستدانة من ${this._fromTo} مبلغ : ${this._amount} JD , الحالة: ${this._status}`;
    }
}
