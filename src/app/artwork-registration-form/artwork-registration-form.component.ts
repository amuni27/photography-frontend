import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {PhotographerService} from "../photographer.service";
import {ArtworkServiceService} from "../artwork-service.service";

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
export class ArtworkRegistrationFormComponent implements OnInit{
  file!: File;
  _artworkForm!: FormGroup;
  isCheckedVisible: boolean = false;

  constructor(private _formBuilder: FormBuilder, private _artworkService: ArtworkServiceService) {
  }

  ngOnInit(): void {
    this._artworkForm =this._formBuilder.group({
      title:"",
      createdYear:new Date(),
      picture_url: [null]
    })
  }


  addPhotographer(){
    const formData = new FormData()
    formData.append('title',this._artworkForm.get('title')?.value)
    formData.append('createdYear',this._artworkForm.get('createdYear')?.value)
    formData.append('picture_url',this.file)
    this._artworkService.addPhotographerArtwork("66bae9c49c9206af06b7850a",formData).subscribe({
      next: photographer=>{
        this.isCheckedVisible = true;
        setTimeout(()=>{
          this.isCheckedVisible = false;
        },1000)
      },
      error: error=>{
        console.log(error)
      }
    })
  }
  onImageSelected(event: any) {
    this.file = (event.target as HTMLInputElement).files![0];
  }
}
