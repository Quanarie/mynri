import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Payment} from "./payment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentUrl = environment.domain + 'payments';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.paymentUrl);
  }
}
