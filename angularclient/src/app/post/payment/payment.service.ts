import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GameSystem} from "./game-system";

@Injectable({
  providedIn: 'root'
})
export class GameSystemService {

  private gameSystemsUrl = environment.domain + 'gameSystems';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<GameSystem[]> {
    return this.http.get<GameSystem[]>(this.gameSystemsUrl);
  }
}
