import { Injectable } from "@angular/core"
import type { HttpClient } from "@angular/common/http"
import type { Observable } from "rxjs"
import type { Mission } from "../models/mission.model"

@Injectable({
  providedIn: "root",
})
export class SpacexService {
  private apiUrl = "https://api.spacexdata.com/v3/launches"

  constructor(private http: HttpClient) {}

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.apiUrl)
  }
}

