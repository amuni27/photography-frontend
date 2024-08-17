import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {PhotographerService} from "../photographer.service";
import {CommonModule} from "@angular/common";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-photographer-registration-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './photographer-registration-form.component.html',
  styleUrl: './photographer-registration-form.component.css'
})
export class PhotographerRegistrationFormComponent implements OnInit {
   file!: File;
  _photographerForm!: FormGroup;
  isCheckedVisible: boolean = false;

  constructor(private _formBuilder: FormBuilder, private _photographerService: PhotographerService) {

  }

  ngOnInit(): void {
    this._photographerForm =this._formBuilder.group({
      name:"",
      date_of_birth:new Date(),
      picture_url: [null]
    })
  }


  addPhotographer(){
    const formData = new FormData()
    formData.append(environment.NAME,this._photographerForm.get(environment.NAME)?.value)
    formData.append(environment.DATE_OF_BIRTH,this._photographerForm.get(environment.DATE_OF_BIRTH)?.value)
    formData.append(environment.PICTURE_URL,this.file)
    this._photographerService.addPhotographer(formData).subscribe({
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
