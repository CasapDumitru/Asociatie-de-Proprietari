import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';


@Injectable()


export class AdminMaintenanceSituationService {
    
      constructor(private http: Http) { }

      GetMaintenanceSituationPdf(month:number, year:number) {

      }

      GetMaintenanceSituationExcel(month:number, year:number) {
            
      }

      GetBalanceExpendituresPdf() {

      }

      GetBalanceExendituresExcel() {
            
      }
}