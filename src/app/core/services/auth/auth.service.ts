import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { idKey, tokenKey } from '../../constants/general';
import { IApiResponse } from '../../interfaces/api/api';
import { apisList } from '../../constants/aips';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private user = new BehaviorSubject<any>({});
  user$ = this.user.asObservable();

  private isLogin = new BehaviorSubject<boolean>(false);
  userIsLogin$ = this.isLogin.asObservable();

  private profile = new BehaviorSubject<any>({});
  profile$ = this.profile.asObservable();

  setLogin(login: boolean) {
    this.isLogin.next(login);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(tokenKey);
    return !!token;
  }

  setToken(token: string): void {
    localStorage.setItem(tokenKey, token);
  }
  setId(id: string): void {
    localStorage.setItem(idKey, id);
  }

  getId(): string {
    return localStorage.getItem(idKey) || '';
  }

  userLogin(user: any) {
    this.user.next(user);
    this.isLogin.next(true);
    this.setToken(user.access_token);
    this.setId(user.id);
    this.router.navigate(['/']);
  }

  userLogout(): void {
    localStorage.removeItem(tokenKey);
    this.isLogin.next(false);
    this.user.next(null);
    this.router.navigate(['/login-page']);
  }

  getToken(): string {
    return localStorage.getItem(tokenKey) || '';
  }

  removeToken(): void {
    localStorage.removeItem(tokenKey);
    this.router.navigate(['/login-page']);
    localStorage.removeItem('profile');
  }

  setProfile(profile: any) {
    this.profile.next(profile);
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  getProfile() {
    return JSON.parse(localStorage.getItem('profile') || '{}');
  }

  login(data: any): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(
      environment.apiUrl + apisList.auth.login,
      data
    );
  }

  verifyCode(data: any): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(
      environment.apiUrl + apisList.auth.verifyCode,
      data
    );
  }

  resetPassword(data: any): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(
      environment.apiUrl + apisList.auth.resetPassword,
      data
    );
  }

  checkUser(id: any): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(
      environment.apiUrl + apisList.auth.checkStudent,
      id
    );
  }

  register(data: any): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(
      environment.apiUrl + apisList.auth.register,
      data
    );
  }
}
