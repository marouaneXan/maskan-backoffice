import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin, CurrentAdmin } from 'src/app/features/admin/interfaces/admin';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, catchError, Observable, of, switchMap, } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.tokenService.loggedIn())
  authStatus = this.loggedIn.asObservable()
  changeStatus(value: boolean) {
    this.loggedIn.next(value)
  }
  constructor(private http: HttpClient, private tokenService: TokenService) { }
  signIn(credentials: Admin): Observable<any> {
    return this.http.post<any>(environment.baseApi + '/admin/auth/login', credentials)
  }
  signUp(credentials: CurrentAdmin): Observable<any> {
    return this.http.post<any>(environment.baseApi + '/admin/auth/createAccount', credentials)
  }

}
