import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get token(){
    return localStorage.getItem(environment.TOKEN)
  }

  hasToken(){
    const token =localStorage.getItem(environment.TOKEN)
    return !!token;
  }

  logout(){
    localStorage.clear()
  }

  setToken(token:any){
    if(token){
      localStorage.setItem(environment.TOKEN, token)
    }
  }

  baseUrl: string = environment.AUTH_URL

  constructor(private _http: HttpClient) {
  }

  login(loginInfo: FormData) {
    return this._http.post(this.baseUrl + environment.LOGIN_URL, loginInfo)
  }

  register(userInfo: FormData) {
    return this._http.post(this.baseUrl , userInfo)
  }
}
