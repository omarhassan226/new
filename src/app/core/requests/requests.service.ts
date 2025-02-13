import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../interfaces/api/api';
import { environment } from '../../../environments/environment';
import { apisList } from '../constants/aips';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  getData(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(environment.apiUrl + apisList.request.general)
  }

  getDataById(id: string): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(environment.apiUrl + apisList.request.general + `/${id}`)
  }
  getPositions(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(environment.apiUrl + apisList.position.general)
  }
  getCurrencies(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(environment.apiUrl + apisList.masterData.currencies)
  }
  getCitiesByCountry(countryId: string): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(environment.apiUrl + apisList.masterData.cities + `?country_id_2=${countryId}`)
  }
  create(data: any): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(environment.apiUrl + apisList.request.create, data)
  }
}
