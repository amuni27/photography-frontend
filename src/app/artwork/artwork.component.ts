import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ArtworkServiceService} from "../artwork-service.service";
import {ArtworkData} from "../PhotographerData";
import {DatePipe, NgIf} from "@angular/common";
import {AuthService} from "../auth.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-artwork',
  standalone: true,
  imports: [
    DatePipe,
    NgIf
  ],
  templateUrl: './artwork.component.html',
  styleUrl: './artwork.component.css'
})
export class ArtworkComponent implements OnInit {
  isLoggedIn: boolean = false;
  artwork!: ArtworkData;
  id: any
  artworkId: any

  constructor(private _activatedRoute: ActivatedRoute, private _artworkService: ArtworkServiceService, private _routers: Router, private _authService: AuthService) {

  }

  ngOnInit(): void {
    this.isLoggedIn = this._authService.hasToken()
    this.id = this._activatedRoute.snapshot.paramMap.get(environment.ID)
    this.artworkId = this._activatedRoute.snapshot.paramMap.get(environment.ARTWORK_ID)
    if (this.id && this.artworkId) {
      this._artworkService.getPhotographerArtwork(this.artworkId, this.id).subscribe({
          next: artwork => {
            this.artwork = artwork;
            console.log(artwork)
          },
          error: err => {
            console.log(err)
          }
        }
      )
    }

  }

  deleteArtwork() {
    this.id = this._activatedRoute.snapshot.paramMap.get(environment.ID)
    this.artworkId = this._activatedRoute.snapshot.paramMap.get(environment.ARTWORK_ID)
    const deleteConfirmation = window.confirm(environment.DELETE_CONFIRMATION)
    if (deleteConfirmation) {
      this._artworkService.deletePhotographerArtwork(this.artworkId, this.id).subscribe({
          next: response => {
            this._routers.navigate([environment.PHOTOGRAPHER_ENDPOINT, this.id, environment.ARTWORK_ENDPOINT])
          },
          error: err => {
            alert(environment.CANNOT_DELETE_PHOTOGRAPH)
          },
          complete: () => {
          }
        }
      )
    }
  }

  editArtwork() {
    this._routers.navigate([environment.PHOTOGRAPHER_ENDPOINT, this.id, environment.ARTWORK_ENDPOINT, this.artworkId, environment.UPDATE_ENDPOINT])
  }


}
