import { Component } from '@angular/core';
import { Observable, from, observable } from 'rxjs';
import { Customer } from './models/customer';
import { select, Store } from '@ngrx/store';
import { CustomerAdd, CustomerDelete, CustomerEdit } from './stores/customer.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-learning';

  customers: Customer[];

  constructor(private store: Store<{ 'cus': Customer[] }>, private store2: Store<Customer[]>) {

    store2.subscribe(y => {
      let s = 1;
      this.customers = y['customers'];
    });
  }

  public AddCustomer(customerName: string): void {
    this.store2.dispatch(new CustomerAdd(new Customer(customerName)))
  }

  public removeCustomer(i : number):void{
    this.store2.dispatch(new CustomerDelete(i));
  }

  public editCustomer(name: string):void{
    
    this.store2.dispatch(new CustomerEdit(new Customer(`${name}-aaaa`)));
  }

}
