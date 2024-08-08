import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotographerData } from './PhotographerData';

@Injectable({
  providedIn: 'root'
})
export class PhotographerService {
  baseUrl: string = "http://localhost:3434/photographer"

  constructor(private _http: HttpClient) { }

  getPhotographer(id: string): Observable<PhotographerData> {
    return this._http.get<PhotographerData>(this.baseUrl + "/" + id)
  }

  getAllPhotographer(offset: number, limit: number): Observable<PhotographerData[]> {
    return this._http.get<PhotographerData[]>(this.baseUrl + "?offset=" + offset + "&& limit=" + limit)
  }

  addPhotographer(photographer: PhotographerService) {
    return this._http.post(this.baseUrl, photographer)
  }

  deletePhotographer(id: string){
    return this._http.delete(this.baseUrl+"/"+id)
  }


}
