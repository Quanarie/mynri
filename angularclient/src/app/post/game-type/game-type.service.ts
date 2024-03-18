import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GameType} from "./game-type";

@Injectable({
  providedIn: 'root'
})
export class GameTypeService {

  private gameTypeUrl = environment.domain + 'gameTypes';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<GameType[]> {
    return this.http.get<GameType[]>(this.gameTypeUrl);
  }
}
