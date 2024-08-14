import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PhotographerData} from "./PhotographerData";

@Injectable({
  providedIn: 'root'
})
export class ArtworkServiceService {

  baseUrl: string = "http://localhost:3434/api/photographer/"

  constructor(private _http: HttpClient) { }

  getPhotographer(id: string): Observable<PhotographerData> {
    return this._http.get<PhotographerData>(this.baseUrl + "/" + id)
  }

  getAllPhotographerArtwork(photographerId: string,offset: number, limit: number): Observable<PhotographerData[]> {
    console.log(this.baseUrl+"/"+photographerId+"/artwork?offset=" + offset + "&&limit=" + limit)
    return this._http.get<PhotographerData[]>(this.baseUrl+"/"+photographerId+"/artwork?offset=" + offset + "&&limit=" + limit)
  }

  addPhotographerArtwork(photographerId: string,artwork: FormData) {
    return this._http.post(this.baseUrl+photographerId+"/artwork", artwork)
  }

  deletePhotographer(id: string){
    return this._http.delete(this.baseUrl+"/"+id)
  }
}
