import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users: User[] = [];

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  user$ = new BehaviorSubject("");
  userState = this.user$.asObservable();
  apiHost: string = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) {
    this.user$.next(this.getRole());
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') != null;
  }

  getRole(): any {
    if (this.isLoggedIn()) {
      const accessToken: any = localStorage.getItem('user');
      const helper = new JwtHelperService();
      return helper.decodeToken(accessToken).role;
    }
    return null;
  }

  getRoleName(): any {
    if (this.isLoggedIn()) {
      const accessToken: any = localStorage.getItem('user');
      const helper = new JwtHelperService();
      return helper.decodeToken(accessToken).role.name;
    }
    return null;
  }

  getUserId(): any {
    if (this.isLoggedIn()) {
      const accessToken: any = localStorage.getItem('user');
      const helper = new JwtHelperService();
      return helper.decodeToken(accessToken).id;
    }
    return null;
  }

  setUser(): void {
    this.user$.next(this.getRole());
  }

  getUserByID(): Observable<any> {
    var userID = this.getUserId();
    return this.httpClient.get<any>(
      this.apiHost + 'api/user/getUser/' + userID,
      {
        headers: this.headers,
      }
    );
  }
}
