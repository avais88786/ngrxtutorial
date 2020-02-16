import { ActionEx, CustomerActionTypes } from './customer.actions';
import { Customer } from '../models/customer';
export const initialState = [];

export function CustomerReducer(state = initialState, action: ActionEx): Customer[] {

    switch (action.type) {
        case CustomerActionTypes.Add:
            return [...state, action.payload];
        case CustomerActionTypes.Delete:
        return [
            ...state.slice(0, action.payload as number),
            ...state.slice((action.payload as number) + 1)
        ];
        case CustomerActionTypes.Edit:
            let itemIndex = (state as Customer[]).findIndex(x => x.name === (action.payload as Customer).name.replace('-aaaa',''));
            return [
                ...state.slice(0, itemIndex),
                action.payload,
                ...state.slice(itemIndex + 1)
            ];

        default:
            return state;
    }
}
