import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { apisList } from '../constants/aips';
import { IApiResponse } from '../interfaces/api/api';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MasterDataService {
  constructor(private http: HttpClient) { }

  private cacheMap = new Map<string, BehaviorSubject<any | null>>();

  notificationCount:any = 0
  private _notificationCount = new BehaviorSubject<number>(0);

  public notificationCount$ = this._notificationCount.asObservable();
  incrementNotificationCount(amount: number = 1): void {
    const currentCount = this._notificationCount.value;
    this._notificationCount.next(currentCount + amount);
  }

  get currentNotificationCount(): number {
    return this._notificationCount.getValue();
  }

  resetNotificationCount(): void {
    this._notificationCount.next(0);
    localStorage.setItem('notifications', '0')
  }

  getData(
    target: keyof (typeof apisList)['masterData'],
    byModuleId: boolean = false
  ): Observable<IApiResponse> {
    if (!this.cacheMap.has(target)) {
      this.cacheMap.set(target, new BehaviorSubject<any | null>(null));
    }
    const cacheSubject = this.cacheMap.get(target)!;
    if (cacheSubject.getValue() !== null) {
      return cacheSubject.asObservable();
    }
    return this.http
      .get<IApiResponse>(
        environment.apiUrl +
        apisList.masterData[target] +
        (byModuleId ? `?module_id=${environment.moduleId}` : '')
      )
      .pipe(tap((data) => cacheSubject.next(data)));
  }

  getDataById(
    target: keyof (typeof apisList)['masterData'],
    id: number
  ): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      `${environment.apiUrl}${apisList.masterData[target]}/${id}`
    );
  }

  getMetaData(id: string): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      `${environment.apiUrl}${apisList.masterData.metaData}/${id}`
    );
  }

  getRecruitmentProcessStage(
    id: string,
    extra?: boolean
  ): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      `${environment.apiUrl}${apisList.masterData.recruitmentProcess}?stage=${id}${extra ? '&joining_dates=tuer' : ''}`);
  }

  applicationApproval(body: any): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(
      `${environment.apiUrl}${apisList.masterData.applicationApproval}`,
      body
    );
  }

  CvStore(body: any): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(
      `${environment.apiUrl}${apisList.masterData.CvStore}`,
      body
    );
  }

  getCountry(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      `${environment.apiUrl}${apisList.masterData.country}`
    );
  }

  getUmdfData(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      `${environment.apiUrl}${apisList.masterData.umdf}`
    );
  }

  umdfAnswers(body: any): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(
      `${environment.apiUrl}${apisList.masterData.umdfAnswers}`,
      body
    );
  }
  airTicket(body: any): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(
      `${environment.apiUrl}${apisList.masterData.airTicket}`,
      body
    );
  }

  // getLocalRecruitmentProcessStage(): Observable<IApiResponse> {
  //   return this.http.get<IApiResponse>(`${environment.apiUrl}${apisList.masterData.localRecruitmentProcess}`);
  // }

  // uploadFilesLocalProcess(body: any): Observable<IApiResponse> {
  //   return this.http.post<IApiResponse>(
  //     `${environment.apiUrl}${apisList.masterData.uploadFilesLocalProcess}`,
  //     body
  //   );
  // }

  // sharedDocument(candidateAppId: string): Observable<IApiResponse> {
  //   return this.http.get<IApiResponse>(`${environment.apiUrl}${apisList.masterData.sharedDocument}/${candidateAppId}`);
  // }

  // candaiteApps(): Observable<IApiResponse> {
  //   return this.http.get<IApiResponse>(`${environment.apiUrl}${apisList.masterData.candaiteApps}`);
  // }

  // private cacheProfile$: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
  // getProfile(): Observable<IApiResponse> {
  //   if (this.cacheProfile$.getValue()) {
  //     return this.cacheProfile$.asObservable();
  //   }
  //   return this.http.get<IApiResponse>(`${environment.apiUrl}${apisList.auth.profile}`).pipe(
  //     tap(data => this.cacheProfile$.next(data))
  //   );
  // }

  // recruitmentProcessShowById(stage: string, id: string,extra?: boolean): Observable<IApiResponse> {
  //   return this.http.get<IApiResponse>(`${environment.apiUrl}${apisList.masterData.recruitmentProcessShowById}?stage=${stage}&candidate_application_id=${id}${extra ? '&joining_dates=tuer' : ''}`);
  // }

  // candidateDocumentRequests(): Observable<IApiResponse> {
  //   return this.http.get<IApiResponse>(`${environment.apiUrl}${apisList.masterData.candidateDocumentRequests}`);
  // }

  // replayCandidateDocumentRequest(body: any): Observable<IApiResponse> {
  //   return this.http.post<IApiResponse>(`${environment.apiUrl}${apisList.masterData.replayCandidateDocumentRequest}`, body);
  // }
}
