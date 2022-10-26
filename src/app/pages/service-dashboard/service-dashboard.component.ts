import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-service-dashboard',
  templateUrl: './service-dashboard.component.html',
  styleUrls: ['./service-dashboard.component.css'],
})
export class ServiceDashboardComponent implements OnInit {
  customerTestData = {
    cust_id: '000004',
    cust_first_name: 'Jeanne',
    cust_last_name: 'Doe',
    cust_phone: '555-555-5555',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.http.post<{ name: string }>(
    //   'https://service-management-app-14514-default-rtdb.firebaseio.com/customers.json',
    //   this.customerTestData
    // ).subscribe((responseData) => {
    //   console.log(responseData);
    // });

    this.http
      .get<{ [key: string]: Customer }>(
        'https://service-management-app-14514-default-rtdb.firebaseio.com/customers.json'
      )
      .pipe(
        map((responseData) => {
          const customersArray: Customer[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              customersArray.push({ ...responseData[key], fb_id: key });
            }
          }
          return customersArray;
        })
      )
      .subscribe((customersData) => {
        for (let customer of customersData) {
          console.log(customer);
        }
      });
  }
}
