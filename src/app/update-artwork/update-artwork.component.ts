import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ArtworkServiceService} from "../artwork-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PhotographerService} from "../photographer.service";
import {PhotographerData} from "../PhotographerData";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-update-artwork',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-artwork.component.html',
  styleUrl: './update-artwork.component.css'
})
export class UpdateArtworkComponent implements OnInit{
  file!: File;
  id!: any;
  artworkId!: any;
  isCheckedVisible: boolean = false;
  isLoggedInErrorVisible: boolean = false
  errorMessage: string = ""
  artwork={
    title:"",
    createdYear:new Date(),
    picture_url: this.file
  }

  constructor(private _router: Router, private _artworkService: ArtworkServiceService,private  _activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get(environment.ID)
    this.artworkId = this._activatedRoute.snapshot.paramMap.get(environment.ARTWORK_ID)
    if(this._activatedRoute.snapshot.paramMap.get(environment.ID)){
      this._artworkService.getPhotographerArtwork(this.artworkId, this.id).subscribe({
        next: artwork => {
          this.artwork.title=artwork.title
          this.artwork.createdYear=new Date(artwork.createdYear)
        },
        error: err => {
          alert(environment.CANNOT_DELETE_PHOTOGRAPH+err.message)
        }

      })
    }


  }


  updateArtwork() {
    this.isLoggedInErrorVisible = false
    if (!this.artwork.title || !this.artwork.createdYear || !this.file) {
      this.errorMessage = environment.FILL_REQUIRED;
      this.isLoggedInErrorVisible = true;
    } else {
      const formData = new FormData()
      formData.append(environment.TITLE,this.artwork.title)
      formData.append(environment.CREATED_YEAR,this.artwork.createdYear.toString())
      formData.append(environment.PICTURE_URL,this.file)
      this._artworkService.updatePhotographerArtwork(this.artworkId, this.id,formData).subscribe({
        next: photographer => {
          this.isCheckedVisible = true;
          setTimeout(() => {
            this.isCheckedVisible = false;
            this._router.navigate([environment.PHOTOGRAPHER_ENDPOINT,this.id,environment.ARTWORK_ENDPOINT])
          }, 1000)
        },
        error: error => {
          console.log(error)
        }
      })
    }
  }

  onImageSelected(event: any) {
    this.file = (event.target as HTMLInputElement).files![0];
  }
}
