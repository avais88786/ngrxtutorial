import { Action } from '@ngrx/store';
import { Customer } from '../models/customer';

export enum CustomerActionTypes {
    Add = 'Customer Add',
    Delete = 'Customer Delete',
    Edit = 'Customer Edit'
}

export class ActionEx implements Action {
    readonly type;
    payload: Customer | number;
}

export class CustomerAdd implements ActionEx {
    type: CustomerActionTypes.Add;

    constructor(public payload: Customer) {
        this.type = CustomerActionTypes.Add;
    }
}

export class CustomerDelete implements ActionEx {
    type: CustomerActionTypes.Delete;

    constructor(public payload: number) {
        this.type = CustomerActionTypes.Delete;
    }
}

export class CustomerEdit implements ActionEx {
    type: any; 
    constructor(public payload: Customer){
        this.type = CustomerActionTypes.Edit;
    }


}
