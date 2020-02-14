import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './models/customer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-learning';

  customers: Observable<Customer[]>;

  constructor(private store: Store<Customer[]>) {
    
    this.customers = store

  }


}
