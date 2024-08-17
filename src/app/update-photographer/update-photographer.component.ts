import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PhotographerService} from "../photographer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PhotographerData} from "../PhotographerData";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-update-photographer',
  standalone: true,
    imports: [
        NgIf,
      FormsModule
    ],
  templateUrl: './update-photographer.component.html',
  styleUrl: './update-photographer.component.css'
})
export class UpdatePhotographerComponent implements OnInit{
  file!: File;
  id!: any;
  isCheckedVisible: boolean = false;
  isLoggedInErrorVisible: boolean = false
  errorMessage: string = ""
  photographer={
    name:"",
    date_of_birth:new Date(),
    picture_url: this.file
  }

  constructor(private _router: Router, private _photographerService: PhotographerService,private  _activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get(environment.ID)
    if(this._activatedRoute.snapshot.paramMap.get(environment.ID)){
      this._photographerService.getPhotographer(this.id).subscribe({
        next: (databasePhotographer :PhotographerData) => {
            this.photographer.name=databasePhotographer.name
            this.photographer.date_of_birth=new Date(databasePhotographer.date_of_birth)
        },
        error: err => {
          alert(environment.CANNOT_LOAD+err.message)
        }

      })
    }


  }


  updatePhotographer(){
    this.isLoggedInErrorVisible = false
    if (!this.photographer.name || !this.photographer.date_of_birth || !this.file) {
      this.errorMessage = "Fill all required fields";
      this.isLoggedInErrorVisible = true;
    } else {
      const formData = new FormData()
      formData.append(environment.NAME,this.photographer.name)
      formData.append(environment.DATE_OF_BIRTH,this.photographer.date_of_birth.toString())
      formData.append(environment.PICTURE_URL,this.file)
      this._photographerService.updatePhotographer(this.id,formData).subscribe({
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
