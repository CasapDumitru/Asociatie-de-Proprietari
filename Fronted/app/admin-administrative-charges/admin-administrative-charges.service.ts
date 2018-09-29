import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import { Tax } from './../interfaces/tax';
import { retry } from "rxjs/operator/retry";
import { Constants } from "./../shared/constants";

@Injectable()


export class AdminAdministrativeService {
    
      constructor(private http: Http) { }

      taxes: Tax[] = [
            {
                  Id: 1,
                  Name: 'Tax 1',
                  Price: 20
            },
            {
                  Id: 2,
                  Name: 'Tax 2',
                  Price: 100
            },
            {
                  Id: 3,
                  Name: 'Tax 3',
                  Price: 120
            },
            {
                  Id: 4,
                  Name: 'Tax 4',
                  Price: 50
            },
            {
                  Id: 5,
                  Name: 'Tax 5',
                  Price: 50
            }
      ];

      GetAllTaxes() {
            return this.http.get(Constants.API_ENDPOINT + 'Tax')
                  .map(res => res.json()).toPromise(); 
           // return this.taxes;
      }

      AddTax(tax: Tax) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = JSON.stringify(tax);

            return this.http.post(Constants.API_ENDPOINT + 'Tax', body, options).map(res => res.json()).toPromise();
            /*let copy = Object.assign({}, tax);
            this.taxes.push(copy);
            return copy;*/
      }

      DeleteTax(id: number) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this.http.delete(Constants.API_ENDPOINT + 'Tax/' + id,options)
                  .map(res => res.json()).toPromise();
      }
}
