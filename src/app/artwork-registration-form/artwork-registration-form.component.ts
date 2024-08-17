import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {PhotographerService} from "../photographer.service";
import {ArtworkServiceService} from "../artwork-service.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-artwork-registration-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './artwork-registration-form.component.html',
  styleUrl: './artwork-registration-form.component.css'

})
export class ArtworkRegistrationFormComponent implements OnInit {

  id!:any;
  file!: File;
  _artworkForm!: FormGroup;
  isCheckedVisible: boolean = false;

  constructor(private _formBuilder: FormBuilder, private _artworkService: ArtworkServiceService, private _router: ActivatedRoute) {
  }

  ngOnInit(): void {
     this.id = this._router.snapshot.paramMap.get(environment.ID)
    this._artworkForm = this._formBuilder.group({
      title: "",
      createdYear: new Date(),
      picture_url: [null]
    })
  }


  addPhotographer() {
    const formData = new FormData()
    formData.append(environment.TITLE, this._artworkForm.get(environment.TITLE)?.value)
    formData.append(environment.CREATED_YEAR, this._artworkForm.get(environment.CREATED_YEAR)?.value)
    formData.append(environment.PICTURE_URL, this.file)
    this._artworkService.addPhotographerArtwork(this.id, formData).subscribe({
      next: photographer => {
        this.isCheckedVisible = true;
        setTimeout(() => {
          this.isCheckedVisible = false;
        }, 1000)
      },
      error: error => {
        console.log(error)
      }
    })
  }

  onImageSelected(event: any) {
    this.file = (event.target as HTMLInputElement).files![0];
  }
}
