import {Component, OnInit} from '@angular/core';
import {PhotographerService} from '../photographer.service';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PhotographerData} from '../PhotographerData'
import {ArtworksComponent} from "../artworks/artworks.component";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-photographer',
  standalone: true,
  imports: [CommonModule, ArtworksComponent, NgOptimizedImage],
  templateUrl: './photographer.component.html',
  styleUrl: './photographer.component.css'
})
export class PhotographerComponent implements OnInit {
  isLoggedIn:boolean= false;
  photographer: PhotographerData;

  constructor(private photographerService: PhotographerService, private _router: ActivatedRoute, private _routers: Router,private  _authService:AuthService) {
    this.photographer = new PhotographerData("", "", new Date(), "", [])
  }


  ngOnInit(): void {
    this.isLoggedIn = this._authService.hasToken()
    const id = this._router.snapshot.paramMap.get(environment.ID)
    if (id) {
      this.photographerService.getPhotographer(id).subscribe({
          next: photographer => {
            this.photographer = photographer;
            console.log(this.photographer.artworks)

          },
          error: err => {
          }
        }
      )
    }


  }

  goToAddArtworkPage(id: string) {
    this._routers.navigate([environment.PHOTOGRAPHER_ENDPOINT, id, environment.ARTWORK_ENDPOINT, environment.ADD_ENDPOINT])
  }

  goToUpdatePage(id: string) {
    this._routers.navigate([environment.PHOTOGRAPHER_ENDPOINT, id,environment.UPDATE_ENDPOINT])
  }

  deletePhotographer(id: string) {
    const deleteConfirmation = window.confirm(environment.PHOTOGRAPHER_DELETE_CONFIRMATION)
    if (deleteConfirmation) {
      this.photographerService.deletePhotographer(id).subscribe({
          next: response => {
            this._routers.navigate([environment.PHOTOGRAPHER_ENDPOINT])
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
}
