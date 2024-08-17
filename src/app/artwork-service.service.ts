import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ArtworkData, PhotographerData} from "./PhotographerData";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArtworkServiceService {

  baseUrl: string = environment.PHOTOGRAPHER_URL

  constructor(private _http: HttpClient) { }

  getPhotographerArtwork(artworkId: string,photographerId:string): Observable<ArtworkData> {
    return this._http.get<ArtworkData>(this.baseUrl + environment.FORWARD_SLASH + photographerId+environment.ARTWORK_BACKEND_URL+artworkId)
  }

  getAllPhotographerArtwork(photographerId: string,offset: number, limit: number): Observable<PhotographerData[]> {
    console.log(this.baseUrl+environment.FORWARD_SLASH+photographerId+environment.ARTWORK_WITH_OFFSET_BACKEND_URL + offset + environment.LIMIT_BACKEND_URL + limit)
    return this._http.get<PhotographerData[]>(this.baseUrl+environment.FORWARD_SLASH+photographerId+environment.ARTWORK_WITH_OFFSET_BACKEND_URL + offset + environment.LIMIT_BACKEND_URL + limit)
  }

  addPhotographerArtwork(photographerId: string,artwork: FormData) {
    return this._http.post(this.baseUrl+photographerId+environment.ARTWORK_NO_FORWARD_SLASH_BACKEND_URL, artwork)
  }

  deletePhotographerArtwork(artworkId: string,photographerId:string): Observable<ArtworkData> {
    console.log(this.baseUrl + photographerId+environment.ARTWORK_BACKEND_URL+artworkId)
    return this._http.delete<ArtworkData>(this.baseUrl + photographerId+environment.ARTWORK_BACKEND_URL+artworkId)
  }

  updatePhotographerArtwork(artworkId: string,photographerId:string,artwork: FormData): Observable<ArtworkData> {
    console.log(this.baseUrl + photographerId+environment.ARTWORK_BACKEND_URL+artworkId)
    return this._http.put<ArtworkData>(this.baseUrl + photographerId+environment.ARTWORK_BACKEND_URL+artworkId,artwork)
  }
}
