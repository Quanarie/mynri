import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tag} from "../tag/tag";
import {Warning} from "./warning";

@Injectable({
  providedIn: 'root'
})
export class WarningService {

  private warningUrl = environment.domain + 'warnings';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Warning[]> {
    return this.http.get<Warning[]>(this.warningUrl);
  }

}
