import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotographerData } from './PhotographerData';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PhotographerService {
  baseUrl: string = environment.PHOTOGRAPHERS_URL

  constructor(private _http: HttpClient) { }

  getPhotographer(id: string): Observable<PhotographerData> {
    return this._http.get<PhotographerData>(this.baseUrl + environment.FORWARD_SLASH + id)
  }

  getAllPhotographer(offset: number, limit: number): Observable<PhotographerData[]> {
    console.log(this.baseUrl + environment.OFFSET_BACKEND_URL + offset + environment.LIMIT_BACKEND_URL + limit)
    return this._http.get<PhotographerData[]>(this.baseUrl + environment.OFFSET_BACKEND_URL + offset + environment.LIMIT_BACKEND_URL + limit)
  }

  addPhotographer(photographer: FormData) {
    // console.log(photographer)
    return this._http.post(this.baseUrl, photographer)
  }

  deletePhotographer(id: string){
    return this._http.delete(this.baseUrl+environment.FORWARD_SLASH+id)
  }

  updatePhotographer(id: string,updatedData:FormData){
    return this._http.put(this.baseUrl+environment.FORWARD_SLASH+id,updatedData)
  }



}
