import {Action} from '@ngrx/store';
import { Customer } from '../models/customer';

export enum CustomerActionTypes {
    Add = 'Customer Add',
    Delete = 'Customer Delete'
}

export class ActionEx implements Action {
    readonly type: CustomerActionTypes;
    payload: Customer | number;
}

export class CustomerAdd implements ActionEx {
    type: CustomerActionTypes.Add;

    constructor(public payload: Customer) {

    }
}

export class CustomerDelete implements ActionEx {
    type: CustomerActionTypes.Delete;

    constructor(public payload: number) {

    }
}
